import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { ECOMMERCE_GOOGLE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Ecommerce Google Ads Optimization Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire ecommerce google ads expert" (high buyer intent)
 * - Secondary: Service-specific ecommerce advertising keywords
 * - Long-tail: Platform-specific ecommerce keywords
 * - Semantic: Related ecommerce and shopping ads terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Ecommerce Google Ads Expert | Ecommerce Google Ads Optimization',
  'Optimize your ecommerce Google Ads campaigns for maximum ROI. Product feed optimization, shopping campaigns, conversion tracking, and revenue-focused strategies. Increase sales by 3-5×.',
  ECOMMERCE_GOOGLE_ADS_KEYWORDS,
  '/pages/ecommerce-google-ads-optimization',
  {
    ogImage: '/images/ecommerce-google-ads-og.jpg',
    cta: 'Get free consultation today!',
  }
);
