import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { WEB_DEVELOPMENT_MUMBAI_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * Mumbai Web Development Landing Page - SEO Metadata
 * Optimized for high-intent, lead-generating keywords with Mumbai location focus
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire web developer mumbai" (high buyer intent + location)
 * - Secondary: Service-specific web development keywords with Mumbai
 * - Long-tail: Industry-specific Mumbai web development keywords
 * - Semantic: Related web development and Mumbai business terms
 * 
 * @version 2.0.0 - Advanced Keyword Optimization
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  "Hire Web Developer Mumbai | Mumbai's #1 Web Development Company",
  "Mumbai's leading web development company. We build professional, mobile-responsive websites for Mumbai businesses. 14-21 days delivery.",
  WEB_DEVELOPMENT_MUMBAI_KEYWORDS,
  '/pages/web-development-mumbai',
  {
    location: 'Mumbai',
    pricing: {
      startingPrice: '15,999',
      currency: '₹',
    },
    ogImage: '/og-image-mumbai-web-development.jpg',
    cta: 'Get free consultation today!',
  }
);