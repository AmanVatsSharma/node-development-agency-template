/**
 * @fileoverview SEO Metadata Configuration for Shopify Product Page Customization Landing Page
 * @description Optimized for Google Ads campaigns targeting Shopify store owners
 * @keywords shopify product page customization, shopify product page design, shopify expert india
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

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
export const metadata: Metadata = buildPageMetadata({
  title: 'Shopify Product Page Customization Services',
  description:
    'Turn standard Shopify product pages into high-converting storefront experiences with custom design and behavior.',
  path: '/pages/shopify-product-page-customization',
  keywords: [
    'shopify product page customization',
    'shopify conversion optimization',
    'shopify product page design',
    'shopify custom features',
    'shopify liquid development',
  ],
});

console.log('[Shopify-Product-Page] Metadata exported successfully');
