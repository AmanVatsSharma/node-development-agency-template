import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// POST /api/blog/comments
// Creates a new comment on a blog post
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['postId', 'name', 'email', 'content'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Check if blog post exists
    const post = await prisma.blogPost.findUnique({
      where: { id: data.postId },
    });
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Create the comment
    // In a real application, you might want to set approved: false and implement
    // a moderation system to prevent spam
    const comment = await prisma.comment.create({
      data: {
        postId: data.postId,
        name: data.name,
        email: data.email,
        website: data.website || null,
        content: data.content,
        approved: false, // Require moderation before showing on site
      },
    });
    
    return NextResponse.json(
      { 
        message: 'Comment submitted successfully and awaiting approval',
        comment: {
          id: comment.id,
          name: comment.name,
          content: comment.content,
          createdAt: comment.createdAt,
        }
      }, 
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment', details: error.message },
      { status: 500 }
    );
  }
}

// GET /api/blog/comments
// Gets comments for a specific post
// This endpoint would typically be used by admin/moderation interfaces
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get('postId');
    const approved = searchParams.get('approved');
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Missing postId parameter' },
        { status: 400 }
      );
    }
    
    // Check if blog post exists
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
    });
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Build where clause
    const where: any = { postId };
    if (approved !== null) {
      where.approved = approved === 'true';
    }
    
    // Get comments for the post
    const comments = await prisma.comment.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        content: true,
        name: true,
        website: true,
        approved: true,
        createdAt: true,
      },
    });
    
    return NextResponse.json({ comments });
  } catch (error: any) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments', details: error.message },
      { status: 500 }
    );
  }
} 