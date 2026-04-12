import Link from "next/link";

const products = [
  {
    name: "BharatERP",
    tag: "Enterprise ERP System",
    desc: "A complete SAP Hana-compatible ERP built in Node.js — finance, inventory, HR, supply chain, and custom modules. Deployed for 12+ enterprise clients in manufacturing and retail.",
    metrics: [
      { val: "12+", label: "Enterprise Deployments" },
      { val: "60%", label: "Cost vs SAP Hana" },
      { val: "99.9%", label: "Uptime" },
    ],
    tags: ["Node.js", "PostgreSQL", "React", "Microservices"],
    color: "bg-[#0C1B33]",
    featured: true,
  },
  {
    name: "TradeZen",
    tag: "Trading & Charting Platform",
    desc: "Real-time market data platform handling 50,000+ concurrent users with sub-50ms latency. NSE/MCX live feeds and professional charting tools for traders.",
    metrics: [
      { val: "50K+", label: "Concurrent Users" },
      { val: "<50ms", label: "Latency" },
      { val: "100%", label: "Uptime in market hours" },
    ],
    tags: ["WebSocket", "Redis", "Node.js", "Next.js"],
    color: "bg-emerald-700",
    featured: false,
  },
  {
    name: "Promerchants",
    tag: "E-Commerce Platform",
    desc: "Advanced e-commerce platform built for modern online businesses — multi-vendor support, integrated payments, real-time inventory, and WhatsApp commerce.",
    metrics: [
      { val: "50+", label: "Active Merchants" },
      { val: "99.5%", label: "Uptime" },
      { val: "3s", label: "Avg page load" },
    ],
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    color: "bg-blue-700",
    featured: false,
  },
  {
    name: "Waterakt",
    tag: "WhatsApp Marketing SaaS",
    desc: "WhatsApp marketing software for e-commerce — automated campaigns, customer segmentation, broadcast messages, and analytics for business owners.",
    metrics: [
      { val: "500+", label: "Active Businesses" },
      { val: "40%", label: "Avg open rate" },
      { val: "10×", label: "ROI vs email" },
    ],
    tags: ["WhatsApp API", "Node.js", "React", "MongoDB"],
    color: "bg-green-700",
    featured: false,
  },
  {
    name: "MailZen",
    tag: "AI Mail Management",
    desc: "AI-powered enterprise mail management with automated triage, smart replies, workflow automation, and team collaboration features.",
    metrics: [
      { val: "70%", label: "Time saved on email" },
      { val: "AI", label: "Powered triage" },
      { val: "99%", label: "Accuracy" },
    ],
    tags: ["OpenAI", "Node.js", "Next.js", "PostgreSQL"],
    color: "bg-violet-700",
    featured: false,
  },
  {
    name: "SwiftShift",
    tag: "Logistics AI System",
    desc: "AI-powered couriers and logistics management — route optimization, driver tracking, customer notifications, and supply chain analytics.",
    metrics: [
      { val: "25%", label: "Delivery cost reduction" },
      { val: "AI", label: "Route optimization" },
      { val: "Real-time", label: "Tracking" },
    ],
    tags: ["AI/ML", "Node.js", "React Native", "Maps API"],
    color: "bg-orange-700",
    featured: false,
  },
  {
    name: "CodeYog",
    tag: "EdTech Platform",
    desc: "Open-source coding learning platform for developers — interactive exercises, project-based learning, community forums, and mentorship matching.",
    metrics: [
      { val: "Open", label: "Source" },
      { val: "1K+", label: "Community members" },
      { val: "Free", label: "Core features" },
    ],
    tags: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    color: "bg-indigo-700",
    featured: false,
  },
];

