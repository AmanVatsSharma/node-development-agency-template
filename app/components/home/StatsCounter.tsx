"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import NumberTicker from "@/app/components/ui/number-ticker";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Delivered", sublabel: "Across web, mobile, ERP & AI" },
  { value: 200, suffix: "+", label: "Clients Served", sublabel: "India, UAE, USA & beyond" },
  { value: 5, suffix: "", label: "Global Offices", sublabel: "India · UAE · USA · Canada · China" },
  { value: 99, suffix: "%", label: "Client Retention", sublabel: "Because we treat clients like partners" },
];

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
        className="text-4xl sm:text-5xl font-bold text-[#0C1B33] dark:text-white mb-1 tabular-nums"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <NumberTicker
          value={stat.value}
          suffix={stat.suffix}
          delay={index * 0.12}
          className="text-4xl sm:text-5xl font-bold text-[#0C1B33] dark:text-white tabular-nums"
        />
      </p>
      <p
        className="text-base font-semibold text-[#0C1B33] dark:text-white mb-0.5"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {stat.label}
      </p>
      <p className="text-sm text-gray-400 dark:text-gray-500">{stat.sublabel}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#080C14] relative overflow-hidden content-visibility-auto border-y border-gray-100 dark:border-[#1E293B]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-[#1E293B]">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
