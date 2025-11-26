import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Performance Max Campaigns Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Performance Max Campaigns',
    serviceDescription: 'Set up and optimize Performance Max campaigns for maximum results. AI-powered Google Ads automation, multi-channel reach, and advanced conversion optimization.',
    serviceType: 'Performance Max Campaign Management',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'PMax Setup',
        description: 'Performance Max campaign setup and initial optimization',
        price: '25000',
        priceCurrency: 'INR',
      },
      {
        name: 'PMax Management',
        description: 'Ongoing Performance Max optimization and management',
        price: '40000',
        priceCurrency: 'INR',
      },
      {
        name: 'PMax Enterprise',
        description: 'Advanced PMax strategies, multi-campaign management',
        price: '70000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.6',
      reviewCount: '220',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is Performance Max?',
        answer: 'Performance Max is Google\'s automated campaign type that uses AI to optimize across all Google properties including Search, Display, YouTube, Gmail, and Discover. It maximizes conversions within your budget.',
      },
      {
        question: 'How do you optimize Performance Max campaigns?',
        answer: 'We optimize Performance Max through high-quality asset creation, audience signals, conversion tracking, budget management, and performance analysis. We ensure the AI has the right inputs to maximize results.',
      },
      {
        question: 'What results can I expect from Performance Max?',
        answer: 'Most clients see 20-30% improvement in conversion volume and 15-25% reduction in cost-per-acquisition compared to manual campaigns. Results typically improve over time as the AI learns.',
      },
      {
        question: 'Do you need access to my Google Merchant Center?',
        answer: 'For e-commerce Performance Max campaigns, yes. We need access to optimize product feeds and ensure proper product data. For lead generation, we can work without Merchant Center access.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Performance Max Campaigns', url: '/pages/performance-max-campaigns' },
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

export default function PerformanceMaxLayout({
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
