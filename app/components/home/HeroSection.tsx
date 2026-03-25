"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const cycleWords = ["Web Apps", "AI Systems", "ERP Platforms", "E-Commerce"];

// Dashboard mockup SVG — inline, no external deps
function DashboardVisual() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-[#1A3A6C]/10 to-[#D4870A]/15 blur-3xl rounded-3xl" />

      {/* Main window frame */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0A1020]/90 backdrop-blur-sm overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/3">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-amber-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-[11px] text-white/30 font-mono">BharatERP Dashboard</span>
        </div>

        {/* Content area */}
        <div className="p-4">
          {/* Top metric cards */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Revenue", value: "₹2.4Cr", change: "+18%", color: "text-emerald-400" },
              { label: "Orders", value: "1,847", change: "+12%", color: "text-blue-400" },
              { label: "Uptime", value: "99.9%", change: "30d", color: "text-amber-400" },
            ].map((m) => (
              <div key={m.label} className="bg-white/4 rounded-lg p-2.5 border border-white/5">
                <p className="text-[9px] text-white/40 uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-sm font-bold text-white leading-none mb-0.5" style={{ fontFamily: "var(--font-sora), sans-serif" }}>{m.value}</p>
                <span className={`text-[9px] font-semibold ${m.color}`}>{m.change}</span>
              </div>
            ))}
          </div>

          {/* Chart bars */}
          <div className="bg-white/3 rounded-lg p-3 border border-white/5 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-white/40 uppercase tracking-wider">Monthly Revenue</span>
              <span className="text-[9px] text-blue-400 font-semibold">Live</span>
            </div>
            <div className="flex items-end gap-1 h-14">
              {[40, 55, 35, 70, 60, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? "linear-gradient(to top, #D4870A, #F59E0B)"
                      : "linear-gradient(to top, rgba(37,99,235,0.5), rgba(37,99,235,0.2))",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Recent activity list */}
          <div className="space-y-1.5">
            {[
              { text: "New order #4821 — Pune branch", dot: "#22c55e" },
              { text: "Inventory sync completed", dot: "#2563EB" },
              { text: "Invoice generated for client", dot: "#D4870A" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/3 rounded-lg px-2.5 py-1.5 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.dot }} />
                <span className="text-[10px] text-white/50 truncate">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tech chips */}
      <div className="absolute -top-4 -right-4 flex flex-col gap-2">
        {[
          { label: "Next.js", color: "bg-white text-gray-900" },
          { label: "Node.js", color: "bg-green-500 text-white" },
        ].map((chip) => (
          <div
            key={chip.label}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg border border-white/10 ${chip.color}`}
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {chip.label}
          </div>
        ))}
      </div>
      <div className="absolute -bottom-3 -left-4">
        <div
          className="px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg bg-[#D4870A] text-white border border-white/10"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          AI-Powered
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cycleWords.length);
        setAnimating(false);
      }, 280);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center vp-mesh-navy overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
      {/* Ambient blobs */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[400px] rounded-full bg-[#D4870A]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4870A]/40 bg-[#D4870A]/10 text-[#D4870A] text-xs font-semibold tracking-wide uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4870A] animate-pulse" />
              Vedpragya — India · UAE · USA
            </div>

            {/* Headline with word cycling */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              We Build{" "}
              <span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4870A] to-[#F59E0B] transition-all duration-280"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(12px)" : "translateY(0)",
                  minWidth: "8ch",
                }}
              >
                {cycleWords[wordIndex]}
              </span>
              <br className="hidden sm:block" />
              <span className="text-white/90">That Move Businesses</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-300/90 max-w-xl leading-relaxed mb-10"
            >
              From a startup&rsquo;s first app to a multinational&rsquo;s
              digital transformation — Vedpragya engineers software that scales,
              lasts, and delivers real outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/pages/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_20px_rgba(212,135,10,0.35)] hover:shadow-[0_8px_30px_rgba(212,135,10,0.5)] hover:-translate-y-0.5 min-h-[48px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/pages/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/5 backdrop-blur-sm min-h-[48px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See Our Work
              </Link>
            </div>

            {/* Trust mini-strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-8 border-t border-white/10">
              {[
                { num: "500+", label: "Projects" },
                { num: "200+", label: "Clients" },
                { num: "5", label: "Offices" },
                { num: "99%", label: "Retention" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: dashboard visual (hidden on mobile) ── */}
          <div className="hidden lg:block">
            <DashboardVisual />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-white text-[9px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}
