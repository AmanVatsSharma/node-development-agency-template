import { Metadata } from 'next';
import { generateServiceMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Landing Page Optimization Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Landing Page Optimization | Increase Conversions',
  'Optimize your landing pages for maximum conversions. A/B testing, conversion rate optimization, UX improvements, and data-driven optimization strategies. Increase conversions by 2-4×.',
  [
    'landing page optimization',
    'conversion rate optimization',
    'CRO services',
    'landing page design',
    'A/B testing',
    'conversion optimization',
    'landing page audit',
    'page speed optimization',
  ],
  '/pages/landing-page-optimization',
  '/images/landing-page-optimization-og.jpg'
);
