/**
 * Admin Leads API
 * Unified endpoint for all leads from ContactSubmission and Lead tables
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all leads from both tables
export async function GET(req: NextRequest) {
  try {
    console.log('[Leads API] Fetching all leads from ContactSubmission and Lead tables');

    // Fetch from ContactSubmission table
    const contactSubmissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Fetch from Lead table
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Normalize both into unified format
    const unifiedLeads = [
      ...contactSubmissions.map(c => ({
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone || undefined,
        company: c.company || undefined,
        message: c.message,
        service: c.service || undefined,
        budget: c.budget || undefined,
        timeline: c.timeline || undefined,
        source: c.source || undefined,
        status: c.status,
        notes: c.notes || undefined,
        conversionType: 'form' as const, // ContactSubmission is always form
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
      })),
      ...leads.map(l => ({
        id: l.id,
        name: l.name || 'Unknown',
        email: l.email || 'No email',
        phone: l.phone || undefined,
        company: undefined,
        message: l.message || undefined,
        service: undefined,
        budget: undefined,
        timeline: undefined,
        source: l.leadSource || l.source || undefined,
        status: l.status,
        notes: undefined,
        leadSource: l.leadSource || undefined,
        campaign: l.campaign || undefined,
        conversionType: undefined, // Lead table doesn't track conversion type yet
        createdAt: l.createdAt.toISOString(),
        updatedAt: l.updatedAt.toISOString(),
      })),
    ];

    // Sort by created date descending
    unifiedLeads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    console.log('[Leads API] Returning', unifiedLeads.length, 'leads');
    console.log('[Leads API] -', contactSubmissions.length, 'from ContactSubmission');
    console.log('[Leads API] -', leads.length, 'from Lead');

    return NextResponse.json({ leads: unifiedLeads });
  } catch (error) {
    console.error('[Leads API] Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

// PUT - Update lead
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('[Leads API] Updating lead:', data.id);

    // Try updating ContactSubmission first
    try {
      const updated = await prisma.contactSubmission.update({
        where: { id: data.id },
        data: {
          status: data.status,
          notes: data.notes,
        },
      });
      console.log('[Leads API] Updated ContactSubmission:', data.id);
      return NextResponse.json({ lead: updated });
    } catch {
      // If not found, try Lead table
      const updated = await prisma.lead.update({
        where: { id: data.id },
        data: {
          status: data.status,
        },
      });
      console.log('[Leads API] Updated Lead:', data.id);
      return NextResponse.json({ lead: updated });
    }
  } catch (error) {
    console.error('[Leads API] Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

// DELETE - Delete lead
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID required' },
        { status: 400 }
      );
    }

    console.log('[Leads API] Deleting lead:', id);

    // Try deleting from ContactSubmission first
    try {
      await prisma.contactSubmission.delete({
        where: { id },
      });
      console.log('[Leads API] Deleted ContactSubmission:', id);
    } catch {
      // If not found, try Lead table
      await prisma.lead.delete({
        where: { id },
      });
      console.log('[Leads API] Deleted Lead:', id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Leads API] Error deleting lead:', error);
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}