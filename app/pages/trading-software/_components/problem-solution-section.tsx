'use client';

/**
 * @fileoverview Problem/Solution Section
 * @description Comparison between traditional trading systems and modern platform
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Problem-Solution] Component rendered, inView:', inView);

  const problems = [
    { icon: X, text: 'Slow order execution (> 500ms)', color: 'text-red-500' },
    { icon: X, text: 'Limited features & customization', color: 'text-red-500' },
    { icon: X, text: 'High licensing & maintenance costs', color: 'text-red-500' },
    { icon: X, text: 'Poor mobile experience', color: 'text-red-500' },
    { icon: X, text: 'Outdated UI/UX design', color: 'text-red-500' },
    { icon: X, text: 'Limited integration options', color: 'text-red-500' },
    { icon: X, text: 'No algo trading support', color: 'text-red-500' },
    { icon: X, text: 'Complex setup & onboarding', color: 'text-red-500' }
  ];

  const solutions = [
    { icon: Check, text: 'Lightning-fast execution (< 50ms)', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Fully customizable white-label', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Transparent, affordable pricing', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Native iOS & Android apps', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Modern, intuitive interface', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Seamless exchange & payment APIs', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Built-in algo trading engine', color: 'text-[#00FF88]' },
    { icon: Check, text: 'Quick setup in 2-4 weeks', color: 'text-[#00FF88]' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628] relative overflow-hidden"
      id="problem-solution"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-500/20 to-[#00FF88]/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Why Upgrade?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Traditional Systems vs <span className="text-[#00FF88]">Modern Platform</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how we're solving the biggest pain points faced by brokers with outdated trading technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* LEFT: Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <X className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-black text-white">Traditional Systems</h3>
              </div>

              <div className="space-y-3">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                      className="flex items-start gap-2 p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                    >
                      <Icon className={`h-5 w-5 ${problem.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-300">{problem.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CENTER: Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              <div className="bg-gradient-to-r from-[#00FF88] to-[#00dd77] rounded-full p-6 shadow-2xl shadow-[#00FF88]/30">
                <ArrowRight className="h-12 w-12 text-[#0A1628]" />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-[#00FF88]">
                Upgrade to<br />Modern Platform
              </p>
            </motion.div>

            {/* RIGHT: Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#00FF88]/20 to-[#00dd77]/20 backdrop-blur-sm border-2 border-[#00FF88]/30 rounded-2xl p-6 shadow-2xl shadow-[#00FF88]/20"
            >
              <div className="flex items-center gap-2 mb-6">
                <Check className="h-6 w-6 text-[#00FF88]" />
                <h3 className="text-xl font-black text-white">Our Platform</h3>
              </div>

              <div className="space-y-3">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                      className="flex items-start gap-2 p-2 rounded-lg hover:bg-[#00FF88]/10 transition-colors"
                    >
                      <Icon className={`h-5 w-5 ${solution.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-300 font-semibold">{solution.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a 
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black rounded-xl hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all active:scale-95"
            >
              See Platform in Action
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
