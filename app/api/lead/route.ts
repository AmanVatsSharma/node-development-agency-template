import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createZohoLead } from '@/app/lib/zohoService';
import { getClientConversionMapping, logServerConversion } from '@/app/lib/googleAds';
import { verifyRecaptcha } from '@/app/lib/recaptcha';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  budget?: string;
  source?: string;
  campaign?: string;
  leadSource?: string;
  raw?: Record<string, any> & {
    timeOnPage?: number;
    timeToForm?: number;
    formCompletionTime?: number;
    scrollDepth?: number;
  };
  // Healthcare-specific fields
  organization?: string;
  position?: string;
  healthcareType?: string;
  currentSystem?: string;
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

// Helper function to calculate lead score for business-website leads
function calculateBusinessWebsiteLeadScore(body: LeadPayload): number {
  let score = 0;
  
  // Form Completion Quality (40 points)
  if (body.name && body.name.trim().length >= 2) score += 5;
  if (body.phone) {
    const cleanPhone = body.phone.replace(/\D/g, '');
    if (cleanPhone.length === 10 && /^[6-9]/.test(cleanPhone)) {
      score += 10;
    } else {
      score += 5; // Partial credit
    }
  }
  if (body.email && EMAIL_REGEX.test(body.email)) score += 5;
  if (body.message && body.message.trim().length >= 10) score += 5;
  
  // Budget Quality (25 points) - CRITICAL for lead scoring
  if (body.budget) {
    if (body.budget === '₹2L+') score += 25;
    else if (body.budget === '₹1L-2L') score += 20;
    else if (body.budget === '₹60K-1L') score += 15;
    else if (body.budget === '₹30K-60K') score += 10;
    else if (body.budget === '₹15K-30K') score += 5;
    else if (body.budget === 'not-decided' || body.budget === 'need-consultation') score += 2;
  }
  
  // Engagement Score (35 points) - Time tracking and scroll depth
  const timeOnPage = body.raw?.timeOnPage || 0;
  const timeToForm = body.raw?.timeToForm || null;
  const formCompletionTime = body.raw?.formCompletionTime || null;
  const scrollDepth = body.raw?.scrollDepth || 0;
  
  // Time on page before form (optimal: 30-180 seconds = 15 points)
  if (timeToForm !== null) {
    const timeToFormSeconds = timeToForm / 1000;
    if (timeToFormSeconds >= 30 && timeToFormSeconds <= 180) {
      score += 15; // Optimal engagement
    } else if (timeToFormSeconds >= 10 && timeToFormSeconds < 30) {
      score += 10; // Quick but engaged
    } else if (timeToFormSeconds > 180 && timeToFormSeconds <= 600) {
      score += 12; // Longer engagement
    } else if (timeToFormSeconds > 600) {
      score += 8; // Very long, might be distracted
    } else {
      score += 3; // Too quick, might be spam
    }
  }
  
  // Form completion time (optimal: 60-300 seconds = 10 points)
  if (formCompletionTime !== null) {
    const completionSeconds = formCompletionTime / 1000;
    if (completionSeconds >= 60 && completionSeconds <= 300) {
      score += 10; // Human-like completion time
    } else if (completionSeconds >= 30 && completionSeconds < 60) {
      score += 7; // Quick but valid
    } else if (completionSeconds > 300 && completionSeconds <= 600) {
      score += 8; // Thoughtful completion
    } else if (completionSeconds < 10) {
      score += 2; // Too fast, likely bot
    } else {
      score += 5; // Partial credit
    }
  }
  
  // Scroll depth (reached form section = 10 points)
  if (scrollDepth >= 70) score += 10;
  else if (scrollDepth >= 50) score += 7;
  else if (scrollDepth >= 30) score += 4;
  
  return Math.min(score, 100);
}

