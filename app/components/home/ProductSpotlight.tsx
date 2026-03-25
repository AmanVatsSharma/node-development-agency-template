"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "bharaterp",
    name: "BharatERP",
    tag: "Enterprise ERP",
    tagline: "SAP-level ERP at a fraction of the cost.",
    desc: "A complete SAP Hana-compatible ERP system built in Node.js — finance, inventory, HR, supply chain, and custom modules. Deployed for 12+ enterprise clients in manufacturing and retail.",
    metrics: [
      { val: "12+", label: "Enterprise Clients" },
      { val: "60%", label: "Cost vs SAP Hana" },
      { val: "99.9%", label: "Uptime" },
    ],
    tags: ["Node.js", "PostgreSQL", "React", "Microservices"],
    accentBg: "bg-[#0C1B33]",
    accentText: "text-[#D4870A]",
    highlight: "#D4870A",
  },
  {
    id: "tradezen",
    name: "TradeZen",
    tag: "Trading Platform",
    tagline: "Real-time charting for 50K+ concurrent traders.",
    desc: "Market data platform with sub-50ms latency, NSE/MCX live feeds, and professional charting tools used by thousands of traders every day.",
    metrics: [
      { val: "50K+", label: "Concurrent Users" },
      { val: "<50ms", label: "Data Latency" },
      { val: "100%", label: "Market-Hours Uptime" },
    ],
    tags: ["WebSocket", "Redis", "Node.js", "Next.js"],
    accentBg: "bg-emerald-700",
    accentText: "text-emerald-400",
    highlight: "#059669",
  },
  {
    id: "promerchants",
    name: "Promerchants",
    tag: "E-Commerce Platform",
    tagline: "Multi-vendor commerce built for scale.",
    desc: "Advanced e-commerce platform with multi-vendor support, integrated payments, real-time inventory management, and WhatsApp commerce — built for modern Indian businesses.",
    metrics: [
      { val: "50+", label: "Active Merchants" },
      { val: "99.5%", label: "Uptime" },
      { val: "<3s", label: "Avg Page Load" },
    ],
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    accentBg: "bg-blue-700",
    accentText: "text-blue-400",
    highlight: "#2563EB",
  },
  {
    id: "waterakt",
    name: "Waterakt",
    tag: "WhatsApp Marketing",
    tagline: "10× your marketing ROI with WhatsApp automation.",
    desc: "WhatsApp marketing software for e-commerce — automated campaigns, customer segmentation, broadcast messages, and real-time analytics.",
    metrics: [
      { val: "500+", label: "Active Businesses" },
      { val: "40%", label: "Avg Open Rate" },
      { val: "10×", label: "ROI vs Email" },
    ],
    tags: ["WhatsApp API", "Node.js", "React", "MongoDB"],
    accentBg: "bg-green-700",
    accentText: "text-green-400",
    highlight: "#16a34a",
  },
  {
    id: "swiftshift",
    name: "SwiftShift",
    tag: "Logistics AI",
    tagline: "AI-optimized delivery operations.",
    desc: "AI-powered couriers and logistics management with route optimization, driver tracking, customer notifications, and supply chain analytics.",
    metrics: [
      { val: "25%", label: "Cost Reduction" },
      { val: "AI", label: "Route Optimization" },
      { val: "Real-time", label: "Tracking" },
    ],
    tags: ["AI/ML", "Node.js", "React Native", "Maps API"],
    accentBg: "bg-orange-700",
    accentText: "text-orange-400",
    highlight: "#c2410c",
  },
  {
    id: "mailzen",
    name: "MailZen",
    tag: "AI Mail Management",
    tagline: "Cut email time by 70% with AI triage.",
    desc: "AI-powered enterprise mail management — automated triage, smart replies, workflow automation, and team collaboration features.",
    metrics: [
      { val: "70%", label: "Time Saved" },
      { val: "99%", label: "AI Accuracy" },
      { val: "Instant", label: "Triage" },
    ],
    tags: ["OpenAI", "Node.js", "Next.js", "PostgreSQL"],
    accentBg: "bg-violet-700",
    accentText: "text-violet-400",
    highlight: "#7c3aed",
  },
];

export default function ProductSpotlight() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#080C14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="vp-divider mb-4" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Products We&rsquo;ve Shipped
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
              We don&rsquo;t just build for clients — we ship our own products. Real software in production, proving our standard every day.
            </p>
          </div>
          <Link
            href="/pages/portfolio"
            className="shrink-0 inline-flex items-center gap-2 text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm hover:underline"
          >
            View full portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab list — horizontal scroll on mobile, vertical on desktop */}
          <div className="lg:w-56 xl:w-64 shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 lg:flex-col lg:overflow-x-visible hide-scrollbar">
              {products.map((prod, i) => (
                <button
                  key={prod.id}
                  onClick={() => setActive(i)}
                  className={`vp-spotlight-tab text-left shrink-0 lg:w-full ${i === active ? "active" : ""}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{
                      backgroundColor: i === active ? prod.highlight : "rgba(12,27,51,0.12)",
                      fontFamily: "var(--font-sora), sans-serif",
                    }}
                  >
                    {prod.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold leading-tight truncate ${i === active ? "text-white" : "text-[#0C1B33] dark:text-gray-300"}`}
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {prod.name}
                    </p>
                    <p className={`text-[10px] truncate ${i === active ? "text-white/60" : "text-gray-400 dark:text-gray-500"}`}>
                      {prod.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div
            key={p.id}
            className="flex-1 bg-white dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] overflow-hidden"
            style={{ borderTopColor: p.highlight, borderTopWidth: "3px" }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                    {p.tag}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#0C1B33] dark:text-white mb-1"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="font-semibold text-sm" style={{ color: p.highlight }}>
                    {p.tagline}
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0"
                  style={{ backgroundColor: p.highlight, fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {p.name.charAt(0)}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                {p.desc}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 py-5 border-t border-b border-gray-100 dark:border-[#1E293B]">
                {p.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p
                      className="text-2xl sm:text-3xl font-bold text-[#0C1B33] dark:text-white mb-1"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {m.val}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#151C2B] border border-gray-200 dark:border-[#1E293B] text-gray-600 dark:text-gray-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
