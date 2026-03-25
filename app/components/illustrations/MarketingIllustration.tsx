"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

const BARS = [
  { x: 32,  h: 60,  color: "#2563EB", opacity: 0.25 },
  { x: 72,  h: 85,  color: "#2563EB", opacity: 0.35 },
  { x: 112, h: 70,  color: "#2563EB", opacity: 0.30 },
  { x: 152, h: 110, color: "#2563EB", opacity: 0.45 },
  { x: 192, h: 95,  color: "#2563EB", opacity: 0.40 },
  { x: 232, h: 148, color: "#D4870A", opacity: 0.65 },
];

const BASELINE_Y = 205;
const BAR_W = 32;

// Trend line points (arc over bars)
const TREND_POINTS = "M 48 180 C 88 165, 128 160, 168 130 S 230 90, 262 58";

// Data point circles on trend line
const DATA_DOTS = [
  { cx: 48,  cy: 180 },
  { cx: 108, cy: 155 },
  { cx: 168, cy: 130 },
  { cx: 220, cy: 95  },
  { cx: 262, cy: 58  },
];

export default function MarketingIllustration({ className = "" }: Props) {
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

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={!noMotion && inView ? { y: [-4, 4, -4] } : {}}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    >
      <svg viewBox="0 0 300 240" fill="none" aria-hidden="true" className="w-full h-full">

        {/* ── Axes ── */}
        <motion.path d={`M 20 14 L 20 ${BASELINE_Y} L 290 ${BASELINE_Y}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...dp(0, 0.6, 0.2)} />

        {/* Grid lines */}
        {[45, 85, 125, 165].map((y, i) => (
          <motion.path
            key={`grid-${i}`}
            d={`M 20 ${y} L 290 ${y}`}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 5"
            {...dp(0.05 + i * 0.04, 0.5, 0.08)}
          />
        ))}

        {/* ── Bars ── */}
        {BARS.map((bar, i) => {
          const yTop = BASELINE_Y - bar.h;
          return (
            <motion.rect
              key={`bar-${i}`}
              x={bar.x} y={yTop}
              width={BAR_W} height={bar.h}
              rx="4"
              fill={bar.color}
              fillOpacity={0}
              stroke={bar.color}
              strokeWidth="1.5"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: bar.opacity * 1.4 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + BAR_W / 2}px ${BASELINE_Y}px` }}
            />
          );
        })}
        {/* Filled bars (semi-transparent) */}
        {BARS.map((bar, i) => {
          const yTop = BASELINE_Y - bar.h;
          return (
            <motion.rect
              key={`bar-fill-${i}`}
              x={bar.x} y={yTop}
              width={BAR_W} height={bar.h}
              rx="4"
              fill={bar.color}
              stroke="none"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: bar.opacity } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + BAR_W / 2}px ${BASELINE_Y}px` }}
            />
          );
        })}

        {/* ── Trend line ── */}
        <motion.path
          d={TREND_POINTS}
          stroke="#D4870A"
          strokeWidth="2"
          strokeLinecap="round"
          {...dp(0.85, 0.9)}
        />

        {/* ── Data point circles ── */}
        {DATA_DOTS.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx} cy={dot.cy} r="4"
            fill="#D4870A"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 1.1 + i * 0.08 }}
          />
        ))}
        {/* Outer ring on final data point */}
        <motion.circle
          cx={262} cy={58} r="9"
          stroke="#D4870A" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.5 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.6 }}
        />

        {/* ── Target / crosshair ── */}
        <motion.circle cx="264" cy="35" r="18" stroke="#2563EB" strokeWidth="1.5" {...dp(1.6, 0.5, 0.6)} />
        <motion.circle cx="264" cy="35" r="10" stroke="#2563EB" strokeWidth="1" {...dp(1.7, 0.4, 0.4)} />
        <motion.circle cx="264" cy="35" r="3"  fill="#2563EB"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.9 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.85 }}
        />
        {/* Crosshair lines */}
        <motion.path d="M 264 10 L 264 22" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(1.9, 0.3, 0.4)} />
        <motion.path d="M 264 48 L 264 60" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(1.93, 0.3, 0.4)} />
        <motion.path d="M 239 35 L 251 35" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(1.96, 0.3, 0.4)} />
        <motion.path d="M 277 35 L 289 35" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" {...dp(1.99, 0.3, 0.4)} />

        {/* ── Upward arrow badge ── */}
        <motion.g {...fi(1.7)}>
          <rect x="4" y="8" width="64" height="24" rx="12" fill="#D4870A" fillOpacity="0.1" stroke="#D4870A" strokeWidth="1" />
          <path d="M 16 26 L 16 15 L 22 15" stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 16 15 L 23 22" stroke="#D4870A" strokeWidth="1.5" strokeLinecap="round" />
          <text x="30" y="24" fill="#D4870A" fontSize="10" fontWeight="700" fontFamily="monospace">+38%</text>
        </motion.g>

      </svg>
    </motion.div>
  );
}
