import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import EnhancedHeader from "./components/EnhancedHeader";
import Footer from "./components/Footer";
import ServiceWorkerManager from './components/ServiceWorkerManager';
import { initPerformanceMonitoring } from '../utils/performanceMonitoring';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
import GoogleAdsTracking from './components/Analytics/GoogleAdsTracking';
import { ThemeProvider } from "./components/ThemeProvider";
import { Providers } from "./providers";
import AIAgentWidget from './components/AIAgent/AIAgentWidget';
import { headers } from 'next/headers';
import { OrganizationStructuredData, WebsiteStructuredData } from "./components/SEO/StructuredData";
import { companyProfile } from "./data/companyProfile";

// Font configuration
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Enterprise Hero | Vedpragya Bharat Private Limited - Global Node.js Development Agency",
  description: "Leading enterprise-grade Node.js development and 3D solutions by Vedpragya Bharat Private Limited. Global presence across India, Dubai, California, Toronto, and Shenzhen. Founded by Aman Kumar Sharma.",
  keywords: "Node.js development, enterprise solutions, Vedpragya Bharat, Aman Kumar Sharma, global tech agency, 3D animations, microservices, API development, enterprise architecture, India, Dubai, California, Toronto, Shenzhen",
  authors: [{ name: "Aman Kumar Sharma - Founder, Vedpragya Bharat Private Limited" }],
  // Add Open Graph data for social sharing
  openGraph: {
    title: "Enterprise Hero | Vedpragya Bharat Private Limited - Global Node.js Development Agency",
    description: "Leading enterprise-grade Node.js development and 3D solutions by Vedpragya Bharat Private Limited. Global presence across India, Dubai, California, Toronto, and Shenzhen.",
    url: "https://enterprisehero.com",
    siteName: "Enterprise Hero",
    locale: "en_US",
    type: "website",
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
        {/* Add Web App Manifest for PWA support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for better SEO and PWA */}
        <meta name="theme-color" content="#3b82f6" />

        {/* Structured Data (JSON-LD) - Authentic company identity */}
        <OrganizationStructuredData
          name={companyProfile.brandName}
          legalName={companyProfile.legalName}
          url={companyProfile.websiteUrl}
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
        
        {/* Google Analytics script - replace with your measurement ID */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        
        {/* Google Ads Conversion Tracking - Search Ads Campaign */}
        <GoogleAdsTracking conversionId="AW-17606401808" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
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
                {/* Added pt-20 padding to prevent content overlap with fixed navbar */}
                <main className="flex-grow pt-20">{children}</main>
                <Footer />
              </div>
            )}
            {/* Service Worker Manager for updates notification */}
            <ServiceWorkerManager />
            {/* AI Sales Agent - Available on every page except admin */}
            {!isAdminRoute && <AIAgentWidget />}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
