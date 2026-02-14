import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for YouTube Advertising Management Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'YouTube Advertising Management',
    serviceDescription: 'Professional YouTube advertising management. Video ad creation, targeting optimization, YouTube Analytics, and conversion-focused video campaigns.',
    serviceType: 'Video Advertising Management',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'YouTube Starter',
        description: 'Video ad setup, basic targeting, performance tracking',
        price: '30000',
        priceCurrency: 'INR',
      },
      {
        name: 'YouTube Professional',
        description: 'Advanced video strategies, creative optimization, full management',
        price: '55000',
        priceCurrency: 'INR',
      },
      {
        name: 'YouTube Enterprise',
        description: 'Multi-channel video campaigns, custom creative, dedicated manager',
        price: '90000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '190',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What types of YouTube ads do you manage?',
        answer: 'We manage all YouTube ad formats including TrueView in-stream ads, TrueView discovery ads, Bumper ads, and YouTube Shorts ads. We create strategies based on your goals and budget.',
      },
      {
        question: 'Do you create video ads?',
        answer: 'Yes, we offer video ad creation services or can work with your existing videos. We optimize videos for YouTube advertising including length, messaging, and call-to-action.',
      },
      {
        question: 'How do you target YouTube audiences?',
        answer: 'We use demographic targeting, interest targeting, custom audiences, remarketing lists, and video remarketing. We also use YouTube Analytics to identify high-performing audience segments.',
      },
      {
        question: 'What results can I expect from YouTube ads?',
        answer: 'Results vary by industry and goals. Most clients see 2-4× improvement in video engagement, 30-50% reduction in cost-per-view, and improved brand awareness. Conversion rates depend on your offer and landing page.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'YouTube Advertising Management', url: '/pages/youtube-advertising-management' },
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

export default function YouTubeAdvertisingLayout({
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
