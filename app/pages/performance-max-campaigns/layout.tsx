import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Max Campaigns | AI-Powered Ads | Enterprise Hero',
  description: 'Expert Performance Max campaigns with AI optimization, multi-network reach, and automated bidding. ₹40K-₹90K/month. 4.5× average ROAS, 35% more conversions.',
  keywords: [
    'performance max campaigns',
    'google ads performance max',
    'ai powered ads',
    'multi network campaigns',
    'automated bidding',
    'google ads ai',
    'performance max optimization',
    'smart campaigns',
    'ai advertising',
    'google ads automation',
    'performance max management',
    'ai campaign optimization'
  ],
  openGraph: {
    title: 'Performance Max Campaigns | AI-Powered Ads',
    description: 'Expert Performance Max campaigns with AI optimization, multi-network reach, and automated bidding. 4.5× average ROAS, 35% more conversions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-performance-max-campaigns.jpg',
        width: 1200,
        height: 630,
        alt: 'Performance Max Campaigns - AI-Powered Ads'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Max Campaigns | AI-Powered Ads',
    description: 'Expert Performance Max campaigns with AI optimization, multi-network reach, and automated bidding. 4.5× average ROAS.',
    images: ['/og-performance-max-campaigns.jpg']
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
    canonical: '/pages/performance-max-campaigns'
  }
};

export default function PerformanceMaxCampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}