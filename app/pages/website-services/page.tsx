import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "./_components/services-hero-section";
import { ServicesList } from "./_components/services-list-section";
import { ProcessSection } from "./_components/process-section";
import { TechnologiesSection } from "./_components/technologies-section";
import { FeatureCta } from "./_components/feature-cta-section";
import { Cta } from "./_components/cta-section";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Website Services | Vedpragya — Web Development & Optimization",
  description:
    "Comprehensive website services by Vedpragya including UX design, development, performance optimization, and growth support for businesses in India and globally.",
  path: "/pages/website-services",
  keywords: [
    "website services india",
    "web development services",
    "ui ux design services",
    "business website optimization",
    "vedpragya website services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      {/* Resilient sections wrapped in error boundary with logging */}
      <SectionErrorBoundary name="ServicesHero"><ServicesHero /></SectionErrorBoundary>
      <SectionErrorBoundary name="ServicesList"><ServicesList /></SectionErrorBoundary>
      <SectionErrorBoundary name="ProcessSection"><ProcessSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="TechnologiesSection"><TechnologiesSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="FeatureCta"><FeatureCta /></SectionErrorBoundary>
      <SectionErrorBoundary name="Cta"><Cta /></SectionErrorBoundary>
    </>
  );
} 