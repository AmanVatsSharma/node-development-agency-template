/**
 * Integration Types
 * Type definitions for external integrations
 */

export interface IntegrationResult {
  success: boolean;
  error?: string;
  details?: any;
}

export interface LeadData {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  service?: string | null;
}

export interface NewsletterData {
  email: string;
  name?: string;
}
