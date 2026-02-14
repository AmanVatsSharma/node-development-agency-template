import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Blog Listing Page
 */
export const metadata: Metadata = generateMetadata({
  title: 'Blog & Resources | Enterprise Hero - Expert Insights & Guides',
  description: 'Expert insights, technical guides, and resources on Node.js development, web development, digital marketing, and enterprise solutions. Learn from our experts.',
  keywords: [
    'enterprise hero blog',
    'node.js blog',
    'web development blog',
    'digital marketing blog',
    'technical guides',
    'development resources',
    'enterprise solutions blog',
  ],
  canonicalUrl: '/pages/blog',
  ogImage: '/images/blog-og.jpg',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
