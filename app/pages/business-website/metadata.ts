import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { BUSINESS_WEBSITE_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Business Website Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire business website developer" (high buyer intent)
 * - Secondary: Service-specific business website keywords
 * - Long-tail: Industry-specific business website keywords
 * - Semantic: Related corporate and business web design terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Business Website Developer | Business Website Development',
  'Professional business website development. Custom business websites, corporate sites, portfolio websites, and business web solutions. Build your business online presence.',
  BUSINESS_WEBSITE_KEYWORDS,
  '/pages/business-website',
  {
    ogImage: '/images/business-website-og.jpg',
    cta: 'Get free consultation today!',
  }
);
