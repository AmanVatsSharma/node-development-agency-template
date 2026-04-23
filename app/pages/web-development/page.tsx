// Web Development Landing Page
// This page composes multiple premium sections into a high-converting layout.
// It relies on reusable sections already used elsewhere in the codebase + two new sections (services grid, pricing).

import React from "react";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { RelatedBlogPosts } from "@/app/components/RelatedBlogPosts";
import { RelatedServicesStrip } from "@/app/components/RelatedServicesStrip";
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

      {/* Related blog posts — internal linking to topical content */}
      <RelatedBlogPosts category="web-development" />

      {/* Related services — internal linking */}
      <RelatedServicesStrip
        heading="Explore related services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'Next.js Development', href: '/pages/next-js-development' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'Node.js Development', href: '/pages/nodejs-development' },
          { label: 'Shopify Store Setup', href: '/pages/shopify-store-setup' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
        ]}
      />
    </>
  );
}

export default WebDevelopmentPage;