/**
 * @fileoverview SEO Metadata for EnterpriseHero CRM Page
 * @description Premium self-hosted CRM built on BharatERP stack
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { CRM_KEYWORDS } from '@/app/lib/seo/keyword-research';

console.log('[CRM] Metadata configuration loaded');

/**
 * SEO Metadata for CRM Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire crm developer", "custom crm development" (high buyer intent)
 * - Secondary: Service-specific CRM development keywords
 * - Long-tail: Industry-specific CRM keywords
 * - Semantic: Related CRM and business software terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire CRM Developer | Custom CRM Development Services',
  'Experience India\'s premium self-hosted CRM — customizable, secure, and ERP-ready. Built by EnterpriseHero (Vedpragya Bharat). Own your business data with enterprise-grade features.',
  CRM_KEYWORDS,
  '/pages/crm',
  {
    ogImage: '/crm-og-image.png',
    cta: 'Get free consultation today!',
  }
);
