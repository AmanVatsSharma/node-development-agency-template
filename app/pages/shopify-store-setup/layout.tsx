import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Shopify Store Setup Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Shopify Store Setup',
    serviceDescription: 'Complete Shopify store setup and customization. Store design, product setup, payment integration, shipping configuration, and launch support.',
    serviceType: 'Shopify Store Setup',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Shopify Setup Starter',
        description: 'Basic store setup with essential features',
        price: '30000',
        priceCurrency: 'INR',
      },
      {
        name: 'Shopify Setup Professional',
        description: 'Complete setup with custom design and integrations',
        price: '80000',
        priceCurrency: 'INR',
      },
      {
        name: 'Shopify Setup Enterprise',
        description: 'Full-scale setup with advanced features and support',
        price: '200000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '250',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is included in Shopify store setup?',
        answer: 'Our Shopify setup includes store configuration, theme selection/customization, product setup, payment gateway integration, shipping setup, domain configuration, and basic training.',
      },
      {
        question: 'How long does Shopify store setup take?',
        answer: 'A basic Shopify store setup takes 1-2 weeks, while a fully customized store can take 3-6 weeks. We provide detailed timelines during project planning.',
      },
      {
        question: 'Do you help with product migration?',
        answer: 'Yes, we can help migrate products from other platforms or set up products from scratch. We handle product data, images, variants, and inventory setup.',
      },
      {
        question: 'Will you train us on using Shopify?',
        answer: 'Yes, we provide training sessions on using Shopify, managing products, processing orders, and basic store management. Training is included in our setup packages.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Shopify Store Setup', url: '/pages/shopify-store-setup' },
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

export default function ShopifyStoreSetupLayout({
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
