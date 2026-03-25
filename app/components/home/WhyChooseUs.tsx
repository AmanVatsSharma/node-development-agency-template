"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Differentiator {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight: string;
}

const differentiators: Differentiator[] = [
  {
    id: "full-service",
    title: "Full-Service, Single Team",
    desc: "From UX design to backend architecture to deployment — one team owns the entire stack. No hand-offs, no gaps, no blame games.",
    highlight: "6 disciplines, one team",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "own-products",
    title: "We Build Our Own Products",
    desc: "BharatERP, Promerchants, TradeZen — real products in production. We eat our own cooking, which makes our client work sharper.",
    highlight: "7 products shipped",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "transparent",
    title: "Radical Transparency",
    desc: "No black-box development. You get full access to code, task boards, and progress reports. Your project, your visibility.",
    highlight: "Real-time dashboards",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: "scalable",
    title: "Built to Scale",
    desc: "We design for growth. Whether you have 100 users or 10 million, the architecture we build handles it without a rewrite.",
    highlight: "99.9% uptime SLA",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "global-local",
    title: "Global Reach, Local Understanding",
    desc: "Offices in India, UAE, and North America. We understand the regulatory, cultural, and market nuances that matter to your business.",
    highlight: "5 offices, 3 continents",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "post-launch",
    title: "Post-Launch Partnership",
    desc: "We don't disappear after go-live. Dedicated account managers, SLA-backed support, and proactive monitoring are standard.",
    highlight: "24/7 support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function Card({ d, index }: { d: Differentiator; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 rounded-2xl border border-gray-100 dark:border-[#1E293B] bg-white dark:bg-[#0F1623] hover:border-[#D4870A]/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(12,27,51,0.09)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-xl bg-[#0C1B33] dark:bg-[#1A3A6C] text-[#D4870A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {d.icon}
      </div>
      <h3
        className="text-base font-bold text-[#0C1B33] dark:text-white mb-2"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {d.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
        {d.desc}
      </p>
      <span className="inline-block text-xs font-bold text-[#D4870A] uppercase tracking-wide">
        {d.highlight}
      </span>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Why Businesses Choose Vedpragya
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Built to last. Engineered to scale. Transparent by design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <Card key={d.id} d={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
