import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// GET /api/blog
// Fetches all blog posts with optional filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Extract query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    
    // Calculate pagination
    const skip = (page - 1) * pageSize;
    
    // Build the where clause for filtering
    const where: any = {};
    
    if (category) {
      where.category = category;
    }
    
    if (tag) {
      where.tags = {
        has: tag,
      };
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (featured) {
      where.featured = featured === 'true';
    }
    
    // Fetch posts with author data
    const posts = await prisma.blogPost.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: {
        publishedAt: 'desc',
      },
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
    });
    
    // Get total count for pagination
    const totalPosts = await prisma.blogPost.count({ where });
    
    // Return formatted response
    return NextResponse.json({
      posts,
      pagination: {
        total: totalPosts,
        page,
        pageSize,
        totalPages: Math.ceil(totalPosts / pageSize),
        hasMore: skip + posts.length < totalPosts,
      },
    });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/blog
// Creates a new blog post (requires authentication in a real app)
export async function POST(request: NextRequest) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'content', 'excerpt', 'authorId', 'category'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: data.slug },
    });
    
    if (existingPost) {
      return NextResponse.json(
        { error: 'A blog post with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Create new blog post
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt,
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date(),
        readTime: data.readTime || 5,
        category: data.category,
        tags: data.tags || [],
        imageUrl: data.imageUrl || '/images/blog/default.jpg',
        featured: data.featured || false,
        authorId: data.authorId,
      },
    });
    
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post', details: error.message },
      { status: 500 }
    );
  }
} 