"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Collapsible section for mobile
function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 md:border-none">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 md:cursor-default md:py-0 min-h-[44px]"
        aria-expanded={open}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          {title}
        </h3>
        <svg
          className={`w-4 h-4 text-white/30 transition-transform duration-200 md:hidden ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 md:block ${open ? "max-h-[600px] pb-5" : "max-h-0 md:max-h-none"}`}>
        {children}
      </div>
    </div>
  );
}

const footerLinks = {
  products: [
    { href: "/pages/portfolio", label: "BharatERP" },
    { href: "/pages/portfolio", label: "TradeZen" },
    { href: "/pages/portfolio", label: "Promerchants" },
    { href: "/pages/portfolio", label: "Waterakt" },
    { href: "/pages/portfolio", label: "SwiftShift" },
    { href: "/pages/portfolio", label: "MailZen" },
    { href: "/pages/portfolio", label: "CodeYog" },
  ],
  services: [
    { href: "/pages/web-development", label: "Web & Mobile Apps" },
    { href: "/pages/ai-chatbot-development", label: "AI & Automation" },
    { href: "/pages/shopify-store-setup", label: "E-Commerce" },
    { href: "/pages/services", label: "ERP & Enterprise" },
    { href: "/pages/google-ads-management", label: "Digital Marketing" },
    { href: "/pages/trading-software", label: "Trading & Finance" },
  ],
  company: [
    { href: "/pages/about", label: "About Us" },
    { href: "/pages/portfolio", label: "Portfolio" },
    { href: "/pages/blog", label: "Blog" },
    { href: "/pages/resources", label: "Resources" },
    { href: "/pages/contact", label: "Contact" },
    { href: "https://client.vedpragya.com", label: "Client Login", external: true },
  ],
  legal: [
    { href: "/pages/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/pages/legal/terms-of-service", label: "Terms of Service" },
    { href: "/pages/legal/cancellations-refunds", label: "Cancellations & Refunds" },
    { href: "/pages/legal/shipping-policy", label: "Shipping Policy" },
    { href: "/pages/legal/company-info", label: "Company Info" },
  ],
};

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const cls = "text-sm text-white/45 hover:text-white/85 transition-colors duration-150 leading-relaxed min-h-[36px] flex items-center";
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
  }
  return <Link href={href} className={cls}>{label}</Link>;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Submit to newsletter endpoint
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#060A10] text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#1A3A6C]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-0 lg:gap-8 pt-14 pb-6 border-b border-white/8">

          {/* Brand column */}
          <div className="mb-8 lg:mb-0 border-b border-white/8 md:border-none pb-6 md:pb-0 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-5 group" aria-label="Vedpragya – Home">
              <Image
                src="/logo.png"
                alt="Vedpragya"
                width={770}
                height={459}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              />
            </Link>

            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-[260px]">
              Software that moves businesses forward. Web apps, AI, ERP, e-commerce, and digital marketing — engineered from India for the world.
            </p>

            {/* Made in India badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 mb-6">
              <span className="text-base">🇮🇳</span>
              <span className="text-xs text-white/50 font-medium" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                Made in India
              </span>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:support@vedpragya.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@vedpragya.com
              </a>
            </div>
          </div>

          {/* Products */}
          <FooterSection title="Products">
            <ul className="space-y-0">
              {footerLinks.products.map((l) => (
                <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
              ))}
            </ul>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Services">
            <ul className="space-y-0">
              {footerLinks.services.map((l) => (
                <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
              ))}
            </ul>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <ul className="space-y-0">
              {footerLinks.company.map((l) => (
                <li key={l.label}><FooterLink href={l.href} label={l.label} external={l.external} /></li>
              ))}
            </ul>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <ul className="space-y-0">
              {footerLinks.legal.map((l) => (
                <li key={l.label}><FooterLink href={l.href} label={l.label} /></li>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* ── Newsletter bar ── */}
        <div className="py-8 border-b border-white/8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Stay in the loop
              </h3>
              <p className="text-sm text-white/40">
                Engineering insights and product updates. No spam, unsubscribe anytime.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                You&rsquo;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto sm:min-w-[340px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/6 border border-white/12 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4870A]/50 transition-colors min-h-[44px]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#D4870A] hover:bg-[#F59E0B] text-white font-semibold text-sm rounded-lg transition-colors shrink-0 min-h-[44px]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Copyright + legal info */}
            <div className="text-xs text-white/25 leading-relaxed space-y-1">
              <p>
                © {new Date().getFullYear()} Vedpragya Bharat Private Limited. All rights reserved.
              </p>
              <p>
                CIN: U47912HR2025PTC131357 &nbsp;·&nbsp; GST: 06AALCV0051A1ZV &nbsp;·&nbsp; Incorporated: 28 April 2025, Haryana, India
              </p>
            </div>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" strokeWidth={0} fill="currentColor" />
                  ),
                },
                {
                  label: "Twitter / X",
                  href: "#",
                  icon: (
                    <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  ),
                },
                {
                  label: "GitHub",
                  href: "#",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/30 hover:text-white/70 hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
