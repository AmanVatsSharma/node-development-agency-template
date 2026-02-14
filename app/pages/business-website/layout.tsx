import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Business Website Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Business Website Development',
    serviceDescription: 'Professional business website development. Custom business websites, corporate sites, portfolio websites, and business web solutions.',
    serviceType: 'Business Website Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Business Website Starter',
        description: 'Basic business website with essential features',
        price: '40000',
        priceCurrency: 'INR',
      },
      {
        name: 'Business Website Professional',
        description: 'Advanced business website with custom features',
        price: '120000',
        priceCurrency: 'INR',
      },
      {
        name: 'Business Website Enterprise',
        description: 'Enterprise business website with full customization',
        price: '400000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '350',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What makes a good business website?',
        answer: 'A good business website should be professional, easy to navigate, mobile-friendly, fast-loading, SEO-optimized, and clearly communicate your value proposition.',
      },
      {
        question: 'How long does it take to build a business website?',
        answer: 'A basic business website typically takes 2-4 weeks, while more complex sites with custom features can take 6-12 weeks. We provide detailed timelines during planning.',
      },
      {
        question: 'Do you provide content writing services?',
        answer: 'Yes, we can help with content creation or work with your existing content. We also provide content strategy and optimization services.',
      },
      {
        question: 'Can you integrate contact forms and other features?',
        answer: 'Yes, we can integrate contact forms, live chat, booking systems, payment gateways, and other features your business needs.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Business Website', url: '/pages/business-website' },
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

export default function BusinessWebsiteLayout({
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