// Helper function to calculate lead score for healthcare leads
function calculateLeadScore(body: LeadPayload): number {
  // Use business-website scoring for business-website source
  if (body.source === 'business-website') {
    return calculateBusinessWebsiteLeadScore(body);
  }
  
  // Healthcare-specific scoring
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
  
  // Business-website priority based on budget
  if (body.source === 'business-website') {
    if (body.budget && (body.budget === '₹2L+' || body.budget === '₹1L-2L')) return 'High';
    if (body.budget && (body.budget === '₹60K-1L' || body.budget === '₹30K-60K')) return 'Medium';
    return 'Low';
  }
  
  return 'Low';
}

// Helper function to map lead score to conversion value (0-10,000)
function calculateConversionValue(score: number): number {
  if (score >= 81) return 7000 + Math.round((score - 81) * (3000 / 19)); // 81-100 → 7000-10,000
  if (score >= 61) return 3000 + Math.round((score - 61) * (4000 / 20)); // 61-80 → 3000-7000
  if (score >= 31) return 500 + Math.round((score - 31) * (2500 / 30)); // 31-60 → 500-3000
  return Math.round((score / 30) * 500); // 0-30 → 0-500
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

    // Verify reCAPTCHA if token is provided
    const recaptchaToken = body.raw?.recaptchaToken;
    let recaptchaScore: number | undefined;
    if (recaptchaToken) {
      console.log('[API/Lead] Verifying reCAPTCHA token');
      const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                       req.headers.get('x-real-ip') || 
                       undefined;
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, ipAddress);
      
      if (!recaptchaResult.success) {
        console.error('[API/Lead] ❌ reCAPTCHA verification failed:', recaptchaResult['error-codes']);
        return NextResponse.json({ 
          error: 'reCAPTCHA verification failed. Please try again.',
          correlationId 
        }, { status: 400 });
      }
      
      recaptchaScore = recaptchaResult.score;
      
      // Check score threshold (0.3 = suspicious but allow, 0.5+ = human-like)
      if (recaptchaScore !== undefined && recaptchaScore < 0.3) {
        console.warn('[API/Lead] ⚠️ Very low reCAPTCHA score:', recaptchaScore, '- Likely bot, but allowing with low lead score');
        // Still allow submission but flag as suspicious
      } else if (recaptchaScore !== undefined) {
        console.log('[API/Lead] ✅ reCAPTCHA verified - Score:', recaptchaScore);
      }
    } else {
      console.warn('[API/Lead] ⚠️ No reCAPTCHA token provided - continuing without verification');
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
        raw: {
          ...(body.raw || {}),
          // Ensure all metadata is stored in raw JSON field
          recaptchaScore: recaptchaScore, // Store the verified score
          timestamp: new Date().toISOString(),
          // Store all time tracking data
          ...(body.raw?.timeOnPage && { timeOnPage: body.raw.timeOnPage }),
          ...(body.raw?.timeToForm && { timeToForm: body.raw.timeToForm }),
          ...(body.raw?.formCompletionTime && { formCompletionTime: body.raw.formCompletionTime }),
          ...(body.raw?.scrollDepth && { scrollDepth: body.raw.scrollDepth }),
        } as any,
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

    // Calculate lead score and conversion value
    const leadScore = calculateLeadScore(body);
    const conversionValue = calculateConversionValue(leadScore);
    const qualificationLevel = determineQualificationLevel(body);
    const priority = determinePriority(body);
    
    console.log('[API/Lead] Lead score calculated:', {
      score: leadScore,
      conversionValue,
      qualificationLevel,
      priority,
      budget: body.budget,
      timeOnPage: body.raw?.timeOnPage,
      scrollDepth: body.raw?.scrollDepth
    });
    
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
    
    console.log('[API/Lead] Logging conversion event with value:', conversionEventType, conversionValue);
    await logServerConversion(conversionEventType, { 
      correlationId, 
      zohoLeadId, 
      leadId: lead.id,
      source,
      value: conversionValue, // Add conversion value to Google Ads conversion
    });

    // Provide client with conversion mapping
    const mapping = await getClientConversionMapping();

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        zohoLeadId: zohoLeadId || null,
        correlationId,
        conversionValue, // Send conversion value to client for client-side tracking
        leadScore,
        qualificationLevel,
        priority,
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


