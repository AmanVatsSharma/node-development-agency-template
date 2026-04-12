import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import EnhancedHeader from "./components/EnhancedHeader";
import Footer from "./components/Footer";
import ServiceWorkerManager from './components/ServiceWorkerManager';
import { initPerformanceMonitoring } from '../utils/performanceMonitoring';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
import { ThemeProvider } from "./components/ThemeProvider";
import { Providers } from "./providers";
import DeferredAIAgentWidget from './components/AIAgent/DeferredAIAgentWidget';
import ClarityAnalytics from './components/Analytics/ClarityAnalytics';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { headers } from 'next/headers';
import { OrganizationStructuredData, WebsiteStructuredData, ProfessionalServiceStructuredData } from "./components/SEO/StructuredData";
import { companyProfile } from "./data/companyProfile";
import { SEO_DEFAULT_OG_IMAGE_PATH, SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

// Font configuration
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL(SEO_SITE_URL),
  title: "Vedpragya | Software Development & IT Solutions Company — India",
  description: "Vedpragya builds software that transforms businesses. Web apps, AI systems, ERP, e-commerce, digital marketing, and trading platforms. Enterprise-grade engineering from India with global reach.",
  keywords: "software development, IT solutions, web development, AI development, ERP software, e-commerce development, Vedpragya, Vedpragya Bharat, Aman Kumar Sharma, India, digital transformation",
  authors: [{ name: "Aman Kumar Sharma — Founder & CEO, Vedpragya Bharat Private Limited" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vedpragya | Software Development & IT Solutions Company",
    description: "We build software that transforms businesses. Web apps, AI systems, ERP, e-commerce, and digital marketing — enterprise-grade engineering from India.",
    url: SEO_SITE_URL,
    siteName: "Vedpragya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: toAbsoluteSeoUrl(SEO_DEFAULT_OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: 'Vedpragya — Software Development & IT Solutions | India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vedpragya',
    creator: '@vedpragya',
    title: 'Vedpragya | Software Development & IT Solutions',
    description: 'We build software that transforms businesses — web apps, AI, ERP, e-commerce, and more.',
    images: [toAbsoluteSeoUrl(SEO_DEFAULT_OG_IMAGE_PATH)],
  },
  icons: {
    icon: [
      { url: '/logo_favicon.png', type: 'image/png' },
    ],
    apple: '/logo_favicon.png',
    shortcut: '/logo_favicon.png',
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
  verification: {
    // Replace with your actual Google Search Console verification code
    // Get it from: https://search.google.com/search-console
    google: 'REPLACE_WITH_YOUR_GSC_VERIFICATION_CODE',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize performance monitoring on client side
  if (typeof window !== 'undefined') {
    initPerformanceMonitoring();
  }

  // Check if the current route is an admin route
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />

        {/* Add Web App Manifest for PWA support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for better SEO and PWA */}
        <meta name="theme-color" content="#0C1B33" />

        {/* Structured Data (JSON-LD) - Authentic company identity */}
        <OrganizationStructuredData
          name={companyProfile.brandName}
          legalName={companyProfile.legalName}
          url={companyProfile.websiteUrl}
          logo={`${SEO_SITE_URL}/logo.png`}
          contactPoint={{ contactType: "customer service", email: companyProfile.contactEmail }}
          taxId={companyProfile.legal.gst}
          founderName={companyProfile.founder?.name}
          sameAs={Object.values(companyProfile.social || {}).filter(Boolean) as string[]}
        />
        <WebsiteStructuredData
          url={companyProfile.websiteUrl}
          name={companyProfile.brandName}
          description={metadata.description as string}
          publisher={companyProfile.legalName}
        />
        <ProfessionalServiceStructuredData
          name={companyProfile.brandName}
          legalName={companyProfile.legalName}
          url={companyProfile.websiteUrl}
          logo={`${SEO_SITE_URL}/logo.png`}
          description="Enterprise-grade software development, AI systems, ERP, e-commerce, and digital marketing services."
          foundingDate={companyProfile.legal.incorporationDateISO}
          address={{
            addressLocality: 'Haryana',
            addressRegion: 'Haryana',
            addressCountry: 'IN',
          }}
          areaServed={['India', 'United States', 'United Kingdom', 'Global']}
          serviceTypes={[
            'Web Development',
            'AI Development',
            'ERP Software',
            'E-commerce Development',
            'Google Ads Management',
            'SEO Services',
            'Shopify Development',
            'Mobile App Development',
          ]}
          founderName={companyProfile.founder?.name}
          contactEmail={companyProfile.contactEmail}
          sameAs={Object.values(companyProfile.social || {}).filter(Boolean) as string[]}
        />
        
        {/* Unified Google Tag (GA4 + Google Ads) */}
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          adsConversionId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17606401808'}
        />
        {/* Microsoft Clarity — heatmaps + session recordings */}
        <ClarityAnalytics />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            forcedTheme="light"
            disableTransitionOnChange
          >
            {isAdminRoute ? (
              // Admin pages: no header/footer, no padding
              <>
                {children}
              </>
            ) : (
              // Regular pages: with header and footer
              <div className="flex flex-col min-h-screen">
                {/* New Enhanced Header with resizable navbar - Cool scroll effect! */}
                <EnhancedHeader />
                {/* Slightly tighter top spacing on mobile while keeping desktop clearance */}
                <main className="flex-grow pt-[80px]">{children}</main>
                <Footer />
              </div>
            )}
            {/* Service Worker Manager for updates notification */}
            <ServiceWorkerManager />
            {/* AI Sales Agent - Available on every page except admin */}
            {!isAdminRoute && <DeferredAIAgentWidget />}
            {/* WhatsApp Floating Button - Always visible on non-admin pages */}
            {!isAdminRoute && <WhatsAppFloatingButton />}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
