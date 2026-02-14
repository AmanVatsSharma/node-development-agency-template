import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { AI_VOICE_AGENTS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for AI Voice Agents Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire ai voice agent developer" (high buyer intent)
 * - Secondary: Service-specific voice AI keywords
 * - Long-tail: Use-case-specific voice AI keywords
 * - Semantic: Related voice AI and automation terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire AI Voice Agent Developer | AI Voice Agent Development',
  'Automate your calls with AI Voice Agents that sound human. Handle 24×7 customer calls, qualify leads & book appointments. Perfect for Indian businesses.',
  AI_VOICE_AGENTS_KEYWORDS,
  '/pages/ai-voice-agents',
  {
    ogImage: '/images/ai-voice-agents-og.jpg',
    cta: 'Get free consultation today!',
  }
);
