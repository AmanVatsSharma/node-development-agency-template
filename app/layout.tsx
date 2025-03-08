import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceWorkerManager from './components/ServiceWorkerManager';
import { initPerformanceMonitoring } from './utils/performanceMonitoring';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';

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
  title: "Enterprise Hero | Premium Node.js Development Agency",
  description: "Elevate your business with premium Node.js development, 3D animations, and enterprise-grade solutions by our expert team.",
  keywords: "Node.js development, 3D animations, enterprise website, premium development, web solutions",
  authors: [{ name: "Enterprise Hero Team" }],
  // Add Open Graph data for social sharing
  openGraph: {
    title: "Enterprise Hero | Premium Node.js Development Agency",
    description: "Elevate your business with premium Node.js development, 3D animations, and enterprise-grade solutions by our expert team.",
    url: "https://enterprisehero.com",
    siteName: "Enterprise Hero",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize performance monitoring on client side
  if (typeof window !== 'undefined') {
    initPerformanceMonitoring();
  }

  return (
    <html lang="en">
      <head>
        {/* Add Web App Manifest for PWA support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Add meta description and theme color for better SEO and PWA */}
        <meta name="description" content="Premium Node.js development and 3D animation services for enterprise applications." />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Google Analytics script - replace with your measurement ID */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
        {/* Service Worker Manager for updates notification */}
        <ServiceWorkerManager />
      </body>
    </html>
  );
}
