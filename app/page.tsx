import type { ReactElement } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Below-fold components — lazy loaded for performance
const StatsCounter = dynamic(() => import("./components/home/StatsCounter"), {
  loading: () => <div className="py-16 bg-[#0C1B33] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#D4870A] border-t-transparent rounded-full animate-spin"></div></div>,
  ssr: true,
});

const WhyChooseUs = dynamic(() => import("./components/home/WhyChooseUs"), {
  loading: () => <div className="py-16 bg-white dark:bg-[#080C14]"></div>,
  ssr: true,
});

const CaseStudyShowcase = dynamic(() => import("./components/home/CaseStudyShowcase"), {
  loading: () => <div className="py-16 bg-[#F4F4F5] dark:bg-[#151C2B]"></div>,
  ssr: true,
});

const TestimonialCarousel = dynamic(() => import("./components/home/TestimonialCarousel"), {
  loading: () => <div className="py-16 bg-white dark:bg-[#080C14]"></div>,
  ssr: true,
});

const ProcessTimeline = dynamic(() => import("./components/home/ProcessTimeline"), {
  loading: () => <div className="py-16 bg-[#0C1B33]"></div>,
  ssr: true,
});

// Service icons (inline SVG for sharp rendering)
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, ReactElement> = {
    web: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    ai: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    ecommerce: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    erp: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    marketing: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    trading: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };
  return icons[type] ?? icons.web;
}

const services = [
  {
    id: "web",
    icon: "web",
    title: "Web & Mobile Apps",
    desc: "Scalable Next.js, React, and Node.js applications built for performance and longevity.",
    href: "/pages/web-development",
    color: "from-blue-500/10 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-900/10",
    accent: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI & Automation",
    desc: "AI chatbots, voice agents, intelligent workflows, and machine learning integrations.",
    href: "/pages/ai-chatbot-development",
    color: "from-violet-500/10 to-violet-600/5 dark:from-violet-500/10 dark:to-violet-900/10",
    accent: "text-violet-600 dark:text-violet-400",
  },
  {
    id: "ecommerce",
    icon: "ecommerce",
    title: "E-Commerce Platforms",
    desc: "Full-featured stores on Shopify, custom platforms, and WhatsApp commerce.",
    href: "/pages/shopify-store-setup",
    color: "from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/10 dark:to-emerald-900/10",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "erp",
    icon: "erp",
    title: "ERP & Enterprise Software",
    desc: "Custom ERP systems, CRM platforms, and mission-critical enterprise applications.",
    href: "/pages/services",
    color: "from-amber-500/10 to-amber-600/5 dark:from-amber-500/10 dark:to-amber-900/10",
    accent: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "Digital Marketing",
    desc: "Google Ads, SEO, performance campaigns, and data-driven growth strategies.",
    href: "/pages/google-ads-management",
    color: "from-rose-500/10 to-rose-600/5 dark:from-rose-500/10 dark:to-rose-900/10",
    accent: "text-rose-600 dark:text-rose-400",
  },
  {
    id: "trading",
    icon: "trading",
    title: "Trading & Finance Tech",
    desc: "Live market data platforms, charting software, and financial analytics systems.",
    href: "/pages/trading-software",
    color: "from-teal-500/10 to-teal-600/5 dark:from-teal-500/10 dark:to-teal-900/10",
    accent: "text-teal-600 dark:text-teal-400",
  },
];

const products = [
  {
    name: "Promerchants",
    tag: "E-Commerce Platform",
    desc: "Advanced e-commerce platform built for modern online businesses.",
    color: "bg-blue-600",
  },
  {
    name: "TradeZen",
    tag: "Trading Platform",
    desc: "World-class charting and analytics for professional traders.",
    color: "bg-emerald-600",
  },
  {
    name: "BharatERP",
    tag: "Enterprise ERP",
    desc: "SAP Hana-level ERP system built in Node.js — customized for Indian enterprises.",
    color: "bg-[#0C1B33]",
  },
  {
    name: "MailZen",
    tag: "AI Mail Management",
    desc: "AI-powered enterprise mail management with workflow automation.",
    color: "bg-violet-600",
  },
  {
    name: "Waterakt",
    tag: "WhatsApp Marketing",
    desc: "WhatsApp marketing and automated campaigns for e-commerce owners.",
    color: "bg-green-600",
  },
  {
    name: "SwiftShift",
    tag: "Logistics AI",
    desc: "AI-powered couriers and logistics management system.",
    color: "bg-orange-600",
  },
  {
    name: "CodeYog",
    tag: "EdTech Platform",
    desc: "Open-source coding learning platform for developers.",
    color: "bg-indigo-600",
  },
];

