import { ResourcesClient } from './_components/resources-client';
import { Resource } from '../../types/blog';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Web Dev & AI Resources | Guides & Tools — Vedpragya',
  description: 'Free resources for founders and engineering teams: web development guides, AI integration tutorials, Shopify tips, and Google Ads checklists. Curated by Vedpragya.',
  path: '/pages/resources',
  keywords: [
    'web development resources india',
    'free developer guides india',
    'nextjs tutorials india',
    'ai development resources',
    'shopify development guides',
    'google ads resources india',
  ],
});

async function getInitialResources(): Promise<Resource[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/resources?page=1&pageSize=9`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.resources || [];
  } catch {
    return [];
  }
}

export default async function ResourcesPage() {
  const initialResources = await getInitialResources();

  return <ResourcesClient initialResources={initialResources} />;
}
