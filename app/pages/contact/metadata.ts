import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Contact Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateMetadata({
  title: 'Contact Us | Enterprise Hero - Get in Touch',
  description: 'Contact Enterprise Hero for enterprise Node.js development, 3D solutions, and custom software services. Global presence: India, Dubai, California, Toronto, Shenzhen.',
  keywords: [
    'contact enterprise hero',
    'get in touch',
    'enterprise hero contact',
    'software development contact',
    'node.js development contact',
    'custom software services',
  ],
  canonicalUrl: '/pages/contact',
  ogImage: '/images/contact-og.jpg',
});
