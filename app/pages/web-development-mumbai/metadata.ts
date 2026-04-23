/**
 * Mumbai Web Development Landing Page - SEO Metadata
 * Optimized for Mumbai market and web development keywords
 * 
 * @version 1.0.0 - Mumbai-Focused SEO
 */

import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Web Development Company in Mumbai | Next.js, React & Node.js',
    description:
      'Top-rated web development company serving Mumbai startups and enterprises. Custom websites, SaaS platforms, and e-commerce built with Next.js and React. Transparent INR pricing, 3-week delivery.',
    path: '/pages/web-development-mumbai',
    keywords: [
      'web development company mumbai',
      'website development mumbai',
      'mumbai web developer',
      'next js development mumbai',
      'react development mumbai',
      'saas development mumbai',
      'ecommerce development mumbai',
      'startup website design mumbai',
      'web development agency mumbai',
      'custom website mumbai',
      'nodejs development mumbai',
      'mumbai web design company',
    ],
  }),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};