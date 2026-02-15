import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

/**
 * SEO Metadata for Google Ads Management Service Landing Page
 * Optimized for search engines and social media sharing
 */

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads Management Service | PPC Agency for Leads & Sales',
  description:
    'Hire experienced Google Ads experts to build, manage, and optimize high-ROI campaigns for leads and revenue growth.',
  path: '/pages/google-ads-management',
  keywords: [
    'google ads agency',
    'ppc management',
    'google ads service',
    'lead generation ads',
    'google ads expert',
    'performance marketing agency',
    'google ads optimization',
  ],
  imagePath: '/logo.png',
});
