import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for AI Chatbot Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'AI Chatbot Development',
    serviceDescription: 'Build custom AI chatbots for your website, WhatsApp & CRM. Boost sales and automate support using OpenAI GPT chatbots.',
    serviceType: 'AI Chatbot Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Chatbot Starter',
        description: 'Basic AI chatbot with essential features',
        price: '49000',
        priceCurrency: 'INR',
      },
      {
        name: 'Chatbot Professional',
        description: 'Advanced chatbot with integrations and custom features',
        price: '120000',
        priceCurrency: 'INR',
      },
      {
        name: 'Chatbot Enterprise',
        description: 'Enterprise chatbot with full customization and support',
        price: '300000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '350',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What platforms can chatbots be integrated with?',
        answer: 'We integrate chatbots with websites, WhatsApp, Facebook Messenger, CRM systems, and other platforms. We can integrate with most popular platforms and APIs.',
      },
      {
        question: 'What AI technology do you use?',
        answer: 'We use OpenAI GPT models, custom NLP, and machine learning to create intelligent chatbots that understand context and provide accurate responses.',
      },
      {
        question: 'How long does chatbot development take?',
        answer: 'Basic chatbots take 2-4 weeks, while advanced chatbots with multiple integrations can take 6-12 weeks. We provide detailed timelines during planning.',
      },
      {
        question: 'Do you provide chatbot training?',
        answer: 'Yes, we train chatbots on your business data, FAQs, and knowledge base. We also provide ongoing training and optimization services.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'AI Chatbot Development', url: '/pages/ai-chatbot-development' },
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

export default function AIChatbotDevelopmentLayout({
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
