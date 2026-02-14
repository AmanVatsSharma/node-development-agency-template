import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { LANDING_PAGE_OPTIMIZATION_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Landing Page Optimization Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire landing page optimization expert" (high buyer intent)
 * - Secondary: Service-specific CRO keywords
 * - Long-tail: Industry-specific optimization keywords
 * - Semantic: Related conversion optimization terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Landing Page Optimization Expert | Conversion Rate Optimization',
  'Optimize your landing pages for maximum conversions. A/B testing, conversion rate optimization, UX improvements, and data-driven optimization strategies. Increase conversions by 2-4×.',
  LANDING_PAGE_OPTIMIZATION_KEYWORDS,
  '/pages/landing-page-optimization',
  {
    ogImage: '/images/landing-page-optimization-og.jpg',
    cta: 'Get free consultation today!',
  }
);
