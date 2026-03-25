import type { ReactElement } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// ── Client components (hero, product spotlight) ──────────────────────────────
import HeroSection from "./components/home/HeroSection";
import ProductSpotlight from "./components/home/ProductSpotlight";

// ── Below-fold — lazy loaded ──────────────────────────────────────────────────
const StatsCounter = dynamic(() => import("./components/home/StatsCounter"), {
  loading: () => <div className="py-16 bg-[#0C1B33]" />,
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
  loading: () => <div className="py-16 bg-[#0C1B33]" />,
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
    accentLight: "#2563EB",
    accentDark: "#60A5FA",
    large: true,
    bgPattern: true,
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI & Automation",
    desc: "Chatbots, voice agents, and intelligent workflow automations that solve real operational problems.",
    href: "/pages/ai-chatbot-development",
    accentLight: "#7C3AED",
    accentDark: "#A78BFA",
  },
  {
    id: "ecommerce",
    icon: "ecommerce",
    title: "E-Commerce Platforms",
    desc: "Shopify, headless stores, and WhatsApp commerce — engineered to convert.",
    href: "/pages/shopify-store-setup",
    accentLight: "#059669",
    accentDark: "#34D399",
  },
  {
    id: "erp",
    icon: "erp",
    title: "ERP & Enterprise Software",
    desc: "Custom ERP systems and CRM platforms that run core business operations.",
    href: "/pages/services",
    accentLight: "#D97706",
    accentDark: "#FCD34D",
    large: true,
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "Digital Marketing",
    desc: "Google Ads, SEO, and performance campaigns with measurable ROI.",
    href: "/pages/google-ads-management",
    accentLight: "#DC2626",
    accentDark: "#F87171",
  },
  {
    id: "trading",
    icon: "trading",
    title: "Trading & Finance Tech",
    desc: "Real-time market data platforms and financial analytics at institutional quality.",
    href: "/pages/trading-software",
    accentLight: "#0D9488",
    accentDark: "#2DD4BF",
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
          HERO — split layout, word cycling
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
                <span className="w-1 h-1 rounded-full bg-[#D4870A]/50 shrink-0" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — Bento grid
      ══════════════════════════════════════ */}
      <section className="compact-main-section bg-white dark:bg-[#080C14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <div className="vp-divider mb-4" />
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

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={svc.href}
                className={`vp-bento-card group flex flex-col p-6 sm:p-7 min-h-[180px] ${
                  svc.large ? "lg:row-span-2 lg:min-h-[360px]" : ""
                } ${svc.bgPattern ? "bg-[#F8FAFF] dark:bg-[#0A1628]" : ""}`}
              >
                {/* Pattern overlay for large card */}
                {svc.bgPattern && (
                  <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                      color: svc.accentLight,
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="inline-flex p-2.5 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${svc.accentLight}14`,
                      color: svc.accentLight,
                    }}
                  >
                    <SvcIcon type={svc.icon} />
                  </div>

                  <h3
                    className="text-lg font-bold text-[#0C1B33] dark:text-white mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {svc.desc}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-bold group-hover:gap-2.5 transition-all"
                    style={{ color: svc.accentLight }}>
                    <span>Learn more</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="compact-main-section vp-mesh-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4870A]/30 bg-[#D4870A]/10 text-[#D4870A] text-xs font-semibold tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4870A]" />
            Let&rsquo;s Build Together
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4870A] to-[#F59E0B]">
              That Lasts?
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your project. Our team responds within 24 hours with a
            clear plan — no fluff, no over-selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/pages/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-base rounded-xl transition-all shadow-[0_4px_20px_rgba(212,135,10,0.35)] hover:shadow-[0_8px_30px_rgba(212,135,10,0.5)] hover:-translate-y-0.5 min-h-[52px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.num}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
