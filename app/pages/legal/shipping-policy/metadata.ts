import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Shipping Policy Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Shipping Policy | Enterprise Hero',
  description: 'Shipping policy for Enterprise Hero services and products. Information about delivery times and shipping terms.',
  keywords: ['shipping policy', 'delivery policy', 'shipping terms'],
  canonicalUrl: '/pages/legal/shipping-policy',
  ogImage: '/images/legal-og.jpg',
});
