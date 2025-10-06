import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createZohoLead } from '@/app/lib/zohoService';

export async function POST() {
  const now = new Date();
  const jobs = await prisma.integrationRetry.findMany({
    where: { status: 'queued', nextRunAt: { lte: now } },
    orderBy: { createdAt: 'asc' },
    take: 10,
  });

  const results: any[] = [];

  for (const job of jobs) {
    try {
      if (job.type === 'zoho_lead') {
        const leadId = (job.payload as any)?.leadId as string;
        const lead = await prisma.lead.findUnique({ where: { id: leadId } });
        if (!lead) throw new Error('Lead not found for retry');
        const res = await createZohoLead({
          name: lead.name || undefined,
          email: lead.email || undefined,
          phone: lead.phone || undefined,
          message: lead.message || undefined,
          source: lead.source || undefined,
          campaign: lead.campaign || undefined,
          leadSource: lead.leadSource || undefined,
          raw: (lead.raw as any) || undefined,
        });
        await prisma.lead.update({ where: { id: lead.id }, data: { status: 'pushed', zohoLeadId: res.zohoLeadId } });
      }

      await prisma.integrationRetry.update({
        where: { id: job.id },
        data: { status: 'succeeded', attempts: { increment: 1 } as any },
      });
      results.push({ id: job.id, status: 'succeeded' });
    } catch (err: any) {
      const attempts = job.attempts + 1;
      const max = job.maxAttempts;
      const failed = attempts >= max;
      await prisma.integrationRetry.update({
        where: { id: job.id },
        data: {
          attempts,
          status: failed ? 'failed' : 'queued',
          nextRunAt: failed ? job.nextRunAt : new Date(Date.now() + attempts * 5 * 60 * 1000),
          lastError: String(err?.message || err),
        },
      });
      results.push({ id: job.id, status: failed ? 'failed' : 'retry_scheduled' });
    }
  }

  return NextResponse.json({ processed: results.length, results });
}


