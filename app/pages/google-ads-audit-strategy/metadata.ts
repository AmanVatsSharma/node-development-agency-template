import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Google Ads Audit & Strategy Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Google Ads Audit & Strategy | Optimize Your Campaigns',
  'Comprehensive Google Ads audit and strategic planning. Identify optimization opportunities, improve ROAS, reduce wasted spend, and create data-driven strategies. Free audit available.',
  [
    ...KEYWORD_SETS.googleAds,
    'google ads audit',
    'PPC audit',
    'campaign audit',
    'google ads strategy',
    'PPC optimization',
    'campaign analysis',
    'ad account audit',
  ],
  '/pages/google-ads-audit-strategy',
  '/images/google-ads-audit-og.jpg'
);
