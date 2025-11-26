import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for About Us Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateMetadata({
  title: 'About Us | Enterprise Hero - Global Node.js Development Agency',
  description: 'Learn about Enterprise Hero (Vedpragya Bharat Private Limited), a global Node.js development agency with presence across India, Dubai, California, Toronto, and Shenzhen. Founded by Aman Kumar Sharma.',
  keywords: [
    'about enterprise hero',
    'vedpragya bharat',
    'node.js development company',
    'enterprise software development',
    'global tech agency',
    'aman kumar sharma',
    'software development team',
    'enterprise solutions provider',
  ],
  canonicalUrl: '/pages/about',
  ogImage: '/images/about-og.jpg',
});
