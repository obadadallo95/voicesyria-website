import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

/**
 * API Route: تحديث مدة الجلسة
 * PUT /api/analytics/session
 */
export async function PUT(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const body = await request.json();
    const { sessionId, duration, isBounce } = body;

    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'Session ID required' }, { status: 400 });
    }

    // تحديث آخر زيارة لهذه الجلسة
    const { error } = await supabase
      .from('website_visits')
      .update({
        visit_duration: duration || 0,
        is_bounce: isBounce || false,
        updated_at: new Date().toISOString(),
      })
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Error updating session:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in session update API:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

