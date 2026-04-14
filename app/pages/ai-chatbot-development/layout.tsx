import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData, AggregateRatingStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'What AI models do you use for chatbot development?',
    answer:
      'We build chatbots using OpenAI GPT-4, Anthropic Claude, and Google Gemini — choosing the best model for your use case. We also support fine-tuned models for domain-specific knowledge bases.',
  },
  {
    question: 'How much does a custom AI chatbot cost in India?',
    answer:
      'Custom AI chatbot development starts from ₹49,000 for a basic website chatbot and ranges to ₹2,00,000+ for multi-platform agents with CRM integration and custom AI training.',
  },
  {
    question: 'Can an AI chatbot integrate with my existing CRM and tools?',
    answer:
      'Yes. We integrate AI chatbots with Salesforce, HubSpot, Zoho, Freshdesk, Slack, WhatsApp, and most REST APIs — so leads and conversations flow directly into your existing workflows.',
  },
  {
    question: 'How long does AI chatbot development take?',
    answer:
      'A standard AI chatbot with FAQ handling and lead capture takes 2–4 weeks. Complex agents with custom knowledge bases, multi-language support, and deep integrations take 6–10 weeks.',
  },
  {
    question: 'What platforms can my AI chatbot be deployed on?',
    answer:
      'We deploy AI chatbots on websites, WhatsApp Business API, Telegram, Facebook Messenger, mobile apps, and internal tools. Multi-platform deployment is available from a single backend.',
  },
];

export default function AIChatbotDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'AI Chatbot Development', url: `${SEO_SITE_URL}/pages/ai-chatbot-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="AI Chatbot Development"
        description="Custom AI chatbots powered by GPT-4, Claude, and Gemini for lead generation and customer support."
        url={`${SEO_SITE_URL}/pages/ai-chatbot-development`}
        ratingValue={4.9}
        reviewCount={47}
        provider={{ name: companyProfile.legalName, url: companyProfile.websiteUrl }}
      />
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
