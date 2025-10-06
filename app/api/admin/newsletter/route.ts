/**
 * Newsletter Admin API
 * 
 * Manage newsletter subscriptions
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all newsletter subscriptions
export async function GET(req: NextRequest) {
  try {
    const subscriptions = await prisma.newsletterSubscription.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ subscriptions });
  } catch (error) {
    console.error('[Newsletter API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter subscriptions' },
      { status: 500 }
    );
  }
}

// PUT - Update subscription status
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const subscription = await prisma.newsletterSubscription.update({
      where: { id: data.id },
      data: {
        active: data.active,
      },
    });

    return NextResponse.json({ subscription });
  } catch (error) {
    console.error('[Newsletter API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}

// DELETE - Delete subscription
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Subscription ID required' },
        { status: 400 }
      );
    }

    await prisma.newsletterSubscription.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Newsletter API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete subscription' },
      { status: 500 }
    );
  }
}
