/**
 * Blog Admin API
 * 
 * CRUD operations for managing blog posts
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - List all blog posts
export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.blogPost.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            title: true,
            avatar: true,
          },
        },
      },
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('[Blog API] Error fetching:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const post = await prisma.blogPost.create({
      data: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        publishedAt: new Date(data.publishedAt),
        readTime: data.readTime,
        category: data.category,
        tags: data.tags || [],
        imageUrl: data.imageUrl,
        featured: data.featured || false,
        authorId: data.authorId,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.error('[Blog API] Error creating:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

// PUT - Update blog post
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    const post = await prisma.blogPost.update({
      where: { id: data.id },
      data: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        publishedAt: new Date(data.publishedAt),
        readTime: data.readTime,
        category: data.category,
        tags: data.tags,
        imageUrl: data.imageUrl,
        featured: data.featured,
        authorId: data.authorId,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.error('[Blog API] Error updating:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Blog post ID required' },
        { status: 400 }
      );
    }

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Blog API] Error deleting:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
