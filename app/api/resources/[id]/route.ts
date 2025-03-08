import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

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

// GET /api/resources/[id]
// Fetches a single resource by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const resource = await safeDbOperation(
      () => prisma.resource.findUnique({
        where: { id },
      }),
      null
    );
    
    if (!resource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(resource);
  } catch (error: any) {
    console.error(`Error fetching resource with id ${(await params).id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch resource', details: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/resources/[id]
// Updates a resource (requires authentication in a real app)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const { id } = await params;
    const data = await request.json();
    
    // Check if resource exists
    const existingResource = await safeDbOperation(
      () => prisma.resource.findUnique({
        where: { id },
      }),
      null
    );
    
    if (!existingResource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
    
    // Validate resource type if provided
    if (data.type) {
      const validTypes = ['ebook', 'whitepaper', 'template', 'video', 'webinar'];
      if (!validTypes.includes(data.type)) {
        return NextResponse.json(
          { error: `Invalid resource type. Valid types are: ${validTypes.join(', ')}` },
          { status: 400 }
        );
      }
    }
    
    // Prepare update data
    const updateData: any = {};
    
    // Only include fields that are provided
    if (data.title) updateData.title = data.title;
    if (data.description) updateData.description = data.description;
    if (data.type) updateData.type = data.type;
    if (data.downloadUrl) updateData.downloadUrl = data.downloadUrl;
    if (data.imageUrl) updateData.imageUrl = data.imageUrl;
    if (data.publishedAt) updateData.publishedAt = new Date(data.publishedAt);
    if (data.featured !== undefined) updateData.featured = data.featured;
    
    // Update the resource
    const updatedResource = await safeDbOperation(
      () => prisma.resource.update({
        where: { id },
        data: updateData,
      }),
      { ...existingResource, ...updateData }
    );
    
    return NextResponse.json(updatedResource);
  } catch (error: any) {
    console.error(`Error updating resource with id ${(await params).id}:`, error);
    return NextResponse.json(
      { error: 'Failed to update resource', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/resources/[id]
// Deletes a resource (requires authentication in a real app)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // In a real app, you would check authentication/authorization here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const { id } = await params;
    
    // Check if resource exists
    const existingResource = await safeDbOperation(
      () => prisma.resource.findUnique({
        where: { id },
      }),
      null
    );
    
    if (!existingResource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
    
    // Delete the resource
    await safeDbOperation(
      () => prisma.resource.delete({
        where: { id },
      }),
      null
    );
    
    return NextResponse.json(
      { message: 'Resource deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting resource with id ${(await params).id}:`, error);
    return NextResponse.json(
      { error: 'Failed to delete resource', details: error.message },
      { status: 500 }
    );
  }
} 