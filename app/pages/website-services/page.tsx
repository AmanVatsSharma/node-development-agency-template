import React from "react";
import { ServicesHero } from "./_components/services-hero-section";
import { ServicesList } from "./_components/services-list-section";
import { ProcessSection } from "./_components/process-section";
import { TechnologiesSection } from "./_components/technologies-section";
import { FeatureCta } from "./_components/feature-cta-section";
import { Cta } from "./_components/cta-section";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";

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