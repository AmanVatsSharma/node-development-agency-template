'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STACK = [
  { name: 'Next.js 15', tag: 'Framework', color: 'bg-black text-white dark:bg-white dark:text-black' },
  { name: 'React 19', tag: 'UI', color: 'bg-sky-500 text-white' },
  { name: 'Tailwind v4', tag: 'Styling', color: 'bg-teal-500 text-white' },
  { name: 'Framer Motion', tag: 'Animation', color: 'bg-violet-500 text-white' },
  { name: 'TypeScript', tag: 'Language', color: 'bg-blue-600 text-white' },
  { name: 'Prisma', tag: 'Database', color: 'bg-indigo-600 text-white' },
  { name: 'Contentlayer / MDX', tag: 'CMS', color: 'bg-orange-500 text-white' },
  { name: 'Vercel / AWS', tag: 'Hosting', color: 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3 text-center"
          >
            Tech stack
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-4 text-gray-900 dark:text-white"
          >
            Modern, proven, future-proof
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-500 dark:text-gray-400 text-center max-w-lg mx-auto mb-12 text-base"
          >
            We use the same stack as the fastest-growing SaaS companies — not legacy frameworks.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-1.5"
              >
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${item.color}`}>
                  {item.name}
                </span>
                <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest font-semibold">
                  {item.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
