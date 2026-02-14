import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Google Ads Audit & Strategy Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Google Ads Audit & Strategy',
    serviceDescription: 'Comprehensive Google Ads audit and strategic planning. Identify optimization opportunities, improve ROAS, reduce wasted spend, and create data-driven strategies.',
    serviceType: 'PPC Audit & Consulting',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Basic Audit',
        description: 'Account review, optimization recommendations, strategy document',
        price: '15000',
        priceCurrency: 'INR',
      },
      {
        name: 'Comprehensive Audit',
        description: 'Full account analysis, competitor research, implementation roadmap',
        price: '35000',
        priceCurrency: 'INR',
      },
      {
        name: 'Audit + Strategy',
        description: 'Complete audit with ongoing strategy consultation',
        price: '50000',
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
        question: 'What does a Google Ads audit include?',
        answer: 'Our audit includes account structure review, keyword analysis, ad copy evaluation, landing page assessment, conversion tracking verification, bidding strategy analysis, and competitor research. We provide actionable recommendations with priority rankings.',
      },
      {
        question: 'How long does an audit take?',
        answer: 'A basic audit takes 3-5 business days, while a comprehensive audit takes 7-10 business days. We provide interim findings and keep you updated throughout the process.',
      },
      {
        question: 'Will you implement the recommendations?',
        answer: 'Yes, we offer implementation services as an add-on. You can choose to implement recommendations yourself using our detailed roadmap, or we can handle the implementation for you.',
      },
      {
        question: 'What ROI can I expect from an audit?',
        answer: 'Most clients see 20-40% improvement in ROAS within 30-60 days of implementing audit recommendations. The exact ROI depends on your current account performance and how quickly recommendations are implemented.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Google Ads Audit & Strategy', url: '/pages/google-ads-audit-strategy' },
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

export default function GoogleAdsAuditLayout({
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
