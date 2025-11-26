import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { YOUTUBE_ADS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for YouTube Advertising Management Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire youtube ads expert" (high buyer intent)
 * - Secondary: Service-specific YouTube advertising keywords
 * - Long-tail: Campaign-type-specific keywords
 * - Semantic: Related video marketing and advertising terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire YouTube Ads Expert | YouTube Advertising Management',
  'Professional YouTube advertising management. Video ad creation, targeting optimization, YouTube Analytics, and conversion-focused video campaigns.',
  YOUTUBE_ADS_KEYWORDS,
  '/pages/youtube-advertising-management',
  {
    ogImage: '/images/youtube-advertising-og.jpg',
    cta: 'Get free consultation today!',
  }
);
