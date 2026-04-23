'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Zap, Globe, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center bg-white dark:bg-gray-950 overflow-hidden"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28 relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.11 } } }}
          className="text-center"
        >
          {/* Trust chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { icon: <Zap className="h-3 w-3" />, text: '40+ SaaS sites shipped' },
              { icon: <Globe className="h-3 w-3" />, text: 'Clients in 8 countries' },
              { icon: <Star className="h-3 w-3" />, text: '98 PageSpeed score' },
            ].map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm"
              >
                {chip.icon}
                {chip.text}
              </span>
            ))}
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-gray-900 dark:text-white"
          >
            SaaS websites that{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-indigo-600 dark:text-indigo-400">
                convert visitors
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-100 dark:bg-indigo-900/40 -z-0 rounded" />
            </span>
            <br />
            into paying users
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design and build high-performance marketing sites, landing pages, and pricing pages
            for SaaS companies — with{' '}
            <strong className="text-gray-900 dark:text-white">Next.js, Tailwind, and Framer Motion</strong>.
            Opinionated design. Measurable results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-indigo-600/25"
            >
              <a href="#lead-form">
                Start your SaaS site <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-6 text-base rounded-xl border-gray-300 dark:border-gray-600"
            >
              <a href="/pages/portfolio">See our work</a>
            </Button>
          </motion.div>

          {/* Social proof logos row */}
          <motion.p
            variants={fadeUp}
            className="mt-12 text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-semibold"
          >
            Trusted by SaaS teams across India, US, UK &amp; Australia
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
