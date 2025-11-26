import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for B2B Lead Generation Ads Landing Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateServiceMetadata(
  'B2B Lead Generation Ads | High-Quality B2B Leads',
  'Generate high-quality B2B leads with targeted Google Ads campaigns. Advanced lead qualification, CRM integration, and ROI-focused strategies. Starting from ₹60,000/month. 7.2×+ average ROAS.',
  [
    ...KEYWORD_SETS.googleAds,
    'B2B lead generation',
    'B2B marketing',
    'B2B advertising',
    'lead generation ads',
    'B2B lead gen',
    'qualified B2B leads',
    'B2B sales leads',
  ],
  '/pages/b2b-lead-generation-ads',
  '/images/b2b-lead-generation-og.jpg'
);
