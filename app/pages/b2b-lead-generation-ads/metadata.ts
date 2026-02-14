import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { B2B_LEAD_GENERATION_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for B2B Lead Generation Ads Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire b2b lead generation expert" (high buyer intent)
 * - Secondary: Service-specific B2B marketing keywords
 * - Long-tail: Industry-specific lead generation keywords
 * - Semantic: Related B2B marketing and sales terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire B2B Lead Generation Expert | High-Quality B2B Leads',
  'Generate high-quality B2B leads with targeted Google Ads campaigns. Advanced lead qualification, CRM integration, and ROI-focused strategies.',
  B2B_LEAD_GENERATION_KEYWORDS,
  '/pages/b2b-lead-generation-ads',
  {
    pricing: {
      startingPrice: '60,000',
      currency: '₹',
    },
    ogImage: '/images/b2b-lead-generation-og.jpg',
    cta: 'Get free consultation today!',
  }
);
