'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What makes a great SaaS marketing website?',
    a: 'A crystal-clear value proposition above the fold, social proof (logos, testimonials, case studies), feature walkthroughs that address objections, and a frictionless CTA flow. It loads in under 2 seconds and scores 90+ on Core Web Vitals. We build all of this with Next.js and Tailwind.',
  },
  {
    q: 'How much does SaaS website design cost in India?',
    a: 'A focused SaaS marketing site starts at ₹80,000 for a 5-page package. A full design system with landing pages, blog, and CMS integration starts at ₹2,50,000. Enterprise sites with custom animations are quoted on request.',
  },
  {
    q: 'How long does it take to build a SaaS website?',
    a: 'A focused homepage with core marketing pages takes 3–4 weeks. A full marketing site with blog, docs, pricing, and CMS integration takes 6–10 weeks. We work in two-week sprints with design-then-code handoff.',
  },
  {
    q: 'Do you design or just develop?',
    a: 'Both. We handle strategy, UX wireframes, visual design, and development end-to-end. If you have Figma designs, we build pixel-perfect from them. We align to your brand or create a new design system from scratch.',
  },
  {
    q: 'Can you integrate with HubSpot, Intercom, or our app?',
    a: 'Yes. We integrate GA4, Mixpanel, Segment, HubSpot, Intercom, Customer.io, and auth redirects to your product. If your app has an API, we can connect to it.',
  },
  {
    q: 'Will the site rank on Google?',
    a: 'SEO is built in, not bolted on. Every page ships with canonical tags, JSON-LD structured data, semantic HTML, next/image optimisation, sitemap.xml, and robots.txt. We also plan your content architecture for long-term organic growth.',
  },
];

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3 text-center">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-12 text-gray-900 dark:text-white">
            Common questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-bold text-gray-900 dark:text-white text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <p className="px-5 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed bg-white dark:bg-gray-900">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
