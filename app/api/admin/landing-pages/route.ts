import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/admin/landing-pages
 * Fetches all landing page conversion configurations
 */
export async function GET() {
  try {
    const landingPages = await prisma.landingPageConfig.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ landingPages });
  } catch (error: any) {
    console.error('[Landing Pages API] Error fetching landing pages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch landing pages', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/landing-pages
 * Creates or updates a landing page configuration
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
      slug,
      name,
      description,
      leadSubmitLabel,
      callClickLabel,
      whatsappLabel,
      newsletterLabel,
      active,
      notes,
    } = body;

    // Validate required fields
    if (!slug || !name) {
      return NextResponse.json(
        { error: 'Slug and name are required' },
        { status: 400 }
      );
    }

    // If ID is provided, update existing record
    if (id) {
      const updated = await prisma.landingPageConfig.update({
        where: { id },
        data: {
          slug,
          name,
          description: description || null,
          leadSubmitLabel: leadSubmitLabel || null,
          callClickLabel: callClickLabel || null,
          whatsappLabel: whatsappLabel || null,
          newsletterLabel: newsletterLabel || null,
          active: active ?? true,
          notes: notes || null,
        },
      });

      return NextResponse.json({ landingPage: updated });
    }

    // Otherwise, create new record (or upsert by slug)
    const landingPage = await prisma.landingPageConfig.upsert({
      where: { slug },
      create: {
        slug,
        name,
        description: description || null,
        leadSubmitLabel: leadSubmitLabel || null,
        callClickLabel: callClickLabel || null,
        whatsappLabel: whatsappLabel || null,
        newsletterLabel: newsletterLabel || null,
        active: active ?? true,
        notes: notes || null,
      },
      update: {
        name,
        description: description || null,
        leadSubmitLabel: leadSubmitLabel || null,
        callClickLabel: callClickLabel || null,
        whatsappLabel: whatsappLabel || null,
        newsletterLabel: newsletterLabel || null,
        active: active ?? true,
        notes: notes || null,
      },
    });

    return NextResponse.json({ landingPage });
  } catch (error: any) {
    console.error('[Landing Pages API] Error saving landing page:', error);
    return NextResponse.json(
      { error: 'Failed to save landing page', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/landing-pages?id=xxx
 * Deletes a landing page configuration
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await prisma.landingPageConfig.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[Landing Pages API] Error deleting landing page:', error);
    return NextResponse.json(
      { error: 'Failed to delete landing page', details: error.message },
      { status: 500 }
    );
  }
}
