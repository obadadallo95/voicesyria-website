import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

// GET: جلب بيانات التبرعات
export async function GET() {
  try {
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase not configured, returning empty donations data');
      return NextResponse.json({
        recentDonors: [],
        currentAmount: 0,
        monthlyGoal: 5000,
      });
    }

    // جلب آخر 5 متبرعين
    const { data: recentDonors, error: donorsError } = await supabase
      .from('donations')
      .select('transaction_hash, actual_amount, currency, created_at, donor_name, is_anonymous')
      .eq('status', 'verified')
      .order('created_at', { ascending: false })
      .limit(5);

    // جلب المبلغ الإجمالي للشهر الحالي
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const { data: monthlyDonations, error: monthlyError } = await supabase
      .from('donations')
      .select('actual_amount')
      .eq('status', 'verified')
      .gte('created_at', firstDayOfMonth.toISOString());

    // حساب المبلغ الإجمالي للشهر
    let currentAmount = 0;
    if (monthlyDonations) {
      currentAmount = monthlyDonations.reduce((sum, donation) => {
        return sum + (donation.actual_amount || 0);
      }, 0);
    }

    // الهدف الشهري (يمكن تغييره)
    const monthlyGoal = 5000;

    if (donorsError || monthlyError) {
      console.error('Error fetching donations:', { donorsError, monthlyError });
      return NextResponse.json({
        recentDonors: [],
        currentAmount: 0,
        monthlyGoal: 5000,
      });
    }

    // تحويل بيانات المتبرعين
    const formattedDonors = (recentDonors || []).map((donor) => {
      const transactionHash = donor.transaction_hash?.toString() || '';
      const hash = transactionHash.length > 0 ? transactionHash.substring(0, 6) : 'N/A';
      return {
        hash,
        name: donor.is_anonymous ? 'Anonymous' : (donor.donor_name || 'Anonymous'),
        amount: donor.actual_amount || 0,
        currency: donor.currency || 'USD',
        date: new Date(donor.created_at).toISOString().substring(0, 10),
      };
    });

    return NextResponse.json({
      recentDonors: formattedDonors,
      currentAmount: Math.round(currentAmount * 100) / 100,
      monthlyGoal,
    });
  } catch (error: any) {
    console.error('Error in donations API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donations data', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST: إرسال تبرع جديد
export async function POST(request: Request) {
  try {
    // التحقق من إعداد Supabase
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { donor_name, is_anonymous, currency, declared_amount, actual_amount, transaction_hash } = body;

    // إدراج التبرع في قاعدة البيانات
    const { data, error } = await supabase
      .from('donations')
      .insert({
        donor_name: is_anonymous ? 'Anonymous' : (donor_name || 'Anonymous'),
        is_anonymous: is_anonymous ?? true,
        currency: currency || 'USD',
        declared_amount: declared_amount || actual_amount || 0,
        actual_amount: actual_amount || declared_amount || 0,
        amount: actual_amount || declared_amount || 0,
        transaction_hash: transaction_hash || null,
        status: transaction_hash ? 'pending' : 'unverified',
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting donation:', error);
      return NextResponse.json(
        { error: 'Failed to submit donation', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      donation: data,
    });
  } catch (error: any) {
    console.error('Error in donations POST API:', error);
    return NextResponse.json(
      { error: 'Failed to submit donation', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

