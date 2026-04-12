import type { ReactElement } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// ── Client components (hero, product spotlight) ──────────────────────────────
import HeroSection from "./components/home/HeroSection";
import ProductSpotlight from "./components/home/ProductSpotlight";
import WebDevIllustration from "./components/illustrations/WebDevIllustration";
import ERPIllustration from "./components/illustrations/ERPIllustration";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { Spotlight } from "./components/ui/spotlight";
import { MovingBorder } from "./components/ui/moving-border";

// ── Below-fold — lazy loaded ──────────────────────────────────────────────────
const StatsCounter = dynamic(() => import("./components/home/StatsCounter"), {
  loading: () => <div className="py-16 bg-white dark:bg-[#080C14]" />,
  ssr: true,
});
const WhyChooseUs = dynamic(() => import("./components/home/WhyChooseUs"), {
  loading: () => <div className="py-16 bg-[#F4F4F5] dark:bg-[#0F1623]" />,
  ssr: true,
});
const CaseStudyShowcase = dynamic(() => import("./components/home/CaseStudyShowcase"), {
  loading: () => <div className="py-16 bg-white dark:bg-[#080C14]" />,
  ssr: true,
});
const ProcessTimeline = dynamic(() => import("./components/home/ProcessTimeline"), {
  loading: () => <div className="py-16 bg-[#0A1628]" />,
  ssr: true,
});
const TestimonialCarousel = dynamic(() => import("./components/home/TestimonialCarousel"), {
  loading: () => <div className="py-16 bg-white dark:bg-[#080C14]" />,
  ssr: true,
});

// ── Data ──────────────────────────────────────────────────────────────────────

function SvcIcon({ type }: { type: string }): ReactElement {
  const paths: Record<string, string> = {
    web: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    ai: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    ecommerce: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    erp: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    marketing: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    trading: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  };
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={paths[type] ?? paths.web} />
    </svg>
  );
}

const services = [
  {
    id: "web",
    icon: "web",
    title: "Web & Mobile Apps",
    desc: "Scalable Next.js, React, and Node.js applications — performant, accessible, and built to last.",
    href: "/pages/web-development",
    large: true,
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI & Automation",
    desc: "Chatbots, voice agents, and intelligent workflow automations that solve real operational problems.",
    href: "/pages/ai-chatbot-development",
  },
  {
    id: "ecommerce",
    icon: "ecommerce",
    title: "E-Commerce Platforms",
    desc: "Shopify, headless stores, and WhatsApp commerce — engineered to convert.",
    href: "/pages/shopify-store-setup",
  },
  {
    id: "erp",
    icon: "erp",
    title: "ERP & Enterprise Software",
    desc: "Custom ERP systems and CRM platforms that run core business operations.",
    href: "/pages/services",
    large: true,
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "Digital Marketing",
    desc: "Google Ads, SEO, and performance campaigns with measurable ROI.",
    href: "/pages/google-ads-management",
  },
  {
    id: "trading",
    icon: "trading",
    title: "Trading & Finance Tech",
    desc: "Real-time market data platforms and financial analytics at institutional quality.",
    href: "/pages/trading-software",
  },
];

// Deduplicated tech logo strip items (doubled for seamless loop)
const techStrip = [
  "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAI",
  "Shopify", "Redis", "Docker", "Stripe", "TypeScript", "Prisma",
  "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAI",
  "Shopify", "Redis", "Docker", "Stripe", "TypeScript", "Prisma",
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════════════
          TECH LOGO STRIP
      ══════════════════════════════════════ */}
      <section className="py-3 sm:py-4 bg-[#F4F4F5] dark:bg-[#0F1623] border-y border-gray-200 dark:border-[#1E293B] overflow-hidden">
        <div className="flex items-center w-full overflow-hidden">
          <div className="flex items-center gap-0 vp-marquee whitespace-nowrap shrink-0">
            {techStrip.map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600"
              >
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — Aceternity BentoGrid
      ══════════════════════════════════════ */}
      <section className="compact-main-section bg-white dark:bg-[#080C14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What We Build
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                Six disciplines. One integrated team. Every project engineered to last.
              </p>
            </div>
            <Link
              href="/pages/services"
              className="shrink-0 inline-flex items-center gap-2 text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm hover:underline"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Aceternity BentoGrid */}
          <BentoGrid className="lg:grid-rows-2">
            {services.map((svc) => (
              <BentoGridItem
                key={svc.id}
                title={svc.title}
                description={svc.desc}
                href={svc.href}
                icon={<SvcIcon type={svc.icon} />}
                className={svc.large ? "lg:row-span-2 lg:min-h-[360px]" : ""}
                header={
                  svc.id === "web" ? (
                    <WebDevIllustration className="absolute bottom-3 right-2 w-[130px] opacity-[0.08] pointer-events-none" />
                  ) : svc.id === "erp" ? (
                    <ERPIllustration className="absolute bottom-3 right-2 w-[130px] opacity-[0.08] pointer-events-none" />
                  ) : undefined
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCT SPOTLIGHT — tabbed
      ══════════════════════════════════════ */}
      <ProductSpotlight />

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <StatsCounter />

      {/* ══════════════════════════════════════
          WHY VEDPRAGYA
      ══════════════════════════════════════ */}
      <WhyChooseUs />

      {/* ══════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════ */}
      <CaseStudyShowcase />

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <ProcessTimeline />

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <TestimonialCarousel />

      {/* ══════════════════════════════════════
          FINAL CTA — Spotlight + MovingBorder
      ══════════════════════════════════════ */}
      <Spotlight
        className="compact-main-section bg-[#080C14] relative overflow-hidden"
        fill="rgba(37,99,235,0.10)"
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Ready to Build Something{" "}
            <span className="text-[#2563EB]">That Lasts?</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your project. Our team responds within 24 hours with a
            clear plan — no fluff, no over-selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MovingBorder
              as={Link}
              href="/pages/contact"
              duration={3000}
              containerClassName="rounded-xl p-[1.5px]"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base rounded-[10px] transition-colors min-h-[52px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </MovingBorder>
            <Link
              href="/pages/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold text-base rounded-xl transition-all hover:bg-white/5 min-h-[52px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Explore Services
            </Link>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "200+", label: "Happy Clients" },
              { num: "5", label: "Global Offices" },
              { num: "24/7", label: "Support Available" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.num}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Spotlight>
    </div>
  );
}
