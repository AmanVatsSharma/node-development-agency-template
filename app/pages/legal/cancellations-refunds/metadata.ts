import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Cancellations & Refunds Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Cancellations & Refunds Policy | Enterprise Hero',
  description: 'Cancellations and refunds policy for Enterprise Hero services. Learn about our cancellation process and refund terms.',
  keywords: ['cancellation policy', 'refund policy', 'cancellations', 'refunds'],
  canonicalUrl: '/pages/legal/cancellations-refunds',
  ogImage: '/images/legal-og.jpg',
});
