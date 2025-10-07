/**
 * Create Lead DTO
 * Data Transfer Object for creating leads with validation
 */

import { ValidationError } from '@/src/modules/shared/errors/custom-errors';
import { EmailValidator } from '@/src/modules/shared/validators/email.validator';
import { CreateLeadData } from '../types/lead.types';

export class CreateLeadDto {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  city?: string;
  businessType?: string;
  service?: string;
  message: string;
  source?: string;
  budget?: string;
  timeline?: string;

  constructor(data: CreateLeadData) {
    this.validate(data);
    
    this.name = data.name.trim();
    this.email = EmailValidator.sanitize(data.email);
    this.phone = data.phone?.trim();
    this.company = data.company?.trim();
    this.city = data.city?.trim();
    this.businessType = data.businessType?.trim();
    this.service = data.service?.trim();
    this.message = data.message.trim();
    this.source = data.source?.trim();
    this.budget = data.budget?.trim();
    this.timeline = data.timeline?.trim();
  }

  private validate(data: CreateLeadData): void {
    // Validate required fields
    if (!data.name || data.name.trim().length === 0) {
      throw new ValidationError('Name is required', 'name');
    }

    if (data.name.trim().length < 2) {
      throw new ValidationError('Name must be at least 2 characters', 'name');
    }

    // Validate email
    EmailValidator.validate(data.email, 'email');

    // Validate message
    if (!data.message || data.message.trim().length === 0) {
      throw new ValidationError('Message is required', 'message');
    }

    if (data.message.trim().length < 10) {
      throw new ValidationError('Message must be at least 10 characters', 'message');
    }

    // Validate phone if provided
    if (data.phone && data.phone.trim().length > 0) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(data.phone)) {
        throw new ValidationError('Invalid phone number format', 'phone');
      }
    }
  }

  toDatabase() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone || null,
      company: this.company || null,
      message: this.message,
      service: this.service || null,
      budget: this.budget || null,
      timeline: this.timeline || null,
      source: this.source || null,
      status: 'pending',
    };
  }
}
