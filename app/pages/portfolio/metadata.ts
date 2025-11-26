import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Portfolio Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateMetadata({
  title: 'Our Portfolio | Enterprise Hero - Case Studies & Projects',
  description: 'Explore our portfolio of successful projects: enterprise Node.js applications, 3D solutions, web development, Google Ads campaigns, and more. See real results from our clients.',
  keywords: [
    'enterprise hero portfolio',
    'case studies',
    'web development projects',
    'node.js projects',
    'successful campaigns',
    'client projects',
    'work examples',
  ],
  canonicalUrl: '/pages/portfolio',
  ogImage: '/images/portfolio-og.jpg',
});
