/**
 * Shopify Store Setup Landing Page
 * 
 * Premium, high-converting landing page for Shopify store setup services
 * 
 * Features:
 * - Mobile-first design
 * - App-like interface
 * - Smooth animations throughout
 * - SEO optimized
 * - Google Ads ready
 * - WhatsApp integration
 * 
 * Sections:
 * 1. Hero Section - Main value proposition with CTAs
 * 2. Stats Section - Trust indicators and metrics
 * 3. Why Choose Custom - Problem/Solution comparison
 * 4. Features Section - 5 main service features
 * 5. Pricing Section - 3 pricing tiers + add-ons
 * 6. Process Section - 6-step process timeline
 * 7. Tech Stack Section - Technologies used
 * 8. Why Us Section - Unique value propositions
 * 9. Results Section - Case studies and testimonials
 * 10. Final CTA Section - WhatsApp and demo call
 * 11. Contact Form Section - Lead generation form
 * 
 * @page
 */

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import components
import HeroSection from '@/app/components/shopify/HeroSection';
import StatsSection from '@/app/components/shopify/StatsSection';
import WhyChooseSection from '@/app/components/shopify/WhyChooseSection';
import FeaturesSection from '@/app/components/shopify/FeaturesSection';
import PricingSection from '@/app/components/shopify/PricingSection';
import ProcessSection from '@/app/components/shopify/ProcessSection';
import TechStackSection from '@/app/components/shopify/TechStackSection';
import WhyUsSection from '@/app/components/shopify/WhyUsSection';
import ResultsSection from '@/app/components/shopify/ResultsSection';
import FinalCTASection from '@/app/components/shopify/FinalCTASection';
import ContactFormSection from '@/app/components/shopify/ContactFormSection';

console.log('[ShopifyStorePage] Page component loaded');

// SEO Metadata
export const metadata: Metadata = {
  title: 'Custom Shopify Store Setup & Conversion Optimization | Vedpragya Bharat',
  description: 'Launch a high-converting Shopify store designed for sales, speed, and scale. Premium custom UI/UX, CRO-driven layouts, and automation. From ₹35,000. Book free consultation.',
  keywords: [
    'shopify store setup',
    'shopify development agency',
    'custom shopify design',
    'shopify conversion optimization',
    'shopify expert india',
    'd2c store setup',
    'e-commerce solutions',
    'shopify plus development',
    'shopify theme customization',
    'online store development',
  ],
  authors: [{ name: 'Vedpragya Bharat' }],
  openGraph: {
    title: 'Custom Shopify Store Setup & Conversion Optimization',
    description: 'We build high-converting Shopify stores designed for sales, speed, and scale — backed by data-driven UX and automation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vedpragya Bharat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify Store Setup & Conversion Optimization',
    description: 'Launch a Shopify store that actually sells. Premium custom design, CRO, and automation.',
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
    canonical: '/pages/shopify-store-setup',
  },
};

/**
 * Main Shopify Store Setup Landing Page Component
 */
export default function ShopifyStoreSetupPage() {
  console.log('[ShopifyStorePage] Rendering page');

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Stats Section - Trust indicators */}
      <StatsSection />

      {/* Why Choose Custom Section - Problem/Solution */}
      <WhyChooseSection />

      {/* Features Section - What You Get */}
      <FeaturesSection />

      {/* Pricing Section - Plans and pricing */}
      <PricingSection />

      {/* Process Section - How we work */}
      <ProcessSection />

      {/* Tech Stack Section - Technologies */}
      <TechStackSection />

      {/* Why Us Section - USPs */}
      <WhyUsSection />

      {/* Results Section - Case studies and testimonials */}
      <ResultsSection />

      {/* Final CTA Section - Main conversion point */}
      <FinalCTASection />

      {/* Contact Form Section - Lead generation */}
      <ContactFormSection />
    </main>
  );
}
