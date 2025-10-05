/**
 * Lead Types
 * Type definitions for lead management
 */

export interface CreateLeadData {
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
}

export interface Lead {
  id: string;
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
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface LeadServiceResult {
  success: true;
  lead: Lead;
  integrationResults: {
    google: { success: boolean; error?: string };
    crm: { success: boolean; error?: string };
    email: { success: boolean; error?: string };
  };
}
