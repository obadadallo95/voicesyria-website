import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

/**
 * API Route: تسجيل زيارة الموقع
 * POST /api/analytics/track
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
      pageTitle,
      referrer,
      userAgent,
      ipAddress,
      country,
      city,
      deviceType,
      browser,
      os,
      language,
      screenWidth,
      screenHeight,
    } = body;

    const { error } = await supabase
      .from('website_visits')
      .insert([{
        session_id: sessionId,
        page_path: pagePath,
        page_title: pageTitle,
        referrer: referrer || null,
        user_agent: userAgent || null,
        ip_address: ipAddress || null,
        country: country || null,
        city: city || null,
        device_type: deviceType || null,
        browser: browser || null,
        os: os || null,
        language: language || null,
        screen_width: screenWidth || null,
        screen_height: screenHeight || null,
      }]);

    if (error) {
      console.error('Error tracking visit:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in track API:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

