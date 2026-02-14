import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { LOCAL_BUSINESS_GOOGLE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Local Business Google Ads Landing Page
 * Optimized for high-intent, lead-generating keywords with local focus
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire local google ads expert" (high buyer intent + location)
 * - Secondary: Service-specific local advertising keywords
 * - Long-tail: Industry-specific local keywords
 * - Semantic: Related local marketing and SEO terms
 * - Local: Location-based keywords for geo-targeting
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Local Google Ads Expert | Local Business Google Ads',
  'Google Ads management for local businesses. Local targeting, Google My Business optimization, location-based campaigns, and foot traffic generation.',
  LOCAL_BUSINESS_GOOGLE_ADS_KEYWORDS,
  '/pages/local-business-google-ads',
  {
    ogImage: '/images/local-business-google-ads-og.jpg',
    cta: 'Get free consultation today!',
  }
);
