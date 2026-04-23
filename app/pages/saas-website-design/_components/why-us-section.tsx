'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const POINTS = [
  {
    title: 'Design-led, not template-driven',
    desc: 'Every pixel is intentional. We reference Linear, Vercel, and Stripe — not Wix themes.',
  },
  {
    title: 'Built for speed — literally',
    desc: 'Next.js App Router, next/image, font subsetting, and Lighthouse-first development. 95+ score is our floor.',
  },
  {
    title: 'SEO from line 1',
    desc: 'Semantic HTML, schema.org JSON-LD, sitemap, canonicals, and OG tags ship with every page.',
  },
  {
    title: 'Conversion architecture',
    desc: 'CTA hierarchy, social proof placement, objection handling, and micro-copy informed by SaaS best practices.',
  },
  {
    title: 'Analytics wired in',
    desc: 'GA4 events, HubSpot forms, Intercom chat, Segment, and custom conversion tracking — configured, not hacked together.',
  },
  {
    title: 'Handoff or ongoing partner',
    desc: 'We hand off clean code and a Notion wiki, or stay on as your growth engineering partner.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left copy */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3"
            >
              Why Vedpragya
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 text-gray-900 dark:text-white leading-tight"
            >
              We think like{' '}
              <span className="text-indigo-600 dark:text-indigo-400">SaaS founders</span>,<br />
              build like engineers
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-lg"
            >
              Most agencies hand you a pretty Figma file and leave you to figure out the rest.
              We own the full stack — strategy, design, development, and analytics — and we
              measure success in signups, not screenshots.
            </motion.p>
          </motion.div>

          {/* Right checklist */}
          <motion.ul
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-4"
          >
            {POINTS.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
              >
                <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{point.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
