import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { WEB_DEVELOPMENT_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Web Development Service Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire web developer", "hire web development company" (high buyer intent)
 * - Secondary: Service-specific web development keywords
 * - Long-tail: Technology-specific development keywords
 * - Semantic: Related web development and design terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Web Developer | Professional Web Development Services',
  'Enterprise-grade web development: Next.js apps, SEO optimization, analytics & tracking, branding, integrations, and growth consulting.',
  WEB_DEVELOPMENT_KEYWORDS,
  '/pages/web-development',
  {
    ogImage: '/images/web-development-og.jpg',
    cta: 'Get free consultation today!',
  }
);