const trustItems = [
  "500+ Projects Delivered",
  "200+ Happy Clients",
  "5 Global Offices",
  "India · UAE · USA",
  "8+ Years Experience",
  "24/7 Support",
  "500+ Projects Delivered",
  "200+ Happy Clients",
  "5 Global Offices",
  "India · UAE · USA",
  "8+ Years Experience",
  "24/7 Support",
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ===================================================
          HERO SECTION
      =================================================== */}
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center bg-[#0C1B33] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 hero-grid-bg opacity-40" />

        {/* Ambient blobs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#D4870A]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4870A]/40 bg-[#D4870A]/10 text-[#D4870A] text-xs font-semibold tracking-wide uppercase mb-6 vp-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4870A] animate-pulse" />
              Vedpragya Bharat Private Limited
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 vp-fade-up vp-stagger-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4870A] to-[#F59E0B]">
                Moves Businesses
              </span>{" "}
              Forward
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 vp-fade-up vp-stagger-3"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              From web apps to AI systems, ERP to e-commerce — we engineer
              technology that drives real business outcomes for companies across
              India, UAE, and the US.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 vp-fade-up vp-stagger-4">
              <Link
                href="/pages/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(212,135,10,0.4)] hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/pages/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/5 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Floating stat pills */}
          <div className="hidden lg:flex items-start gap-4 mt-20 vp-fade-up vp-stagger-5">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "200+", label: "Clients Globally" },
              { num: "5", label: "Global Offices" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {stat.num}
                </span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ===================================================
          TRUST MARQUEE STRIP
      =================================================== */}
      <section className="py-4 bg-[#F4F4F5] dark:bg-[#0F1623] border-y border-gray-200 dark:border-[#1E293B] overflow-hidden">
        <div className="flex items-center gap-0 w-full">
          <div className="flex items-center gap-0 vp-marquee whitespace-nowrap">
            {trustItems.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                <span
                  className="w-1 h-1 rounded-full bg-[#D4870A]"
                  style={{ display: "inline-block" }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES SECTION
      =================================================== */}
      <section className="compact-main-section bg-white dark:bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="vp-divider mb-4" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              What We Build
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Six disciplines. One integrated team. Every project engineered to
              last and designed to grow.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={svc.href}
                className="group relative p-6 rounded-2xl border border-gray-100 dark:border-[#1E293B] bg-white dark:bg-[#0F1623] hover:border-[#2563EB]/30 dark:hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(12,27,51,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient fill on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-2.5 rounded-xl bg-gray-50 dark:bg-[#151C2B] ${svc.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <ServiceIcon type={svc.icon} />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0C1B33] dark:text-white mb-2"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${svc.accent} group-hover:gap-2 transition-all`}>
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/pages/services"
              className="inline-flex items-center gap-2 text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm hover:underline"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          PRODUCTS SHOWCASE
      =================================================== */}
      <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="vp-divider mb-4" />
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Products We&rsquo;ve Shipped
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                In-house platforms trusted by businesses across India. Proof
                that we don&rsquo;t just build for clients — we build for
                ourselves too.
              </p>
            </div>
            <Link
              href="/pages/portfolio"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-[#1E293B] text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-white dark:hover:bg-[#151C2B] transition-all"
            >
              View Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p) => (
              <div
                key={p.name}
                className="group bg-white dark:bg-[#080C14] rounded-2xl border border-gray-100 dark:border-[#1E293B] p-6 hover:shadow-[0_12px_40px_rgba(12,27,51,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product monogram */}
                <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {p.name.charAt(0)}
                  </span>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1.5">
                  {p.tag}
                </span>
                <h3
                  className="text-base font-bold text-[#0C1B33] dark:text-white mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          STATS COUNTER
      =================================================== */}
      <StatsCounter />

      {/* ===================================================
          WHY VEDPRAGYA
      =================================================== */}
      <WhyChooseUs />

      {/* ===================================================
          CASE STUDIES
      =================================================== */}
      <CaseStudyShowcase />

      {/* ===================================================
          OUR PROCESS
      =================================================== */}
      <ProcessTimeline />

      {/* ===================================================
          TESTIMONIALS
      =================================================== */}
      <TestimonialCarousel />

      {/* ===================================================
          FINAL CTA
      =================================================== */}
      <section className="compact-main-section bg-[#0C1B33] relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#2563EB]/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#D4870A]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Tell us about your project. Our team will respond within 24 hours
            with a clear plan — no fluff, no over-selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/pages/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(212,135,10,0.4)] hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/pages/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold text-base rounded-xl transition-all hover:bg-white/5"
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
