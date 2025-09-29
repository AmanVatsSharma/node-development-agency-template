// Web Development Landing Page
// This page composes multiple premium sections into a high-converting layout.
// It relies on reusable sections already used elsewhere in the codebase + two new sections (services grid, pricing).

'use client'
import React, { useEffect } from "react";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { HeroSection as WDHero } from "@/app/pages/website-development/_components/hero-section";
import { ServicesGridSection } from "@/app/pages/web-development/_components/services-grid-section";
import { ServicesSection as WDServices } from "@/app/pages/website-development/_components/services-section";
import { PortfolioSection as WDPortfolio } from "@/app/pages/website-development/_components/portfolio-section";
import { TestimonialsSection as WDTestimonials } from "@/app/pages/website-development/_components/testimonials-section";
import { PricingSection } from "@/app/pages/web-development/_components/pricing-section";
import { FAQSection as WDFAQ } from "@/app/pages/website-development/_components/faq-section";
import { AnimatedBannerCta as WDBannerCta } from "@/app/pages/website-development/_components/animated-banner-cta";
import { ContactSection as WDContact } from "@/app/pages/website-development/_components/contact-section";

function WebDevelopmentPage() {
  useEffect(() => {
    console.log('[Web-Development] page mounted');
    return () => console.log('[Web-Development] page unmounted');
  }, []);

  return (
    <>
      {/* Hero */}
      <SectionErrorBoundary name="Hero">
        <WDHero />
      </SectionErrorBoundary>

      {/* Services Grid (icons-first, compressed info) */}
      <SectionErrorBoundary name="ServicesGrid">
        <ServicesGridSection />
      </SectionErrorBoundary>

      {/* Extended Services (bento) */}
      <SectionErrorBoundary name="Services">
        <WDServices />
      </SectionErrorBoundary>

      {/* Portfolio / Case Studies */}
      <SectionErrorBoundary name="Portfolio">
        <WDPortfolio />
      </SectionErrorBoundary>

      {/* Testimonials */}
      <SectionErrorBoundary name="Testimonials">
        <WDTestimonials />
      </SectionErrorBoundary>

      {/* Pricing */}
      <SectionErrorBoundary name="Pricing">
        <PricingSection />
      </SectionErrorBoundary>

      {/* FAQ */}
      <SectionErrorBoundary name="FAQ">
        <WDFAQ />
      </SectionErrorBoundary>

      {/* CTA Banner */}
      <SectionErrorBoundary name="BannerCTA">
        <WDBannerCta />
      </SectionErrorBoundary>

      {/* Contact */}
      <SectionErrorBoundary name="Contact">
        <WDContact />
      </SectionErrorBoundary>
    </>
  );
}

export default WebDevelopmentPage;