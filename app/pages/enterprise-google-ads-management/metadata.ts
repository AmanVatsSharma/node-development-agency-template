import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { ENTERPRISE_GOOGLE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Enterprise Google Ads Management Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire enterprise google ads manager" (high buyer intent)
 * - Secondary: Service-specific enterprise advertising keywords
 * - Long-tail: Industry-specific enterprise keywords
 * - Semantic: Related enterprise marketing terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Enterprise Google Ads Manager | Enterprise Google Ads Management',
  'Enterprise-grade Google Ads management for large organizations. Multi-account management, advanced automation, dedicated account managers, and enterprise-level reporting.',
  ENTERPRISE_GOOGLE_ADS_KEYWORDS,
  '/pages/enterprise-google-ads-management',
  {
    ogImage: '/images/enterprise-google-ads-og.jpg',
    cta: 'Get free consultation today!',
  }
);
