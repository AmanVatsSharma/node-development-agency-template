import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/landing-page-config?slug=business-website
 * Fetches conversion configuration for a specific landing page
 * Public endpoint used by landing pages for conversion tracking
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      );
    }

    // Get landing page config
    const config = await prisma.landingPageConfig.findUnique({
      where: { slug, active: true },
    });

    // If no specific config found, try to get global Google settings as fallback
    if (!config) {
      const settings = await prisma.integrationSettings.findFirst();
      const googleConversionId = settings?.googleConversionId || '';
      
      return NextResponse.json({
        slug,
        conversionId: googleConversionId,
        labels: {},
        active: false,
      });
    }

    // Get global Google Conversion ID
    const settings = await prisma.integrationSettings.findFirst();
    const googleConversionId = settings?.googleConversionId || '';

    // Return landing page specific configuration
    return NextResponse.json({
      slug: config.slug,
      name: config.name,
      conversionId: googleConversionId,
      labels: {
        lead_submit: config.leadSubmitLabel || '',
        call_click: config.callClickLabel || '',
        whatsapp_click: config.whatsappLabel || '',
        newsletter_signup: config.newsletterLabel || '',
      },
      defaultLeadValue: config.defaultLeadValue,
      enableDynamicValues: config.enableDynamicValues,
      active: config.active,
    });
  } catch (error: any) {
    console.error('[Landing Page Config API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch landing page config', details: error.message },
      { status: 500 }
    );
  }
}
