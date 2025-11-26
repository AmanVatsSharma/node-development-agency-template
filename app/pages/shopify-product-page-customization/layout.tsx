/**
 * @fileoverview Layout Component for Shopify Product Page Customization Landing Page
 * @description Provides SEO metadata and structured data for the landing page
 * @version 1.0.0
 */

import { metadata as pageMetadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

console.log('[Shopify-Product-Page] Layout component loaded');

export const metadata = pageMetadata;

/**
 * Structured Data (JSON-LD) for Shopify Product Page Customization Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Shopify Product Page Customization',
    serviceDescription: 'Transform boring Shopify product pages into interactive, high-converting experiences. Custom Liquid + JS + Dynamic Features to boost conversions.',
    serviceType: 'Shopify Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Basic Customization',
        description: 'Basic product page customization with essential features',
        price: '15000',
        priceCurrency: 'INR',
      },
      {
        name: 'Professional Customization',
        description: 'Advanced customization with custom features and integrations',
        price: '40000',
        priceCurrency: 'INR',
      },
      {
        name: 'Enterprise Customization',
        description: 'Full customization with advanced features and ongoing support',
        price: '75000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '320',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What can you customize on Shopify product pages?',
        answer: 'We can customize product pages with custom layouts, variant selectors, bundle offers, upsell widgets, product configurators, dynamic pricing, and any custom features you need.',
      },
      {
        question: 'How long does product page customization take?',
        answer: 'Basic customizations take 1-2 weeks, while complex customizations with multiple features can take 3-6 weeks. We provide detailed timelines during project planning.',
      },
      {
        question: 'Will customization affect my store performance?',
        answer: 'No, we optimize all customizations for performance. We ensure fast page loads, mobile responsiveness, and compatibility with your existing theme.',
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we offer ongoing support packages including updates, bug fixes, and feature additions. Support plans start from ₹10,000/month.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Shopify Product Page Customization', url: '/pages/shopify-product-page-customization' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={serviceSchema} />
      <StructuredDataScript data={faqSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}

/**
 * Layout wrapper for Shopify Product Page Customization landing page
 * Includes structured data for SEO and accessibility
 */
export default function ShopifyProductPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('[Shopify-Product-Page] Layout rendering');

  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}

console.log('[Shopify-Product-Page] Layout component exported');
