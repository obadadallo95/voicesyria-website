import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

export async function GET() {
  try {
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase not configured, returning default values');
      return NextResponse.json({
        users: 0,
        votes: 0,
        governorates: 14,
        languages: 3,
      });
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
      return NextResponse.json({
        users: 0,
        votes: 0,
        governorates: 14, // Default to 14 Syrian governorates
        languages: 3,
        nationalAverage: nationalAverage || 0,
      });
    }

    return NextResponse.json({
      users: uniqueDevicesCount || 0,
      votes: totalVotes || 0,
      governorates: governoratesCount || 14,
      languages: 3,
      nationalAverage: Math.round(nationalAverage * 10) / 10, // Round to 1 decimal place
    });
  } catch (error) {
    console.error('Error in stats API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}

