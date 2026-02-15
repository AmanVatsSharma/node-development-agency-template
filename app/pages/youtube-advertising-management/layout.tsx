import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Advertising Management | Video Ads | Enterprise Hero',
  description: 'Expert YouTube advertising management with video campaigns, targeting, and optimization. ₹35K-₹85K/month. 3.8× average ROAS, 2.5M+ video views generated.',
  keywords: [
    'youtube advertising management',
    'youtube ads',
    'video advertising',
    'youtube marketing',
    'video campaigns',
    'youtube targeting',
    'video ad optimization',
    'youtube ppc',
    'video marketing',
    'youtube brand awareness',
    'video lead generation',
    'youtube conversion optimization'
  ],
  openGraph: {
    title: 'YouTube Advertising Management | Video Ads',
    description: 'Expert YouTube advertising management with video campaigns, targeting, and optimization. 3.8× average ROAS, 2.5M+ video views generated.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-youtube-advertising.jpg',
        width: 1200,
        height: 630,
        alt: 'YouTube Advertising Management - Video Ads'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Advertising Management | Video Ads',
    description: 'Expert YouTube advertising management with video campaigns, targeting, and optimization. 3.8× average ROAS.',
    images: ['/og-youtube-advertising.jpg']
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
    canonical: '/pages/youtube-advertising-management'
  }
};

export default function YouTubeAdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}