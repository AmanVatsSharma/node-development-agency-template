import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Vedpragya | Software Development & IT Company — India",
  description:
    "Vedpragya Bharat Private Limited — a full-service software development and IT company founded by Aman Kumar Sharma. Building technology that transforms businesses since 2025.",
};

const milestones = [
  {
    year: "2025",
    event: "Founded",
    desc: "Vedpragya Bharat Private Limited incorporated in Haryana, India by Aman Kumar Sharma.",
  },
  {
    year: "2025",
    event: "First Enterprise Client",
    desc: "Delivered BharatERP to first enterprise client in the manufacturing sector.",
  },
  {
    year: "2025",
    event: "100 Projects",
    desc: "Crossed 100 delivered projects across web, mobile, AI, and ERP domains.",
  },
  {
    year: "2026",
    event: "Global Expansion",
    desc: "Opened offices in Dubai UAE and expanded client base to North America.",
  },
  {
    year: "2026",
    event: "500+ Projects",
    desc: "500+ projects delivered. 200+ clients globally. 5 offices on 3 continents.",
  },
];

const values = [
  {
    title: "Engineering first",
    desc: "Every decision starts with the technical fundamentals. We don't cut corners on architecture just to ship faster.",
  },
  {
    title: "Transparency always",
    desc: "No black boxes, no surprises. Clients have full visibility into progress, code, and decisions at all times.",
  },
  {
    title: "Long-term thinking",
    desc: "We build software meant to last years — not just pass a demo. Maintainability is a first-class concern.",
  },
  {
    title: "Ownership mentality",
    desc: "We treat your product like our own. That's why we also build and ship our own products.",
  },
];

const team = [
  {
    name: "Aman Kumar Sharma",
    role: "Founder & CEO",
    bio: "Full-stack engineer and entrepreneur. Built enterprise-grade systems across fintech, logistics, healthcare, and e-commerce. Founded Vedpragya to bring serious engineering to businesses of all sizes.",
    initials: "AK",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="compact-main-hero bg-[#0C1B33] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4870A]/40 bg-[#D4870A]/10 text-[#D4870A] text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4870A]" />
              Our Story
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              We Build Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4870A] to-[#F59E0B]">
                Actually Works
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Vedpragya is a full-service software development and IT company
              based in India with a global client base. We build web apps, AI
              systems, ERP platforms, and e-commerce solutions that businesses
              depend on every day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pages/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-sm rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(212,135,10,0.35)] hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Work With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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
      </section>

      {/* STATS BAR */}
      <section className="py-10 bg-white dark:bg-[#080C14] border-b border-gray-100 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-100 dark:divide-[#1E293B]">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "200+", label: "Clients Globally" },
              { num: "5", label: "Offices" },
              { num: "7", label: "Products Shipped" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left md:pl-8 first:pl-0">
                <p
                  className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.num}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="vp-divider mb-4" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What We Stand For
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Vedpragya was founded on a simple idea: great software is rare,
                but it doesn&rsquo;t have to be. Most businesses settle for
                fragile, over-priced, or poorly maintained systems. We believe
                they deserve better.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                We bring serious engineering discipline to every project —
                whether it&rsquo;s a startup&rsquo;s first app or a
                multinational&rsquo;s digital transformation. No shortcuts. No
                hand-waving. Just software that works, scales, and lasts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white dark:bg-[#080C14] rounded-2xl p-6 border border-gray-100 dark:border-[#1E293B]"
                >
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#D4870A] to-[#F59E0B] mb-4 rounded-full" />
                  <h3
                    className="font-bold text-[#0C1B33] dark:text-white mb-2"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="compact-main-section bg-white dark:bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-14 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Leadership
          </h2>
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col sm:flex-row gap-8 items-start max-w-3xl"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-[#0C1B33] flex items-center justify-center text-white font-bold text-2xl shrink-0"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {member.initials}
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-[#0C1B33] dark:text-white mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#D4870A] font-semibold text-sm mb-4 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="compact-main-section bg-[#0C1B33] relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-14 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Our Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 sm:gap-8 relative">
                  {/* Dot */}
                  <div className="hidden sm:flex items-start shrink-0 w-10 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#D4870A] ml-3.5 ring-4 ring-[#0C1B33]" />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-bold text-[#D4870A] uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {m.year}
                      </span>
                      <span
                        className="text-base font-bold text-white"
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

      {/* OFFICES */}
      <section className="compact-main-section bg-[#F4F4F5] dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C1B33] dark:text-white mb-14 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Where We Operate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { location: "Haryana, India", label: "Headquarters", flag: "🇮🇳" },
              { location: "Dubai, UAE", label: "Middle East Office", flag: "🇦🇪" },
              { location: "California, USA", label: "North America Office", flag: "🇺🇸" },
              { location: "Toronto, Canada", label: "Canada Office", flag: "🇨🇦" },
              { location: "Shenzhen, China", label: "Asia-Pacific Office", flag: "🇨🇳" },
            ].map((office) => (
              <div
                key={office.location}
                className="bg-white dark:bg-[#080C14] rounded-2xl p-5 border border-gray-100 dark:border-[#1E293B] flex items-center gap-4"
              >
                <span className="text-3xl">{office.flag}</span>
                <div>
                  <p
                    className="font-bold text-[#0C1B33] dark:text-white text-sm"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {office.location}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{office.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL INFO */}
      <section className="py-10 bg-white dark:bg-[#080C14] border-t border-gray-100 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Legal Details
          </h3>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span><strong className="text-gray-700 dark:text-gray-300">Legal Name:</strong> Vedpragya Bharat Private Limited</span>
            <span><strong className="text-gray-700 dark:text-gray-300">CIN:</strong> U47912HR2025PTC131357</span>
            <span><strong className="text-gray-700 dark:text-gray-300">GST:</strong> 06AALCV0051A1ZV</span>
            <span><strong className="text-gray-700 dark:text-gray-300">Incorporated:</strong> 28 April 2025</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="compact-main-section bg-[#0C1B33] relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project. Our team responds within 24 hours with a
            clear, honest assessment.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-bold text-base rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(212,135,10,0.4)] hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
