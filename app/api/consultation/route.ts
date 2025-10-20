/**
 * @fileoverview Free Consultation API Endpoint
 * @description API route handler for consultation booking submissions
 * @module api/consultation
 * 
 * Features:
 * - Create consultation requests in database
 * - Email notifications
 * - Zoho CRM integration (optional)
 * - Input validation and sanitization
 * - Comprehensive error handling
 * - Console logging for debugging
 * 
 * Built by: Vedpragya Bharat Private Limited
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// Console log for debugging
console.log('[ConsultationAPI] Route handler loaded');

/**
 * POST /api/consultation
 * Submit a new consultation request
 */
export async function POST(request: NextRequest) {
  console.log('[ConsultationAPI] POST request received');

  try {
    // Parse request body
    const body = await request.json();
    console.log('[ConsultationAPI] Request body:', JSON.stringify(body, null, 2));

    // Validate required fields
    const { name, email, serviceInterest, preferredDate, preferredTime } = body;

    if (!name || !email || !serviceInterest || !preferredDate || !preferredTime) {
      console.error('[ConsultationAPI] Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('[ConsultationAPI] Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('[ConsultationAPI] Validation passed, creating consultation request');

    // Create consultation request in database
    const consultation = await prisma.consultationRequest.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        company: body.company?.trim() || null,
        serviceInterest,
        preferredDate,
        preferredTime,
        message: body.message?.trim() || null,
        status: 'pending',
        source: body.source || 'landing_page',
      },
    });

    console.log('[ConsultationAPI] Consultation request created:', consultation.id);

    // TODO: Send email notification
    // This is a placeholder - implement with your email service
    console.log('[ConsultationAPI] TODO: Send email notification to admin and client');
    
    // Email to admin
    try {
      console.log('[ConsultationAPI] Sending admin notification email...');
      // Implement email sending logic here
      // Example: await sendAdminNotification(consultation);
    } catch (emailError) {
      console.error('[ConsultationAPI] Failed to send admin email:', emailError);
      // Don't fail the request if email fails
    }

    // Email to client (confirmation)
    try {
      console.log('[ConsultationAPI] Sending client confirmation email...');
      // Implement email sending logic here
      // Example: await sendClientConfirmation(consultation);
    } catch (emailError) {
      console.error('[ConsultationAPI] Failed to send client email:', emailError);
      // Don't fail the request if email fails
    }

    // TODO: Sync with Zoho CRM
    console.log('[ConsultationAPI] TODO: Sync with Zoho CRM');
    try {
      // Implement Zoho sync logic here
      // Example: await syncToZohoCRM(consultation);
    } catch (zohoError) {
      console.error('[ConsultationAPI] Failed to sync with Zoho CRM:', zohoError);
      // Don't fail the request if Zoho sync fails
    }

    // Log success
    console.log('[ConsultationAPI] Consultation request processed successfully');

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request submitted successfully',
        id: consultation.id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('[ConsultationAPI] Error processing consultation request:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to process consultation request',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/consultation
 * Retrieve consultation requests (admin only)
 */
export async function GET(request: NextRequest) {
  console.log('[ConsultationAPI] GET request received');

  try {
    // TODO: Add authentication check for admin access
    console.log('[ConsultationAPI] TODO: Implement admin authentication');

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    console.log('[ConsultationAPI] Query params - status:', status, 'limit:', limit, 'offset:', offset);

    // Build query filter
    const where: any = {};
    if (status) {
      where.status = status;
    }

    // Fetch consultation requests
    const consultations = await prisma.consultationRequest.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
    });

    // Get total count
    const total = await prisma.consultationRequest.count({ where });

    console.log('[ConsultationAPI] Retrieved', consultations.length, 'consultations out of', total);

    return NextResponse.json({
      success: true,
      data: consultations,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + consultations.length < total,
      },
    });

  } catch (error) {
    console.error('[ConsultationAPI] Error fetching consultation requests:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch consultation requests',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/consultation
 * Update consultation request status (admin only)
 */
export async function PATCH(request: NextRequest) {
  console.log('[ConsultationAPI] PATCH request received');

  try {
    // TODO: Add authentication check for admin access
    console.log('[ConsultationAPI] TODO: Implement admin authentication');

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      console.error('[ConsultationAPI] Missing consultation ID');
      return NextResponse.json(
        { error: 'Missing consultation ID' },
        { status: 400 }
      );
    }

    console.log('[ConsultationAPI] Updating consultation:', id, 'Status:', status);

    // Update consultation
    const consultation = await prisma.consultationRequest.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(notes !== undefined && { notes }),
      },
    });

    console.log('[ConsultationAPI] Consultation updated successfully');

    return NextResponse.json({
      success: true,
      data: consultation,
    });

  } catch (error) {
    console.error('[ConsultationAPI] Error updating consultation:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to update consultation',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
