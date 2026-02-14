import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { GOOGLE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Google Ads Management Service Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire google ads expert", "hire google ads manager" (high buyer intent)
 * - Secondary: Service-specific keywords with location
 * - Long-tail: Problem-solving keywords for better conversion
 * - Semantic: Related terms and LSI keywords for better ranking
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Google Ads Expert | Professional Google Ads Management Services',
  'Hire top Google Ads experts to run high-ROI campaigns. We create, manage, and optimize Google Ads for leads & sales. Data-driven PPC agency in India.',
  GOOGLE_ADS_KEYWORDS,
  '/pages/google-ads-management',
  {
    pricing: {
      startingPrice: '25,000',
      currency: '₹',
    },
    ogImage: '/images/google-ads-og-image.jpg',
    cta: 'Get free consultation today!',
  }
);
