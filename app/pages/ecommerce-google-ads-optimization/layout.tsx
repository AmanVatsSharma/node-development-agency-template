import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Ecommerce Google Ads Optimization Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Ecommerce Google Ads Optimization',
    serviceDescription: 'Optimize your ecommerce Google Ads campaigns for maximum ROI. Product feed optimization, shopping campaigns, conversion tracking, and revenue-focused strategies.',
    serviceType: 'Ecommerce PPC Optimization',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Ecommerce Starter',
        description: 'Small ecommerce stores - Product feed optimization, Shopping campaigns setup',
        price: '30000',
        priceCurrency: 'INR',
      },
      {
        name: 'Ecommerce Professional',
        description: 'Growing ecommerce businesses - Advanced optimization, multi-channel campaigns',
        price: '50000',
        priceCurrency: 'INR',
      },
      {
        name: 'Ecommerce Enterprise',
        description: 'Large ecommerce operations - Full-scale optimization, dedicated manager',
        price: '80000',
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
        question: 'How do you optimize Google Shopping campaigns for e-commerce?',
        answer: 'We optimize Google Shopping campaigns through comprehensive product feed optimization, advanced bidding strategies, audience targeting, and conversion tracking. Our approach includes feed quality improvements, negative keyword management, and mobile-first optimization to maximize visibility and conversions.',
      },
      {
        question: "What's the typical ROAS improvement for e-commerce businesses?",
        answer: 'Most e-commerce clients see 2-3× ROAS improvement within the first month, with full optimization reaching 6.8×+ ROAS within 3-6 months. Our average client achieves 6.8× ROAS, with some reaching 10×+ ROAS depending on their industry and product mix.',
      },
      {
        question: 'Do you work with all e-commerce platforms?',
        answer: 'Yes, we work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. We can integrate with any platform that supports Google Shopping feeds and conversion tracking.',
      },
      {
        question: 'How do you handle seasonal e-commerce campaigns?',
        answer: 'We create seasonal campaign strategies with dynamic bidding adjustments, inventory-based optimizations, and holiday-specific audiences. This includes Black Friday, Diwali, Christmas, and other peak shopping periods with pre-planned budget allocation and performance monitoring.',
      },
      {
        question: 'What kind of reporting do you provide for e-commerce?',
        answer: 'We provide comprehensive e-commerce reporting including product performance analysis, conversion tracking by device and audience, revenue attribution, shopping campaign insights, and custom dashboards. Reports include ROAS, conversion rates, cost-per-acquisition, and product-level performance metrics.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Ecommerce Google Ads Optimization', url: '/pages/ecommerce-google-ads-optimization' },
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

export default function EcommerceGoogleAdsLayout({
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
