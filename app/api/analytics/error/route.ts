import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

/**
 * API Route: تسجيل أخطاء الموقع
 * POST /api/analytics/error
 */
export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const body = await request.json();
    const {
      sessionId,
      pagePath,
      errorType,
      errorMessage,
      errorStack,
      userAgent,
      ipAddress,
      browser,
      os,
    } = body;

    const { error } = await supabase
      .from('website_errors')
      .insert([{
        session_id: sessionId || null,
        page_path: pagePath || null,
        error_type: errorType || 'javascript',
        error_message: errorMessage || null,
        error_stack: errorStack || null,
        user_agent: userAgent || null,
        ip_address: ipAddress || null,
        browser: browser || null,
        os: os || null,
        resolved: false,
      }]);

    if (error) {
      console.error('Error tracking error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in error tracking API:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

