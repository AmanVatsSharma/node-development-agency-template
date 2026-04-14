/**
 * @fileoverview Layout for WhatsApp Business API Landing Page
 * @description Handles metadata and structured data
 * @version 2.0.0
 */

import { metadata as pageMetadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata = pageMetadata;

const FAQ_QUESTIONS = [
  {
    question: 'What can I automate with WhatsApp Business API?',
    answer:
      'WhatsApp Business API enables automated order confirmations, shipping updates, appointment reminders, payment links, OTP verification, customer support bots, lead qualification, and marketing campaigns — all at scale with a verified sender identity.',
  },
  {
    question: 'How do I get WhatsApp Business API access?',
    answer:
      'We help you apply for WhatsApp Business API access through official Meta Business Partners. The process involves business verification on Meta Business Manager and typically takes 3–7 business days.',
  },
  {
    question: 'How much does WhatsApp Business API integration cost?',
    answer:
      'WhatsApp Business API integration starts from ₹30,000 for basic automation flows. A fully custom integration with CRM, chatbot, and multi-agent support dashboard ranges from ₹80,000 to ₹2,50,000+.',
  },
  {
    question: 'Can WhatsApp Business API integrate with my CRM?',
    answer:
      'Yes. We integrate WhatsApp Business API with Salesforce, HubSpot, Zoho CRM, Freshdesk, and custom systems. Conversations, leads, and contact updates sync automatically between WhatsApp and your CRM.',
  },
  {
    question: 'What is the difference between WhatsApp Business App and WhatsApp Business API?',
    answer:
      'WhatsApp Business App is a standalone app for small businesses with limited automation. WhatsApp Business API is a developer API that enables unlimited messaging at scale, multi-agent support, full CRM integration, and automated workflows — designed for growth businesses.',
  },
];

export default function WhatsAppBusinessAPILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'WhatsApp Business API', url: `${SEO_SITE_URL}/pages/whatsapp-business-api` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
