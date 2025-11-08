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
          activeUsers: 0,
          dailyVotes: 0,
          services: 0,
          timestamp: new Date().toISOString(),
        },
        { headers: securityHeaders }
      );
    }

    // جلب عدد الخدمات الحكومية من جدول services مباشرة
    let servicesCount = 0;
    
    try {
      // ✅ جلب عدد الخدمات النشطة من جدول services مباشرة
      const { count: servicesCountResult, error: servicesError } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true);
      
      if (!servicesError && servicesCountResult !== null) {
        servicesCount = servicesCountResult;
        console.log('✅ Services count from services table:', servicesCount);
      } else if (servicesError) {
        console.error('❌ Error fetching services count:', servicesError);
        // في حالة الخطأ، نستخدم 0 كقيمة افتراضية
        servicesCount = 0;
      }
    } catch (error) {
      console.error('❌ Error fetching services count:', error);
      servicesCount = 0;
    }

    // جلب إحصائيات المستخدمين (عدد الأجهزة الفريدة)
    const { count: uniqueDevicesCount, error: devicesError } = await supabase
      .from('user_preferences')
      .select('device_hash', { count: 'exact', head: true });

    // جلب عدد التصويتات الكلية
    const { count: totalVotes, error: votesError } = await supabase
      .from('daily_votes')
      .select('*', { count: 'exact', head: true });

    // جلب عدد التصويتات اليومية (اليوم فقط)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString();
    
    const { count: dailyVotesCount, error: dailyVotesError } = await supabase
      .from('daily_votes')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', todayISO);

    // جلب عدد المستخدمين النشطين (نشط في آخر 30 يوم)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const thirtyDaysAgoISO = thirtyDaysAgo.toISOString();
    
    let activeUsersCount = 0;
    try {
      // محاولة جلب من anonymous_users أولاً
      const { count: activeUsersFromAnonymous, error: activeUsersError } = await supabase
        .from('anonymous_users')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true)
        .gte('last_active', thirtyDaysAgoISO);
      
      if (!activeUsersError && activeUsersFromAnonymous !== null) {
        activeUsersCount = activeUsersFromAnonymous;
        console.log('✅ Active users from anonymous_users:', activeUsersCount);
      } else {
        // بديل: استخدام user_preferences مع last_active
        const { data: activeUsersData, error: activeUsersDataError } = await supabase
          .from('user_preferences')
          .select('device_hash')
          .gte('last_active', thirtyDaysAgoISO);
        
        if (!activeUsersDataError && activeUsersData) {
          // حساب عدد الأجهزة الفريدة
          const uniqueDevices = new Set(activeUsersData.map(item => item.device_hash));
          activeUsersCount = uniqueDevices.size;
          console.log('✅ Active users from user_preferences:', activeUsersCount);
        }
      }
    } catch (error) {
      console.error('❌ Error fetching active users:', error);
      // استخدام عدد الأجهزة الفريدة كبديل
      activeUsersCount = uniqueDevicesCount || 0;
    }

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
          activeUsers: activeUsersCount || 0,
          dailyVotes: dailyVotesCount || 0,
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
        activeUsers: activeUsersCount || 0,
        dailyVotes: dailyVotesCount || 0,
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

