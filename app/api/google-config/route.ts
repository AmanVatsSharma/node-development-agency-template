import { NextResponse } from 'next/server';
import { getGoogleConfig } from '@/app/lib/googleAds';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/google-config
 * Returns Google Ads conversion configuration (conversion ID + labels)
 * Uses unified config from app/lib/googleAds (DB > Hardcoded)
 */
export async function GET() {
  try {
    const config = await getGoogleConfig();
    return NextResponse.json({ 
      conversionId: config.conversionId, 
      labels: config.labels 
    });
  } catch (error) {
    console.error('[API] Error fetching Google config:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Google config' },
      { status: 500 }
    );
  }
}
