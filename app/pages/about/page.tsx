import Link from "next/link";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Spotlight } from "@/app/components/ui/spotlight";
import { MovingBorder } from "@/app/components/ui/moving-border";

const milestones = [
  { year: "2025", event: "Founded", desc: "Vedpragya Bharat Private Limited was founded in Haryana, India by Aman Kumar Sharma." },
  { year: "2025", event: "First Enterprise Client", desc: "Delivered BharatERP to first enterprise client in the manufacturing sector." },
  { year: "2025", event: "100 Projects", desc: "Crossed 100 delivered projects across web, mobile, AI, and ERP domains." },
  { year: "2026", event: "Global Expansion", desc: "Opened offices in Dubai UAE and expanded client base to North America." },
  { year: "2026", event: "500+ Projects", desc: "500+ projects delivered. 200+ clients globally. 5 offices on 3 continents." },
];

const values = [
  {
    title: "Engineering First",
    desc: "Every decision starts with the technical fundamentals. We don't cut corners on architecture just to ship faster.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Transparency Always",
    desc: "No black boxes, no surprises. Clients have full visibility into progress, code, and decisions at all times.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Long-Term Thinking",
    desc: "We build software meant to last years — not just pass a demo. Maintainability is a first-class concern.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Ownership Mentality",
    desc: "We treat your product like our own. That's why we also build and ship our own products.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

const offices = [
  { flag: "🇮🇳", country: "India", detail: "Haryana", label: "Headquarters" },
  { flag: "🇦🇪", country: "UAE", detail: "Dubai", label: "Middle East" },
  { flag: "🇺🇸", country: "USA", detail: "California", label: "North America" },
  { flag: "🇨🇦", country: "Canada", detail: "Toronto", label: "Canada" },
  { flag: "🇨🇳", country: "China", detail: "Shenzhen", label: "Asia-Pacific" },
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="compact-main-hero bg-[#080C14] relative overflow-hidden flex items-center">
        <BackgroundBeams />
        <Spotlight className="absolute inset-0 w-full h-full" fill="rgba(37,99,235,0.10)">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Our Story
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Built by Engineers.{" "}
                <span className="text-[#2563EB]">Run by Engineers.</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                Vedpragya is a product-grade software engineering firm. We don&rsquo;t just
                write code — we architect systems that outlive the projects that spawned them.
              </p>
              <div className="flex flex-wrap gap-3">
                <MovingBorder
                  as={Link}
                  href="/pages/contact"
                  duration={3000}
                  containerClassName="rounded-xl p-[1.5px] inline-block"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] rounded-[10px] text-white font-bold text-sm hover:bg-[#1D4ED8] transition-colors"
                >
                  <span style={{ fontFamily: "var(--font-sora), sans-serif" }}>Work With Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </MovingBorder>
                <Link
                  href="/pages/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-xl transition-all hover:bg-white/5"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </Spotlight>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-100">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "200+", label: "Clients Globally" },
              { num: "5", label: "Offices Worldwide" },
              { num: "7", label: "Products Shipped" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left md:pl-8 first:pl-0">
                <p
                  className="text-4xl font-bold text-[#0C1B33] mb-1 tracking-tight"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.num}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + VALUES ──────────────────────────────────────────────────── */}
      <section className="compact-main-section bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Mission copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/8 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-6">
                Our Mission
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0C1B33] mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What We Stand For
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Vedpragya was founded on a simple idea: great software is rare, but it
                doesn&rsquo;t have to be. Most businesses settle for fragile, over-priced, or
                poorly maintained systems. We believe they deserve better.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We bring serious engineering discipline to every project — whether it&rsquo;s a
                startup&rsquo;s first app or a multinational&rsquo;s digital transformation. No
                shortcuts. No hand-waving. Just software that works, scales, and lasts.
              </p>
            </div>

            {/* Value cards — 2×2 grid with premium shadows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_8px_32px_rgba(12,27,51,0.08)] hover:shadow-[0_16px_48px_rgba(12,27,51,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={v.icon} />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-[#0C1B33] mb-2 text-sm"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────────── */}
      <section className="compact-main-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start bg-[#F4F4F5] rounded-3xl p-8 md:p-12 border border-gray-100">

              {/* Large initials avatar + identity */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-[0_16px_48px_rgba(37,99,235,0.30)]">
                  <span
                    className="text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    AK
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <p
                    className="font-bold text-[#0C1B33] text-lg leading-snug"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Aman Kumar Sharma
                  </p>
                  <p className="text-sm text-[#2563EB] font-semibold mt-0.5">Founder &amp; CEO</p>
                </div>
              </div>

              {/* Pull quote + bio */}
              <div>
                <blockquote className="mb-6">
                  {/* Decorative quotation mark */}
                  <div
                    className="text-5xl text-[#2563EB] leading-none font-serif mb-3 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p
                    className="text-xl sm:text-2xl font-bold text-[#0C1B33] leading-snug tracking-tight"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    I started Vedpragya because great engineering is rare — and businesses
                    deserve software that actually holds up.
                  </p>
                </blockquote>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Full-stack engineer and entrepreneur. Built enterprise-grade systems across
                  fintech, logistics, healthcare, and e-commerce. Founded Vedpragya to bring
                  serious engineering to businesses of all sizes.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Before starting Vedpragya, Aman led engineering at multiple startups and
                  delivered mission-critical systems for clients across India, the UAE, and North
                  America. He believes the best engineering firms also ship their own products —
                  and Vedpragya does exactly that with BharatERP, TradeZen, and five more live
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES / JOURNEY ──────────────────────────────────────────────── */}
      <section className="compact-main-section bg-[#080C14] relative overflow-hidden">
        <BackgroundBeams />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-4">
              Our Journey
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              From Zero to Global in Two Years
            </h2>
          </div>

          {/* Timeline with connecting line and numbered dots */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/70 via-[#2563EB]/30 to-transparent pointer-events-none" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8 items-start">
                  {/* Numbered dot — sits on top of the connecting line */}
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.45)]">
                    <span
                      className="text-white font-bold text-xs"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB]"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {m.year}
                      </span>
                      <div className="h-px w-4 bg-[#2563EB]/40" />
                      <span
                        className="text-xs font-bold text-white/80 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {m.event}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ───────────────────────────────────────────────────────────── */}
      <section className="compact-main-section bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1B33] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Where We Operate
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Five offices across three continents. Local expertise, global engineering standards.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {offices.map((o) => (
              <div
                key={o.country}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-[0_8px_32px_rgba(12,27,51,0.08)] hover:shadow-[0_16px_48px_rgba(12,27,51,0.12)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-3xl block mb-3">{o.flag}</span>
                <p
                  className="font-bold text-[#0C1B33] text-sm mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {o.country}
                </p>
                <p className="text-xs text-gray-400 mb-3">{o.detail}</p>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded-full">
                  {o.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGAL ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Legal Entity
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
                <span><strong className="text-[#0C1B33]">Vedpragya Bharat Private Limited</strong></span>
                <span>CIN: U47912HR2025PTC131357</span>
                <span>GST: 06AALCV0051A1ZV</span>
                <span>Incorporated: 28 April 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section className="compact-main-section bg-[#080C14] relative overflow-hidden">
        <BackgroundBeams />
        <Spotlight className="absolute inset-0 w-full h-full" fill="rgba(37,99,235,0.10)">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your project. Our team responds within 24 hours with a clear,
              honest assessment — no over-selling, no fluff.
            </p>
            <MovingBorder
              as={Link}
              href="/pages/contact"
              duration={3000}
              containerClassName="rounded-xl p-[1.5px] inline-block"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] rounded-[10px] text-white font-bold text-base hover:bg-[#1D4ED8] transition-colors"
            >
              <span style={{ fontFamily: "var(--font-sora), sans-serif" }}>Start a Conversation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </MovingBorder>
          </div>
        </Spotlight>
      </section>

    </div>
  );
}
