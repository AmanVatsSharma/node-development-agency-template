"use client";

import Link from "next/link";
import WebDevIllustration from "@/app/components/illustrations/WebDevIllustration";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Spotlight } from "@/app/components/ui/spotlight";
import { MovingBorder } from "@/app/components/ui/moving-border";

// Minimal code card — right-side visual
function CodeCard() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Subtle outer glow */}
      <div
        className="absolute -inset-6 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl bg-[#0F1623] shadow-[0_32px_80px_rgba(0,0,0,0.55)] p-7 font-mono text-sm rotate-3 hover:rotate-1 transition-transform duration-700"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[10px] text-white/20 tracking-wide">vedpragya-api · POST /project</span>
        </div>

        {/* Request line */}
        <p className="text-[#22c55e] text-xs mb-1">POST /api/v1/project  →  201 Created</p>
        <p className="text-white/20 text-[10px] mb-4">Response · 68ms · vedpragya.com</p>

        {/* JSON body */}
        <pre className="text-xs leading-relaxed">
          <span className="text-white/30">{"{"}</span>{"\n"}
          <span className="text-[#7DD3FC]">  &quot;id&quot;</span>
          <span className="text-white/30">: </span>
          <span className="text-[#86EFAC]">&quot;vp_abc123&quot;</span>
          <span className="text-white/30">,</span>{"\n"}
          <span className="text-[#7DD3FC]">  &quot;name&quot;</span>
          <span className="text-white/30">: </span>
          <span className="text-[#86EFAC]">&quot;BharatERP — Phase 2&quot;</span>
          <span className="text-white/30">,</span>{"\n"}
          <span className="text-[#7DD3FC]">  &quot;status&quot;</span>
          <span className="text-white/30">: </span>
          <span className="text-[#86EFAC]">&quot;in_progress&quot;</span>
          <span className="text-white/30">,</span>{"\n"}
          <span className="text-[#7DD3FC]">  &quot;team&quot;</span>
          <span className="text-white/30">: </span>
          <span className="text-[#86EFAC]">&quot;Vedpragya&quot;</span>
          <span className="text-white/30">,</span>{"\n"}
          <span className="text-[#7DD3FC]">  &quot;delivery&quot;</span>
          <span className="text-white/30">: </span>
          <span className="text-[#86EFAC]">&quot;on_time&quot;</span>{"\n"}
          <span className="text-white/30">{"}"}</span>
        </pre>

        {/* Status row */}
        <div className="flex items-center gap-2 mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
          <span className="text-[10px] text-white/30">All systems operational</span>
          <span className="ml-auto text-[10px] text-white/20">99.9% uptime</span>
        </div>
      </div>

      {/* Floating tech pill — top right */}
      <div
        className="absolute -top-3 -right-2 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl bg-white text-gray-900"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        Next.js 15
      </div>

      {/* Floating tech pill — bottom left */}
      <div
        className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl bg-[#2563EB] text-white"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        TypeScript
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <Spotlight
      className="relative min-h-screen flex items-center overflow-hidden"
      fill="rgba(37,99,235,0.12)"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#080C14]" />

      {/* Aceternity Background Beams — full coverage */}
      <BackgroundBeams className="opacity-75" />

      {/* Subtle top blue radial */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[65%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Thin horizontal rule at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/12 bg-white/5 text-white/60 text-xs font-medium tracking-wide mb-8"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <span className="text-[10px]">🇮🇳</span>
              Vedpragya — India · UAE · USA
            </div>

            {/* Headline */}
            <h1
              className="text-display-xl font-bold text-white leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              We Build Software<br />
              <span style={{ color: "#D4870A" }}>That Lasts.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed mb-10">
              From a startup&rsquo;s first app to a multinational&rsquo;s digital
              transformation — Vedpragya engineers software that scales, performs,
              and delivers real business outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {/* Primary CTA — Moving Border */}
              <MovingBorder
                as={Link}
                href="/pages/contact"
                duration={3000}
                containerClassName="rounded-xl p-[1.5px]"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm rounded-[10px] transition-colors min-h-[52px] w-full"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </MovingBorder>

              <Link
                href="/pages/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/35 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/5 min-h-[52px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See Our Work
              </Link>
            </div>

            {/* Mobile illustration */}
            <div className="lg:hidden flex justify-center mb-10 px-4">
              <WebDevIllustration className="w-full max-w-[280px] opacity-80" />
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-white/10">
              {[
                { num: "500+", label: "Projects Delivered" },
                { num: "200+", label: "Clients Globally" },
                { num: "5", label: "Offices" },
                { num: "99%", label: "Retention" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: code card ── */}
          <div className="hidden lg:block">
            <CodeCard />
          </div>
        </div>
      </div>
    </Spotlight>
  );
}
