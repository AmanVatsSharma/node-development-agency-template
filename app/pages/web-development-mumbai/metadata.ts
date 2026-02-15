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
    title: "Mumbai Web Development Services | Professional Business Websites",
    description:
      'Get professional, mobile-responsive websites for Mumbai businesses with fast delivery and conversion-focused design.',
    path: '/pages/web-development-mumbai',
    keywords: [
      'web development mumbai',
      'website development mumbai',
      'mumbai web developer',
      'professional website mumbai',
      'responsive website mumbai',
      'mumbai web development services',
      'website development company mumbai',
      'mumbai web agency',
    ],
  }),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};