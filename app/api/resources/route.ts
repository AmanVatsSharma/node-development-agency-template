import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// GET /api/resources
// Fetches all resources with optional filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Extract query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const type = searchParams.get('type');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    
    // Calculate pagination
    const skip = (page - 1) * pageSize;
    
    // Build where clause for filtering
    const where: any = {};
    
    if (type) {
      where.type = type;
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (featured) {
      where.featured = featured === 'true';
    }
    
    // Fetch resources
    const resources = await prisma.resource.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { publishedAt: 'desc' },
    });
    
    // Get total count for pagination
    const totalResources = await prisma.resource.count({ where });
    
    return NextResponse.json({
      resources,
      pagination: {
        total: totalResources,
        page,
        pageSize,
        totalPages: Math.ceil(totalResources / pageSize),
        hasMore: skip + resources.length < totalResources,
      },
    });
  } catch (error: any) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/resources
// Creates a new resource (requires authentication in a real app)
export async function POST(request: NextRequest) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'type', 'downloadUrl', 'imageUrl'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Validate resource type
    const validTypes = ['ebook', 'whitepaper', 'template', 'video', 'webinar'];
    if (!validTypes.includes(data.type)) {
      return NextResponse.json(
        { error: `Invalid resource type. Valid types are: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Create the resource
    const resource = await prisma.resource.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        downloadUrl: data.downloadUrl,
        imageUrl: data.imageUrl,
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date(),
        featured: data.featured || false,
      },
    });
    
    return NextResponse.json(resource, { status: 201 });
  } catch (error: any) {
    console.error('Error creating resource:', error);
    return NextResponse.json(
      { error: 'Failed to create resource', details: error.message },
      { status: 500 }
    );
  }
} 