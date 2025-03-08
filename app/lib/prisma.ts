import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: 
// https://pris.ly/d/help/next-js-best-practices

// Add prisma to the NodeJS global type
// In newer versions of TypeScript/Node.js, we use a different approach for global types
declare global {
  var prisma: PrismaClient | undefined;
}

// Function to create a new PrismaClient instance
function createPrismaClient() {
  // Check if we're in a Vercel build environment
  const isVercelBuild = process.env.VERCEL_ENV && process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build';
  
  if (isVercelBuild) {
    // Return a mock PrismaClient during build time
    console.log('🔶 Using mock PrismaClient during Vercel build');
    const mock: any = {};
    // Create mock functions for all PrismaClient operations
    ['findUnique', 'findMany', 'findFirst', 'create', 'update', 'delete', 'upsert', 'count'].forEach(method => {
      mock[method] = () => Promise.resolve({});
    });
    return { 
      $connect: () => Promise.resolve(),
      $disconnect: () => Promise.resolve(),
      // Add mock models that are used in your app
      blogPost: mock,
      resource: mock,
      user: mock,
      comment: mock,
      // Add any other models you're using
    } as PrismaClient;
  }
  
  // For regular runtime, use the actual PrismaClient
  return new PrismaClient();
}

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || createPrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma; 