import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { WEB_DEVELOPMENT_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Website Development Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire web developer" (high buyer intent)
 * - Secondary: Service-specific web development keywords
 * - Long-tail: Technology-specific development keywords
 * - Semantic: Related web development and design terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Web Developer | Website Development Services',
  'Professional website development services. Custom websites, responsive design, CMS integration, ecommerce solutions, and modern web applications.',
  WEB_DEVELOPMENT_KEYWORDS,
  '/pages/website-development',
  {
    ogImage: '/images/website-development-og.jpg',
    cta: 'Get free consultation today!',
  }
);
