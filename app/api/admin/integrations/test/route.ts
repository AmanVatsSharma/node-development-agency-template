import { NextRequest, NextResponse } from 'next/server';
import { testZohoConnection } from '@/app/lib/zohoService';
import { testGoogleConfig } from '@/app/lib/googleAds';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const provider = searchParams.get('provider');
  if (provider === 'zoho') {
    const res = await testZohoConnection();
    return NextResponse.json(res);
  }
  if (provider === 'google') {
    const res = await testGoogleConfig();
    return NextResponse.json(res);
  }
  return NextResponse.json({ error: 'provider query must be zoho|google' }, { status: 400 });
}


