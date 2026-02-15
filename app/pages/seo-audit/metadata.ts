import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free SEO Audit Tool | Instant Website Health Check',
  description:
    'Run a quick SEO audit to identify technical issues, Core Web Vitals gaps, and growth opportunities for your website.',
  path: '/pages/seo-audit',
  keywords: [
    'seo audit',
    'free seo check',
    'website seo analysis',
    'technical seo audit',
    'core web vitals audit',
  ],
});
