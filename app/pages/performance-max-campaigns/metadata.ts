import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Performance Max Campaigns Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Performance Max Campaigns | Google Ads Automation',
  'Set up and optimize Performance Max campaigns for maximum results. AI-powered Google Ads automation, multi-channel reach, and advanced conversion optimization. Scale your advertising.',
  [
    ...KEYWORD_SETS.googleAds,
    'performance max',
    'PMax campaigns',
    'google ads automation',
    'AI advertising',
    'multi-channel campaigns',
    'automated campaigns',
  ],
  '/pages/performance-max-campaigns',
  '/images/performance-max-og.jpg'
);
