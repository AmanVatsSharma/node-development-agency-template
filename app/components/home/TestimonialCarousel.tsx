"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  project: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "CTO",
    company: "TechVision India",
    text: "Vedpragya transformed our legacy system into a modern, scalable platform. Their engineering depth is rare — they caught architectural problems we didn't even know we had. Delivered on every commitment.",
    project: "Enterprise ERP Modernization",
    initials: "RK",
    color: "bg-[#1A3A6C]",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "GlobalShop Inc.",
    text: "The Shopify headless solution they built increased our conversion rate by 35%. The team communicated clearly throughout — no surprises, no excuses. They just delivered.",
    project: "Shopify Headless Migration",
    initials: "SJ",
    color: "bg-emerald-700",
  },
  {
    id: "3",
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    company: "Dubai Logistics Hub",
    text: "Our AI voice agent now handles 10x the call volume with better quality. ROI was visible in month one. Vedpragya treats your product like their own — that attitude shows in the output.",
    project: "AI Voice Automation Platform",
    initials: "AA",
    color: "bg-[#D4870A]",
  },
  {
    id: "4",
    name: "Jennifer Chen",
    role: "VP Engineering",
    company: "FinanceFlow Canada",
    text: "Security and compliance are non-negotiable in fintech. Vedpragya delivered a fully compliant platform with bank-grade security. Their global team meant we had support whenever we needed it.",
    project: "Financial Platform Development",
    initials: "JC",
    color: "bg-violet-700",
  },
  {
    id: "5",
    name: "Michael Schmidt",
    role: "Director of IT",
    company: "MediCare Solutions",
    text: "The telemedicine platform is exceptional — clean architecture, excellent UX, seamless integrations. Our patient satisfaction scores improved by 40%. Would not hesitate to work with Vedpragya again.",
    project: "Telemedicine Platform",
    initials: "MS",
    color: "bg-rose-700",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4 text-[#D4870A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-150px" });

  useEffect(() => {
    if (!autoplay || !inView || shouldReduce) return;
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [autoplay, inView, shouldReduce]);

  const nav = (dir: 1 | -1) => {
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="compact-main-section bg-white dark:bg-[#080C14] relative overflow-hidden content-visibility-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="vp-divider mb-4" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Results speak louder than promises.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-4xl relative">
          {/* Quote mark */}
          <div className="absolute -top-4 -left-4 w-16 h-16 text-gray-100 dark:text-[#1E293B]">
            <svg viewBox="0 0 60 60" fill="currentColor">
              <path d="M0 30C0 13.4 13.4 0 30 0v10c-11.1 0-20 8.9-20 20H20v30H0V30zm40 0C40 13.4 53.4 0 70 0v10c-11.1 0-20 8.9-20 20H60v30H40V30z" />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F4F4F5] dark:bg-[#0F1623] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-[#1E293B]"
            >
              <Stars />

              <p className="text-xl md:text-2xl text-[#0C1B33] dark:text-white font-medium leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#0C1B33] dark:text-white"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#D4870A] uppercase tracking-wide">
                  {t.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => nav(-1)}
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1E293B] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#0F1623] transition-colors"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoplay(false); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#D4870A]" : "w-1.5 bg-gray-200 dark:bg-[#1E293B]"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => nav(1)}
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1E293B] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#0F1623] transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
