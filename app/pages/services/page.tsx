import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Vedpragya — Software Development & IT Solutions",
  description:
    "Web & mobile apps, AI automation, e-commerce, ERP, digital marketing, trading platforms — full-service software and IT from Vedpragya.",
};

const serviceCategories = [
  {
    id: "web",
    number: "01",
    title: "Web & Mobile Development",
    tagline: "Full-stack applications built to perform at scale.",
    desc: "From consumer apps to enterprise platforms, we build with Next.js, React, Node.js, and modern architecture patterns. Every product is designed for performance, accessibility, and long-term maintainability.",
    services: [
      { name: "Next.js Development", href: "/pages/next-js-development" },
      { name: "React.js Development", href: "/pages/reactjs-development" },
      { name: "Custom Web Development", href: "/pages/web-development" },
      { name: "Business Website", href: "/pages/business-website" },
      { name: "Website Services", href: "/pages/website-services" },
    ],
    accent: "#2563EB",
    bg: "from-blue-500/8 to-blue-600/4",
  },
  {
    id: "ai",
    number: "02",
    title: "AI & Automation",
    tagline: "Intelligent systems that work while you sleep.",
    desc: "AI chatbots, voice agents, workflow automation, and machine learning integrations. We design AI solutions that solve real operational problems — not AI for the sake of buzzwords.",
    services: [
      { name: "AI Chatbot Development", href: "/pages/ai-chatbot-development" },
      { name: "AI Voice Agents", href: "/pages/ai-voice-agents" },
      { name: "WhatsApp Business API", href: "/pages/whatsapp-business-api" },
    ],
    accent: "#7C3AED",
    bg: "from-violet-500/8 to-violet-600/4",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-Commerce Platforms",
    tagline: "Online stores engineered to convert.",
    desc: "Shopify development, headless migrations, product page optimization, and custom e-commerce solutions. We understand conversion, UX, and the operational realities of running an online business.",
    services: [
      { name: "Shopify Store Setup", href: "/pages/shopify-store-setup" },
      { name: "Shopify Headless Migration", href: "/pages/shopify-headless-migration" },
      { name: "Product Page Customization", href: "/pages/shopify-product-page-customization" },
      { name: "E-Commerce Google Ads", href: "/pages/ecommerce-google-ads-optimization" },
    ],
    accent: "#059669",
    bg: "from-emerald-500/8 to-emerald-600/4",
  },
  {
    id: "erp",
    number: "04",
    title: "ERP & Enterprise Software",
    tagline: "Mission-critical systems that run businesses.",
    desc: "Custom ERP systems, CRM platforms, healthcare software, and trading platforms. We have shipped BharatERP — a complete SAP-compatible ERP in Node.js — and apply that same engineering depth to client projects.",
    services: [
      { name: "Healthcare Software", href: "/pages/healthcare-software-development" },
      { name: "Trading Software", href: "/pages/trading-software" },
      { name: "NSE/MCX Market Data", href: "/pages/nse-mcx-live-market-data" },
      { name: "CRM Platform", href: "/pages/crm" },
    ],
    accent: "#D97706",
    bg: "from-amber-500/8 to-amber-600/4",
  },
  {
    id: "marketing",
    number: "05",
    title: "Digital Marketing & Growth",
    tagline: "Performance marketing backed by data.",
    desc: "Google Ads management, SEO audits, landing page optimization, B2B lead generation, and YouTube advertising. We run campaigns that drive qualified traffic and measurable ROI.",
    services: [
      { name: "Google Ads Management", href: "/pages/google-ads-management" },
      { name: "Google Ads Ecosystem", href: "/pages/google-ads-ecosystem" },
      { name: "Enterprise Google Ads", href: "/pages/enterprise-google-ads-management" },
      { name: "SEO Audit", href: "/pages/seo-audit" },
      { name: "B2B Lead Generation", href: "/pages/b2b-lead-generation-ads" },
      { name: "Landing Page Optimization", href: "/pages/landing-page-optimization" },
      { name: "YouTube Advertising", href: "/pages/youtube-advertising-management" },
      { name: "Local Business Ads", href: "/pages/local-business-google-ads" },
    ],
    accent: "#DC2626",
    bg: "from-rose-500/8 to-rose-600/4",
  },
  {
    id: "trading",
    number: "06",
    title: "Trading & Finance Technology",
    tagline: "Real-time financial systems at institutional quality.",
    desc: "Live market data platforms, algorithmic trading tools, charting software, and fintech infrastructure. We understand the latency, reliability, and compliance requirements of financial software.",
    services: [
      { name: "Trading Software Development", href: "/pages/trading-software" },
      { name: "NSE/MCX Live Market Data", href: "/pages/nse-mcx-live-market-data" },
    ],
    accent: "#0D9488",
    bg: "from-teal-500/8 to-teal-600/4",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="compact-main-hero bg-[#0C1B33] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#2563EB]/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4870A]/40 bg-[#D4870A]/10 text-[#D4870A] text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4870A]" />
              What We Do
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Six Disciplines.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4870A] to-[#F59E0B]">
                One Team.
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              From a startup&rsquo;s first web app to a multinational&rsquo;s
              digital transformation — we have the depth and breadth to take it
              on.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="compact-main-section bg-white dark:bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left: info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: cat.accent }}
                    >
                      {cat.number}
                    </span>
                    <div className="h-px w-8 opacity-30" style={{ backgroundColor: cat.accent }} />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[#0C1B33] dark:text-white mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {cat.title}
                  </h2>
                  <p
                    className="font-semibold mb-3"
                    style={{ color: cat.accent, fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {cat.tagline}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/pages/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C1B33] dark:bg-[#1A3A6C] hover:bg-[#1A3A6C] text-white font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Discuss a Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: service links */}
                <div className={`rounded-2xl bg-gradient-to-br ${cat.bg} dark:from-[#0F1623] dark:to-[#0F1623] border border-gray-100 dark:border-[#1E293B] p-6`}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Services in this area
                  </p>
                  <ul className="space-y-2">
                    {cat.services.map((svc) => (
                      <li key={svc.name}>
                        <Link
                          href={svc.href}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-white dark:hover:bg-[#151C2B] transition-colors"
                        >
                          <span
                            className="font-medium text-[#0C1B33] dark:text-gray-200 text-sm group-hover:text-[#0C1B33] dark:group-hover:text-white"
                          >
                            {svc.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="compact-main-section bg-[#0C1B33] relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your business challenge. We&rsquo;ll recommend the
            right solution — and give you an honest estimate.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-base rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(212,135,10,0.4)] hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Talk to Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
