"use client";

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
  metrics: { value: string; label: string }[];
  tags: string[];
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "bharaterp",
    label: "Enterprise ERP",
    title: "BharatERP — SAP-level ERP at a fraction of the cost",
    client: "Vedpragya Internal + 12 Enterprise Clients",
    industry: "Manufacturing & Retail",
    summary:
      "Built a complete SAP Hana-compatible ERP system in Node.js with custom modules for inventory, finance, HR, and supply chain — deployed for 12 enterprise clients across India.",
    metrics: [
      { value: "12", label: "Enterprise Deployments" },
      { value: "60%", label: "Cost vs SAP Hana" },
      { value: "99.9%", label: "Uptime Achieved" },
    ],
    tags: ["Node.js", "PostgreSQL", "React", "Microservices"],
    accentColor: "bg-[#0C1B33]",
  },
  {
    id: "tradezen",
    label: "Trading Platform",
    title: "TradeZen — Real-time charting for 50K+ active traders",
    client: "Financial Technology Firm",
    industry: "Trading & Finance",
    summary:
      "Architected a real-time market data platform handling 50,000+ concurrent users with sub-50ms latency, NSE/MCX live feeds, and professional charting tools.",
    metrics: [
      { value: "50K+", label: "Concurrent Users" },
      { value: "<50ms", label: "Latency" },
      { value: "100%", label: "Uptime During Market Hours" },
    ],
    tags: ["WebSocket", "Redis", "Node.js", "Next.js"],
    accentColor: "bg-emerald-700",
  },
  {
    id: "logistics-ai",
    label: "AI Voice Automation",
    title: "10× call capacity with AI voice agents",
    client: "Dubai Logistics Hub",
    industry: "Logistics & E-Commerce",
    summary:
      "Deployed AI voice agents that handle customer support calls 24/7 — automating 80% of inquiries, reducing agent workload tenfold, and improving customer satisfaction.",
    metrics: [
      { value: "10×", label: "Call Capacity Increase" },
      { value: "80%", label: "Inquiries Automated" },
      { value: "1 Month", label: "Time to Positive ROI" },
    ],
    tags: ["AI Voice", "Node.js", "Twilio", "OpenAI"],
    accentColor: "bg-[#D4870A]",
  },
];

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] overflow-hidden hover:shadow-[0_16px_50px_rgba(12,27,51,0.1)] dark:hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Top accent strip */}
      <div className={`h-1.5 w-full ${cs.accentColor}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Labels */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {cs.industry}
          </span>
          <span className="text-gray-200 dark:text-gray-700">·</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4870A]">
            {cs.label}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-[#0C1B33] dark:text-white mb-3 leading-snug"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {cs.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-1">
          {cs.summary}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-b border-gray-100 dark:border-[#1E293B]">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p
                className="text-xl font-bold text-[#0C1B33] dark:text-white mb-0.5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {m.value}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#151C2B] text-gray-600 dark:text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudyShowcase() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#080C14] relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="vp-divider mb-4" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Results, Not Promises
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              A sample of the work we&rsquo;re proud to have built — measured
              by real business impact.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
