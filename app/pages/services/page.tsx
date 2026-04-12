import Link from "next/link";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Spotlight } from "@/app/components/ui/spotlight";
import { MovingBorder } from "@/app/components/ui/moving-border";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";

// Icons per service category
function WebIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function AIIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function EcommerceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}
function ERPIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
function MarketingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    </svg>
  );
}
function TradingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

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
    icon: <WebIcon />,
    // Web is largest — spans 2 columns on lg
    large: true,
    href: "/pages/web-development",
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
    icon: <AIIcon />,
    large: false,
    href: "/pages/ai-chatbot-development",
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
    icon: <EcommerceIcon />,
    large: false,
    href: "/pages/shopify-store-setup",
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
    icon: <ERPIcon />,
    // ERP is also large — spans 2 columns
    large: true,
    href: "/pages/services#erp",
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
    icon: <MarketingIcon />,
    large: false,
    href: "/pages/google-ads-management",
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
    icon: <TradingIcon />,
    large: false,
    href: "/pages/trading-software",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="compact-main-hero bg-[#080C14] relative overflow-hidden flex items-center">
        <BackgroundBeams />
        <Spotlight className="absolute inset-0 w-full h-full" fill="rgba(37,99,235,0.10)">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                What We Do
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Six Disciplines.{" "}
                <span className="text-[#2563EB]">One Team.</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                From a startup&rsquo;s first web app to a multinational&rsquo;s digital
                transformation — we have the depth and breadth to take it on.
              </p>
            </div>
          </div>
        </Spotlight>
      </section>

      {/* ── BENTO GRID — service categories ──────────────────────────────────── */}
      <section className="compact-main-section bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1B33] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Everything You Need to Scale
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Six practice areas. One engineering team. Deep expertise in every discipline.
            </p>
          </div>

          {/* BentoGrid with two large items spanning 2 columns each */}
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <BentoGridItem
                key={cat.id}
                href={cat.href}
                title={cat.title}
                description={cat.desc}
                icon={cat.icon}
                // Web (index 0) and ERP (index 3) span 2 columns on lg to break the uniform grid
                className={cat.large ? "lg:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ── DETAILED SERVICE LISTINGS ─────────────────────────────────────────── */}
      <section className="compact-main-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1B33] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Individual Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Every service area has a dedicated page with detailed scope, deliverables, and pricing context.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left: heading + desc + CTA */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      {cat.icon}
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest text-[#2563EB]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {cat.number}
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#0C1B33] mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="font-semibold text-[#2563EB] mb-3 text-sm"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {cat.tagline}
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">{cat.desc}</p>
                  <Link
                    href="/pages/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Discuss a Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Right: service link cards */}
                <div className={`rounded-2xl bg-[#F4F4F5] border border-gray-100 p-6 shadow-[0_8px_32px_rgba(12,27,51,0.06)] ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Services in this area
                  </p>
                  <ul className="space-y-1.5">
                    {cat.services.map((svc) => (
                      <li key={svc.name}>
                        <Link
                          href={svc.href}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors"
                        >
                          <span className="font-medium text-[#0C1B33] text-sm group-hover:text-[#2563EB] transition-colors">
                            {svc.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-300 group-hover:text-[#2563EB] transition-colors"
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

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section className="compact-main-section bg-[#080C14] relative overflow-hidden">
        <BackgroundBeams />
        <Spotlight className="absolute inset-0 w-full h-full" fill="rgba(37,99,235,0.10)">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your business challenge. We&rsquo;ll recommend the right solution — and
              give you an honest estimate.
            </p>
            <MovingBorder
              as={Link}
              href="/pages/contact"
              duration={3000}
              containerClassName="rounded-xl p-[1.5px] inline-block"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] rounded-[10px] text-white font-bold text-base hover:bg-[#1D4ED8] transition-colors"
            >
              <span style={{ fontFamily: "var(--font-sora), sans-serif" }}>Talk to Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </MovingBorder>
          </div>
        </Spotlight>
      </section>

    </div>
  );
}
