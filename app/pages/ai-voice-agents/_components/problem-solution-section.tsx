'use client';

/**
 * Problem/Solution Section - Traditional vs AI Voice Agents
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, Globe } from 'lucide-react';

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const comparisons = [
    { problem: '₹50K–₹2L/month staff cost', solution: '₹15K/month automation' },
    { problem: 'Missed calls after hours', solution: '24×7 AI availability' },
    { problem: 'Training & attrition issues', solution: 'Self-learning AI models' },
    { problem: 'Human errors & inconsistency', solution: '99% accuracy & memory based replies' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="problem-solution"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-5 border border-red-200 dark:border-red-800">
            <span className="font-bold text-red-700 dark:text-red-300 uppercase tracking-wide text-sm">
              The Problem We Solve
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            Stop Losing Money on Calls
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Traditional call centers are expensive, unreliable, and limited. AI Voice Agents are the future.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Traditional Call Centers */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border-4 border-red-200 dark:border-red-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Traditional Call Centers</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With AI Voice Agents */}
            <div className="bg-gradient-to-br from-[#0B1E39] to-[#1a2f4f] rounded-2xl p-6 md:p-8 border-4 border-[#FF7A00] shadow-2xl shadow-[#FF7A00]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">With AI Voice Agents</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-1" />
                    <span className="text-white font-medium">{item.solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Multi-language Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-gray-900 dark:text-white text-lg">
              💡 AI Voice Agents speak flawlessly in English, Hindi & regional languages
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
