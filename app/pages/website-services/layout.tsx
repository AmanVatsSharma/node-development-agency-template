import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Website Services Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Website Services',
    serviceDescription: 'Comprehensive website services: design, development, hosting, maintenance, SEO, and optimization. End-to-end web solutions for businesses of all sizes.',
    serviceType: 'Complete Website Services',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Website Services Starter',
        description: 'Basic website package with hosting and maintenance',
        price: '45000',
        priceCurrency: 'INR',
      },
      {
        name: 'Website Services Professional',
        description: 'Complete website solution with SEO and ongoing support',
        price: '150000',
        priceCurrency: 'INR',
      },
      {
        name: 'Website Services Enterprise',
        description: 'Enterprise website solution with full service package',
        price: '500000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '290',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What website services do you provide?',
        answer: 'We provide complete website services including design, development, hosting, domain registration, maintenance, SEO optimization, and ongoing support.',
      },
      {
        question: 'Do you provide website hosting?',
        answer: 'Yes, we provide reliable website hosting services. We work with trusted hosting providers and can set up and manage hosting for your website.',
      },
      {
        question: 'What is included in website maintenance?',
        answer: 'Website maintenance includes regular updates, security patches, backups, performance monitoring, content updates, and technical support.',
      },
      {
        question: 'Can you help with website SEO?',
        answer: 'Yes, we provide SEO services including on-page optimization, technical SEO, content optimization, and ongoing SEO support to improve your search rankings.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Website Services', url: '/pages/website-services' },
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

export default function WebsiteServicesLayout({
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
