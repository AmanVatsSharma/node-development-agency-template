import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { REACTJS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for React.js Development Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire react developer" (high buyer intent)
 * - Secondary: Service-specific React development keywords
 * - Long-tail: Technology-specific React keywords
 * - Semantic: Related React and frontend development terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire React Developer | React.js Development Services',
  'Expert React.js development services. Custom React applications, React Native mobile apps, component libraries, and modern web solutions. Enterprise-grade React development.',
  REACTJS_KEYWORDS,
  '/pages/reactjs-development',
  {
    ogImage: '/images/reactjs-development-og.jpg',
    cta: 'Get free consultation today!',
  }
);
