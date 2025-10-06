/**
 * Blog Authors API
 * 
 * Get list of blog post authors
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const authors = await prisma.author.findMany({
      select: {
        id: true,
        name: true,
        title: true,
        avatar: true,
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ authors });
  } catch (error) {
    console.error('[Authors API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch authors' },
      { status: 500 }
    );
  }
}
