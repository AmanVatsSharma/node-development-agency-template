"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 50, stiffness: 90 });

  useEffect(() => {
    if (isInView) mv.set(value);
  }, [isInView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="text-center md:text-left"
    >
      <p
        className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
      </p>
      <p
        className="text-base font-semibold text-white/90 mb-0.5"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {stat.label}
      </p>
      <p className="text-sm text-white/50">{stat.sublabel}</p>
    </motion.div>
  );
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Delivered", sublabel: "Across web, mobile, ERP & AI" },
  { value: 200, suffix: "+", label: "Clients Served", sublabel: "India, UAE, USA & beyond" },
  { value: 5, suffix: "", label: "Global Offices", sublabel: "India · UAE · USA · Canada · China" },
  { value: 99, suffix: "%", label: "Client Retention", sublabel: "Because we treat clients like partners" },
];

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-[#0C1B33] relative overflow-hidden content-visibility-auto">
      {/* Ambient */}
      <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-[400px] h-full bg-gradient-to-l from-[#D4870A]/8 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
