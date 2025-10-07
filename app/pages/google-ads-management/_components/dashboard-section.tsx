'use client';

/**
 * Dashboard Section Component
 * Show Reporting Transparency with Visual Mockups
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, TrendingUp, Eye, IndianRupee, Users, MousePointer } from 'lucide-react';

console.log('[Google-Ads] DashboardSection component loaded');

export function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [roas, setRoas] = useState(0);

  useEffect(() => {
    console.log('[Google-Ads] DashboardSection mounted');
    
    // Animate ROAS from 0 to 8.5
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 0.2;
        setRoas(Math.min(8.5, current));
        if (current >= 8.5) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const metrics = [
    { icon: <IndianRupee className="h-5 w-5" />, label: 'Ad Spend', value: '₹2.4L', change: '+12%', color: 'blue' },
    { icon: <Users className="h-5 w-5" />, label: 'Leads', value: '487', change: '+34%', color: 'green' },
    { icon: <MousePointer className="h-5 w-5" />, label: 'CTR', value: '8.2%', change: '+22%', color: 'purple' },
    { icon: <TrendingUp className="h-5 w-5" />, label: 'Conv. Rate', value: '12.4%', change: '+18%', color: 'yellow' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950"
      id="dashboard"
      role="region"
      aria-labelledby="dashboard-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Transparent Reporting
            </span>
          </div>

          <h2
            id="dashboard-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Full Dashboard & Reporting
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We show you <span className="font-bold text-blue-600 dark:text-blue-400">exactly where your money goes</span> and what it brings back — every week.
          </p>
        </motion.div>

        {/* Dashboard Mockup - MOBILE OPTIMIZED */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur rounded-lg">
                    <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">Google Ads Dashboard</h3>
                    <p className="text-xs sm:text-sm text-blue-100">Last 30 Days</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-green-500 rounded-full">
                  <span className="text-xs sm:text-sm font-bold text-white">Live</span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 shadow-md"
                  >
                    <div className={`inline-flex p-2 bg-${metric.color}-100 dark:bg-${metric.color}-900/30 rounded-lg mb-2`}>
                      <div className={`text-${metric.color}-600 dark:text-${metric.color}-400`}>
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-bold">{metric.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* ROAS Chart */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">ROAS Performance</h4>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-xl sm:text-2xl font-black text-green-600 dark:text-green-400">{roas.toFixed(1)}×</span>
                  </div>
                </div>

                {/* Simple Bar Visualization */}
                <div className="flex items-end justify-between gap-2 h-32 sm:h-40">
                  {[3.2, 4.1, 3.8, 5.2, 6.1, 7.3, 8.5].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(value / 8.5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-yellow-500 rounded-t-lg relative group"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {value}× ROAS
                        </div>
                      </motion.div>
                      <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">W{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <Eye className="h-4 w-4" />
                <span className="font-bold">Real-time data synced every 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
