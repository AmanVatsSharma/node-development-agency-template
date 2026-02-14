import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Local Business Google Ads Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Local Business Google Ads',
    serviceDescription: 'Google Ads management for local businesses. Local targeting, Google My Business optimization, location-based campaigns, and foot traffic generation.',
    serviceType: 'Local PPC Management',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Local Starter',
        description: 'Local targeting setup, GMB optimization, basic campaigns',
        price: '20000',
        priceCurrency: 'INR',
      },
      {
        name: 'Local Professional',
        description: 'Advanced local targeting, multi-location management',
        price: '35000',
        priceCurrency: 'INR',
      },
      {
        name: 'Local Enterprise',
        description: 'Multi-location campaigns, franchise management',
        price: '60000',
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
        question: 'How do you target local customers?',
        answer: 'We use location-based targeting, radius targeting, location extensions, and Google My Business integration. We also optimize for "near me" searches and local intent keywords.',
      },
      {
        question: 'Do you optimize Google My Business?',
        answer: 'Yes, we optimize Google My Business profiles including business information, photos, posts, Q&A, and reviews. This improves local visibility and complements your Google Ads campaigns.',
      },
      {
        question: 'How do you track foot traffic from ads?',
        answer: 'We use store visit conversions, location extensions, call tracking, and offline conversion tracking to measure foot traffic and in-store visits from your Google Ads campaigns.',
      },
      {
        question: 'Can you manage multiple locations?',
        answer: 'Yes, we manage multi-location campaigns with location-specific targeting, budgets, and reporting. This is ideal for franchises, chains, and businesses with multiple locations.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Local Business Google Ads', url: '/pages/local-business-google-ads' },
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

export default function LocalBusinessGoogleAdsLayout({
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
