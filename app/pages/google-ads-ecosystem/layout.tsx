import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Google Ads Ecosystem Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Google Ads Ecosystem Services',
    serviceDescription: 'Complete Google Ads ecosystem services: Search, Display, Shopping, Video, Performance Max, and more. End-to-end PPC solutions for all campaign types and business goals.',
    serviceType: 'Complete PPC Solutions',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Ecosystem Starter',
        description: 'Multi-channel setup, basic optimization across platforms',
        price: '40000',
        priceCurrency: 'INR',
      },
      {
        name: 'Ecosystem Professional',
        description: 'Advanced multi-channel management, cross-platform optimization',
        price: '70000',
        priceCurrency: 'INR',
      },
      {
        name: 'Ecosystem Enterprise',
        description: 'Full ecosystem management, custom solutions',
        price: '120000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '390',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What campaign types do you manage?',
        answer: 'We manage all Google Ads campaign types including Search, Display, Shopping, Video (YouTube), Performance Max, Discovery, App, and Smart campaigns. We create integrated strategies across all channels.',
      },
      {
        question: 'How do you coordinate multiple campaign types?',
        answer: 'We use unified strategies, cross-channel attribution, and integrated reporting to ensure all campaign types work together effectively. This includes budget allocation, audience overlap management, and performance optimization.',
      },
      {
        question: 'What is Performance Max and how do you optimize it?',
        answer: 'Performance Max is Google\'s automated campaign type that uses AI to optimize across all Google properties. We optimize Performance Max through asset creation, audience signals, conversion tracking, and budget management.',
      },
      {
        question: 'Do you handle YouTube advertising?',
        answer: 'Yes, we manage YouTube advertising including TrueView, Bumper ads, and YouTube Shorts. We create video ad strategies, optimize targeting, and track video-specific conversions.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Google Ads Ecosystem', url: '/pages/google-ads-ecosystem' },
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

export default function GoogleAdsEcosystemLayout({
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
