"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

const INPUT_NODES = [
  { id: "i0", cx: 48, cy: 72 },
  { id: "i1", cx: 48, cy: 120 },
  { id: "i2", cx: 48, cy: 168 },
];

const HIDDEN_NODES = [
  { id: "h0", cx: 150, cy: 58 },
  { id: "h1", cx: 150, cy: 108 },
  { id: "h2", cx: 150, cy: 158 },
  { id: "h3", cx: 150, cy: 205 },
];

const OUTPUT_NODES = [
  { id: "o0", cx: 254, cy: 95 },
  { id: "o1", cx: 254, cy: 148 },
];

export default function AINetworkIllustration({ className = "" }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const noMotion = useReducedMotion();

  const dp = (delay: number, dur = 0.5, opacity = 0.25) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: inView ? { pathLength: 1, opacity } : {},
    transition: {
      pathLength: { duration: dur, delay, ease: "easeInOut" },
      opacity: { duration: 0.2, delay },
    },
  });

  const si = (delay: number, r = 8, color = "#2563EB") => ({
    cx: 0, cy: 0,
    r,
    stroke: color,
    strokeWidth: 1.5,
    initial: { scale: 0, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : {},
    transition: { type: "spring" as const, stiffness: 200, damping: 20, delay },
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={!noMotion && inView ? { y: [-5, 5, -5] } : {}}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
    >
      <svg viewBox="0 0 300 240" fill="none" aria-hidden="true" className="w-full h-full">

        {/* ── Connection lines: input → hidden ── */}
        {INPUT_NODES.flatMap((inp, ii) =>
          HIDDEN_NODES.map((hid, hi) => (
            <motion.path
              key={`ih-${ii}-${hi}`}
              d={`M ${inp.cx} ${inp.cy} L ${hid.cx} ${hid.cy}`}
              stroke="#2563EB"
              strokeWidth="1"
              {...dp(0.1 + ii * 0.06 + hi * 0.03, 0.6, 0.18)}
            />
          ))
        )}

        {/* ── Connection lines: hidden → output ── */}
        {HIDDEN_NODES.flatMap((hid, hi) =>
          OUTPUT_NODES.map((out, oi) => (
            <motion.path
              key={`ho-${hi}-${oi}`}
              d={`M ${hid.cx} ${hid.cy} L ${out.cx} ${out.cy}`}
              stroke="#D4870A"
              strokeWidth="1"
              {...dp(0.45 + hi * 0.05 + oi * 0.03, 0.55, 0.22)}
            />
          ))
        )}

        {/* ── Input nodes ── */}
        {INPUT_NODES.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.cx} cy={n.cy} r="9"
            stroke="#2563EB" strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.65 + i * 0.1 }}
          />
        ))}
        {/* Inner dot on input nodes */}
        {INPUT_NODES.map((n, i) => (
          <motion.circle
            key={`${n.id}-dot`}
            cx={n.cx} cy={n.cy} r="3"
            fill="#2563EB"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 0.7 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.75 + i * 0.1 }}
          />
        ))}

        {/* ── Hidden layer nodes ── */}
        {HIDDEN_NODES.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.cx} cy={n.cy} r="10"
            stroke="#2563EB" strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.9 + i * 0.08 }}
          />
        ))}
        {HIDDEN_NODES.map((n, i) => (
          <motion.circle
            key={`${n.id}-dot`}
            cx={n.cx} cy={n.cy} r="4"
            fill="#2563EB"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 0.6 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.0 + i * 0.08 }}
          />
        ))}

        {/* ── Center node highlight ring (pulsing) ── */}
        <motion.circle
          cx={150} cy={108} r="18"
          stroke="#2563EB" strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: [1, 1.25, 1], opacity: [0.35, 0, 0.35] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        />

        {/* ── Output nodes ── */}
        {OUTPUT_NODES.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.cx} cy={n.cy} r="11"
            stroke="#D4870A" strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.2 + i * 0.1 }}
          />
        ))}
        {OUTPUT_NODES.map((n, i) => (
          <motion.circle
            key={`${n.id}-dot`}
            cx={n.cx} cy={n.cy} r="5"
            fill="#D4870A"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 0.8 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.3 + i * 0.1 }}
          />
        ))}

        {/* ── Layer labels ── */}
        <motion.text x="34" y="20" fill="currentColor" fontSize="9" fontWeight="600" letterSpacing="0.08em" opacity="0"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.3 } : {}} transition={{ duration: 0.4, delay: 1.5 }}
        >INPUT</motion.text>
        <motion.text x="133" y="20" fill="currentColor" fontSize="9" fontWeight="600" letterSpacing="0.08em" opacity="0"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.3 } : {}} transition={{ duration: 0.4, delay: 1.55 }}
        >HIDDEN</motion.text>
        <motion.text x="236" y="20" fill="currentColor" fontSize="9" fontWeight="600" letterSpacing="0.08em" opacity="0"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.3 } : {}} transition={{ duration: 0.4, delay: 1.6 }}
        >OUTPUT</motion.text>

        {/* ── Floating "AI" badge ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <rect x="244" y="4" width="52" height="22" rx="11" fill="#7C3AED" fillOpacity="0.12" stroke="#7C3AED" strokeWidth="1" />
          <text x="255" y="19" fill="#7C3AED" fontSize="11" fontFamily="monospace" fontWeight="700">AI</text>
        </motion.g>

      </svg>
    </motion.div>
  );
}
