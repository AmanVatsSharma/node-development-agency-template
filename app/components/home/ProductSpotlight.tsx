"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, Building2, Truck, Mail, MessageCircle, Headphones } from "lucide-react";

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
// CARD A — Whaterakt: Large 2×2, white/dark green hero card
// ─────────────────────────────────────────────────────────────────────────────
function CardWhaterakt() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="group lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden flex flex-col min-h-[380px] lg:min-h-0 bg-white dark:bg-[#0F1623]"
      style={{ border: "1px solid rgba(22,163,74,0.2)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #16a34a, #4ade80)" }} />
      <DotGrid color="rgba(22,163,74,0.05)" />
      
      {/* Huge background watermark icon */}
      <MessageCircle 
        className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-10 w-96 h-96 text-green-500/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none hidden md:block" 
        strokeWidth={0.5}
      />

      {/* Glow effect */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full p-7 sm:p-8">
        <div className="mb-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full w-fit"
              style={{ color: "#16a34a", background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)" }}
            >
              India's Best WhatsApp Marketing Software
            </span>
            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">
              Powered by Vedpragya
            </span>
          </div>

          <div className="mb-5">
            <img src="/logos/whaterakt-logo.png" alt="Whaterakt Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          <h3
            className="text-4xl sm:text-5xl font-black text-[#0C1B33] dark:text-white leading-[0.95] tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            A Nation Leading <span style={{ color: "#16a34a" }}>Product.</span>
          </h3>

          <p className="text-gray-500 text-sm font-medium mb-6 max-w-md leading-relaxed">
            Broadcasts, flows, shared inbox, templates, AI, payments — all under one roof. Reach millions instantly with 10x ROI vs email. Our very own flagship product.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Campaigns", "Segmentation", "AI Chatbots", "Payments", "Shared Inbox"].map((m) => (
              <span
                key={m}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(22,163,74,0.08)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)" }}
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <a 
              href="https://whaterakt.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_rgba(22,163,74,0.35)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.5)] transform hover:-translate-y-0.5 w-fit"
            >
              Explore Whaterakt
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        {/* Big impact headline */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: "rgba(22,163,74,0.05)", border: "1px solid rgba(22,163,74,0.15)" }}
        >
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Scale of Operations</p>
          <p
            className="text-5xl font-black text-[#0C1B33] dark:text-white leading-none"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            240<span className="text-2xl align-top mt-2 inline-block" style={{ color: "#16a34a" }}>M+</span>
            <span className="text-lg font-medium text-gray-400 ml-2">msgs / month</span>
          </p>
        </div>

        {/* Bottom metrics strip */}
        <div
          className="flex items-center gap-4 sm:gap-6 pt-5 flex-wrap"
          style={{ borderTop: "1px solid rgba(12,27,51,0.07)" }}
        >
          <Metric val="4,200+" label="Active Teams" />
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <Metric val="98.4%" label="Delivery Rate" />
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <Metric val="10x" label="Better ROI" />

          <div className="ml-auto hidden lg:flex gap-1.5">
            {["Next.js", "Cloud API", "AI"].map((t) => (
              <Tag
                key={t}
                label={t}
                color="#16a34a"
                bg="rgba(22,163,74,0.1)"
                border="rgba(22,163,74,0.2)"
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
      className="group relative rounded-3xl overflow-hidden flex flex-col min-h-[260px]"
      style={{ background: "#052e16" }}
    >
      <DotGrid color="rgba(255,255,255,0.04)" />
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(5,150,105,0.35) 0%, transparent 70%)" }}
      />
      
      <TrendingUp 
        className="absolute bottom-12 -right-4 w-40 h-40 text-emerald-400/10 group-hover:-translate-y-4 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
        strokeWidth={1}
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
        <p className="text-white/40 text-xs mb-auto">Live Feeds · Pro Charting</p>

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
      className="group relative rounded-3xl overflow-hidden flex flex-col bg-white dark:bg-[#0F1623] min-h-[260px] shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      style={{ border: "1px solid rgba(37,99,235,0.12)" }}
    >
      {/* Blue top bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #2563EB, #60A5FA)" }} />

      <ShoppingBag 
        className="absolute bottom-12 -right-4 w-40 h-40 text-blue-500/5 dark:text-blue-400/10 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
        strokeWidth={1}
      />

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
// CARD C2 — DialN: Large 2×2, white/dark indigo AI Voice card
// ─────────────────────────────────────────────────────────────────────────────
function CardDialN() {
  return (
    <motion.div
      {...fadeUp(2.5)}
      className="group lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden flex flex-col min-h-[380px] lg:min-h-0 bg-white dark:bg-[#0F1623]"
      style={{ border: "1px solid rgba(99,102,241,0.2)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #6366f1, #a855f7)" }} />
      <DotGrid color="rgba(99,102,241,0.05)" />
      
      {/* Huge background watermark icon */}
      <Headphones 
        className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-10 w-96 h-96 text-indigo-500/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none hidden md:block" 
        strokeWidth={0.5}
      />

      {/* Glow effect */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full p-7 sm:p-8">
        <div className="mb-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full w-fit"
              style={{ color: "#6366f1", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              AI Voice Calling Platform
            </span>
            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">
              Powered by Vedpragya
            </span>
          </div>

          <div className="mb-5">
            <img src="/logos/dialn-logo.svg" alt="DialN Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          <h3
            className="text-4xl sm:text-5xl font-black text-[#0C1B33] dark:text-white leading-[0.95] tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Voice Calling <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Reimagined.</span>
          </h3>

          <p className="text-gray-500 text-sm font-medium mb-6 max-w-md leading-relaxed">
            Deploy intelligent AI voice agents for inbound support and outbound sales. They sound human, never sleep, and scale infinitely without any hardware.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Inbound AI", "Outbound Sales", "CRM Sync", "11+ Languages", "24/7 Availability"].map((m) => (
              <span
                key={m}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <a 
              href="https://dialn.vedpragya.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#4f46e5] hover:to-[#9333ea] text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 w-fit"
            >
              Explore DialN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        {/* Big impact headline */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)" }}
        >
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Call Volume Handled</p>
          <p
            className="text-5xl font-black text-[#0C1B33] dark:text-white leading-none"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            1.5<span className="text-2xl align-top mt-2 inline-block" style={{ color: "#6366f1" }}>M+</span>
            <span className="text-lg font-medium text-gray-400 ml-2">mins / month</span>
          </p>
        </div>

        {/* Bottom metrics strip */}
        <div
          className="flex items-center gap-4 sm:gap-6 pt-5 flex-wrap"
          style={{ borderTop: "1px solid rgba(12,27,51,0.07)" }}
        >
          <Metric val="<500ms" label="Response Latency" />
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <Metric val="100%" label="Automated" />
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <Metric val="24/7" label="Uptime" />

          <div className="ml-auto hidden lg:flex gap-1.5">
            {["Next.js", "AI Models", "WebRTC"].map((t) => (
              <Tag
                key={t}
                label={t}
                color="#6366f1"
                bg="rgba(99,102,241,0.1)"
                border="rgba(99,102,241,0.2)"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD D — BharatERP: Small 1x1, dark navy card
// ─────────────────────────────────────────────────────────────────────────────
function CardBharatERP() {
  return (
    <motion.div
      {...fadeUp(3)}
      className="group relative rounded-3xl overflow-hidden flex flex-col min-h-[260px]"
      style={{ background: "#0C1B33" }}
    >
      <DotGrid color="rgba(255,255,255,0.04)" />
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(212,135,10,0.3) 0%, transparent 70%)" }}
      />
      
      <Building2 
        className="absolute bottom-12 -right-4 w-40 h-40 text-orange-400/10 group-hover:-translate-y-4 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
        strokeWidth={1}
      />
      <div className="relative z-10 flex flex-col h-full p-6">
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-3 inline-block"
          style={{ color: "#D4870A" }}
        >
          Enterprise ERP
        </span>
        <h3
          className="text-xl font-black text-white mb-1"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          BharatERP
        </h3>
        <p className="text-white/40 text-xs mb-auto">Finance · HR · Inventory</p>

        <div className="mt-4">
          <p
            className="text-5xl font-black leading-none mb-1"
            style={{ color: "#D4870A", fontFamily: "var(--font-sora), sans-serif" }}
          >
            60%
          </p>
          <p className="text-xs text-white/40">Less than SAP</p>
        </div>
        
        <div
          className="flex gap-4 mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <Metric val="12+" label="Clients" light />
          <Metric val="99.9%" label="SLA" light />
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
      className="group relative rounded-3xl overflow-hidden flex flex-col bg-white dark:bg-[#0F1623] min-h-[260px] shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      style={{ border: "1px solid rgba(194,65,12,0.15)" }}
    >
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #c2410c, #fb923c)" }} />

      <Truck 
        className="absolute bottom-12 -right-4 w-40 h-40 text-orange-600/5 dark:text-orange-500/10 group-hover:translate-x-4 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
        strokeWidth={1}
      />

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
      className="group lg:col-span-2 relative rounded-3xl overflow-hidden flex flex-col sm:flex-row min-h-[240px]"
      style={{ background: "#1e0a3c" }}
    >
      <DotGrid color="rgba(167,139,250,0.06)" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.3) 0%, transparent 60%)" }}
      />
      
      <Mail 
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-10 w-56 h-56 text-purple-400/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none hidden md:block" 
        strokeWidth={1}
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
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#60A5FA]/10 dark:text-[#60A5FA] text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
            What We Build
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0C1B33] dark:text-white tracking-tight mb-5"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#a78bfa]">Products.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            We don&rsquo;t just build for clients — we engineer and scale our own industry-leading products. Experience our standards in production.
          </p>
          <Link
            href="/pages/portfolio"
            className="inline-flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA] font-semibold hover:underline"
          >
            View full portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Bento grid:
            ┌─────────────────────────┬──────────────┐
            │  Whaterakt (2×2)        │  TradeZen    │
            │                         ├──────────────┤
            │                         │  Promerchants│
            ├──────────┬──────────────┴──────────────┤
            │ BharatERP│  SwiftShift  │  (MailZen 2-col below) │
            └──────────┴──────────────┘
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-auto">
          <CardWhaterakt />
          <CardTradeZen />
          <CardPromerchants />
          
          <CardDialN />
          <CardBharatERP />
          <CardSwiftShift />
          
          <CardMailZen />
        </div>
      </div>
    </section>
  );
}
