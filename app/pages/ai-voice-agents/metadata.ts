import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'AI Voice Agent Development & Call Automation Services',
  description:
    'Automate inbound and outbound business calls with human-like AI voice agents for support, lead qualification, and booking.',
  path: '/pages/ai-voice-agents',
  keywords: [
    'ai voice agent',
    'ai call automation',
    'voice bot development',
    'call center automation',
    'ai receptionist',
  ],
});
