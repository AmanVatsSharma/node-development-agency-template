"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ─── Shared fade-up animation ─────────────────────────────────────────────────
const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.52, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
});

// ─── Subtle dot-grid SVG pattern ─────────────────────────────────────────────
function DotGrid({ color = "rgba(255,255,255,0.06)" }: { color?: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

// ─── Tag pill ─────────────────────────────────────────────────────────────────
function Tag({
  label,
  color,
  bg,
  border,
}: {
  label: string;
  color: string;
  bg: string;
  border: string;
}) {
  return (
    <span
      className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md"
      style={{ color, backgroundColor: bg, border: `1px solid ${border}` }}
    >
      {label}
    </span>
  );
}

// ─── Metric pill ─────────────────────────────────────────────────────────────
function Metric({
  val,
  label,
  light = false,
}: {
  val: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-xl font-bold leading-none mb-0.5 ${light ? "text-white" : "text-[#0C1B33] dark:text-white"}`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {val}
      </p>
      <p className={`text-[10px] leading-tight ${light ? "text-white/50" : "text-gray-400 dark:text-gray-500"}`}>
        {label}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD A — BharatERP: Large 2×2, dark navy hero card
// ─────────────────────────────────────────────────────────────────────────────
function CardBharatERP() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden flex flex-col min-h-[380px] lg:min-h-0"
      style={{ background: "#0C1B33" }}
    >
      <DotGrid />

      {/* Gold top-left glow */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,135,10,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full p-7 sm:p-8">
        {/* Category + name */}
        <div className="mb-auto">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-4"
            style={{ color: "#D4870A", background: "rgba(212,135,10,0.12)", border: "1px solid rgba(212,135,10,0.25)" }}
          >
            Enterprise ERP
          </span>

          <h3
            className="text-4xl sm:text-5xl font-black text-white leading-[0.95] tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Bharat<span style={{ color: "#D4870A" }}>ERP</span>
          </h3>

          <p className="text-white/50 text-sm font-medium mb-6 max-w-sm">
            SAP-level ERP at a fraction of the cost — finance, inventory, HR, supply chain, and custom modules in one platform.
          </p>

          {/* Module chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Finance", "HR & Payroll", "Inventory", "Supply Chain", "CRM"].map((m) => (
              <span
                key={m}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Big cost-saving headline */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: "rgba(212,135,10,0.1)", border: "1px solid rgba(212,135,10,0.2)" }}
        >
          <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">Cost vs SAP Hana</p>
          <p
            className="text-5xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            60<span className="text-2xl align-top mt-2 inline-block" style={{ color: "#D4870A" }}>%</span>
            <span className="text-lg font-medium text-white/40 ml-2">less</span>
          </p>
        </div>

        {/* Bottom metrics strip */}
        <div
          className="flex items-center gap-6 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Metric val="12+" label="Enterprise Clients" light />
          <div className="w-px h-8 bg-white/10" />
          <Metric val="99.9%" label="Uptime SLA" light />
          <div className="w-px h-8 bg-white/10" />
          <Metric val="SAP" label="Compatible" light />

          <div className="ml-auto flex gap-1.5">
            {["Node.js", "PostgreSQL", "React"].map((t) => (
              <Tag
                key={t}
                label={t}
                color="rgba(255,255,255,0.5)"
                bg="rgba(255,255,255,0.06)"
                border="rgba(255,255,255,0.1)"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD B — TradeZen: Dark green, latency as hero stat
// ─────────────────────────────────────────────────────────────────────────────
function CardTradeZen() {
  return (
    <motion.div
      {...fadeUp(1)}
      className="relative rounded-3xl overflow-hidden flex flex-col min-h-[220px]"
      style={{ background: "#052e16" }}
    >
      <DotGrid color="rgba(255,255,255,0.04)" />
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(5,150,105,0.35) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ color: "#34d399", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}
          >
            Trading Platform
          </span>
          {/* Live pulse */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] text-emerald-400/70 font-medium">Live</span>
          </div>
        </div>

        <h3
          className="text-2xl font-black text-white mb-1"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          TradeZen
        </h3>
        <p className="text-white/40 text-xs mb-auto">NSE · MCX · Live Feeds · Pro Charting</p>

        {/* Hero stat */}
        <div className="mt-4 mb-3">
          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Data Latency</p>
          <p
            className="text-5xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-sora), sans-serif", color: "#34d399" }}
          >
            {"<"}50<span className="text-xl font-bold text-white/40">ms</span>
          </p>
        </div>

        <div
          className="flex gap-4 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <Metric val="50K+" label="Concurrent Users" light />
          <Metric val="100%" label="Market Uptime" light />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD C — Promerchants: White, blue accent
// ─────────────────────────────────────────────────────────────────────────────
function CardPromerchants() {
  return (
    <motion.div
      {...fadeUp(2)}
      className="relative rounded-3xl overflow-hidden flex flex-col bg-white dark:bg-[#0F1623] min-h-[220px] shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      style={{ border: "1px solid rgba(37,99,235,0.12)" }}
    >
      {/* Blue top bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #2563EB, #60A5FA)" }} />

      <div className="relative z-10 flex flex-col h-full p-6">
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-3 inline-block"
          style={{ color: "#2563EB" }}
        >
          E-Commerce Platform
        </span>
        <h3
          className="text-xl font-black text-[#0C1B33] dark:text-white mb-1"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Promerchants
        </h3>
        <p className="text-gray-400 dark:text-gray-500 text-xs mb-auto">
          Multi-vendor · Payments · WhatsApp Commerce
        </p>

        <div className="mt-4">
          <p
            className="text-5xl font-black leading-none mb-1"
            style={{ color: "#2563EB", fontFamily: "var(--font-sora), sans-serif" }}
          >
            50+
          </p>
          <p className="text-xs text-gray-400">Active Merchants</p>
        </div>

        <div
          className="flex gap-4 mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(12,27,51,0.07)" }}
        >
          <Metric val="99.5%" label="Uptime" />
          <Metric val="<3s" label="Page Load" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD D — Waterakt: White, green WhatsApp energy
// ─────────────────────────────────────────────────────────────────────────────
function CardWaterakt() {
  return (
    <motion.div
      {...fadeUp(3)}
      className="relative rounded-3xl overflow-hidden flex flex-col bg-white dark:bg-[#0F1623] min-h-[220px] shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      style={{ border: "1px solid rgba(22,163,74,0.15)" }}
    >
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #16a34a, #4ade80)" }} />

      <div className="relative z-10 flex flex-col h-full p-6">
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-3 inline-block"
          style={{ color: "#16a34a" }}
        >
          WhatsApp Marketing
        </span>
        <h3
          className="text-xl font-black text-[#0C1B33] dark:text-white mb-1"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Waterakt
        </h3>
        <p className="text-gray-400 dark:text-gray-500 text-xs mb-auto">
          Campaigns · Segmentation · Broadcast
        </p>

        <div className="mt-4">
          <p
            className="text-5xl font-black leading-none mb-1"
            style={{ color: "#16a34a", fontFamily: "var(--font-sora), sans-serif" }}
          >
            10×
          </p>
          <p className="text-xs text-gray-400">ROI vs Email</p>
        </div>

        <div
          className="flex gap-4 mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(12,27,51,0.07)" }}
        >
          <Metric val="500+" label="Businesses" />
          <Metric val="40%" label="Open Rate" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD E — SwiftShift: White, orange logistics energy
// ─────────────────────────────────────────────────────────────────────────────
function CardSwiftShift() {
  return (
    <motion.div
      {...fadeUp(4)}
      className="relative rounded-3xl overflow-hidden flex flex-col bg-white dark:bg-[#0F1623] min-h-[220px] shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      style={{ border: "1px solid rgba(194,65,12,0.15)" }}
    >
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #c2410c, #fb923c)" }} />

      <div className="relative z-10 flex flex-col h-full p-6">
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-3 inline-block"
          style={{ color: "#c2410c" }}
        >
          Logistics AI
        </span>
        <h3
          className="text-xl font-black text-[#0C1B33] dark:text-white mb-1"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          SwiftShift
        </h3>
        <p className="text-gray-400 dark:text-gray-500 text-xs mb-auto">
          Route Optimization · Driver Tracking · AI
        </p>

        <div className="mt-4">
          <p
            className="text-5xl font-black leading-none mb-1"
            style={{ color: "#c2410c", fontFamily: "var(--font-sora), sans-serif" }}
          >
            25%
          </p>
          <p className="text-xs text-gray-400">Cost Reduction</p>
        </div>

        <div
          className="flex gap-4 mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(12,27,51,0.07)" }}
        >
          <Metric val="AI" label="Route Optimizer" />
          <Metric val="Real-time" label="Tracking" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD F — MailZen: Wide dark violet, AI mail
// ─────────────────────────────────────────────────────────────────────────────
function CardMailZen() {
  return (
    <motion.div
      {...fadeUp(5)}
      className="lg:col-span-2 relative rounded-3xl overflow-hidden flex flex-col sm:flex-row min-h-[200px]"
      style={{ background: "#1e0a3c" }}
    >
      <DotGrid color="rgba(167,139,250,0.06)" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.3) 0%, transparent 60%)" }}
      />

      {/* Left — content */}
      <div className="relative z-10 flex flex-col justify-between p-7 flex-1">
        <div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block"
            style={{ color: "#a78bfa", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.2)" }}
          >
            AI Mail Management
          </span>
          <h3
            className="text-3xl font-black text-white mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            MailZen
          </h3>
          <p className="text-white/40 text-sm max-w-xs">
            Enterprise mail with AI triage, smart replies, workflow automation, and team collaboration.
          </p>
        </div>

        <div className="flex gap-1.5 mt-4">
          {["OpenAI", "Next.js", "PostgreSQL"].map((t) => (
            <Tag
              key={t}
              label={t}
              color="rgba(167,139,250,0.7)"
              bg="rgba(167,139,250,0.08)"
              border="rgba(167,139,250,0.15)"
            />
          ))}
        </div>
      </div>

      {/* Right — big stats */}
      <div
        className="relative z-10 flex flex-col justify-center gap-5 p-7 sm:border-l"
        style={{ borderColor: "rgba(167,139,250,0.1)" }}
      >
        {[
          { val: "70%", label: "Time Saved" },
          { val: "99%", label: "AI Accuracy" },
          { val: "Instant", label: "Triage" },
        ].map((m) => (
          <div key={m.label}>
            <p
              className="text-3xl font-black text-white leading-none"
              style={{ fontFamily: "var(--font-sora), sans-serif", color: "#a78bfa" }}
            >
              {m.val}
            </p>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductSpotlight() {
  return (
    <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#080C14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Products We&rsquo;ve Shipped
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
              We don&rsquo;t just build for clients — we ship our own products. Real software in production, proving our standard every day.
            </p>
          </div>
          <Link
            href="/pages/portfolio"
            className="shrink-0 inline-flex items-center gap-2 text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm hover:underline"
          >
            View full portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Bento grid:
            ┌─────────────────────────┬──────────────┐
            │  BharatERP (2×2)        │  TradeZen    │
            │                         ├──────────────┤
            │                         │  Promerchants│
            ├──────────┬──────────────┴──────────────┤
            │ Waterakt │  SwiftShift  │  (MailZen 2-col below) │
            └──────────┴──────────────┘
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-auto">
          <CardBharatERP />
          <CardTradeZen />
          <CardPromerchants />
          <CardWaterakt />
          <CardSwiftShift />
          <CardMailZen />
        </div>
      </div>
    </section>
  );
}
