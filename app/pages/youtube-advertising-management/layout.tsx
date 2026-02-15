import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'YouTube Advertising Management Services',
  description:
    'Run strategic YouTube ad campaigns for awareness, demand generation, and lead acquisition with full-funnel optimization.',
  path: '/pages/youtube-advertising-management',
  keywords: [
    'youtube advertising management',
    'youtube ads agency',
    'video ad campaign optimization',
    'youtube lead generation ads',
  ],
});

export default function YouTubeAdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}