import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for WhatsApp Business API Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'WhatsApp Business API Integration',
    serviceDescription: 'Professional WhatsApp Business API setup & automation. Automate sales, support & payments with 98% message open rate.',
    serviceType: 'WhatsApp Business API Services',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'WhatsApp API Starter',
        description: 'Basic WhatsApp Business API setup and automation',
        price: '15000',
        priceCurrency: 'INR',
      },
      {
        name: 'WhatsApp API Professional',
        description: 'Advanced automation with integrations and custom features',
        price: '50000',
        priceCurrency: 'INR',
      },
      {
        name: 'WhatsApp API Enterprise',
        description: 'Enterprise WhatsApp solution with full customization',
        price: '150000',
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
        question: 'How do I get WhatsApp Business API access?',
        answer: 'We help you get verified WhatsApp Business API access through Meta Cloud API. We handle the application process and verification.',
      },
      {
        question: 'What can I automate with WhatsApp Business API?',
        answer: 'You can automate customer support, sales conversations, order confirmations, payment reminders, appointment bookings, and more.',
      },
      {
        question: 'How long does setup take?',
        answer: 'WhatsApp Business API setup typically takes 48-72 hours. This includes API access, integration, and basic automation setup.',
      },
      {
        question: 'Can I integrate with my CRM?',
        answer: 'Yes, we integrate WhatsApp Business API with popular CRM systems including Salesforce, HubSpot, Zoho, and custom CRM solutions.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'WhatsApp Business API', url: '/pages/whatsapp-business-api' },
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

export default function WhatsAppBusinessAPILayout({
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
