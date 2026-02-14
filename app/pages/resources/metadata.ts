import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Resources Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateMetadata({
  title: 'Resources | Enterprise Hero - Guides, Tools & Insights',
  description: 'Access free resources: SEO guides, marketing tools, development resources, case studies, and industry insights. Learn from our experts and grow your business.',
  keywords: [
    'marketing resources',
    'SEO guides',
    'development resources',
    'business tools',
    'free resources',
    'industry insights',
    'marketing guides',
  ],
  canonicalUrl: '/pages/resources',
  ogImage: '/images/resources-og.jpg',
});
