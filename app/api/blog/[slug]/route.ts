import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import type { Prisma } from '@prisma/client';

// Helper function to handle Prisma operations safely during builds
const safeDbOperation = async <T>(operation: () => Promise<T>, fallback: T): Promise<T> => {
  // Check if we're in a Vercel build environment
  const isVercelBuild = process.env.VERCEL_ENV && 
                        process.env.NODE_ENV === 'production' && 
                        process.env.NEXT_PHASE === 'phase-production-build';
  
  if (isVercelBuild) {
    return fallback;
  }
  
  try {
    return await operation();
  } catch (error) {
    console.error('Database operation failed:', error);
    return fallback;
  }
};

// GET /api/blog/[slug]
// Fetches a single blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Use the safe operation wrapper
    type BlogPostWithRelations = Prisma.BlogPostGetPayload<{
      include: {
        author: {
          select: {
            id: true,
            name: true,
            title: true,
            avatar: true,
            bio: true,
          }
        },
        comments: {
          select: {
            id: true,
            content: true,
            name: true,
            website: true,
            createdAt: true,
          }
        }
      }
    }>;

    const post = await safeDbOperation<BlogPostWithRelations | null>(
      () => prisma.blogPost.findUnique({
        where: { slug },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              title: true,
              avatar: true,
              bio: true,
            },
          },
          comments: {
            where: { approved: true },
            orderBy: { createdAt: 'desc' },
            select: {
              id: true,
              content: true,
              name: true,
              website: true,
              createdAt: true,
            },
          },
        },
      }),
      null // fallback value if operation fails
    );
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Use the safe operation wrapper
    type RelatedPost = Prisma.BlogPostGetPayload<{
      include: {
        author: {
          select: {
            name: true,
            avatar: true,
          }
        }
      }
    }>;

    const relatedPosts = await safeDbOperation<RelatedPost[]>(
      () => prisma.blogPost.findMany({
        where: {
          OR: [
            { category: post.category },
            { tags: { hasSome: (post.tags as string[] | undefined) ?? [] } },
          ],
          NOT: { id: post.id }, // Exclude current post
        },
        take: 3,
        orderBy: { publishedAt: 'desc' },
        include: {
          author: {
            select: {
              name: true,
              avatar: true,
            },
          },
        },
      }),
      [] // fallback value if operation fails
    );
    
    return NextResponse.json({
      post,
      relatedPosts,
    });
  } catch (error: any) {
    console.error(`Error fetching blog post with slug ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post', details: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[slug]
// Updates a blog post (requires authentication in a real app)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const { slug } = await params;
    const data = await request.json();
    
    // Check if post exists
    const existingPost = await safeDbOperation(
      () => prisma.blogPost.findUnique({
        where: { slug },
      }),
      null
    );
    
    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // If slug is being changed, check if new slug already exists
    if (data.slug && data.slug !== slug) {
      const slugExists = await safeDbOperation(
        () => prisma.blogPost.findUnique({
          where: { slug: data.slug },
        }),
        null
      );
      
      if (slugExists) {
        return NextResponse.json(
          { error: 'A blog post with this slug already exists' },
          { status: 400 }
        );
      }
    }
    
    // Prepare update data
    const updateData: any = {};
    
    // Only include fields that are provided
    if (data.title) updateData.title = data.title;
    if (data.content) updateData.content = data.content;
    if (data.excerpt) updateData.excerpt = data.excerpt;
    if (data.slug) updateData.slug = data.slug;
    if (data.category) updateData.category = data.category;
    if (data.tags) updateData.tags = data.tags;
    if (data.imageUrl) updateData.imageUrl = data.imageUrl;
    if (data.readTime) updateData.readTime = data.readTime;
    if (data.publishedAt) updateData.publishedAt = new Date(data.publishedAt);
    if (data.featured !== undefined) updateData.featured = data.featured;
    if (data.authorId) updateData.authorId = data.authorId;
    
    // Update the post
    const updatedPost = await safeDbOperation(
      () => prisma.blogPost.update({
        where: { slug },
        data: updateData,
      }),
      { ...existingPost, ...updateData }
    );
    
    return NextResponse.json(updatedPost);
  } catch (error: any) {
    console.error(`Error updating blog post with slug ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to update blog post', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug]
// Deletes a blog post (requires authentication in a real app)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const { slug } = await params;
    
    // Check if post exists
    const existingPost = await safeDbOperation(
      () => prisma.blogPost.findUnique({
        where: { slug },
      }),
      null
    );
    
    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Delete the post
    await safeDbOperation(
      () => prisma.blogPost.delete({
        where: { slug },
      }),
      null
    );
    
    return NextResponse.json(
      { message: 'Blog post deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting blog post with slug ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to delete blog post', details: error.message },
      { status: 500 }
    );
  }
} 