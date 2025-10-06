/**
 * Resources Admin API
 * 
 * CRUD operations for managing downloadable resources
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all resources
export async function GET(req: NextRequest) {
  try {
    const resources = await prisma.resource.findMany({
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json({ resources });
  } catch (error) {
    console.error('[Resources API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

// POST - Create new resource
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const resource = await prisma.resource.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        downloadUrl: data.downloadUrl,
        imageUrl: data.imageUrl,
        publishedAt: new Date(data.publishedAt),
        featured: data.featured || false,
      },
    });

    return NextResponse.json({ resource });
  } catch (error) {
    console.error('[Resources API] Error creating:', error);
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    );
  }
}

// PUT - Update resource
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const resource = await prisma.resource.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        downloadUrl: data.downloadUrl,
        imageUrl: data.imageUrl,
        publishedAt: new Date(data.publishedAt),
        featured: data.featured,
      },
    });

    return NextResponse.json({ resource });
  } catch (error) {
    console.error('[Resources API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update resource' },
      { status: 500 }
    );
  }
}

// DELETE - Delete resource
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Resource ID required' },
        { status: 400 }
      );
    }

    await prisma.resource.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Resources API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete resource' },
      { status: 500 }
    );
  }
}
