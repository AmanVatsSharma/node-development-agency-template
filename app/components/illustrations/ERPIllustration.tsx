"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

const MODULES = [
  { id: "db",  label: "DB",      cx: 150, cy: 34,  tx: 136, ty: 29  },
  { id: "api", label: "API",     cx: 258, cy: 90,  tx: 244, ty: 85  },
  { id: "crm", label: "CRM",     cx: 224, cy: 192, tx: 210, ty: 187 },
  { id: "erp", label: "ERP",     cx: 76,  cy: 192, tx: 63,  ty: 187 },
  { id: "ui",  label: "UI",      cx: 42,  cy: 90,  tx: 34,  ty: 85  },
];
const HUB = { cx: 150, cy: 124 };

export default function ERPIllustration({ className = "" }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const noMotion = useReducedMotion();

  const dp = (delay: number, dur = 0.55, opacity = 1) => ({
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
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
    >
      <svg viewBox="0 0 300 240" fill="none" aria-hidden="true" className="w-full h-full">

        {/* ── Spoke lines: hub → modules ── */}
        {MODULES.map((mod, i) => (
          <motion.path
            key={`line-${mod.id}`}
            d={`M ${HUB.cx} ${HUB.cy} L ${mod.cx} ${mod.cy}`}
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            {...dp(0.2 + i * 0.1, 0.5, 0.4)}
          />
        ))}

        {/* ── Module boxes ── */}
        {MODULES.map((mod, i) => (
          <motion.g
            key={`mod-${mod.id}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 + i * 0.1 }}
            style={{ transformOrigin: `${mod.cx}px ${mod.cy}px` }}
          >
            <rect
              x={mod.cx - 26} y={mod.cy - 17}
              width="52" height="34" rx="8"
              stroke="#2563EB" strokeWidth="1.5"
              fill="#2563EB" fillOpacity="0.06"
            />
            <text
              x={mod.tx} y={mod.ty + 13}
              fill="#2563EB"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.08em"
              fontFamily="monospace"
            >
              {mod.label}
            </text>
          </motion.g>
        ))}

        {/* ── Central hub ── */}
        <motion.circle
          cx={HUB.cx} cy={HUB.cy} r="26"
          stroke="#D4870A" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.15 }}
        />
        <motion.circle
          cx={HUB.cx} cy={HUB.cy} r="14"
          stroke="#D4870A" strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.5 } : {}}
          transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.25 }}
        />
        {/* Hub dot */}
        <motion.circle
          cx={HUB.cx} cy={HUB.cy} r="5"
          fill="#D4870A"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.9 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
        />

        {/* Hub pulse ring */}
        <motion.circle
          cx={HUB.cx} cy={HUB.cy} r="34"
          stroke="#D4870A" strokeWidth="1"
          initial={{ scale: 1, opacity: 0 }}
          animate={inView ? { scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />

        {/* Hub label */}
        <motion.text
          x="134" y="129"
          fill="#D4870A"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.06em"
          fontFamily="monospace"
          {...fi(1.0)}
        >
          CORE
        </motion.text>

        {/* ── Data flow dots on spokes ── */}
        {MODULES.map((mod, i) => {
          const midX = (HUB.cx + mod.cx) / 2;
          const midY = (HUB.cy + mod.cy) / 2;
          return (
            <motion.circle
              key={`dot-${mod.id}`}
              cx={midX} cy={midY} r="3"
              fill="#2563EB"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0.6, 0.1, 0.6] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.6 + i * 0.25 }}
            />
          );
        })}

      </svg>
    </motion.div>
  );
}
