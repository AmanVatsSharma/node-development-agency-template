import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Company Info Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Company Information | Enterprise Hero - Vedpragya Bharat Private Limited',
  description: 'Company information for Enterprise Hero (Vedpragya Bharat Private Limited). Learn about our company, registration details, and contact information.',
  keywords: ['company info', 'company information', 'vedpragya bharat', 'enterprise hero company'],
  canonicalUrl: '/pages/legal/company-info',
  ogImage: '/images/legal-og.jpg',
});
