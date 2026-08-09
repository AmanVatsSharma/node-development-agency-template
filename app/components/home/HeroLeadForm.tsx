"use client";

import React, { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
}

const PROJECT_OPTIONS = [
  { value: "web-app", label: "Web / app development" },
  { value: "ai-agent", label: "AI agent" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "cloud-devops", label: "Cloud / DevOps" },
  { value: "other", label: "Other" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Load reCAPTCHA v3 once, lazily. Never blocks the form on failure.
let recaptchaReady: Promise<void> | null = null;
function loadRecaptcha(): Promise<void> {
  if (recaptchaReady) return recaptchaReady;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  recaptchaReady = new Promise((resolve) => {
    if (!siteKey || typeof window === "undefined") return resolve();
    if ((window as unknown as { grecaptcha?: unknown }).grecaptcha) return resolve();
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });
  return recaptchaReady;
}

async function getRecaptchaToken(): Promise<string> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === "undefined") return "";
  await loadRecaptcha();
  const g = (window as unknown as {
    grecaptcha?: { execute: (k: string, o: object) => Promise<string> };
  }).grecaptcha;
  if (!g?.execute) return "";
  try {
    return await g.execute(siteKey, { action: "hero_lead" });
  } catch {
    return "";
  }
}

export default function HeroLeadForm() {
  const [values, setValues] = useState<FieldValues>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  });
  const [errors, setErrors] = useState<Partial<FieldValues>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [topError, setTopError] = useState<string | null>(null);

  const mountTime = useRef<number>(Date.now());
  const firstInteractionAt = useRef<number | null>(null);
  const submittedAt = useRef<number | null>(null);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  function markFirstInteraction() {
    if (firstInteractionAt.current === null) {
      firstInteractionAt.current = Date.now();
    }
  }

  function update<K extends keyof FieldValues>(key: K, val: string) {
    markFirstInteraction();
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setTopError(null);
  }

  function validate(): boolean {
    const e: Partial<FieldValues> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!EMAIL_RE.test(values.email)) e.email = "Please enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTopError(null);
    submittedAt.current = Date.now();

    const scrollDepth =
      typeof window !== "undefined"
        ? Math.round(
            (window.scrollY /
              Math.max(document.body.scrollHeight - window.innerHeight, 1)) *
              100,
          )
        : 0;

    const recaptchaToken = await getRecaptchaToken();

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          source: "hero-form",
          leadSource: "Homepage Hero",
          raw: {
            projectType: values.projectType,
            timeOnPage: Date.now() - mountTime.current,
            timeToForm: firstInteractionAt.current
              ? firstInteractionAt.current - mountTime.current
              : 0,
            formCompletionTime:
              submittedAt.current && firstInteractionAt.current
                ? submittedAt.current - firstInteractionAt.current
                : 0,
            scrollDepth,
          },
          recaptchaToken,
        }),
      });
      let data: { success?: boolean } = {};
      try {
        data = await res.json();
      } catch {
        /* ignore parse error */
      }
      if (res.ok && data.success !== false) {
        setStatus("success");
        const gtag = (window as unknown as {
          gtag?: (...a: unknown[]) => void;
        }).gtag;
        gtag?.("event", "generate_lead", { source: "hero-form" });
      } else {
        setStatus("error");
        setTopError(
          "Something went wrong — try again, or email support@vedpragya.com.",
        );
      }
    } catch {
      setStatus("error");
      setTopError(
        "Something went wrong — try again, or email support@vedpragya.com.",
      );
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="text-center py-6" data-testid="hero-form-success">
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p
          className="text-lg font-semibold text-[#111827]"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Got it — we&rsquo;ll reply within 14 hours.
        </p>
        <a
          href="#book-call"
          className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
        >
          Book a call now
          <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  // ── Form state ──
  const inputBase =
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder-gray-400 " +
    "transition focus:outline-none focus:ring-2 focus:ring-blue-100";

  return (
    <form onSubmit={onSubmit} noValidate aria-labelledby="hero-form-title">
      <h3
        id="hero-form-title"
        className="text-lg font-bold text-[#111827]"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        Let&rsquo;s scope your project.
      </h3>
      <p className="text-xs text-[#6B7280] mt-1 mb-5">
        Free · no obligation · &lt;24h reply
      </p>

      {topError && (
        <div
          role="alert"
          className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700"
        >
          {topError}
        </div>
      )}

      {/* Name */}
      <div className="mb-3.5">
        <label
          htmlFor="hero-name"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Full name
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "hero-name-err" : undefined}
          className={`${inputBase} ${
            errors.name
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : "border-gray-200 focus:border-[#2563EB]"
          }`}
        />
        {errors.name && (
          <p id="hero-name-err" role="alert" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-3.5">
        <label
          htmlFor="hero-email"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Work email
        </label>
        <div className="relative">
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "hero-email-err" : undefined}
            className={`${inputBase} ${
              errors.email
                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-[#2563EB]"
            }`}
          />
          {!errors.email && EMAIL_RE.test(values.email) && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
              aria-hidden
            >
              ✓
            </span>
          )}
        </div>
        {errors.email && (
          <p id="hero-email-err" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div className="mb-3.5">
        <label
          htmlFor="hero-phone"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Phone (optional)
        </label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={`${inputBase} border-gray-200 focus:border-[#2563EB]`}
        />
      </div>

      {/* Project type */}
      <div className="mb-5">
        <label
          htmlFor="hero-project"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          What do you need?
        </label>
        <select
          id="hero-project"
          name="projectType"
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          className={`${inputBase} border-gray-200 focus:border-[#2563EB]`}
        >
          <option value="" disabled>
            Select a project type…
          </option>
          {PROJECT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-70 text-white font-bold text-sm rounded-lg shadow-[0_8px_24px_rgba(37,99,235,0.30)] hover:-translate-y-px transition-all min-h-[48px]"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {status === "submitting" ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Get my estimate <span aria-hidden>▶</span>
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-[#6B7280]">
        ⚡ Avg reply in 14 hrs
      </p>
    </form>
  );
}
