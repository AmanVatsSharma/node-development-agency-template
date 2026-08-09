# Hero Redesign — Light Enterprise Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark `HeroSection` with a modern, light, high-converting hero containing an inline lead form that submits to the existing `POST /api/lead` endpoint.

**Architecture:** Two client components — `HeroSection.tsx` (layout, copy, badge, CTAs, background) mounts `HeroLeadForm.tsx` (the form card + all form state/logic). The form posts to the existing `/api/lead` route, which already handles Zoho sync, reCAPTCHA v3 verification, Google Ads conversion logging, and lead scoring. No new API, no new deps. CSS transitions + a mount effect drive the reveal animations (no framer-motion needed).

**Tech Stack:** Next.js 15 (App Router, Turbopack), React 19, TypeScript, Tailwind v4 (`@import 'tailwindcss'`), existing design tokens (`--vp-*`), Google reCAPTCHA v3, GA4 (`window.gtag`).

**Spec:** `docs/superpowers/specs/2026-08-09-hero-redesign-light-enterprise-design.md`

## Global Constraints

- **No new dependencies.** Use CSS transitions + a `useEffect` mount reveal. Do NOT add framer-motion, gsap, or any animation lib.
- **Fonts unchanged:** Sora (display, `var(--font-sora)`) + DM Sans (body) — already loaded via `next/font/google` in `app/layout.tsx`.
- **Design tokens:** use existing CSS vars from `app/globals.css`: `--vp-cta: #2563EB`, `--vp-cta-hover: #1D4ED8`, `--vp-cta-shadow`, `--vp-shadow-lg`, `--vp-text: #111827`, `--vp-text-muted: #6B7280`, `--vp-bg: #FAFAFA`, `--vp-bg-card: #FFFFFF`, `--vp-border: #E5E7EB`. Do not redefine these.
- **Gradient utility:** reuse existing `.vp-gradient-text` (navy→blue→gold) for the highlighted headline word.
- **Type scale:** reuse `.text-display-lg` (`clamp(2.75rem, 6vw, 5rem)`) for the headline.
- **Form endpoint:** `POST /api/lead`. Payload shape defined in Task 2. Do NOT create a new route.
- **reCAPTCHA:** v3 invisible. Site key via `process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY`. Load the v3 script from `https://www.google.com/recaptcha/api.js?render=EXPLICIT` — see Task 2 for the exact loader.
- **Accessibility:** every input has a real `<label htmlFor>`; errors use `role="alert"` + `aria-describedby`; submit button uses `aria-busy`.
- **Copy is fixed** (from the approved spec) — do not paraphrase: headline "Software, shipped like a product team.", sub-line "Next.js 15 · AI agents · cloud platforms — from MVP to enterprise, without the agency overhead.", primary CTA "Get a project estimate", secondary CTA "See our work", form title "Let's scope your project.", form sub "Free · no obligation · <24h reply", button "Get my estimate", micro-trust "⚡ Avg reply in 14 hrs", success "Got it — we'll reply within 14 hours."
- **Working directory:** `C:\Users\ASUS TUF A15\Desktop\DevOPS\Projects\node-development-agency-template`
- **Branch:** implement on `master` (the user's single production branch). Commit after each task.

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `app/components/home/HeroLeadForm.tsx` | **Create** | The form card: 4 fields, validation, submit logic, reCAPTCHA v3, success/error states, GA4 event. Self-contained. |
| `app/components/home/HeroSection.tsx` | **Rewrite** | Light layout: badge, headline, sub-copy, 2 CTAs, background glow + grid, mounts `HeroLeadForm`. Staggered mount reveal. |
| `app/components/home/__tests__/HeroLeadForm.test.tsx` | **Create** | RTL unit tests for the form: validation, submit success, submit error. |
| `app/page.tsx` | **Modify** | Remove `<FreeConsultationBanner />` + its import (lines added in the consultation port). Keep `<FloatingConsultationButton />`. |
| `app/globals.css` | **Modify** | Add one utility class `.hero-grid-bg` for the dotted grid texture + `.hero-reveal` animation keyframes. Append to the existing `@layer utilities` block. |

---

### Task 1: Add hero CSS utilities (grid texture + reveal animation)

**Files:**
- Modify: `app/globals.css` (append to the existing `@layer utilities` block, after `.vp-gold-text`)

**Interfaces:**
- Produces: `.hero-grid-bg` (dotted grid background) and `.hero-reveal` / `.hero-reveal--visible` (mount-reveal transition) CSS classes used by Task 3.

- [ ] **Step 1: Read the end of the utilities block in `app/globals.css`**

Run: `grep -n "vp-gold-text\|^}" app/globals.css | tail -5`
Locate the closing of `.vp-gold-text { ... }` inside `@layer utilities`. The new classes go immediately after it, still inside `@layer utilities`.

- [ ] **Step 2: Append the two utility classes**

Insert after `.vp-gold-text { color: #D4870A; }` and before the closing `}` of `@layer utilities`:

```css
  /* Hero dotted grid texture — near-invisible, premium feel */
  .hero-grid-bg {
    background-image: radial-gradient(circle, #111827 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.03;
  }

  /* Hero mount reveal — used with JS-toggled --visible modifier */
  .hero-reveal {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 400ms ease-out, transform 400ms ease-out;
  }
  .hero-reveal--visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-reveal { opacity: 1; transform: none; transition: none; }
  }
```

- [ ] **Step 3: Verify the file parses (no syntax error)**

Run: `node -e "require('fs').readFileSync('app/globals.css','utf8'); console.log('ok')"`
Expected: prints `ok` (no throw).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "style(hero): add dotted-grid + mount-reveal utilities for light hero"
```

---

### Task 2: Create `HeroLeadForm` component with validation + submit

**Files:**
- Create: `app/components/home/HeroLeadForm.tsx`
- Create: `app/components/home/__tests__/HeroLeadForm.test.tsx`

**Interfaces:**
- Consumes: `POST /api/lead` (existing route, payload below); `process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (string, may be empty in tests — handle gracefully); `window.gtag` (optional).
- Produces: default export `HeroLeadForm` (React component, no props). Mounted by Task 3's `HeroSection`.

**Payload to `/api/lead`** (exact field names — matches `LeadPayload` in `app/api/lead/route.ts`):
```ts
{
  name: string,
  email: string,
  phone: string,        // may be "" (optional field)
  source: "hero-form",
  leadSource: "Homepage Hero",
  raw: {
    projectType: string,   // one of the select values
    timeOnPage: number,    // ms since mount
    timeToForm: number,    // ms from mount to first field interaction
    formCompletionTime: number, // ms from first interaction to submit
    scrollDepth: number,   // percent, captured on submit
  },
  recaptchaToken: string,
}
```

- [ ] **Step 1: Write the failing test**

Create `app/components/home/__tests__/HeroLeadForm.test.tsx`:

```tsx
import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import HeroLeadForm from "../HeroLeadForm";

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as unknown as typeof fetch;

// Mock grecaptcha
const mockExecute = jest.fn().mockResolvedValue("tok-123");
(global as unknown as { grecaptcha: unknown }).grecaptcha = { execute: mockExecute };

beforeEach(() => {
  mockFetch.mockReset();
  mockExecute.mockClear();
  mockExecute.mockResolvedValue("tok-123");
});

describe("HeroLeadForm", () => {
  it("renders the 4 fields and submit button", () => {
    render(<HeroLeadForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what do you need/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get my estimate/i })).toBeInTheDocument();
  });

  it("blocks submit when required fields are empty and shows errors", async () => {
    render(<HeroLeadForm />);
    fireEvent.click(screen.getByRole("button", { name: /get my estimate/i }));
    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("submits successfully and shows the success message", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) });
    render(<HeroLeadForm />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "ada@analyze.uk" } });
    fireEvent.change(screen.getByLabelText(/what do you need/i), { target: { value: "web-app" } });
    fireEvent.click(screen.getByRole("button", { name: /get my estimate/i }));
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/we'll reply within 14 hours/i)).toBeInTheDocument();
  });

  it("shows an error message on submit failure and keeps the form populated", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, json: async () => ({ success: false, error: "boom" }) });
    render(<HeroLeadForm />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Grace Hopper" } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "grace@navy.mil" } });
    fireEvent.change(screen.getByLabelText(/what do you need/i), { target: { value: "ai-agent" } });
    fireEvent.click(screen.getByRole("button", { name: /get my estimate/i }));
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect((screen.getByLabelText(/full name/i) as HTMLInputElement).value).toBe("Grace Hopper");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest app/components/home/__tests__/HeroLeadForm.test.tsx --no-coverage`
Expected: FAIL — "Cannot find module '../HeroLeadForm'".

- [ ] **Step 3: Create the component**

Create `app/components/home/HeroLeadForm.tsx`:

```tsx
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

// Load reCAPTCHA v3 once, lazily.
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
    s.onerror = () => resolve(); // never block the form on recaptcha load failure
    document.head.appendChild(s);
  });
  return recaptchaReady;
}

async function getRecaptchaToken(): Promise<string> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === "undefined") return "";
  await loadRecaptcha();
  const g = (window as unknown as { grecaptcha?: { execute: (k: string, o: object) => Promise<string> } }).grecaptcha;
  if (!g?.execute) return "";
  try {
    return await g.execute(siteKey, { action: "hero_lead" });
  } catch {
    return "";
  }
}

export default function HeroLeadForm() {
  const [values, setValues] = useState<FieldValues>({ name: "", email: "", phone: "", projectType: "" });
  const [errors, setErrors] = useState<Partial<FieldValues>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [topError, setTopError] = useState<string | null>(null);

  const mountTime = useRef<number>(Date.now());
  const firstInteractionAt = useRef<number | null>(null);
  const submittedAt = useRef<number | null>(null);

  useEffect(() => { mountTime.current = Date.now(); }, []);

  function markFirstInteraction() {
    if (firstInteractionAt.current === null) firstInteractionAt.current = Date.now();
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

    const scrollDepth = typeof window !== "undefined"
      ? Math.round((window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)) * 100)
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
            timeToForm: firstInteractionAt.current ? firstInteractionAt.current - mountTime.current : 0,
            formCompletionTime: submittedAt.current && firstInteractionAt.current
              ? submittedAt.current - firstInteractionAt.current : 0,
            scrollDepth,
          },
          recaptchaToken,
        }),
      });
      let data: { success?: boolean } = {};
      try { data = await res.json(); } catch { /* ignore parse error */ }
      if (res.ok && data.success !== false) {
        setStatus("success");
        const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
        gtag?.("event", "generate_lead", { source: "hero-form" });
      } else {
        setStatus("error");
        setTopError("Something went wrong — try again, or email support@vedpragya.com.");
      }
    } catch {
      setStatus("error");
      setTopError("Something went wrong — try again, or email support@vedpragya.com.");
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="text-center py-6" data-testid="hero-form-success">
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-[#111827]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          Got it — we&rsquo;ll reply within 14 hours.
        </p>
        <a href="#book-call" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
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
      <h3 id="hero-form-title" className="text-lg font-bold text-[#111827]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
        Let&rsquo;s scope your project.
      </h3>
      <p className="text-xs text-[#6B7280] mt-1 mb-5">Free · no obligation · &lt;24h reply</p>

      {topError && (
        <div role="alert" className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
          {topError}
        </div>
      )}

      {/* Name */}
      <div className="mb-3.5">
        <label htmlFor="hero-name" className="block text-sm font-medium text-[#374151] mb-1.5">Full name</label>
        <input
          id="hero-name" name="name" type="text" autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "hero-name-err" : undefined}
          className={`${inputBase} ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-[#2563EB]"}`}
        />
        {errors.name && <p id="hero-name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-3.5">
        <label htmlFor="hero-email" className="block text-sm font-medium text-[#374151] mb-1.5">Work email</label>
        <div className="relative">
          <input
            id="hero-email" name="email" type="email" autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "hero-email-err" : undefined}
            className={`${inputBase} ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-[#2563EB]"}`}
          />
          {!errors.email && EMAIL_RE.test(values.email) && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" aria-hidden>✓</span>
          )}
        </div>
        {errors.email && <p id="hero-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      {/* Phone (optional) */}
      <div className="mb-3.5">
        <label htmlFor="hero-phone" className="block text-sm font-medium text-[#374151] mb-1.5">Phone (optional)</label>
        <input
          id="hero-phone" name="phone" type="tel" autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={`${inputBase} border-gray-200 focus:border-[#2563EB]`}
        />
      </div>

      {/* Project type */}
      <div className="mb-5">
        <label htmlFor="hero-project" className="block text-sm font-medium text-[#374151] mb-1.5">What do you need?</label>
        <select
          id="hero-project" name="projectType"
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          className={`${inputBase} border-gray-200 focus:border-[#2563EB] appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236B7280%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:18px] bg-[right_0.75rem_center] bg-no-repeat pr-9`}
        >
          <option value="" disabled>Select a project type…</option>
          {PROJECT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
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
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
            Sending…
          </>
        ) : (
          <>Get my estimate <span aria-hidden>▶</span></>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-[#6B7280]">⚡ Avg reply in 14 hrs</p>
    </form>
  );
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx jest app/components/home/__tests__/HeroLeadForm.test.tsx --no-coverage`
Expected: 4 tests PASS. (If `grecaptcha`/`jsdom` env issues arise, ensure the test file's `(global as ...).grecaptcha` mock is in place — it's in Step 1.)

- [ ] **Step 5: Commit**

```bash
git add app/components/home/HeroLeadForm.tsx app/components/home/__tests__/HeroLeadForm.test.tsx
git commit -m "feat(hero): add HeroLeadForm with validation, reCAPTCHA v3, and success/error states"
```

---

### Task 3: Rewrite `HeroSection` (light layout + mount reveal)

**Files:**
- Rewrite: `app/components/home/HeroSection.tsx`
- Test: covered visually in Task 4 (dev-server smoke check). No unit test required for the layout shell — it's presentational.

**Interfaces:**
- Consumes: `HeroLeadForm` (default export from Task 2). The existing tech-logo data lives in `app/page.tsx` (`techStrip`) — NOT duplicated here; the logo strip is a separate section below the hero (unchanged). This hero uses 4 tech wordmarks inline in the badge area (text, not images) for a subtle stack signal.
- Produces: default export `HeroSection` (no props) — already imported by `app/page.tsx` as `import HeroSection from "./components/home/HeroSection"`.

- [ ] **Step 1: Replace the entire contents of `app/components/home/HeroSection.tsx`**

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import HeroLeadForm from "./HeroLeadForm";

const STACK_PILLS = ["Next.js 15", "AI Agents", "Cloud Platforms"];

export default function HeroSection() {
  const formRef = useRef<HTMLDivElement>(null);

  // Staggered mount reveal — toggles --visible on each [data-reveal] node.
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    nodes.forEach((node, i) => {
      window.setTimeout(() => node.classList.add("hero-reveal--visible"), 80 * i);
    });
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
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
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
              <span className="font-medium text-gray-700">vedpragya — India · UAE · USA</span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500">500+ products shipped · 99% retention</span>
            </div>

            {/* Headline */}
            <h1
              data-reveal
              className="hero-reveal text-display-lg font-bold text-[#111827] leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Software, shipped<br />
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
          <div data-reveal className="hero-reveal" ref={formRef}>
            <div className="relative bg-white rounded-2xl shadow-[0_12px_40px_0_rgba(12,27,51,0.14),0_4px_12px_-2px_rgba(12,27,51,0.08)] border border-gray-100 p-6 sm:p-8 overflow-hidden">
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #2563EB 50%, transparent)" }}
              />
              <HeroLeadForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit 2>&1 | grep "HeroSection.tsx\|HeroLeadForm.tsx" || echo "✓ no errors in hero files"`
Expected: prints `✓ no errors in hero files` (pre-existing errors elsewhere are unrelated).

- [ ] **Step 3: Commit**

```bash
git add app/components/home/HeroSection.tsx
git commit -m "feat(hero): rewrite HeroSection as light enterprise layout with inline lead form"
```

---

### Task 4: Remove `FreeConsultationBanner` from homepage

**Files:**
- Modify: `app/page.tsx` (remove the import + the `<FreeConsultationBanner />` mount added during the consultation port; keep `<FloatingConsultationButton />`)

**Interfaces:**
- Consumes: the current `app/page.tsx` has, from the earlier consultation port:
  - an import line: `import FreeConsultationBanner from "./components/consultation/FreeConsultationBanner";`
  - a JSX mount: `<FreeConsultationBanner />` (inside the `Home` return, near the bottom, after `</Spotlight>`)

- [ ] **Step 1: Remove the import**

Find and delete the line:
```tsx
import FreeConsultationBanner from "./components/consultation/FreeConsultationBanner";
```
(Leave the `FloatingConsultationButton` import intact.)

- [ ] **Step 2: Remove the JSX mount**

Find and delete:
```tsx
      {/* Free Consultation — conversion optimization */}
      <FreeConsultationBanner />
```
(Leave `<FloatingConsultationButton />` intact.)

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit 2>&1 | grep "app/page.tsx" || echo "✓ no new errors in page.tsx"`
Expected: `✓ no new errors in page.tsx`. (The pre-existing `app/page.tsx(248,...)` error about `.large` is unrelated and remains — it was there before this work.)

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "refactor(home): remove FreeConsultationBanner — hero form replaces it"
```

---

### Task 5: Visual smoke test + final verification

**Files:** none (verification only)

- [ ] **Step 1: Confirm the dev server is running**

Run: check http://localhost:3005 — if not running, start it: `npm run dev` (background). Wait for `✓ Ready`.

- [ ] **Step 2: Compile-check**

The Turbopack dev server auto-recompiles on save. Open http://localhost:3005 — it should load the new light hero with the inline form on the right. Watch the server log for `✓ Compiled` with no errors.

- [ ] **Step 3: Manual conversion flow test**

1. On http://localhost:3005, click **"Get a project estimate"** → it should scroll to and focus the Name field.
2. Submit empty → see inline errors under Name and Email, no network call.
3. Fill name + valid email + pick project type → click **"Get my estimate"** → expect the success panel ("Got it — we'll reply within 14 hours.").
4. Verify a row was created: open Prisma Studio (`npx prisma studio`) and check the `Lead` table for a row with `source: "hero-form"` / `leadSource: "Homepage Hero"`. (If reCAPTCHA env keys are absent locally, the route still accepts — `verifyRecaptcha` tolerates empty config; confirm in `app/lib/recaptcha.ts`.)
5. Open DevTools → Network → confirm the `POST /api/lead` returned 200. Open Console → confirm no `gtag` errors.

- [ ] **Step 4: Responsive check**

Use DevTools device toolbar: 375px (mobile) → form stacks below copy, full-width. 768px (tablet) → check spacing. 1280px (desktop) → two columns side by side.

- [ ] **Step 5: Final typecheck + test run**

Run: `npx jest app/components/home/__tests__/HeroLeadForm.test.tsx --no-coverage && npx tsc --noEmit 2>&1 | grep -c "error TS"`
Expected: 4 tests pass; the error count is ≤ the pre-existing 182 (no new errors introduced).

- [ ] **Step 6: Final commit (if any stray fixes were needed during smoke test)**

If Steps 2-4 surfaced fixes, commit them:
```bash
git add -A
git commit -m "fix(hero): smoke-test fixes from visual verification"
```
Otherwise skip — the work is already committed in Tasks 1-4.

---

## Self-Review Notes

- **Spec coverage:** every spec section maps to a task — visual direction (Task 3), layout (Task 3), copy (Task 3 + Task 2 form copy), form fields (Task 2), interactions (Task 2 + Task 3 reveal), form states (Task 2), technical wiring (Task 2), homepage change (Task 4), verification (Task 5).
- **Type consistency:** `HeroLeadForm` default export matches the `import HeroLeadForm from "./HeroLeadForm"` in Task 3. Field names (`name`, `email`, `phone`, `projectType`) match between the test, component, and payload. The `/api/lead` payload field names (`source`, `leadSource`, `raw`) match `LeadPayload` in `app/api/lead/route.ts`.
- **No placeholders:** every code step contains complete code.
- **Accessibility, performance, reduced-motion** all covered (Task 1 media query, Task 2 aria attrs, Task 3 semantic HTML).
