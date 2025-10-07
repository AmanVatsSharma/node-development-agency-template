/**
 * Prisma Service
 * Centralized database connection management
 */

import { PrismaClient } from '@prisma/client';
import { logger } from '../logger/logger.service';

class PrismaService {
  private prisma: PrismaClient;
  private static instance: PrismaService;

  constructor() {
    // Check if we're in a Vercel build environment
    const isVercelBuild = 
      process.env.VERCEL_ENV && 
      process.env.NODE_ENV === 'production' && 
      process.env.NEXT_PHASE === 'phase-production-build';
    
    if (isVercelBuild) {
      // Return a mock PrismaClient during build time
      logger.info('Using mock PrismaClient during Vercel build');
      const mock: any = {};
      ['findUnique', 'findMany', 'findFirst', 'create', 'update', 'delete', 'upsert', 'count'].forEach(method => {
        mock[method] = () => Promise.resolve({});
      });
      this.prisma = {
        $connect: () => Promise.resolve(),
        $disconnect: () => Promise.resolve(),
        contactSubmission: mock,
        newsletterSubscription: mock,
        blogPost: mock,
        resource: mock,
        project: mock,
        technology: mock,
        testimonial: mock,
        teamMember: mock,
        service: mock,
        author: mock,
        comment: mock,
        user: mock,
      } as PrismaClient;
    } else {
      this.prisma = new PrismaClient({
        log: process.env.NODE_ENV === 'development' 
          ? ['query', 'error', 'warn'] 
          : ['error'],
      });
    }
  }

  static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }
    return PrismaService.instance;
  }

  getClient(): PrismaClient {
    return this.prisma;
  }

  async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      logger.info('Database connected successfully');
    } catch (error) {
      logger.error('Failed to connect to database', { error });
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.prisma.$disconnect();
      logger.info('Database disconnected successfully');
    } catch (error) {
      logger.error('Failed to disconnect from database', { error });
      throw error;
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      logger.error('Database health check failed', { error });
      return false;
    }
  }
}

// Export singleton instance
export const prismaService = PrismaService.getInstance();
export const prisma = prismaService.getClient();
