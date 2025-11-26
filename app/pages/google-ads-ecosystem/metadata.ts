import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { GOOGLE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Google Ads Ecosystem Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire google ads expert" (high buyer intent)
 * - Secondary: Service-specific Google Ads keywords
 * - Long-tail: Campaign-type-specific keywords
 * - Semantic: Related PPC and advertising terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Google Ads Expert | Complete Google Ads Ecosystem Solutions',
  'Complete Google Ads ecosystem services: Search, Display, Shopping, Video, Performance Max, and more. End-to-end PPC solutions for all campaign types and business goals.',
  GOOGLE_ADS_KEYWORDS,
  '/pages/google-ads-ecosystem',
  {
    ogImage: '/images/google-ads-ecosystem-og.jpg',
    cta: 'Get free consultation today!',
  }
);
