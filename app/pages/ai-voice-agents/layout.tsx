import { metadata } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'What is an AI voice agent?',
    answer:
      'AI voice agents are software systems that handle real voice calls, respond with natural speech, follow conversation flows, and take actions like scheduling appointments, answering FAQs, or collecting lead info — 24/7 without human agents.',
  },
  {
    question: 'How much does AI voice agent development cost?',
    answer:
      'AI voice agent development starts from ₹1,00,000 for basic IVR automation and ranges to ₹5,00,000+ for custom conversational agents with CRM integration. Contact us for a free scoping call.',
  },
  {
    question: 'What use cases are best for AI voice agents?',
    answer:
      'AI voice agents excel at customer support automation, appointment scheduling, lead qualification calls, order status updates, payment reminders, and FAQ handling — any high-volume, repetitive voice interaction.',
  },
  {
    question: 'Can AI voice agents integrate with my CRM?',
    answer:
      'Yes. We integrate AI voice agents with Salesforce, HubSpot, Zoho CRM, and custom databases. Every call can automatically log notes, update contact records, and trigger follow-up workflows.',
  },
  {
    question: 'How long does it take to build an AI voice agent?',
    answer:
      'A basic AI voice agent with predefined flows takes 2–4 weeks. A fully custom conversational agent with advanced NLP and CRM integration typically takes 6–12 weeks depending on complexity.',
  },
];

export default function AIVoiceAgentsLayout({
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
          { name: 'AI Voice Agents', url: `${SEO_SITE_URL}/pages/ai-voice-agents` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
