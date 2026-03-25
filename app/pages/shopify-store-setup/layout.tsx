import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Custom Shopify Store Setup & Conversion Optimization | Vedpragya',
  description:
    'Launch a high-converting Shopify store with custom UX, conversion optimization, and growth-ready implementation. Expert Shopify development from India.',
  path: '/pages/shopify-store-setup',
  keywords: [
    'shopify store setup',
    'custom shopify development',
    'shopify conversion optimization',
    'shopify theme customization',
    'shopify store setup india',
    'shopify expert india',
    'shopify store design',
    'shopify development services',
    'shopify ecommerce store',
    'shopify migration india',
    'shopify plus development',
    'vedpragya shopify',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How long does it take to set up a Shopify store?',
    answer:
      'A standard Shopify store setup takes 1–3 weeks depending on the number of products, customizations, and integrations required. Custom theme development and complex apps can extend this to 4–8 weeks.',
  },
  {
    question: 'How much does Shopify store setup cost in India?',
    answer:
      'A basic Shopify store setup starts from ₹20,000–₹40,000. A fully customized high-converting store with custom theme and integrations ranges from ₹80,000 to ₹3,00,000+. We provide free detailed quotes.',
  },
  {
    question: 'Can you migrate my existing store to Shopify?',
    answer:
      'Yes. We handle migrations from WooCommerce, Magento, OpenCart, and other platforms to Shopify — including all products, customer data, order history, and SEO URL redirects to preserve your rankings.',
  },
  {
    question: 'Will my Shopify store be SEO-friendly?',
    answer:
      'Yes. Every Shopify store we set up includes SEO best practices: optimized title tags and meta descriptions, structured product schema markup, canonical URLs, fast load speeds, and mobile optimization.',
  },
  {
    question: 'Do you provide Shopify training and ongoing support?',
    answer:
      'Yes. We provide hands-on training so you can manage your store independently. We also offer ongoing support packages for updates, new features, performance improvements, and marketing campaign support.',
  },
];

export default function ShopifyStoreSetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Shopify Store Setup', url: `${SEO_SITE_URL}/pages/shopify-store-setup` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
