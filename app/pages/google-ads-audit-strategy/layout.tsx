import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Audit & Strategy | Campaign Analysis | Enterprise Hero',
  description: 'Comprehensive Google Ads audit with detailed analysis, strategy recommendations, and implementation plan. ₹25K-₹75K one-time. 2.5× average improvement, 40% cost reduction.',
  keywords: [
    'google ads audit',
    'google ads strategy',
    'campaign analysis',
    'ppc audit',
    'google ads optimization',
    'ad account audit',
    'google ads review',
    'campaign performance analysis',
    'google ads consultation',
    'ppc strategy',
    'advertising audit',
    'google ads assessment'
  ],
  openGraph: {
    title: 'Google Ads Audit & Strategy | Campaign Analysis',
    description: 'Comprehensive Google Ads audit with detailed analysis, strategy recommendations, and implementation plan. 2.5× average improvement, 40% cost reduction.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-google-ads-audit.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Audit & Strategy - Campaign Analysis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Audit & Strategy | Campaign Analysis',
    description: 'Comprehensive Google Ads audit with detailed analysis, strategy recommendations, and implementation plan. 2.5× average improvement.',
    images: ['/og-google-ads-audit.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/pages/google-ads-audit-strategy'
  }
};

export default function GoogleAdsAuditStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}