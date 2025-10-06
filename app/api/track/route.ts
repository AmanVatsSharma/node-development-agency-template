import { NextRequest, NextResponse } from 'next/server';
import { logServerConversion } from '@/app/lib/googleAds';

const Allowed = new Set(['lead_submit', 'call_click', 'whatsapp_click', 'newsletter_signup']);

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const eventType = body?.eventType as string;
  if (!Allowed.has(eventType)) {
    return NextResponse.json({ error: 'Invalid eventType' }, { status: 400 });
  }
  await logServerConversion(eventType as any, { body });
  return NextResponse.json({ ok: true });
}


