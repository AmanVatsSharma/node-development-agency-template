"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

export default function WebDevIllustration({ className = "" }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const noMotion = useReducedMotion();

  const dp = (delay: number, dur = 0.65, opacity = 1) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: inView ? { pathLength: 1, opacity } : {},
    transition: {
      pathLength: { duration: dur, delay, ease: "easeInOut" },
      opacity: { duration: 0.2, delay },
    },
  });

  const fi = (delay: number, opacity = 1) => ({
    initial: { opacity: 0 },
    animate: inView ? { opacity } : {},
    transition: { duration: 0.4, delay },
  });

  const si = (delay: number) => ({
    initial: { scale: 0, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : {},
    transition: { type: "spring" as const, stiffness: 220, damping: 18, delay },
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={!noMotion && inView ? { y: [-5, 5, -5] } : {}}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
    >
      <svg viewBox="0 0 300 240" fill="none" aria-hidden="true" className="w-full h-full">

        {/* ── Browser window frame ── */}
        <motion.rect x="8" y="18" width="284" height="204" rx="12" stroke="#2563EB" strokeWidth="1.5" {...fi(0)} />

        {/* Header chrome divider */}
        <motion.path d="M 8 46 L 292 46" stroke="#2563EB" strokeWidth="1" {...dp(0.15, 0.5, 0.35)} />

        {/* Traffic light dots */}
        <motion.circle cx="26" cy="32" r="5" stroke="#2563EB" strokeWidth="1.5" {...si(0.2)} />
        <motion.circle cx="42" cy="32" r="5" stroke="#D4870A" strokeWidth="1.5" {...si(0.28)} />
        <motion.circle cx="58" cy="32" r="5" stroke="#2563EB" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.3 } : {}}
          transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.36 }}
        />

        {/* URL bar */}
        <motion.rect x="84" y="25" width="132" height="14" rx="7" stroke="currentColor" strokeWidth="1" {...fi(0.4, 0.2)} />

        {/* ── Code lines ── */}
        {/* Row 1: keyword + value */}
        <motion.path d="M 28 66 L 108 66" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" {...dp(0.44)} />
        <motion.path d="M 116 66 L 178 66" stroke="#D4870A" strokeWidth="2.5" strokeLinecap="round" {...dp(0.47)} />

        {/* Row 2: indented, muted */}
        <motion.path d="M 44 82 L 224 82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...dp(0.51, 0.6, 0.16)} />

        {/* Row 3: blue + gold segment */}
        <motion.path d="M 44 98 L 142 98" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" {...dp(0.54)} />
        <motion.path d="M 150 98 L 204 98" stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" {...dp(0.56)} />

        {/* Row 4: long muted */}
        <motion.path d="M 44 114 L 258 114" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...dp(0.59, 0.6, 0.16)} />

        {/* Row 5: short blue keyword */}
        <motion.path d="M 28 130 L 86 130" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" {...dp(0.62)} />

        {/* Row 6: muted comment */}
        <motion.path d="M 28 150 L 198 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...dp(0.65, 0.6, 0.16)} />

        {/* Row 7: gold string */}
        <motion.path d="M 44 166 L 168 166" stroke="#D4870A" strokeWidth="2" strokeLinecap="round" {...dp(0.68)} />

        {/* Row 8: blue function */}
        <motion.path d="M 44 182 L 218 182" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" {...dp(0.71)} />

        {/* Row 9: closing brace */}
        <motion.path d="M 28 198 L 90 198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...dp(0.74, 0.6, 0.16)} />

        {/* Blinking cursor */}
        <motion.rect x="222" y="174" width="2.5" height="14" rx="1.5" fill="#D4870A"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [1, 0, 1] } : {}}
          transition={{ duration: 0.85, repeat: Infinity, ease: "steps(1)", delay: 1.5 }}
        />

        {/* ── Floating { } badge ── */}
        <motion.g {...fi(1.0)}>
          <rect x="250" y="2" width="46" height="22" rx="11" fill="#D4870A" fillOpacity="0.1" stroke="#D4870A" strokeWidth="1" />
          <text x="261" y="17" fill="#D4870A" fontSize="11" fontFamily="monospace" fontWeight="700">{"{ }"}</text>
        </motion.g>

        {/* ── Floating </> badge ── */}
        <motion.g {...fi(1.1)}>
          <rect x="4" y="216" width="42" height="22" rx="11" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="1" />
          <text x="9" y="231" fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="700">{"</>"}</text>
        </motion.g>

      </svg>
    </motion.div>
  );
}
