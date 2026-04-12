import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email: string; firstName?: string; lastName?: string };

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const name = [body.firstName, body.lastName].filter(Boolean).join(' ') || null;

    // Upsert — re-activates if they previously unsubscribed
    await prisma.newsletterSubscription.upsert({
      where: { email: body.email.toLowerCase().trim() },
      update: { active: true, name: name || undefined },
      create: { email: body.email.toLowerCase().trim(), name, active: true },
    });

    return NextResponse.json({ success: true, message: 'Successfully subscribed to the newsletter' });
  } catch (error) {
    console.error('[Newsletter] Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}
