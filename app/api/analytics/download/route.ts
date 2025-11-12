import { NextResponse, NextRequest } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

/**
 * API Route: تسجيل تحميل التطبيق
 * POST /api/analytics/download
 */
export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const body = await request.json();
    const {
      sessionId,
      ipAddress,
      userAgent,
      deviceType,
      browser,
      os,
      country,
      city,
      referrer,
      downloadSource,
      fileName,
      fileSize,
    } = body;

    const { error } = await supabase
      .from('website_downloads')
      .insert([{
        session_id: sessionId || null,
        ip_address: ipAddress || null,
        user_agent: userAgent || null,
        device_type: deviceType || null,
        browser: browser || null,
        os: os || null,
        country: country || null,
        city: city || null,
        referrer: referrer || null,
        download_source: downloadSource || 'direct',
        file_name: fileName || 'souria_voice.apk',
        file_size: fileSize || null,
        download_completed: false,
      }]);

    if (error) {
      console.error('Error tracking download:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in download tracking API:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

/**
 * API Route: تحديث حالة التحميل
 * PUT /api/analytics/download
 */
export async function PUT(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const body = await request.json();
    const { sessionId, completed } = body;

    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'Session ID required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('website_downloads')
      .update({ download_completed: completed || true })
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Error updating download:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in download update API:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

