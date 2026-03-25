"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    desc: "We start with listening. Deep-dive workshops, stakeholder interviews, and a precise technical audit. Output: a scoped roadmap, not vague estimates.",
    duration: "1–2 weeks",
  },
  {
    number: 2,
    title: "Architecture & Design",
    desc: "System architecture is decided before any code is written. UX wireframes validated with stakeholders. Design system defined once, used everywhere.",
    duration: "1–3 weeks",
  },
  {
    number: 3,
    title: "Agile Development",
    desc: "Two-week sprints. Working software shipped every cycle. Daily async standups, full visibility into progress via client dashboard.",
    duration: "6–16 weeks",
  },
  {
    number: 4,
    title: "QA & Security Review",
    desc: "Automated test suites, load testing, security audits, and cross-device QA before any feature reaches staging. Zero surprises at launch.",
    duration: "1–2 weeks",
  },
  {
    number: 5,
    title: "Launch & Handover",
    desc: "Smooth production deployment with zero-downtime rollouts. Full documentation, team training, and a monitoring setup that alerts us before you notice issues.",
    duration: "Ongoing",
  },
];

function StepItem({ step, index }: { step: Step; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Left: number + line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-10 h-10 rounded-xl bg-[#D4870A] text-white flex items-center justify-center font-bold text-sm shrink-0"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div className="w-px flex-grow bg-white/10 mt-3 mb-0" />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-10 ${index === steps.length - 1 ? "" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3
            className="text-lg font-bold text-white"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {step.title}
          </h3>
          <span className="text-[10px] font-bold text-[#D4870A] uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#D4870A]/30 bg-[#D4870A]/10">
            {step.duration}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessTimeline() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="compact-main-section bg-[#0C1B33] relative overflow-hidden content-visibility-auto">
      {/* Ambient */}
      <div className="absolute inset-0 hero-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2563EB]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column — header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="vp-divider mb-4" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              How We Deliver
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A structured, transparent process that turns complex requirements
              into reliable software — on time, every time.
            </p>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-sm rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(212,135,10,0.35)] hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Right column — steps */}
          <div>
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
