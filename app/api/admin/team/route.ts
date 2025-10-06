/**
 * Team Admin API
 * 
 * CRUD operations for managing team members
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all team members
export async function GET(req: NextRequest) {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ members });
  } catch (error) {
    console.error('[Team API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}

// POST - Create new team member
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const member = await prisma.teamMember.create({
      data: {
        name: data.name,
        position: data.position,
        bio: data.bio,
        avatar: data.avatar,
        order: data.order || 0,
        linkedIn: data.linkedIn,
        twitter: data.twitter,
        github: data.github,
        website: data.website,
        active: data.active !== undefined ? data.active : true,
      },
    });

    return NextResponse.json({ member });
  } catch (error) {
    console.error('[Team API] Error creating:', error);
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}

// PUT - Update team member
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const member = await prisma.teamMember.update({
      where: { id: data.id },
      data: {
        name: data.name,
        position: data.position,
        bio: data.bio,
        avatar: data.avatar,
        order: data.order,
        linkedIn: data.linkedIn,
        twitter: data.twitter,
        github: data.github,
        website: data.website,
        active: data.active,
      },
    });

    return NextResponse.json({ member });
  } catch (error) {
    console.error('[Team API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// DELETE - Delete team member
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Team member ID required' },
        { status: 400 }
      );
    }

    await prisma.teamMember.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Team API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
