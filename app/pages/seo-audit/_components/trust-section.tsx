'use client';

/**
 * Trust Section Component
 * Displays client logos, stats, and trust indicators
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Websites Audited',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: TrendingUp,
      value: '+38%',
      label: 'Avg Traffic Increase',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Clock,
      value: '90 Days',
      label: 'Average Results Time',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Client Satisfaction',
      color: 'text-yellow-600 dark:text-yellow-400'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Trusted by Leading Businesses
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <Icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all"
        >
          {/* Placeholder for client logos */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm font-medium">Trusted by brands like</p>
            <p className="text-xs mt-1">Google Partners • Microsoft • Amazon • Shopify</p>
          </div>
        </motion.div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-100 dark:bg-green-900/30 rounded-2xl border-2 border-green-300 dark:border-green-800">
            <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
            <div className="text-left">
              <div className="font-bold text-green-900 dark:text-green-300">
                7-Day Money-Back Guarantee
              </div>
              <div className="text-sm text-green-700 dark:text-green-400">
                Not satisfied? We'll revise or refund — no questions asked
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
