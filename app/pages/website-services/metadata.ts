import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Website Services Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Website Services | Complete Web Solutions',
  'Comprehensive website services: design, development, hosting, maintenance, SEO, and optimization. End-to-end web solutions for businesses of all sizes.',
  [
    ...KEYWORD_SETS.webDevelopment,
    'website services',
    'web services',
    'website maintenance',
    'web hosting',
    'website design services',
  ],
  '/pages/website-services',
  '/images/website-services-og.jpg'
);
