import { NextRequest, NextResponse } from 'next/server';
import { createZohoLead } from '@/app/lib/zohoService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(_req: NextRequest) {
  try {
    const res = await createZohoLead({
      name: 'Sandbox Lead',
      email: 'sandbox@example.com',
      phone: '+910000000000',
      message: 'Test lead from Admin UI',
      source: 'admin-test',
      campaign: 'sandbox',
      leadSource: 'Website',
      raw: { adminTest: true, timestamp: new Date().toISOString() },
    });
    return NextResponse.json({ ok: true, zohoLeadId: res.zohoLeadId, response: res.response });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: String(error?.message || error) }, { status: 500 });
  }
}


