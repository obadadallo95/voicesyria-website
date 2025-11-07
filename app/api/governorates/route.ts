import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { checkRateLimit, getClientIP } from '@/lib/security/rateLimit';

/**
 * API Route: جلب بيانات المحافظات السورية
 * GET /api/governorates
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
    interval: 60 * 1000,
    maxRequests: 60,
  });

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

  // إضافة headers الأمان
  const securityHeaders = {
    'X-RateLimit-Limit': '60',
    'X-RateLimit-Remaining': remaining.toString(),
    'X-RateLimit-Reset': new Date(resetTime).toISOString(),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  };
  try {
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase not configured, returning empty array');
      return NextResponse.json([], { headers: securityHeaders });
    }

    // جلب جميع المحافظات مع إحصائياتها
    const { data: governorates, error } = await supabase
      .from('governorates')
      .select('id, name_ar, name_en, name_ku, avg_rate, slogan')
      .order('avg_rate', { ascending: false });

    if (error) {
      console.error('Error fetching governorates:', error);
      return NextResponse.json(
        { error: 'فشل في جلب بيانات المحافظات', message: 'حدث خطأ أثناء جلب البيانات' },
        { status: 500, headers: securityHeaders }
      );
    }

    if (!governorates || governorates.length === 0) {
      return NextResponse.json([], { headers: securityHeaders });
    }

    // جلب عدد التصويتات لكل محافظة
    const governoratesWithStats = await Promise.all(
      governorates.map(async (gov) => {
        try {
          // جلب عدد التصويتات اليوم
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          const { count: todayVotes, error: todayError } = await supabase
            .from('daily_votes')
            .select('*', { count: 'exact', head: true })
            .eq('governorate_id', gov.id)
            .gte('created_at', today.toISOString());

          // جلب إجمالي التصويتات
          const { count: totalVotes, error: totalError } = await supabase
            .from('daily_votes')
            .select('*', { count: 'exact', head: true })
            .eq('governorate_id', gov.id);

          return {
            ...gov,
            todayVotes: todayVotes || 0,
            totalVotes: totalVotes || 0,
          };
        } catch (err) {
          console.error(`Error fetching stats for governorate ${gov.id}:`, err);
          return {
            ...gov,
            todayVotes: 0,
            totalVotes: 0,
          };
        }
      })
    );

    return NextResponse.json(governoratesWithStats, { headers: securityHeaders });
  } catch (error: any) {
    // معالجة آمنة للأخطاء - عدم كشف تفاصيل النظام
    console.error('Error in governorates API:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { 
        error: 'فشل في جلب بيانات المحافظات',
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

