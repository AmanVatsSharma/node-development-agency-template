import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { GOOGLE_ADS_AUDIT_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Google Ads Audit & Strategy Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire google ads audit expert" (high buyer intent)
 * - Secondary: Service-specific audit keywords
 * - Long-tail: Industry-specific audit keywords
 * - Semantic: Related PPC audit and optimization terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Google Ads Audit Expert | Google Ads Audit & Strategy',
  'Comprehensive Google Ads audit and strategic planning. Identify optimization opportunities, improve ROAS, reduce wasted spend, and create data-driven strategies.',
  GOOGLE_ADS_AUDIT_KEYWORDS,
  '/pages/google-ads-audit-strategy',
  {
    ogImage: '/images/google-ads-audit-og.jpg',
    cta: 'Get free audit today!',
  }
);
