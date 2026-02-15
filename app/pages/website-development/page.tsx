import React from "react";
import type { Metadata } from "next";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";
import { PortfolioSection } from "./_components/portfolio-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { FAQSection } from "./_components/faq-section";
import { AnimatedBannerCta } from "./_components/animated-banner-cta";
import { ContactSection } from "./_components/contact-section";
import { HeroParallax } from "@/app/components/ui/hero-parallax";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import { Spotlight } from "@/app/components/ui/spotlight";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Website Development Services | Enterprise Hero",
  description:
    "Build premium business websites that are fast, conversion-focused, mobile-ready, and SEO-optimized with Enterprise Hero.",
  path: "/pages/website-development",
  keywords: [
    "website development services",
    "custom website development",
    "business website agency",
    "seo optimized website development",
  ],
});

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 w-full"
        fill="white"
      >
        {/* Wrapping each section with an error boundary for resilience and diagnostics */}
        <SectionErrorBoundary name="HeroSection"><HeroSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="ServicesSection"><ServicesSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="HeroParallax"><HeroParallax products={products} /></SectionErrorBoundary>
        <SectionErrorBoundary name="StickyScroll"><StickyScroll content={content} /></SectionErrorBoundary>
        <SectionErrorBoundary name="PortfolioSection"><PortfolioSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="TestimonialsSection"><TestimonialsSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="FAQSection"><FAQSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="AnimatedBannerCta"><AnimatedBannerCta /></SectionErrorBoundary>
        <SectionErrorBoundary name="ContactSection"><ContactSection /></SectionErrorBoundary>
      </Spotlight>

    </>
  );
}
