import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createZohoLead } from '@/app/lib/zohoService';
import { getClientConversionMapping, logServerConversion } from '@/app/lib/googleAds';
import { queueServerSideConversion } from '@/app/lib/googleAdsServerSide';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  campaign?: string;
  leadSource?: string;
  raw?: Record<string, any>;
  // Attribution data
  gclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  fbclid?: string;
  referrer?: string;
  // Lead quality data
  budget?: string;
  timeline?: string;
  conversionValue?: number;
  leadScore?: number;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const correlationId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    const body = (await req.json()) as LeadPayload;

    // Basic validation
    if (!body?.name && !body?.phone && !body?.email) {
      return NextResponse.json({ error: 'At least one identifier (name/phone/email) required' }, { status: 400 });
    }
    if (body.email && !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Backup locally first with attribution and quality data
    const lead = await prisma.lead.create({
      data: {
        name: body.name || null,
        email: body.email || null,
        phone: body.phone || null,
        message: body.message || null,
        source: body.source || 'business-website',
        campaign: body.campaign || null,
        leadSource: body.leadSource || 'Website',
        raw: body.raw || (body as any),
        status: 'pending',
        // Attribution tracking
        gclid: body.gclid || null,
        utmSource: body.utmSource || null,
        utmMedium: body.utmMedium || null,
        utmCampaign: body.utmCampaign || null,
        utmTerm: body.utmTerm || null,
        utmContent: body.utmContent || null,
        fbclid: body.fbclid || null,
        referrer: body.referrer || null,
        // Lead quality
        budget: body.budget || null,
        timeline: body.timeline || null,
        conversionValue: body.conversionValue || null,
        leadScore: body.leadScore || null,
      },
    });
    
    // Log attribution data if GCLID present
    if (body.gclid) {
      console.log('[Lead API] GCLID captured:', body.gclid, 'Campaign:', body.utmCampaign);
    }

    // Send to Zoho
    let zohoLeadId: string | undefined;
    try {
      const zohoResult = await createZohoLead({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        source: body.source,
        campaign: body.campaign,
        leadSource: body.leadSource,
        raw: body.raw || (body as any),
      });
      zohoLeadId = zohoResult.zohoLeadId;
      await prisma.lead.update({ where: { id: lead.id }, data: { status: 'pushed', zohoLeadId } });
    } catch (err: any) {
      await prisma.lead.update({ where: { id: lead.id }, data: { status: 'failed' } });
      await prisma.integrationRetry.create({
        data: {
          type: 'zoho_lead',
          payload: { leadId: lead.id },
          attempts: 0,
          status: 'queued',
          nextRunAt: new Date(Date.now() + 60 * 1000),
          lastError: String(err?.message || err),
        },
      });
      await prisma.integrationLog.create({
        data: {
          type: 'lead_submit',
          provider: 'zoho',
          level: 'error',
          message: 'Zoho submission failed; queued for retry',
          error: String(err?.message || err),
          correlationId,
        },
      });
    }

    // Log and optionally trigger server-side record for Google
    await logServerConversion('lead_submit', { correlationId, zohoLeadId, leadId: lead.id });

    // Queue server-side conversion upload (if GCLID present)
    if (lead.gclid) {
      // Fire and forget - don't await
      void queueServerSideConversion(lead.id, 'lead_submit', body.source || 'business-website');
      console.log('[Lead API] Queued server-side conversion for GCLID:', lead.gclid);
    }

    // Provide client with conversion mapping
    const mapping = await getClientConversionMapping();

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        zohoLeadId: zohoLeadId || null,
        correlationId,
        google: mapping,
      },
      { status: 200 },
    );
  } catch (error: any) {
    await prisma.integrationLog.create({
      data: {
        type: 'lead_submit',
        provider: 'api',
        level: 'error',
        message: 'Unhandled error in /api/lead',
        error: String(error?.message || error),
        correlationId,
      },
    });
    return NextResponse.json({ error: 'Internal server error', correlationId }, { status: 500 });
  }
}


