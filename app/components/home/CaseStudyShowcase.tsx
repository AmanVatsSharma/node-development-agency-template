"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface CaseStudy {
  id: string;
  label: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  detail: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "bharaterp",
    label: "Enterprise ERP",
    title: "BharatERP — SAP-level ERP at a fraction of the cost",
    client: "12 Enterprise Clients",
    industry: "Manufacturing & Retail",
    summary: "Built a complete SAP Hana-compatible ERP in Node.js with custom modules for inventory, finance, HR, and supply chain.",
    detail: "The client needed a scalable ERP that could be customized per business unit. We architected a microservices-based system with a unified data layer, enabling 12 enterprises to share the platform while maintaining complete data isolation. Delivered in 18 weeks.",
    metrics: [
      { value: "12", label: "Enterprise Deployments" },
      { value: "60%", label: "Cost vs SAP Hana" },
      { value: "99.9%", label: "Uptime" },
    ],
    tags: ["Node.js", "PostgreSQL", "React", "Microservices"],
    accentColor: "#0C1B33",
  },
  {
    id: "tradezen",
    label: "Trading Platform",
    title: "TradeZen — Real-time charting for 50K+ concurrent traders",
    client: "Financial Technology Firm",
    industry: "Trading & Finance",
    summary: "Architected a real-time market data platform handling 50,000+ concurrent users with sub-50ms latency and NSE/MCX live feeds.",
    detail: "Latency was the central constraint. We built a custom WebSocket fanout layer backed by Redis Streams, eliminating the database as a bottleneck for live data. Result: 50ms p99 latency under full load, with zero downtime during market hours.",
    metrics: [
      { value: "50K+", label: "Concurrent Users" },
      { value: "<50ms", label: "Latency" },
      { value: "100%", label: "Market-Hours Uptime" },
    ],
    tags: ["WebSocket", "Redis", "Node.js", "Next.js"],
    accentColor: "#059669",
  },
  {
    id: "logistics-ai",
    label: "AI Voice Automation",
    title: "10× call capacity with AI voice agents",
    client: "Dubai Logistics Hub",
    industry: "Logistics · UAE",
    summary: "Deployed AI voice agents that handle customer support 24/7, automating 80% of inquiries with positive ROI in month one.",
    detail: "The client's support team was overwhelmed. We integrated OpenAI's voice API with their ticketing system and built a fallback-to-human escalation flow. The agents handle order status, delivery rescheduling, and FAQs. First month ROI exceeded projections.",
    metrics: [
      { value: "10×", label: "Call Capacity" },
      { value: "80%", label: "Inquiries Automated" },
      { value: "Month 1", label: "Positive ROI" },
    ],
    tags: ["AI Voice", "Node.js", "Twilio", "OpenAI"],
    accentColor: "#7C3AED",
  },
];

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(12,27,51,0.10)] dark:hover:shadow-[0_16px_50px_rgba(0,0,0,0.30)] flex flex-col"
    >
      {/* Top accent */}
      <div className="h-[3px]" style={{ backgroundColor: cs.accentColor }} />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Industry + label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {cs.industry}
          </span>
          <span className="text-gray-200 dark:text-gray-700">·</span>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: cs.accentColor }}>
            {cs.label}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-bold text-[#0C1B33] dark:text-white mb-3 leading-snug"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {cs.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {cs.summary}
        </p>

        {/* Expanded detail (desktop hover / mobile toggle) */}
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 border-t border-gray-100 dark:border-[#1E293B] pt-4"
          >
            {cs.detail}
          </motion.p>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-t border-b border-gray-100 dark:border-[#1E293B]">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p
                className="text-lg font-bold text-[#0C1B33] dark:text-white mb-0.5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {m.value}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#151C2B] border border-gray-200 dark:border-[#1E293B] text-gray-500 dark:text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto">
          {/* "Read more" — always visible (works on touch) */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs font-bold underline-offset-2 hover:underline transition-colors min-h-[36px] flex items-center gap-1 text-[#2563EB]"
          >
            {expanded ? "Show less" : "Read more"}
            <svg
              className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Link
            href="/pages/portfolio"
            className="ml-auto text-xs font-semibold text-gray-400 dark:text-gray-500 hover:text-[#0C1B33] dark:hover:text-white transition-colors min-h-[36px] flex items-center gap-1"
          >
            View in portfolio
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudyShowcase() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-white dark:bg-[#080C14] relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"
        >
          <div className="max-w-xl">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Results, Not Promises
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              A sample of the work we&rsquo;re proud of — measured in real business outcomes.
            </p>
          </div>
          <Link
            href="/pages/portfolio"
            className="shrink-0 inline-flex items-center gap-2 text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm hover:underline"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
