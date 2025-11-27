'use client';

/**
 * Real Results / Case Studies Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Calendar, IndianRupee } from 'lucide-react';

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const caseStudies = [
    {
      title: 'Real Estate Firm, Noida',
      icon: TrendingUp,
      result: 'AI agent handled 1,800 calls in a week',
      outcome: 'Booked 230 site visits without humans',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Clinic, Pune',
      icon: Calendar,
      result: '24×7 AI appointment desk',
      outcome: 'Increased bookings by 38%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Service Startup, Gurugram',
      icon: IndianRupee,
      result: 'Replaced night shift team with AI',
      outcome: 'Saved ₹1.2L/month',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="case-studies"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-5 border border-green-200 dark:border-green-800">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide text-sm">
              Real Results
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            Hire AI Voice Agent Developer Case Studies & Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                  Case Study #{index + 1} — {study.title}
                </h3>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-950 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-900 dark:text-white font-bold">
                      {study.result}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#0B1E39] to-[#1a2f4f] rounded-xl p-4">
                    <p className="text-[#FF7A00] font-black text-lg">
                      → {study.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
