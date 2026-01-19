import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createZohoLead } from '@/app/lib/zohoService';
import { logServerConversion } from '@/app/lib/googleAds';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Contact form request type
type ContactFormRequest = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
};

/**
 * Handler for POST requests to /api/contact
 * Validates contact form data and saves it as a Lead
 */
export async function POST(request: NextRequest) {
  const correlationId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  
  try {
    // Parse the request body
    const body = await request.json() as ContactFormRequest;
    
    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    console.log(`[API/Contact] Processing submission for ${body.email}`, { correlationId });

    // 1. Create Lead in Database
    // We use the Lead model to unify all inbound leads (Lead Forms, Contact Page, etc.)
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message, // We keep the raw message
        source: 'contact-page',
        leadSource: 'Website Contact Form',
        // Store extra fields in raw JSON
        raw: {
          company: body.company || null,
          service: body.service,
          submittedAt: new Date().toISOString(),
          formType: 'contact_page',
          userAgent: request.headers.get('user-agent') || 'unknown',
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        },
        status: 'pending',
      }
    });

    console.log(`[API/Contact] Lead created: ${lead.id}`);

    // 2. Sync to Zoho CRM
    let zohoLeadId: string | undefined;
    try {
      const zohoResult = await createZohoLead({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        company: body.company, // Zoho service handles company mapping
        source: 'contact-page',
        leadSource: 'Website Contact Form',
        raw: {
          service: body.service,
          ...body
        }
      });
      
      zohoLeadId = zohoResult.zohoLeadId;
      
      // Update Lead with Zoho ID
      await prisma.lead.update({
        where: { id: lead.id },
        data: { 
          status: 'pushed', 
          zohoLeadId 
        }
      });
      
      console.log(`[API/Contact] Synced to Zoho: ${zohoLeadId}`);
    } catch (zohoError: any) {
      console.error('[API/Contact] Zoho sync failed:', zohoError.message);
      // We don't fail the request, just log it. The lead is safe in our DB.
      // Optionally queue for retry (simplified here compared to /api/lead)
      await prisma.lead.update({
        where: { id: lead.id },
        data: { status: 'failed' }
      });
      
      await prisma.integrationLog.create({
        data: {
          type: 'lead_submit',
          provider: 'zoho',
          level: 'error',
          message: `Zoho submission failed for contact form lead ${lead.id}`,
          error: String(zohoError?.message || zohoError),
          correlationId,
        },
      });
    }

    // 3. Log Server-Side Conversion (Google Ads)
    // We treat general contact form submissions as "business_website_lead_submit" or similar
    try {
      await logServerConversion('business_website_lead_submit', {
        correlationId,
        zohoLeadId,
        leadId: lead.id,
        source: 'contact-page',
        value: 100, // Fixed value for contact form
      });
    } catch (conversionError) {
      console.error('[API/Contact] Conversion logging failed:', conversionError);
    }

    // Return success
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully',
        leadId: lead.id
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('[API/Contact] Error processing form:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}
