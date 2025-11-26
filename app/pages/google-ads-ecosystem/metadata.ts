import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Google Ads Ecosystem Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Google Ads Ecosystem | Complete PPC Solutions',
  'Complete Google Ads ecosystem services: Search, Display, Shopping, Video, Performance Max, and more. End-to-end PPC solutions for all campaign types and business goals.',
  [
    ...KEYWORD_SETS.googleAds,
    'google ads ecosystem',
    'complete PPC solutions',
    'performance max campaigns',
    'shopping ads',
    'display advertising',
    'video ads',
    'search ads',
  ],
  '/pages/google-ads-ecosystem',
  '/images/google-ads-ecosystem-og.jpg'
);
