import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createZohoLead } from '@/app/lib/zohoService';
import { getClientConversionMapping, logServerConversion } from '@/app/lib/googleAds';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  campaign?: string;
  leadSource?: string;
  raw?: Record<string, any>;
  // Healthcare-specific fields
  organization?: string;
  position?: string;
  healthcareType?: string;
  currentSystem?: string;
  budget?: string;
  timeline?: string;
  requirements?: string;
  complianceNeeds?: string[];
  integrationNeeds?: string[];
  userCount?: number;
  patientVolume?: string;
  platformPreference?: string;
  deploymentType?: string;
  dataMigration?: boolean;
  trainingRequired?: boolean;
  supportLevel?: string;
  projectStage?: string;
  decisionMakers?: string[];
  budgetApproved?: boolean;
  timelineUrgent?: boolean;
  previousVendor?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helper function to calculate lead score for healthcare leads
function calculateLeadScore(body: LeadPayload): number {
  let score = 0;
  
  // Basic contact info (20 points)
  if (body.name) score += 5;
  if (body.email) score += 5;
  if (body.phone) score += 10;
  
  // Healthcare-specific scoring (40 points)
  if (body.healthcareType) score += 10;
  if (body.organization) score += 10;
  if (body.budget) score += 10;
  if (body.timeline) score += 10;
  
  // Project urgency and readiness (20 points)
  if (body.timelineUrgent) score += 10;
  if (body.budgetApproved) score += 10;
  
  // Technical requirements (20 points)
  if (body.requirements && body.requirements.length > 50) score += 10;
  if (body.complianceNeeds && body.complianceNeeds.length > 0) score += 10;
  
  return Math.min(score, 100);
}

// Helper function to determine qualification level
function determineQualificationLevel(body: LeadPayload): string {
  const score = calculateLeadScore(body);
  
  if (score >= 80) return 'Hot';
  if (score >= 60) return 'Warm';
  return 'Cold';
}

// Helper function to determine priority
function determinePriority(body: LeadPayload): string {
  if (body.timelineUrgent && body.budgetApproved) return 'High';
  if (body.budget && body.timeline) return 'Medium';
  return 'Low';
}

