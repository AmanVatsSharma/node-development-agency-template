import { shopifyHeadlessMetadata as pageMetadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export const metadata = pageMetadata;

/**
 * Structured Data (JSON-LD) for Shopify Headless Migration Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Shopify Headless Migration',
    serviceDescription: 'Transform your Shopify store with headless commerce. 2-4× faster page loads, 95+ Lighthouse scores. Next.js/Hydrogen migration for better performance.',
    serviceType: 'Shopify Headless Commerce',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Headless Migration Starter',
        description: 'Basic headless migration with Next.js or Hydrogen',
        price: '100000',
        priceCurrency: 'INR',
      },
      {
        name: 'Headless Migration Professional',
        description: 'Advanced migration with custom features and optimizations',
        price: '250000',
        priceCurrency: 'INR',
      },
      {
        name: 'Headless Migration Enterprise',
        description: 'Full-scale migration with enterprise features and support',
        price: '500000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '180',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is headless Shopify?',
        answer: 'Headless Shopify separates the frontend from the backend, allowing you to use any frontend technology (Next.js, React, etc.) while using Shopify as the commerce backend. This provides better performance and flexibility.',
      },
      {
        question: 'Why migrate to headless Shopify?',
        answer: 'Headless Shopify offers 2-4× faster page loads, better SEO, improved user experience, and more flexibility. It\'s ideal for stores needing custom experiences and better performance.',
      },
      {
        question: 'How long does headless migration take?',
        answer: 'Migration timelines vary. A basic headless setup takes 4-8 weeks, while complex migrations with custom features can take 3-6 months. We provide detailed timelines during planning.',
      },
      {
        question: 'Will migration affect my existing store?',
        answer: 'No, we ensure zero downtime during migration. We can run both systems in parallel and switch over seamlessly when ready.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Shopify Headless Migration', url: '/pages/shopify-headless-migration' },
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

export default function ShopifyHeadlessMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
