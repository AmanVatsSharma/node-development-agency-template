import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

/**
 * SEO Metadata for Shopify Store Setup Landing Page
 */
export const metadata: Metadata = generateServiceMetadata(
  'Shopify Store Setup | Professional Ecommerce Development',
  'Complete Shopify store setup and customization. Store design, product setup, payment integration, shipping configuration, and launch support. Get your store live in days.',
  [
    ...KEYWORD_SETS.shopify,
    'shopify store setup',
    'shopify development',
    'ecommerce store setup',
    'shopify customization',
    'online store development',
  ],
  '/pages/shopify-store-setup',
  '/images/shopify-store-setup-og.jpg'
);