const caseStudies = [
  {
    client: "Dubai Logistics Hub",
    industry: "Logistics · UAE",
    title: "10× call capacity with AI voice automation",
    desc: "Deployed AI voice agents that handle customer support 24/7 — automating 80% of inquiries and delivering ROI in the first month.",
    metrics: [
      { val: "10×", label: "Call Capacity" },
      { val: "80%", label: "Automation Rate" },
      { val: "Month 1", label: "Positive ROI" },
    ],
    initials: "DL",
    color: "bg-violet-700",
  },
  {
    client: "GlobalShop Inc.",
    industry: "E-Commerce · UK",
    title: "35% conversion uplift with headless Shopify",
    desc: "Migrated legacy Shopify store to a headless Next.js frontend with new UX — 35% conversion rate increase and 2.4s page speed improvement.",
    metrics: [
      { val: "35%", label: "Conversion Uplift" },
      { val: "-2.4s", label: "Page Load Time" },
      { val: "4.2×", label: "Mobile Performance" },
    ],
    initials: "GS",
    color: "bg-emerald-700",
  },
  {
    client: "FinanceFlow Canada",
    industry: "Fintech · Canada",
    title: "SOC 2 compliant fintech platform in 14 weeks",
    desc: "Built a full-featured financial management platform with bank-grade security, compliance controls, and real-time reporting — delivered in 14 weeks.",
    metrics: [
      { val: "14 wks", label: "Delivery Time" },
      { val: "SOC 2", label: "Compliant" },
      { val: "99.99%", label: "Uptime" },
    ],
    initials: "FF",
    color: "bg-[#1A3A6C]",
  },
];

export default function PortfolioPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="compact-main-hero bg-[#0C1B33] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Our Work
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Products &{" "}
              <span className="text-[#2563EB]">
                Case Studies
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Seven in-house products. 500+ client projects. Real software,
              real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* IN-HOUSE PRODUCTS */}
      <section className="compact-main-section bg-white dark:bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Products We&rsquo;ve Shipped
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-14 max-w-2xl">
            We don&rsquo;t just build for clients — we build for ourselves.
            These platforms are live, used by real businesses, and proof of our
            engineering standard.
          </p>

          {/* Featured product */}
          {products
            .filter((p) => p.featured)
            .map((p) => (
              <div
                key={p.name}
                className="mb-8 bg-[#F4F4F5] dark:bg-[#0F1623] rounded-3xl border border-gray-100 dark:border-[#1E293B] overflow-hidden"
              >
                <div className={`h-2 w-full ${p.color}`} />
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-2">
                        {p.tag}
                      </span>
                      <h3
                        className="text-3xl font-bold text-[#0C1B33] dark:text-white mb-3"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-[#151C2B] border border-gray-200 dark:border-[#1E293B] text-gray-600 dark:text-gray-400 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-white dark:bg-[#080C14] rounded-2xl p-5 border border-gray-100 dark:border-[#1E293B] text-center"
                        >
                          <p
                            className="text-2xl font-bold text-[#0C1B33] dark:text-white mb-1"
                            style={{ fontFamily: "var(--font-sora), sans-serif" }}
                          >
                            {m.val}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products
              .filter((p) => !p.featured)
              .map((p) => (
                <div
                  key={p.name}
                  className="bg-[#F4F4F5] dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] overflow-hidden hover:shadow-[0_12px_40px_rgba(12,27,51,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className={`h-1.5 w-full ${p.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-white font-bold text-base shrink-0`}
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <p
                          className="font-bold text-[#0C1B33] dark:text-white text-sm"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          {p.name}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-medium">
                          {p.tag}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {p.desc}
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-t border-gray-100 dark:border-[#1E293B]">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p
                            className="text-sm font-bold text-[#0C1B33] dark:text-white"
                            style={{ fontFamily: "var(--font-sora), sans-serif" }}
                          >
                            {m.val}
                          </p>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-[#151C2B] border border-gray-200 dark:border-[#1E293B] text-gray-500 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CLIENT CASE STUDIES */}
      <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Client Results
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-14 max-w-2xl">
            A selection of client projects where our work produced measurable
            business impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="bg-white dark:bg-[#080C14] rounded-2xl border border-gray-100 dark:border-[#1E293B] overflow-hidden hover:shadow-[0_16px_50px_rgba(12,27,51,0.1)] dark:hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className={`h-1.5 ${cs.color}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${cs.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {cs.initials}
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold text-[#0C1B33] dark:text-white"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {cs.client}
                      </p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        {cs.industry}
                      </p>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0C1B33] dark:text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {cs.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                    {cs.desc}
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 dark:border-[#1E293B]">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p
                          className="text-base font-bold text-[#0C1B33] dark:text-white"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          {m.val}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
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
            Let&rsquo;s Build Your Next Success Story
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us what you&rsquo;re
            trying to build.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base rounded-xl transition-all shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
