import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Landing Page Optimization Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Landing Page Optimization',
    serviceDescription: 'Optimize your landing pages for maximum conversions. A/B testing, conversion rate optimization, UX improvements, and data-driven optimization strategies.',
    serviceType: 'Conversion Rate Optimization',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Optimization Starter',
        description: 'Basic landing page audit and optimization',
        price: '25000',
        priceCurrency: 'INR',
      },
      {
        name: 'Optimization Professional',
        description: 'Comprehensive optimization with A/B testing',
        price: '60000',
        priceCurrency: 'INR',
      },
      {
        name: 'Optimization Enterprise',
        description: 'Full-scale optimization with ongoing testing',
        price: '120000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '280',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is landing page optimization?',
        answer: 'Landing page optimization involves improving your landing pages to increase conversions. This includes A/B testing, UX improvements, copy optimization, and performance enhancements.',
      },
      {
        question: 'How much can optimization improve conversions?',
        answer: 'Most clients see 20-40% improvement in conversion rates, with some seeing 2-4× improvement. Results depend on your current conversion rate and optimization opportunities.',
      },
      {
        question: 'How long does optimization take?',
        answer: 'Initial optimization takes 2-4 weeks. A/B testing typically runs for 2-4 weeks per test. We provide ongoing optimization services for continuous improvement.',
      },
      {
        question: 'Do you provide A/B testing services?',
        answer: 'Yes, we provide comprehensive A/B testing including test design, implementation, analysis, and optimization based on results.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Landing Page Optimization', url: '/pages/landing-page-optimization' },
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

export default function LandingPageOptimizationLayout({
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
