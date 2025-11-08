import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { checkRateLimit, getClientIP } from '@/lib/security/rateLimit';

/**
 * API Route: جلب الإحصائيات العامة
 * GET /api/stats
 * 
 * الحماية:
 * - Rate limiting: 60 طلب في الدقيقة
 * - CORS headers
 * - معالجة آمنة للأخطاء
 */
export async function GET(request: NextRequest) {
  // 🔒 التحقق من Rate Limiting
  const clientIP = getClientIP(request.headers);
  const { allowed, remaining, resetTime } = checkRateLimit(clientIP, {
    interval: 60 * 1000, // دقيقة واحدة
    maxRequests: 60,
  });

  // إذا تجاوز الحد المسموح
  if (!allowed) {
    const waitTime = Math.ceil((resetTime - Date.now()) / 1000);
    return NextResponse.json(
      { 
        error: 'Too many requests',
        message: `الرجاء الانتظار ${waitTime} ثانية قبل المحاولة مرة أخرى`,
        retryAfter: waitTime,
      },
      { 
        status: 429,
        headers: {
          'Retry-After': waitTime.toString(),
          'X-RateLimit-Limit': '60',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(resetTime).toISOString(),
        },
      }
    );
  }
  try {
    // إضافة headers الأمان
    const securityHeaders = {
      'X-RateLimit-Limit': '60',
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': new Date(resetTime).toISOString(),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    };
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase not configured, returning default values');
      return NextResponse.json(
        {
          users: 0,
          votes: 0,
          governorates: 14,
          languages: 3,
          timestamp: new Date().toISOString(),
        },
        { headers: securityHeaders }
      );
    }

    // جلب عدد الخدمات الحكومية من جداول متعددة
    let servicesCount = 0;
    
    // محاولة جلب عدد الخدمات من جداول مختلفة
    try {
      // أولاً: محاولة جلب من جدول ai_pinned_answers إذا كان موجوداً
      const { count: pinnedAnswersCount, error: pinnedError } = await supabase
        .from('ai_pinned_answers')
        .select('*', { count: 'exact', head: true });
      
      if (!pinnedError && pinnedAnswersCount !== null && pinnedAnswersCount > 0) {
        servicesCount = pinnedAnswersCount;
        console.log('Services count from ai_pinned_answers:', servicesCount);
      } else {
        // ثانياً: إذا لم يوجد جدول ai_pinned_answers، نستخدم طريقة chips من daily_votes
        const { data: servicesData, error: servicesError } = await supabase
          .from('daily_votes')
          .select('chips');
        
        if (!servicesError && servicesData) {
          // حساب عدد الخدمات الفريدة
          const uniqueServices = new Set(servicesData.map(item => item.chips).filter(chips => chips !== null));
          servicesCount = uniqueServices.size;
          console.log('Services count from daily_votes chips:', { totalRecords: servicesData.length, uniqueServices: servicesCount });
        } else if (servicesError) {
          console.error('Error fetching services data:', servicesError);
        }
      }
    } catch (error) {
      console.error('Error fetching services count:', error);
      // محاولة بديلة باستخدام جدول ai_questions
      try {
        const { count: questionsCount, error: questionsError } = await supabase
          .from('ai_questions')
          .select('*', { count: 'exact', head: true });
        
        if (!questionsError && questionsCount !== null) {
          servicesCount = questionsCount;
          console.log('Services count from ai_questions:', servicesCount);
        }
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
      }
    }

    // جلب إحصائيات المستخدمين (عدد الأجهزة الفريدة)
    const { count: uniqueDevicesCount, error: devicesError } = await supabase
      .from('user_preferences')
      .select('device_hash', { count: 'exact', head: true });

    // جلب عدد التصويتات الكلية
    const { count: totalVotes, error: votesError } = await supabase
      .from('daily_votes')
      .select('*', { count: 'exact', head: true });

    // جلب عدد المحافظات
    const { count: governoratesCount, error: govError } = await supabase
      .from('governorates')
      .select('*', { count: 'exact', head: true });

    // حساب المتوسط الوطني من جميع المحافظات
    const { data: governorates, error: govDataError } = await supabase
      .from('governorates')
      .select('avg_rate');

    let nationalAverage = 0;
    if (governorates && governorates.length > 0) {
      const totalRate = governorates.reduce((sum, gov) => sum + (gov.avg_rate || 0), 0);
      nationalAverage = totalRate / governorates.length;
    }

    if (devicesError || votesError || govError) {
      console.error('Error fetching stats:', { devicesError, votesError, govError });
      // Return default values if there's an error
      return NextResponse.json(
        {
          users: 0,
          votes: 0,
          services: servicesCount || 0,
          languages: 3,
          nationalAverage: nationalAverage || 0,
          timestamp: new Date().toISOString(),
        },
        { headers: securityHeaders }
      );
    }

    return NextResponse.json(
      {
        users: uniqueDevicesCount || 0,
        votes: totalVotes || 0,
        services: servicesCount || 0,
        languages: 3,
        nationalAverage: Math.round(nationalAverage * 10) / 10,
        timestamp: new Date().toISOString(),
      },
      { headers: securityHeaders }
    );
  } catch (error) {
    // معالجة آمنة للأخطاء - عدم كشف تفاصيل النظام
    console.error('Error in stats API:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { 
        error: 'فشل في جلب الإحصائيات',
        message: 'حدث خطأ أثناء جلب البيانات، الرجاء المحاولة لاحقاً',
      },
      { 
        status: 500,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
        },
      }
    );
  }
}

