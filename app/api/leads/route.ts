import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

type LeadRequest = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string; // service or topic
  message?: string;
  budget?: string;
  timeline?: string;
  source?: string; // referrer, utm_source
  page?: string; // page path
  newsletterOptIn?: boolean;
  context?: Record<string, unknown>; // arbitrary metadata (utm_*, resourceId, etc.)
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadRequest;

    if (!body?.name || !body?.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Normalize fields
    const name = String(body.name).trim();
    const email = String(body.email).trim().toLowerCase();

    // Persist lead in ContactSubmission
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: body.company || null,
        phone: body.phone || null,
        message: body.message || '',
        service: body.interest || null,
        budget: body.budget || null,
        timeline: body.timeline || null,
        source: body.source || body.page || 'website',
        status: 'pending',
        notes: body.context ? JSON.stringify(body.context) : null,
      },
    });

    // Optionally subscribe to newsletter
    if (body.newsletterOptIn && email) {
      try {
        await prisma.newsletterSubscription.upsert({
          where: { email },
          update: { active: true },
          create: { email, name },
        });
      } catch (err) {
        // Non-blocking; proceed even if newsletter upsert fails
        console.warn('Newsletter upsert failed for', email, err);
      }
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error creating lead:', error);
    return NextResponse.json({ error: 'Failed to create lead', details: message }, { status: 500 });
  }
}

