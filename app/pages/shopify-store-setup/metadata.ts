import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { SHOPIFY_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Shopify Store Setup Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire shopify developer" (high buyer intent)
 * - Secondary: Service-specific Shopify setup keywords
 * - Long-tail: Setup-specific Shopify keywords
 * - Semantic: Related Shopify and ecommerce store terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Shopify Developer | Shopify Store Setup Services',
  'Complete Shopify store setup and customization. Store design, product setup, payment integration, shipping configuration, and launch support. Get your store live in days.',
  SHOPIFY_KEYWORDS,
  '/pages/shopify-store-setup',
  {
    ogImage: '/images/shopify-store-setup-og.jpg',
    cta: 'Get free consultation today!',
  }
);
