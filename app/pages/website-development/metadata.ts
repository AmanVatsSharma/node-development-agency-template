import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Website Development Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Website Development Services | Custom Web Solutions',
  'Professional website development services. Custom websites, responsive design, CMS integration, ecommerce solutions, and modern web applications. Build your online presence.',
  [
    ...KEYWORD_SETS.webDevelopment,
    'website development',
    'custom websites',
    'web design',
    'responsive web design',
    'website builder',
  ],
  '/pages/website-development',
  '/images/website-development-og.jpg'
);
