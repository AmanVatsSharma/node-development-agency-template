"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Link from "next/link";

interface Step {
  number: number;
  title: string;
  desc: string;
  duration: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Discovery & Scoping",
    desc: "Deep-dive workshops and stakeholder interviews. Output: a scoped roadmap with honest timelines, not vague estimates.",
    duration: "1–2 weeks",
  },
  {
    number: 2,
    title: "Architecture & Design",
    desc: "System architecture decided before a line of code is written. UX wireframes validated with stakeholders. Design system defined once.",
    duration: "1–3 weeks",
  },
  {
    number: 3,
    title: "Agile Development",
    desc: "Two-week sprints. Working software shipped every cycle. Full visibility through client dashboards and async standups.",
    duration: "6–16 weeks",
  },
  {
    number: 4,
    title: "QA & Security Review",
    desc: "Automated test suites, load testing, security audits, and cross-device QA. Zero surprises at launch.",
    duration: "1–2 weeks",
  },
  {
    number: 5,
    title: "Launch & Partnership",
    desc: "Zero-downtime deployment, full documentation, team training, and monitoring setup. Then we stay — as your partner.",
    duration: "Ongoing",
  },
];

function StepItem({ step, index, total }: { step: Step; index: number; total: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 sm:gap-7"
    >
      {/* Left: number + connector */}
      <div className="flex flex-col items-center shrink-0 w-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
          className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-[0_4px_16px_rgba(37,99,235,0.30)]"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {step.number}
        </motion.div>

        {/* Animated connector line — hidden on mobile via parent visibility */}
        {!isLast && (
          <div className="relative flex-1 w-px mt-2 mb-0 overflow-hidden hidden sm:block">
            {/* Static track */}
            <div className="absolute inset-0 bg-white/8" />
            {/* Animated fill */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[#2563EB] to-[#2563EB]/15"
            />
          </div>
        )}

        {/* Mobile vertical connector (simpler) */}
        {!isLast && (
          <div className="flex-1 w-px mt-2 bg-white/10 sm:hidden" />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-10 sm:pb-12 ${isLast ? "pb-0" : ""} pt-0.5`}>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
          <h3
            className="text-base sm:text-lg font-bold text-white leading-snug"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {step.title}
          </h3>
          <span className="text-[10px] font-medium text-white/50 uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] shrink-0">
            {step.duration}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessTimeline() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-[#0A1628] relative overflow-hidden content-visibility-auto">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: sticky header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              How We{" "}
              <span className="text-[#2563EB]">Deliver</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              A structured, transparent process that turns complex requirements
              into reliable software — on time, every time.
            </p>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Sprint cycle", value: "2 weeks" },
                { label: "Avg delivery", value: "12 weeks" },
                { label: "On-time rate", value: "96%" },
                { label: "Post-launch support", value: "24/7" },
              ].map((s) => (
                <div key={s.label} className="bg-white/4 rounded-xl p-3 border border-white/8">
                  <p
                    className="text-base font-bold text-white mb-0.5"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.40)] hover:-translate-y-0.5 min-h-[48px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* ── Right: timeline steps ── */}
          <div>
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
