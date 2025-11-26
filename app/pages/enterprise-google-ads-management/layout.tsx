import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Enterprise Google Ads Management Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Enterprise Google Ads Management',
    serviceDescription: 'Enterprise-grade Google Ads management for large organizations. Multi-account management, advanced automation, dedicated account managers, and enterprise-level reporting.',
    serviceType: 'Enterprise PPC Management',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Global'],
    offers: [
      {
        name: 'Enterprise Starter',
        description: 'Multi-account management, dedicated manager, advanced reporting',
        price: '100000',
        priceCurrency: 'INR',
      },
      {
        name: 'Enterprise Professional',
        description: 'Full-scale management, automation, custom integrations',
        price: '200000',
        priceCurrency: 'INR',
      },
      {
        name: 'Enterprise Custom',
        description: 'Custom solutions for large-scale operations',
        price: '500000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '180',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'How do you handle multiple Google Ads accounts?',
        answer: 'We use advanced account management tools and dedicated account managers to handle multiple accounts efficiently. This includes centralized reporting, cross-account optimization, and unified strategy implementation.',
      },
      {
        question: 'What enterprise-level features do you provide?',
        answer: 'We provide enterprise features including advanced automation, custom integrations, dedicated account managers, priority support, custom reporting dashboards, and strategic consulting.',
      },
      {
        question: 'How do you scale campaigns for large organizations?',
        answer: 'We use data-driven scaling strategies, automated bidding, advanced audience targeting, and performance-based budget allocation. Our approach ensures consistent growth while maintaining ROI targets.',
      },
      {
        question: 'Do you provide custom integrations?',
        answer: 'Yes, we provide custom integrations with CRM systems, analytics platforms, and internal tools. We work with your technical team to ensure seamless data flow and reporting.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Enterprise Google Ads Management', url: '/pages/enterprise-google-ads-management' },
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

export default function EnterpriseGoogleAdsLayout({
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
