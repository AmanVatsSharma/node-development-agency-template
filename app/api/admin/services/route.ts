/**
 * Services Admin API
 * 
 * CRUD operations for managing services
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all services
export async function GET(req: NextRequest) {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ services });
  } catch (error) {
    console.error('[Services API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const service = await prisma.service.create({
      data: {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        description: data.description,
        icon: data.icon,
        imageUrl: data.imageUrl,
        order: data.order || 0,
        featured: data.featured || false,
      },
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.error('[Services API] Error creating:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const service = await prisma.service.update({
      where: { id: data.id },
      data: {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        description: data.description,
        icon: data.icon,
        imageUrl: data.imageUrl,
        order: data.order,
        featured: data.featured,
      },
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.error('[Services API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Service ID required' },
        { status: 400 }
      );
    }

    await prisma.service.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Services API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
