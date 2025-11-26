import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Local Business Google Ads Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Local Business Google Ads | Drive Local Customers',
  'Google Ads management for local businesses. Local targeting, Google My Business optimization, location-based campaigns, and foot traffic generation. Get more local customers.',
  [
    ...KEYWORD_SETS.googleAds,
    'local business advertising',
    'local google ads',
    'local PPC',
    'local marketing',
    'google my business',
    'local SEO',
    'location-based advertising',
  ],
  '/pages/local-business-google-ads',
  '/images/local-business-google-ads-og.jpg'
);
