import { Metadata } from 'next';
import { generateMetadata } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Services Page
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = generateMetadata({
  title: 'Our Services | Enterprise Hero - Complete Digital Solutions',
  description: 'Comprehensive digital services: Google Ads management, web development, SEO, Shopify solutions, AI chatbots, CRM systems, and more. Enterprise-grade solutions for your business.',
  keywords: [
    'enterprise hero services',
    'digital marketing services',
    'web development services',
    'google ads management',
    'SEO services',
    'shopify development',
    'AI chatbot development',
    'CRM solutions',
  ],
  canonicalUrl: '/pages/services',
  ogImage: '/images/services-og.jpg',
});
