"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WobbleCard } from "@/app/components/ui/wobble-card";

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
    desc: "From UX to backend to deployment — one team owns the entire stack. No hand-offs, no gaps.",
    highlight: "6 disciplines, one team",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "own-products",
    title: "We Ship Our Own Products",
    desc: "BharatERP, TradeZen, Promerchants — real products we built and maintain. We eat our own cooking.",
    highlight: "7 products in production",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "transparent",
    title: "Radical Transparency",
    desc: "Full code access, real-time dashboards, and weekly written updates. Your project, your visibility.",
    highlight: "Real-time dashboards",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: "scalable",
    title: "Built to Scale",
    desc: "Architectured for 100 users or 10 million. No rewrites when you grow — just proven patterns from day one.",
    highlight: "99.9% uptime SLA",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "global-local",
    title: "Global Reach, Local Nuance",
    desc: "Offices in India, UAE, and North America. We understand the market and regulatory realities that matter.",
    highlight: "5 offices, 3 continents",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "post-launch",
    title: "Partnership, Not Projects",
    desc: "We don't disappear after go-live. SLA-backed support, proactive monitoring, and a dedicated account manager.",
    highlight: "24/7 support",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function DiffCard({ d, index }: { d: Differentiator; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.48, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <WobbleCard
        containerClassName="bg-white dark:bg-[#0F1623] border border-gray-100 dark:border-[#1E293B] min-h-[160px]"
        className="p-5"
      >
        <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] dark:bg-[#1E3A5F] text-[#2563EB] flex items-center justify-center mb-3 shrink-0">
          {d.icon}
        </div>
        <h3
          className="text-sm font-bold text-[#0C1B33] dark:text-white mb-1.5 leading-snug"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {d.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          {d.desc}
        </p>
      </WobbleCard>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623] relative overflow-hidden">
      {/* Subtle background illustration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none select-none overflow-hidden">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#0C1B33" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="130" stroke="#0C1B33" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="80" stroke="#0C1B33" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: editorial statement ── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -20 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1B33] dark:text-white mb-6 tracking-tight leading-[1.1]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Why businesses{" "}
              <span className="text-[#2563EB]">choose us</span>
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#0C1B33] dark:border-white/20 pl-5 mb-8">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed italic">
                &ldquo;Built to last. Engineered to scale.
                Transparent by design.&rdquo;
              </p>
            </blockquote>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
              Most software agencies disappear after launch. We stay — as your
              engineering partner, not just a vendor. Every decision we make is
              optimized for your long-term success, not our short-term margin.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Projects" },
                { num: "99%", label: "Client Retention" },
                { num: "7", label: "Own Products" },
                { num: "5", label: "Global Offices" },
              ].map((s) => (
                <div key={s.label} className="bg-white dark:bg-[#080C14] rounded-xl p-4 border border-gray-100 dark:border-[#1E293B]">
                  <p
                    className="text-2xl font-bold text-[#0C1B33] dark:text-white mb-0.5"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: 2×3 card grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <DiffCard key={d.id} d={d} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
