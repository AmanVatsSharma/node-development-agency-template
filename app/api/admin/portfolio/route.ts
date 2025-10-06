/**
 * Portfolio Admin API
 * 
 * CRUD operations for managing portfolio projects
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all projects
export async function GET(req: NextRequest) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('[Portfolio API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const project = await prisma.project.create({
      data: {
        slug: data.slug,
        title: data.title,
        clientName: data.clientName,
        summary: data.summary,
        description: data.description,
        challenge: data.challenge,
        solution: data.solution,
        outcome: data.outcome,
        imageUrl: data.imageUrl,
        projectUrl: data.projectUrl,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
        completedAt: data.completedAt ? new Date(data.completedAt) : null,
        category: data.category,
        tags: data.tags || [],
      },
    });

    return NextResponse.json({ project });
  } catch (error) {
    console.error('[Portfolio API] Error creating:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

// PUT - Update project
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const project = await prisma.project.update({
      where: { id: data.id },
      data: {
        slug: data.slug,
        title: data.title,
        clientName: data.clientName,
        summary: data.summary,
        description: data.description,
        challenge: data.challenge,
        solution: data.solution,
        outcome: data.outcome,
        imageUrl: data.imageUrl,
        projectUrl: data.projectUrl,
        githubUrl: data.githubUrl,
        featured: data.featured,
        completedAt: data.completedAt ? new Date(data.completedAt) : null,
        category: data.category,
        tags: data.tags,
      },
    });

    return NextResponse.json({ project });
  } catch (error) {
    console.error('[Portfolio API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Project ID required' },
        { status: 400 }
      );
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Portfolio API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
