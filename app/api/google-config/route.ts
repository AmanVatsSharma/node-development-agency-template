import { NextResponse } from 'next/server';
import { getGoogleConfig } from '@/app/lib/googleAds';

export async function GET() {
  const cfg = await getGoogleConfig();
  return NextResponse.json({ conversionId: cfg.conversionId, labels: cfg.labels });
}


