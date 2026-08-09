"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import HeroLeadForm from "./HeroLeadForm";

const STACK_PILLS = ["Next.js 15", "AI Agents", "Cloud Platforms"];

export default function HeroSection() {
  // Staggered mount reveal — toggles --visible on each [data-reveal] node.
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const timers: number[] = [];
    nodes.forEach((node, i) => {
      timers.push(
        window.setTimeout(() => node.classList.add("hero-reveal--visible"), 80 * i),
      );
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  function focusForm() {
    const el = document.getElementById("hero-name");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Background: top radial glow + dotted grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center">
          {/* ── Left: copy ── */}
          <div>
            {/* Badge */}
            <div
              data-reveal
              className="hero-reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-600 mb-6 shadow-[0_1px_3px_0_rgba(12,27,51,0.07)]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <span className="text-[10px]">◍</span>
              <span className="font-medium text-gray-700">
                vedpragya — India · UAE · USA
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500">
                500+ products shipped · 99% retention
              </span>
            </div>

            {/* Headline */}
            <h1
              data-reveal
              className="hero-reveal text-display-lg font-bold text-[#111827] leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Software, shipped
              <br />
              like a <span className="vp-gradient-text">product team.</span>
            </h1>

            {/* Sub-line */}
            <p
              data-reveal
              className="hero-reveal text-lg sm:text-xl text-[#6B7280] max-w-xl leading-relaxed mb-3"
            >
              Next.js 15 · AI agents · cloud platforms — from MVP to enterprise,
              without the agency overhead.
            </p>

            {/* Stack pills */}
            <div data-reveal className="hero-reveal flex flex-wrap gap-2 mb-8">
              {STACK_PILLS.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div data-reveal className="hero-reveal flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={focusForm}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm rounded-xl shadow-[0_8px_24px_rgba(37,99,235,0.30)] hover:-translate-y-px transition-all min-h-[52px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Get a project estimate
                <span aria-hidden>→</span>
              </button>
              <Link
                href="/pages/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-300 hover:border-gray-400 text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-all min-h-[52px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See our work
              </Link>
            </div>
          </div>

          {/* ── Right: lead form card ── */}
          <div data-reveal className="hero-reveal">
            <div className="relative bg-white rounded-2xl shadow-[0_12px_40px_0_rgba(12,27,51,0.14),0_4px_12px_-2px_rgba(12,27,51,0.08)] border border-gray-100 p-6 sm:p-8 overflow-hidden">
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #2563EB 50%, transparent)",
                }}
              />
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
