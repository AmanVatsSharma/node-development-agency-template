import React from "react";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";
import { PortfolioSection } from "./_components/portfolio-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { FAQSection } from "./_components/faq-section";
import { AnimatedBannerCta } from "./_components/animated-banner-cta";
import { ContactSection } from "./_components/contact-section";

export default function Home() {
  return (
    <>
      {/* Wrapping each section with an error boundary for resilience and diagnostics */}
      <SectionErrorBoundary name="HeroSection"><HeroSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="ServicesSection"><ServicesSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="PortfolioSection"><PortfolioSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="TestimonialsSection"><TestimonialsSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="FAQSection"><FAQSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="AnimatedBannerCta"><AnimatedBannerCta /></SectionErrorBoundary>
      <SectionErrorBoundary name="ContactSection"><ContactSection /></SectionErrorBoundary>
    </>
  );
}
