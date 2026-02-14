import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Privacy Policy Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | Enterprise Hero',
  description: 'Privacy Policy for Enterprise Hero (Vedpragya Bharat Private Limited). Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'privacy'],
  canonicalUrl: '/pages/legal/privacy-policy',
  ogImage: '/images/legal-og.jpg',
});
