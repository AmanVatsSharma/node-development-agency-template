import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Enterprise Google Ads Management Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Enterprise Google Ads Management | Large-Scale PPC Solutions',
  'Enterprise-grade Google Ads management for large organizations. Multi-account management, advanced automation, dedicated account managers, and enterprise-level reporting. Scale your PPC campaigns.',
  [
    ...KEYWORD_SETS.googleAds,
    'enterprise google ads',
    'enterprise PPC management',
    'large-scale advertising',
    'multi-account management',
    'enterprise marketing',
    'corporate advertising',
  ],
  '/pages/enterprise-google-ads-management',
  '/images/enterprise-google-ads-og.jpg'
);
