import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Terms of Service Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service | Enterprise Hero',
  description: 'Terms of Service for Enterprise Hero (Vedpragya Bharat Private Limited). Read our terms and conditions for using our services.',
  keywords: ['terms of service', 'terms and conditions', 'legal terms'],
  canonicalUrl: '/pages/legal/terms-of-service',
  ogImage: '/images/legal-og.jpg',
  noindex: false, // Legal pages should be indexed
});
