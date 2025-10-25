import { NextResponse } from 'next/server';
import { getGoogleAdsConfig } from '@/config/conversion-labels';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/google-config
 * Returns Google Ads conversion configuration (conversion ID + labels)
 * Now uses hardcoded config from config/conversion-labels.ts
 */
export async function GET() {
  try {
    const config = getGoogleAdsConfig();
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