export async function POST(req: NextRequest) {
  const correlationId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    const body = (await req.json()) as LeadPayload;

    // Basic validation
    if (!body?.name && !body?.phone && !body?.email) {
      return NextResponse.json({ error: 'At least one identifier (name/phone/email) required' }, { status: 400 });
    }
    if (body.email && !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Save to database FIRST - this is the most critical step
    // We ALWAYS save the lead locally before attempting CRM sync
    const lead = await prisma.lead.create({
      data: {
        name: body.name || null,
        email: body.email || null,
        phone: body.phone || null,
        message: body.message || null,
        source: body.source || 'business-website',
        campaign: body.campaign || null,
        leadSource: body.leadSource || 'Website',
        raw: body.raw || (body as any),
        status: 'pending',
        // Create healthcare metadata if this is a healthcare lead
        ...(body.source === 'healthcare-software-development' && {
          healthcareMetadata: {
            create: {
              organization: body.organization || null,
              position: body.position || null,
              healthcareType: body.healthcareType || null,
              currentSystem: body.currentSystem || null,
              budget: body.budget || null,
              timeline: body.timeline || null,
              requirements: body.requirements || null,
              complianceNeeds: body.complianceNeeds || [],
              integrationNeeds: body.integrationNeeds || [],
              userCount: body.userCount || null,
              patientVolume: body.patientVolume || null,
              platformPreference: body.platformPreference || null,
              deploymentType: body.deploymentType || null,
              dataMigration: body.dataMigration || null,
              trainingRequired: body.trainingRequired || null,
              supportLevel: body.supportLevel || null,
              projectStage: body.projectStage || null,
              decisionMakers: body.decisionMakers || [],
              budgetApproved: body.budgetApproved || null,
              timelineUrgent: body.timelineUrgent || null,
              previousVendor: body.previousVendor || null,
              sourcePage: body.raw?.path || null,
              utmSource: body.raw?.utmSource || null,
              utmMedium: body.raw?.utmMedium || null,
              utmCampaign: body.raw?.utmCampaign || null,
              utmTerm: body.raw?.utmTerm || null,
              utmContent: body.raw?.utmContent || null,
              referrer: body.raw?.referrer || null,
              userAgent: body.raw?.userAgent || null,
              ipAddress: body.raw?.ipAddress || null,
              country: body.raw?.country || null,
              city: body.raw?.city || null,
              deviceType: body.raw?.deviceType || null,
              browserType: body.raw?.browserType || null,
              leadScore: calculateLeadScore(body),
              qualificationLevel: determineQualificationLevel(body),
              priority: determinePriority(body),
            }
          }
        })
      },
    });
    
    console.log(`[API/Lead] Lead ${lead.id} saved to database successfully. Email: ${lead.email || 'N/A'}, Source: ${lead.source}`);

    // Send to Zoho CRM (optional - lead is already safe in DB)
    // If this fails, we queue for retry but still return success to user
    let zohoLeadId: string | undefined;
    try {
      const zohoResult = await createZohoLead({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        source: body.source,
        campaign: body.campaign,
        leadSource: body.leadSource,
        raw: body.raw || (body as any),
      });
      zohoLeadId = zohoResult.zohoLeadId;
      await prisma.lead.update({ where: { id: lead.id }, data: { status: 'pushed', zohoLeadId } });
      console.log(`[API/Lead] Lead ${lead.id} successfully pushed to Zoho CRM with ID: ${zohoLeadId}`);
    } catch (err: any) {
      console.error(`[API/Lead] Zoho push failed for lead ${lead.id}, queuing for retry:`, err.message);
      await prisma.lead.update({ where: { id: lead.id }, data: { status: 'failed' } });
      await prisma.integrationRetry.create({
        data: {
          type: 'zoho_lead',
          payload: { leadId: lead.id },
          attempts: 0,
          status: 'queued',
          nextRunAt: new Date(Date.now() + 60 * 1000),
          lastError: String(err?.message || err),
        },
      });
      await prisma.integrationLog.create({
        data: {
          type: 'lead_submit',
          provider: 'zoho',
          level: 'error',
          message: `Zoho submission failed for lead ${lead.id}; queued for retry`,
          error: String(err?.message || err),
          correlationId,
        },
      });
      // NOTE: We don't throw here - lead is safe in database
    }

    // Log and optionally trigger server-side record for Google
    // Note: This logs to business_website by default. For other pages, pass source-specific event type
    const source = body.source || 'business-website';
    let conversionEventType: any = 'business_website_lead_submit'; // default

    // Map source to appropriate conversion event type
    if (source === 'ai-voice-agents') {
      conversionEventType = 'ai_voice_agents_lead_submit';
    } else if (source === 'seo-audit') {
      conversionEventType = 'seo_audit_lead_submit';
    } else if (source === 'nse-mcx-live-market-data') {
      conversionEventType = 'nse_mcx_live_market_data_lead_submit';
    } else if (source === 'healthcare-software-development') {
      conversionEventType = 'healthcare_software_development_lead_submit';
    }
    
    console.log('[API/Lead] Logging conversion event:', conversionEventType);
    await logServerConversion(conversionEventType, { 
      correlationId, 
      zohoLeadId, 
      leadId: lead.id,
      source,
    });

    // Provide client with conversion mapping
    const mapping = await getClientConversionMapping();

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        zohoLeadId: zohoLeadId || null,
        correlationId,
        google: mapping,
      },
      { status: 200 },
    );
  } catch (error: any) {
    await prisma.integrationLog.create({
      data: {
        type: 'lead_submit',
        provider: 'api',
        level: 'error',
        message: 'Unhandled error in /api/lead',
        error: String(error?.message || error),
        correlationId,
      },
    });
    return NextResponse.json({ error: 'Internal server error', correlationId }, { status: 500 });
  }
}


