/**
 * Contacts Admin API
 * 
 * Manage contact form submissions
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all contact submissions
export async function GET(req: NextRequest) {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('[Contacts API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions' },
      { status: 500 }
    );
  }
}

// PUT - Update contact submission status
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const submission = await prisma.contactSubmission.update({
      where: { id: data.id },
      data: {
        status: data.status,
        notes: data.notes,
      },
    });

    return NextResponse.json({ submission });
  } catch (error) {
    console.error('[Contacts API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update contact submission' },
      { status: 500 }
    );
  }
}

// DELETE - Delete contact submission
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Submission ID required' },
        { status: 400 }
      );
    }

    await prisma.contactSubmission.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contacts API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact submission' },
      { status: 500 }
    );
  }
}
