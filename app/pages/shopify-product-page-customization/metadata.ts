import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { SHOPIFY_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Shopify Product Page Customization Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire shopify developer" (high buyer intent)
 * - Secondary: Service-specific Shopify customization keywords
 * - Long-tail: Feature-specific Shopify keywords
 * - Semantic: Related Shopify and ecommerce terms
 * 
 * @version 2.0.0 - Advanced Keyword Optimization
 */

console.log('[Shopify-Product-Page] Metadata configuration loaded');

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Shopify Developer | Shopify Product Page Customization',
  'Transform boring Shopify product pages into interactive, high-converting experiences. Custom Liquid + JS + Dynamic Features. Built by Vedpragya Bharat.',
  SHOPIFY_KEYWORDS,
  '/pages/shopify-product-page-customization',
  {
    pricing: {
      startingPrice: '15,000',
      currency: '₹',
    },
    ogImage: '/shopify-product-page-og.jpg',
    cta: 'Get free consultation today!',
  }
);

console.log('[Shopify-Product-Page] Metadata exported successfully');
