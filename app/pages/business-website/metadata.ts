import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Business Website Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Business Website Development | Professional Business Sites',
  'Professional business website development. Custom business websites, corporate sites, portfolio websites, and business web solutions. Build your business online presence.',
  [
    ...KEYWORD_SETS.webDevelopment,
    'business website',
    'corporate website',
    'business web design',
    'company website',
    'professional website',
  ],
  '/pages/business-website',
  '/images/business-website-og.jpg'
);
