'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, FileText, DollarSign, BookOpen, LayoutTemplate, Rocket } from 'lucide-react';

const DELIVERABLES = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Marketing homepage',
    desc: 'Hero, features, social proof, pricing, CTA — built to rank and convert.',
    color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: 'Pricing page',
    desc: 'Feature tables, toggle plans, FAQs, and conversion-optimised CTA blocks.',
    color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    icon: <LayoutTemplate className="h-5 w-5" />,
    title: 'PPC landing pages',
    desc: 'Single-purpose pages for Google Ads and LinkedIn — A/B test ready.',
    color: 'bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Docs & help centre',
    desc: 'MDX-powered docs sites with search, versioning, and on-brand styling.',
    color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: 'Blog & content hub',
    desc: 'SEO-targeted blog with CMS, structured data, and internal linking architecture.',
    color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch & waitlist pages',
    desc: 'Pre-launch pages with email capture, countdown, and viral referral hooks.',
    color: 'bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function WhatWeBuildSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3 text-center"
          >
            What we build
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-gray-900 dark:text-white"
          >
            Every surface your SaaS needs
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto mb-14 text-base"
          >
            We cover the full marketing-site stack — from your hero to your help centre.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERABLES.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
