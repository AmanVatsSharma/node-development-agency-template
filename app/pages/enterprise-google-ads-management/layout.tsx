import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Enterprise Google Ads Management Services',
  description:
    'Scale large ad accounts with dedicated PPC operations, advanced campaign strategy, and executive reporting.',
  path: '/pages/enterprise-google-ads-management',
  keywords: [
    'enterprise google ads management',
    'dedicated ppc team',
    'large account ppc management',
    'enterprise paid search services',
  ],
});

export default function EnterpriseGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}