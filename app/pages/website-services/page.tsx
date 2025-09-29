import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "./_components/services-hero-section";
import { ServicesList } from "./_components/services-list-section";
import { ProcessSection } from "./_components/process-section";
import { TechnologiesSection } from "./_components/technologies-section";
import { FeatureCta } from "./_components/feature-cta-section";
import { Cta } from "./_components/cta-section";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";

export const metadata: Metadata = {
  title: "Our Services | DevAgency - Premium Web Development Agency",
  description: "Explore our comprehensive range of web development, design, and digital marketing services tailored to help your business succeed online.",
  keywords: "web development services, UI/UX design, mobile app development, digital marketing, SEO services, custom web development",
};

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