/**
 * @fileoverview SEO Metadata Configuration for Shopify Product Page Customization Landing Page
 * @description Optimized for Google Ads campaigns targeting Shopify store owners
 * @keywords shopify product page customization, shopify product page design, shopify expert india
 * @version 1.0.0
 */

import type { Metadata } from 'next';

console.log('[Shopify-Product-Page] Metadata configuration loaded');

/**
 * SEO-optimized metadata for Google Ads and organic search
 * Target Keywords:
 * - shopify product page customization
 * - shopify product page design
 * - shopify variant selector
 * - shopify bundle offer
 * - shopify custom features
 * - shopify expert india
 */
export const metadata: Metadata = {
  // Basic Metadata
  title: 'Shopify Product Page Customization | Turn Pages into Sales Engines | ₹25k-₹75k',
  description: 'Transform boring Shopify product pages into interactive, high-converting experiences. Custom Liquid + JS + Dynamic Features. Built by Vedpragya Bharat. Starting ₹15,000.',
  
  // Additional Metadata
  keywords: [
    'shopify product page customization',
    'shopify product page design',
    'shopify variant selector',
    'shopify bundle offer',
    'shopify custom features',
    'shopify expert india',
    'shopify liquid development',
    'shopify upsell widgets',
    'shopify conversion optimization',
    'shopify plus expert',
    'custom shopify features',
    'shopify product configurator',
    'dynamic shopify product page',
    'shopify mobile optimization'
  ].join(', '),
  
  authors: [{ name: 'Vedpragya Bharat Pvt. Ltd.' }],
  creator: 'Vedpragya Bharat Pvt. Ltd.',
  publisher: 'Vedpragya Bharat Pvt. Ltd.',
  
  // Open Graph for Social Sharing
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/pages/shopify-product-page-customization',
    title: 'Shopify Product Page Customization | Convert More with Custom Features',
    description: 'Turn your product page into a sales engine. Custom layouts, dynamic pricing, smart upsells, and conversion analytics. Shopify Plus experts.',
    siteName: 'Vedpragya Bharat',
    images: [
      {
        url: '/shopify-product-page-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify Product Page Customization Services',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Product Page Customization | High-Converting Features',
    description: 'Custom Liquid + JS + Dynamic Features. Transform your Shopify product pages into conversion machines.',
    images: ['/shopify-product-page-twitter.jpg'],
    creator: '@vedpragyabharat',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
  },
  
  // Alternates
  alternates: {
    canonical: 'https://vedpragyabharat.com/pages/shopify-product-page-customization',
  },
  
  // Category
  category: 'E-commerce Development',
};

console.log('[Shopify-Product-Page] Metadata exported successfully');
