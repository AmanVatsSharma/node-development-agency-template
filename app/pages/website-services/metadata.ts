import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { WEB_DEVELOPMENT_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Website Services Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire web development company" (high buyer intent)
 * - Secondary: Service-specific web services keywords
 * - Long-tail: Service-type-specific keywords
 * - Semantic: Related web services and solutions terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Web Development Company | Complete Website Services',
  'Comprehensive website services: design, development, hosting, maintenance, SEO, and optimization. End-to-end web solutions for businesses of all sizes.',
  WEB_DEVELOPMENT_KEYWORDS,
  '/pages/website-services',
  {
    ogImage: '/images/website-services-og.jpg',
    cta: 'Get free consultation today!',
  }
);
