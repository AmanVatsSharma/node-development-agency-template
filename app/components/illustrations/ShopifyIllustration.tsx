"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

export default function ShopifyIllustration({ className = "" }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const noMotion = useReducedMotion();

  const dp = (delay: number, dur = 0.6, opacity = 1) => ({
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

  const si = (delay: number, opacity = 1) => ({
    initial: { scale: 0, opacity: 0 },
    animate: inView ? { scale: 1, opacity } : {},
    transition: { type: "spring" as const, stiffness: 200, damping: 20, delay },
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={!noMotion && inView ? { y: [-5, 5, -5] } : {}}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
    >
      <svg viewBox="0 0 300 240" fill="none" aria-hidden="true" className="w-full h-full">

        {/* ── Storefront ── */}

        {/* Main building */}
        <motion.rect x="52" y="68" width="160" height="140" rx="6" stroke="#2563EB" strokeWidth="1.5" {...fi(0)} />

        {/* Roof / awning */}
        <motion.path d="M 44 78 L 150 30 L 256 78 Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" {...dp(0.1, 0.6, 0.7)} />

        {/* Sign board above door */}
        <motion.rect x="90" y="78" width="80" height="24" rx="4" stroke="#D4870A" strokeWidth="1.5" {...fi(0.3)} />
        {/* Sign lines */}
        <motion.path d="M 98 86 L 130 86" stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" {...dp(0.4, 0.4)} />
        <motion.path d="M 98 93 L 162 93" stroke="#D4870A" strokeWidth="1" strokeLinecap="round" {...dp(0.44, 0.4, 0.5)} />

        {/* Shop windows */}
        <motion.rect x="64" y="110" width="54" height="52" rx="4" stroke="#2563EB" strokeWidth="1.5" {...fi(0.5, 0.6)} />
        <motion.rect x="142" y="110" width="54" height="52" rx="4" stroke="#2563EB" strokeWidth="1.5" {...fi(0.55, 0.6)} />
        {/* Window cross */}
        <motion.path d="M 91 110 L 91 162" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(0.6, 0.4, 0.3)} />
        <motion.path d="M 64 136 L 118 136" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(0.62, 0.4, 0.3)} />
        <motion.path d="M 169 110 L 169 162" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(0.64, 0.4, 0.3)} />
        <motion.path d="M 142 136 L 196 136" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(0.66, 0.4, 0.3)} />

        {/* Door */}
        <motion.rect x="115" y="162" width="30" height="46" rx="3" stroke="#2563EB" strokeWidth="1.5" {...fi(0.7, 0.7)} />
        {/* Door knob */}
        <motion.circle cx="139" cy="186" r="3" stroke="#D4870A" strokeWidth="1.5" {...si(0.8)} />

        {/* Steps */}
        <motion.path d="M 46 208 L 254 208" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" {...dp(0.75, 0.4, 0.4)} />
        <motion.path d="M 38 215 L 262 215" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(0.78, 0.4, 0.25)} />

        {/* ── Shopping bag (floating top-right) ── */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {/* Bag body */}
          <rect x="222" y="54" width="54" height="62" rx="8" stroke="#059669" strokeWidth="1.5" fill="#059669" fillOpacity="0.07" />
          {/* Bag handle */}
          <path d="M 234 54 C 234 40, 264 40, 264 54" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Price label */}
          <rect x="234" y="70" width="30" height="16" rx="4" stroke="#D4870A" strokeWidth="1" fill="#D4870A" fillOpacity="0.08" />
          <text x="239" y="82" fill="#D4870A" fontSize="9" fontWeight="700" fontFamily="monospace">$99</text>
        </motion.g>

        {/* ── Price tag (floating left) ── */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.15 }}
        >
          {/* Tag shape */}
          <path d="M 6 96 L 30 88 L 40 100 L 16 120 Z" stroke="#D4870A" strokeWidth="1.5" strokeLinejoin="round" fill="#D4870A" fillOpacity="0.06" />
          <circle cx="26" cy="93" r="3" stroke="#D4870A" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* ── Sparkle stars ── */}
        {[
          { x: 16, y: 50 },
          { x: 276, y: 140 },
          { x: 240, y: 22 },
        ].map((s, i) => (
          <motion.g
            key={`star-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 + i * 0.3 }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <path d={`M ${s.x} ${s.y - 6} L ${s.x} ${s.y + 6}`} stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" />
            <path d={`M ${s.x - 6} ${s.y} L ${s.x + 6} ${s.y}`} stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" />
            <path d={`M ${s.x - 4} ${s.y - 4} L ${s.x + 4} ${s.y + 4}`} stroke="#D4870A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <path d={`M ${s.x + 4} ${s.y - 4} L ${s.x - 4} ${s.y + 4}`} stroke="#D4870A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          </motion.g>
        ))}

      </svg>
    </motion.div>
  );
}
