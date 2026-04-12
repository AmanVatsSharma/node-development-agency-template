"use client";

import { useState } from "react";
import Link from "next/link";
import { fireConversion } from "@/utils/conversions";
import { trackEvent as trackGAEvent } from "@/app/components/Analytics/GoogleAnalytics";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Spotlight } from "@/app/components/ui/spotlight";
import { MovingBorder } from "@/app/components/ui/moving-border";

type FormField = { value: string; error: string; touched: boolean };
type FormState = {
  name: FormField;
  email: FormField;
  company: FormField;
  phone: FormField;
  service: FormField;
  message: FormField;
};

const emptyField = (): FormField => ({ value: "", error: "", touched: false });

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "web", label: "Web & Mobile Development" },
  { value: "ai", label: "AI & Automation" },
  { value: "ecommerce", label: "E-Commerce Platform" },
  { value: "erp", label: "ERP / Enterprise Software" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "trading", label: "Trading & Finance Tech" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Something else" },
];

const offices = [
  { flag: "🇮🇳", country: "India", detail: "Haryana (HQ)", label: "Headquarters" },
  { flag: "🇦🇪", country: "UAE", detail: "Dubai", label: "Middle East" },
  { flag: "🇺🇸", country: "USA", detail: "California", label: "North America" },
  { flag: "🇨🇦", country: "Canada", detail: "Toronto", label: "Canada" },
  { flag: "🇨🇳", country: "China", detail: "Shenzhen", label: "Asia-Pacific" },
];

// Clean input classes — light theme only, no dark: variants
const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm transition-colors focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20";

const errorClass = "mt-1.5 text-xs text-red-500";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [form, setForm] = useState<FormState>({
    name: emptyField(),
    email: emptyField(),
    company: emptyField(),
    phone: emptyField(),
    service: emptyField(),
    message: emptyField(),
  });

  const handleChange = (field: keyof FormState, value: string) => {
    let error = "";
    if (value.trim() === "" && field !== "phone" && field !== "company") {
      error = "This field is required";
    } else if (field === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address";
    }
    setForm((prev) => ({ ...prev, [field]: { value, error, touched: true } }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = ["name", "email", "service", "message"];
    const isValid = required.every((f) => form[f].value.trim() !== "" && form[f].error === "");

    if (!isValid) {
      const updated = { ...form };
      required.forEach((f) => {
        if (updated[f].value.trim() === "") {
          updated[f] = { ...updated[f], error: "This field is required", touched: true };
        }
      });
      setForm(updated);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          company: form.company.value,
          phone: form.phone.value,
          service: form.service.value,
          message: form.message.value,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      try { void fireConversion("contact_form_submit"); } catch {}
      try { trackGAEvent("submit", "contact_form", "Contact form submitted"); } catch {}

      setSubmitSuccess(true);
      setForm({
        name: emptyField(), email: emptyField(), company: emptyField(),
        phone: emptyField(), service: emptyField(), message: emptyField(),
      });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="compact-main-hero bg-[#080C14] relative overflow-hidden flex items-center">
        <BackgroundBeams />
        <Spotlight className="absolute inset-0 w-full h-full" fill="rgba(37,99,235,0.10)">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Get in Touch
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Let&rsquo;s Build Something{" "}
                <span className="text-[#2563EB]">Together</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Tell us what you&rsquo;re building. Our team will respond within 24 hours with a
                clear, honest assessment — no over-selling, no fluff.
              </p>
            </div>
          </div>
        </Spotlight>
      </section>

      {/* ── FORM + INFO (two-column) ──────────────────────────────────────────── */}
      <section className="compact-main-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: form (3/5 width) */}
            <div className="lg:col-span-3 order-2 lg:order-1">

              {/* Success state */}
              {submitSuccess ? (
                <div className="p-8 rounded-2xl border border-emerald-200 bg-emerald-50 text-center shadow-[0_8px_32px_rgba(12,27,51,0.08)]">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-emerald-800 mb-2"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-emerald-700 text-sm">
                    We&rsquo;ll be in touch within 24 hours. Keep an eye on your inbox.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-sm font-semibold text-emerald-700 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-0">
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">

                    {/* Name */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name.value}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`${inputClass} ${form.name.touched && form.name.error ? "border-red-400" : ""}`}
                      />
                      {form.name.touched && form.name.error && <p className={errorClass}>{form.name.error}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email.value}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`${inputClass} ${form.email.touched && form.email.error ? "border-red-400" : ""}`}
                      />
                      {form.email.touched && form.email.error && <p className={errorClass}>{form.email.error}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={form.company.value}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone.value}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.service.value}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className={`${inputClass} ${form.service.touched && form.service.error ? "border-red-400" : ""}`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {form.service.touched && form.service.error && <p className={errorClass}>{form.service.error}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe what you're building, your timeline, and any specific requirements..."
                      value={form.message.value}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`${inputClass} resize-none ${form.message.touched && form.message.error ? "border-red-400" : ""}`}
                    />
                    {form.message.touched && form.message.error && <p className={errorClass}>{form.message.error}</p>}
                  </div>

                  {/* Error banner */}
                  {submitError && (
                    <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                      {submitError}
                    </div>
                  )}

                  {/* Submit — wrapped in MovingBorder for premium feel */}
                  <MovingBorder
                    as="button"
                    type="submit"
                    disabled={isSubmitting}
                    duration={3000}
                    containerClassName="rounded-xl p-[1.5px] inline-block w-full sm:w-auto"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] rounded-[10px] text-white font-bold text-sm w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#1D4ED8] transition-colors"
                  >
                    <span style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </MovingBorder>
                </form>
              )}
            </div>

            {/* Right: contact info (2/5 width) */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-5">

              {/* 24-hour response promise */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_32px_rgba(12,27,51,0.08)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-[#0C1B33]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    24-Hour Response
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Every inquiry gets a real response from a senior team member — not a bot,
                  not a junior. You deserve a thoughtful answer.
                </p>
              </div>

              {/* Direct email */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_32px_rgba(12,27,51,0.08)]">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Direct Contact
                </p>
                <a
                  href="mailto:support@vedpragya.com"
                  className="flex items-center gap-3 text-[#0C1B33] hover:text-[#2563EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/8 transition-colors">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">support@vedpragya.com</span>
                </a>
              </div>

              {/* Office locations */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_32px_rgba(12,27,51,0.08)]">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Our Offices
                </p>
                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.country} className="flex items-center gap-3">
                      <span className="text-xl w-7 shrink-0 text-center">{o.flag}</span>
                      <div>
                        <span
                          className="text-sm font-semibold text-[#0C1B33]"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          {o.country}
                        </span>
                        <span className="text-sm text-gray-400"> &middot; {o.detail}</span>
                      </div>
                      {o.label === "Headquarters" && (
                        <span className="ml-auto text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded-full uppercase tracking-widest shrink-0">
                          HQ
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal entity */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_32px_rgba(12,27,51,0.08)]">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Legal Entity
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-[#0C1B33]">Vedpragya Bharat Private Limited</strong><br />
                  CIN: U47912HR2025PTC131357<br />
                  GST: 06AALCV0051A1ZV<br />
                  Haryana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
