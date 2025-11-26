import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Ecommerce Google Ads Optimization Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Ecommerce Google Ads Optimization | Boost Online Sales',
  'Optimize your ecommerce Google Ads campaigns for maximum ROI. Product feed optimization, shopping campaigns, conversion tracking, and revenue-focused strategies. Increase sales by 3-5×.',
  [
    ...KEYWORD_SETS.googleAds,
    'ecommerce google ads',
    'shopping ads optimization',
    'product feed optimization',
    'ecommerce PPC',
    'online store advertising',
    'shopping campaigns',
    'ecommerce conversion optimization',
  ],
  '/pages/ecommerce-google-ads-optimization',
  '/images/ecommerce-google-ads-og.jpg'
);
