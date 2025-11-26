import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for YouTube Advertising Management Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'YouTube Advertising Management | Video Ad Campaigns',
  'Professional YouTube advertising management. Video ad creation, targeting optimization, YouTube Analytics, and conversion-focused video campaigns. Reach your audience on YouTube.',
  [
    ...KEYWORD_SETS.googleAds,
    'youtube advertising',
    'video ads',
    'youtube marketing',
    'video advertising',
    'youtube campaigns',
    'video ad management',
  ],
  '/pages/youtube-advertising-management',
  '/images/youtube-advertising-og.jpg'
);
