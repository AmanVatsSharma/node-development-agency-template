import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Local Business Google Ads Services',
  description:
    'Grow local visibility and leads using Google Ads campaigns with location targeting, map intent, and conversion tracking.',
  path: '/pages/local-business-google-ads',
  keywords: [
    'local business google ads',
    'local google ads management',
    'location targeting ads',
    'local lead generation',
  ],
});

export default function LocalBusinessGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}