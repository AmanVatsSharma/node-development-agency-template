import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { PERFORMANCE_MAX_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Performance Max Campaigns Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire performance max expert" (high buyer intent)
 * - Secondary: Service-specific Performance Max keywords
 * - Long-tail: Industry-specific PMax keywords
 * - Semantic: Related Google Ads automation terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Performance Max Expert | Performance Max Campaign Management',
  'Set up and optimize Performance Max campaigns for maximum results. AI-powered Google Ads automation, multi-channel reach, and advanced conversion optimization.',
  PERFORMANCE_MAX_KEYWORDS,
  '/pages/performance-max-campaigns',
  {
    ogImage: '/images/performance-max-og.jpg',
    cta: 'Get free consultation today!',
  }
);
