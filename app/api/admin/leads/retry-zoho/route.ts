/**
 * Admin Zoho Retry API
 * Re-pushes a failed lead to Zoho CRM
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createZohoLead } from '@/app/lib/zohoService';

const prisma = new PrismaClient();

function isAuthenticated(req: NextRequest) {
  const cookie = req.cookies.get('admin_session')?.value;
  return cookie === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { leadId } = await req.json();

    if (!leadId) {
      return NextResponse.json({ error: 'leadId required' }, { status: 400 });
    }

    console.log('[Retry Zoho] Retrying Zoho push for lead:', leadId);

    const lead = await prisma.lead.findUnique({ where: { id: leadId } });
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const { zohoLeadId } = await createZohoLead({
      name: lead.name ?? undefined,
      email: lead.email ?? undefined,
      phone: lead.phone ?? undefined,
      message: lead.message ?? undefined,
      source: lead.source ?? undefined,
      campaign: lead.campaign ?? undefined,
      leadSource: lead.leadSource ?? undefined,
    });

    await prisma.lead.update({
      where: { id: leadId },
      data: { status: 'pushed', zohoLeadId },
    });

    console.log('[Retry Zoho] Successfully pushed lead to Zoho:', zohoLeadId);
    return NextResponse.json({ success: true, zohoLeadId });
  } catch (error) {
    console.error('[Retry Zoho] Error retrying Zoho push:', error);

    // Mark as failed if we have the leadId
    try {
      const { leadId } = await req.clone().json().catch(() => ({ leadId: null }));
      if (leadId) {
        await prisma.lead.update({
          where: { id: leadId },
          data: { status: 'failed' },
        });
      }
    } catch { /* ignore secondary error */ }

    return NextResponse.json(
      { error: 'Failed to push lead to Zoho', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
