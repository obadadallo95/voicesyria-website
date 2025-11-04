import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

export async function GET() {
  try {
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase not configured, returning empty array');
      return NextResponse.json([]);
    }

    // جلب جميع المحافظات مع إحصائياتها
    const { data: governorates, error } = await supabase
      .from('governorates')
      .select('id, name_ar, name_en, name_ku, avg_rate, slogan')
      .order('avg_rate', { ascending: false });

    if (error) {
      console.error('Error fetching governorates:', error);
      return NextResponse.json(
        { error: 'Failed to fetch governorates', details: error.message },
        { status: 500 }
      );
    }

    if (!governorates || governorates.length === 0) {
      return NextResponse.json([]);
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

    return NextResponse.json(governoratesWithStats);
  } catch (error: any) {
    console.error('Error in governorates API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch governorates', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

