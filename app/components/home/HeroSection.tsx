"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WebDevIllustration from "@/app/components/illustrations/WebDevIllustration";

const cycleWords = ["Web Apps", "AI Systems", "ERP Platforms", "E-Commerce"];

// Animated floating shape component
function AnimatedAccent() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hexagon — top right */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 rounded-3xl border border-[#2563EB]/15 opacity-30 vp-float"
        style={{ transform: "rotate(45deg)" }}
      />
      
      {/* Floating circle — bottom left */}
      <div 
        className="absolute bottom-32 -left-16 w-48 h-48 rounded-full border border-[#D4870A]/10 opacity-20"
        style={{ animation: "vp-float 7s ease-in-out infinite reverse" }}
      />
    </div>
  );
}

// Dashboard product mockup — right-side visual
function DashboardVisual() {
  return (
    <div className="relative w-full">
      {/* Outer glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[#2563EB]/25 via-[#1A3A6C]/15 to-[#D4870A]/20 blur-3xl rounded-3xl pointer-events-none" />

      {/* Main window */}
      <div className="relative rounded-2xl border border-white/12 bg-[#060D1A]/95 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/[0.025]">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-[11px] text-white/25 font-mono tracking-wide">BharatERP — Live Dashboard</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-400/80">Live</span>
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "₹2.4Cr", delta: "+18%", up: true },
              { label: "Orders", value: "1,847", delta: "+12%", up: true },
              { label: "Uptime", value: "99.9%", delta: "30 days", up: true },
            ].map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
                <p className="text-[9px] text-white/35 uppercase tracking-widest mb-1.5">{m.label}</p>
                <p
                  className="text-sm font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {m.value}
                </p>
                <span className="text-[9px] font-semibold text-emerald-400">{m.delta}</span>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="bg-white/[0.025] rounded-xl p-3 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] text-white/35 uppercase tracking-widest">Monthly Revenue</span>
              <div className="flex gap-2 items-center">
                <span className="text-[9px] text-blue-400 font-semibold">This year</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[32, 48, 28, 62, 55, 78, 58, 82, 70, 88, 74, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 11
                        ? "linear-gradient(to top, #D4870A, #F59E0B)"
                        : i >= 9
                        ? "linear-gradient(to top, rgba(37,99,235,0.7), rgba(37,99,235,0.3))"
                        : "linear-gradient(to top, rgba(37,99,235,0.35), rgba(37,99,235,0.1))",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5 text-[8px] text-white/20">
              <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
            </div>
          </div>

          {/* Activity feed */}
          <div className="space-y-1.5">
            <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Recent Activity</p>
            {[
              { text: "Order #4821 — Pune branch confirmed", dot: "#22c55e" },
              { text: "Inventory sync: 3,240 SKUs updated", dot: "#2563EB" },
              { text: "Invoice #INV-0094 sent to client", dot: "#D4870A" },
              { text: "Payroll run completed — Dec 2024", dot: "#8B5CF6" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white/[0.025] rounded-lg px-3 py-2 border border-white/[0.05]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.dot }}
                />
                <span className="text-[10px] text-white/45 truncate">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tech chips — absolute positioned around the frame */}
      <div className="absolute -top-3 -right-3 flex flex-col gap-2">
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl border border-white/15 bg-white text-gray-900"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Next.js 15
        </div>
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl border border-white/10 bg-green-600 text-white"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Node.js
        </div>
      </div>
      <div className="absolute -bottom-3 -left-3">
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl bg-[#D4870A] text-white border border-[#F59E0B]/30"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          AI-Powered
        </div>
      </div>
      <div className="absolute top-1/3 -left-5 hidden xl:block">
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl bg-[#1A3A6C] text-white border border-blue-400/20"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          PostgreSQL
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
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center vp-mesh-navy overflow-hidden">
      {/* ── Backgrounds ── */}

      {/* Animated accent shapes */}
      <AnimatedAccent />

      {/* Dot grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none" />

      {/* Spotlight beam — center-left, behind the text */}
      <div className="absolute top-0 left-[5%] w-[50%] h-[80%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(37,99,235,0.20) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Gold accent blob — bottom right, behind visual */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(212,135,10,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Thin horizontal rule — Linear-style divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-20">
        <div className="grid lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Premium badge with authority messaging */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D4870A]/40 bg-gradient-to-r from-[#D4870A]/15 to-[#D4870A]/5 text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Enterprise-Grade Software
            </div>

            {/* Three-line editorial headline with stronger authority */}
            <h1
              className="font-bold text-white leading-[1.0] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {/* Line 1 — static */}
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/80">
                We Engineer
              </span>

              {/* Line 2 — animated cycling word, biggest with enhanced gradient */}
              <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#D4870A] to-[#F59E0B]"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(10px)" : "translateY(0)",
                  transition: "opacity 0.28s ease, transform 0.28s ease",
                }}
              >
                {cycleWords[wordIndex]}
              </span>

              {/* Line 3 — stronger closer emphasizing impact */}
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/85">
                With Impact.
              </span>
            </h1>

            {/* Enhanced sub-headline emphasizing expertise and value */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-3">
              From enterprise transformations to innovative startups — Vedpragya delivers award-winning software that drives measurable business results. Trusted by global leaders.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#D4870A] font-bold">★★★★★</span>
                <span className="text-sm text-gray-400">4.9/5 Client Rating</span>
              </div>
              <div className="w-px h-5 bg-white/10" />
              <div className="text-sm text-gray-400">
                <span className="text-[#F59E0B] font-semibold">500+</span> Projects · <span className="text-[#F59E0B] font-semibold">200+</span> Clients
              </div>
            </div>

            {/* Enhanced CTAs with better visual hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/pages/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4870A] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#FCA311] text-white font-bold text-base rounded-xl transition-all shadow-[0_6px_28px_rgba(212,135,10,0.45)] hover:shadow-[0_10px_40px_rgba(212,135,10,0.6)] hover:-translate-y-1 min-h-[56px] group"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/pages/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/40 text-white font-semibold text-base rounded-xl transition-all hover:bg-white/8 backdrop-blur-sm min-h-[56px] group"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Explore Our Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile illustration — visible below CTAs on small screens */}
            <div className="lg:hidden flex justify-center mb-12 px-4">
              <WebDevIllustration className="w-full max-w-[280px] opacity-80" />
            </div>

            {/* Strength indicators — replaced simple trust strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { num: "500+", label: "Projects Delivered", icon: "✓" },
                { num: "200+", label: "Happy Clients", icon: "★" },
                { num: "15+", label: "Years Experience", icon: "⚡" },
                { num: "99.9%", label: "Uptime Avg", icon: "◉" },
              ].map((s) => (
                <div key={s.label} className="text-left">
                  <p
                    className="text-2xl md:text-3xl font-bold text-[#F59E0B] mb-1"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual (hidden on mobile / tablet) ── */}
          <div className="hidden lg:block">
            <DashboardVisual />
          </div>
        </div>
      </div>

      {/* Enhanced scroll cue with better visibility */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-35 pointer-events-none hover:opacity-60 transition-opacity">
        <span className="text-white text-[10px] font-medium tracking-widest uppercase">Explore More</span>
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
          <svg className="w-4 h-4 text-white/60 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
