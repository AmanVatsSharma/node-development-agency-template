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

    // Fetch from Lead table (include healthcare metadata for lead scores)
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        healthcareMetadata: {
          select: {
            leadScore: true,
            qualificationLevel: true,
            priority: true,
          },
        },
      },
    });

    // Normalize both into unified format
    const unifiedLeads = [
      ...contactSubmissions.map(c => ({
        id: c.id,
        tableSource: 'contact' as const,
        name: c.name,
        email: c.email,
        phone: c.phone || undefined,
        company: c.company || undefined,
        message: c.message,
        service: c.service || undefined,
        budget: c.budget || undefined,
        timeline: c.timeline || undefined,
        source: c.source || undefined,
        // For ContactSubmission, status IS the contact pipeline status
        contactStatus: c.status as string,
        contactNotes: c.notes || undefined,
        zohoStatus: undefined, // ContactSubmission doesn't push to Zoho
        zohoLeadId: undefined,
        leadScore: undefined,
        qualificationLevel: undefined,
        priority: undefined,
        leadSource: undefined,
        campaign: undefined,
        conversionType: 'form' as const,
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
      })),
      ...leads.map(l => ({
        id: l.id,
        tableSource: 'lead' as const,
        name: l.name || 'Unknown',
        email: l.email || 'No email',
        phone: l.phone || undefined,
        company: undefined,
        message: l.message || undefined,
        service: undefined,
        budget: undefined,
        timeline: undefined,
        source: l.source || undefined,
        contactStatus: l.contactStatus,
        contactNotes: l.contactNotes || undefined,
        zohoStatus: l.status, // 'pending' | 'pushed' | 'failed'
        zohoLeadId: l.zohoLeadId || undefined,
        leadScore: l.healthcareMetadata?.leadScore ?? undefined,
        qualificationLevel: l.healthcareMetadata?.qualificationLevel ?? undefined,
        priority: l.healthcareMetadata?.priority ?? undefined,
        leadSource: l.leadSource || undefined,
        campaign: l.campaign || undefined,
        conversionType: undefined,
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
    console.log('[Leads API] Updating lead:', data.id, data.tableSource);

    if (data.tableSource === 'contact') {
      // ContactSubmission — status field serves as contact pipeline status
      const updated = await prisma.contactSubmission.update({
        where: { id: data.id },
        data: {
          status: data.contactStatus ?? data.status,
          notes: data.contactNotes ?? data.notes,
        },
      });
      console.log('[Leads API] Updated ContactSubmission:', data.id);
      return NextResponse.json({ lead: updated });
    }

    // Lead table — update contactStatus and contactNotes
    try {
      const updated = await prisma.lead.update({
        where: { id: data.id },
        data: {
          contactStatus: data.contactStatus,
          contactNotes: data.contactNotes,
        },
      });
      console.log('[Leads API] Updated Lead:', data.id);
      return NextResponse.json({ lead: updated });
    } catch {
      // Fall back to ContactSubmission if Lead not found
      const updated = await prisma.contactSubmission.update({
        where: { id: data.id },
        data: {
          status: data.contactStatus ?? data.status,
          notes: data.contactNotes ?? data.notes,
        },
      });
      console.log('[Leads API] Updated ContactSubmission (fallback):', data.id);
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
