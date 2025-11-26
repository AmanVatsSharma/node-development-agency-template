'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ServiceNavigation } from '@/app/components/GoogleAdsEcosystem/ServiceNavigation';
import { ROICalculator } from '@/app/components/GoogleAdsEcosystem/ROICalculator';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { ServiceFeaturesSection } from './_components/service-features-section';
import { PricingSection } from './_components/pricing-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

export default function EcommerceGoogleAdsOptimizationPage() {
  useEffect(() => {
    console.log('[Ecommerce-Google-Ads] Page mounted');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'E-commerce Google Ads Optimization | Shopping Campaigns | Rajapragya Bharat',
        page_location: window.location.href,
        page_path: '/pages/ecommerce-google-ads-optimization'
      });
    }
    return () => {
      console.log('[Ecommerce-Google-Ads] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('ecommerce-google-ads-optimization')} />
      </div>

      {/* Hero Section */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem & Solution Section */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* Service Features Section */}
      <SectionErrorBoundary name="ServiceFeaturesSection">
        <ServiceFeaturesSection />
      </SectionErrorBoundary>


      {/* Pricing Section */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* ROI Calculator */}
      <SectionErrorBoundary name="ROICalculator">
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator industry="E-commerce" />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Case Studies Section */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Testimonials Section */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* FAQ Section */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="ecommerce-google-ads-optimization"
          title={getRelatedServicesTitle('ecommerce-google-ads-optimization')}
        />
      </SectionErrorBoundary>

      {/* Service Navigation */}
      <SectionErrorBoundary name="ServiceNavigation">
        <div className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceNavigation 
              currentService="ecommerce-google-ads-optimization"
              showAllServices={false}
            />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Final CTA Section */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Mobile Floating CTA */}
      <MobileFloatingCTA />

      {/* Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}