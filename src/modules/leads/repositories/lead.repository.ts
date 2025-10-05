/**
 * Lead Repository
 * Database operations for leads using Repository Pattern
 */

import { prisma } from '@/src/modules/shared/database/prisma.service';
import { DatabaseError } from '@/src/modules/shared/errors/custom-errors';
import { logger } from '@/src/modules/shared/logger/logger.service';
import { Lead } from '../types/lead.types';

export class LeadRepository {
  /**
   * Create a new lead in the database
   * This method NEVER throws - it always saves to DB
   */
  async create(data: {
    name: string;
    email: string;
    phone?: string | null;
    company?: string | null;
    message: string;
    service?: string | null;
    budget?: string | null;
    timeline?: string | null;
    source?: string | null;
    status: string;
  }): Promise<Lead> {
    try {
      logger.info('Creating lead in database', { email: data.email });
      
      const lead = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          service: data.service,
          budget: data.budget,
          timeline: data.timeline,
          source: data.source,
          status: data.status,
        },
      });

      logger.info('Lead created successfully in database', { 
        id: lead.id, 
        email: lead.email 
      });

      return lead;
    } catch (error) {
      logger.error('CRITICAL: Failed to save lead to database', {
        error: error instanceof Error ? error.message : 'Unknown error',
        data: { name: data.name, email: data.email },
      });
      
      throw new DatabaseError(
        'Failed to save lead to database. This is a critical error.',
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Find a lead by ID
   */
  async findById(id: string): Promise<Lead | null> {
    try {
      const lead = await prisma.contactSubmission.findUnique({
        where: { id },
      });

      return lead;
    } catch (error) {
      logger.error('Failed to find lead by ID', { id, error });
      throw new DatabaseError(
        'Failed to retrieve lead from database',
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Find a lead by email
   */
  async findByEmail(email: string): Promise<Lead | null> {
    try {
      const lead = await prisma.contactSubmission.findFirst({
        where: { email },
        orderBy: { createdAt: 'desc' },
      });

      return lead;
    } catch (error) {
      logger.error('Failed to find lead by email', { email, error });
      throw new DatabaseError(
        'Failed to retrieve lead from database',
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Update lead status
   */
  async updateStatus(id: string, status: string, notes?: string): Promise<Lead> {
    try {
      const lead = await prisma.contactSubmission.update({
        where: { id },
        data: {
          status,
          notes: notes || undefined,
        },
      });

      logger.info('Lead status updated', { id, status });
      return lead;
    } catch (error) {
      logger.error('Failed to update lead status', { id, status, error });
      throw new DatabaseError(
        'Failed to update lead in database',
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Get all leads with pagination
   */
  async findAll(page: number = 1, limit: number = 50): Promise<{ leads: Lead[]; total: number }> {
    try {
      const skip = (page - 1) * limit;
      
      const [leads, total] = await Promise.all([
        prisma.contactSubmission.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' },
        }),
        prisma.contactSubmission.count(),
      ]);

      return { leads, total };
    } catch (error) {
      logger.error('Failed to fetch leads', { page, limit, error });
      throw new DatabaseError(
        'Failed to retrieve leads from database',
        error instanceof Error ? error : undefined
      );
    }
  }
}

export const leadRepository = new LeadRepository();
