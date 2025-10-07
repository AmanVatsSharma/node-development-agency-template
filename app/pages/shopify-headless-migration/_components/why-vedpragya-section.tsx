'use client';

/**
 * Why Vedpragya Bharat Section - USPs and Guarantees
 * Showcase competitive advantages and value proposition
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Target, Users, Shield } from 'lucide-react';

console.log('[Shopify-Headless] WhyVedpragyaSection component loaded');

export function WhyVedpragyaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const usps = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Deep Next.js + Shopify Expertise',
      description: 'Specialized knowledge in Next.js, React, and Shopify ecosystem with proven track record',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Enterprise-Grade Architecture',
      description: 'Scalable, maintainable code following industry best practices and design patterns',
      color: 'from-[#00E0B8] to-emerald-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Core Web Vitals 95+ Guarantee',
      description: 'Performance-first approach with measurable results or your money back',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Modular & Scalable Code',
      description: 'Clean, documented code built for long-term growth and easy maintenance',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'White-Label & Reseller Partnerships',
      description: 'Work with us as your technical partner for client projects',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-[#1e293b] dark:to-[#0F172A] relative overflow-hidden"
      id="why-us"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              💎 Why <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Vedpragya Bharat</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              We don't just migrate stores — we rebuild digital experiences engineered for growth.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00E0B8] to-cyan-400 rounded-full text-[#0F172A] font-bold shadow-lg">
              ✅ Trusted by global brands
            </div>
          </motion.div>

          {/* USPs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-[#00E0B8] transition-all">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${usp.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {usp.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {usp.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: '40+', label: 'Projects Delivered' },
              { value: '95+', label: 'Avg. Lighthouse Score' },
              { value: '5+', label: 'Countries Served' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-[#1e293b] border-2 border-gray-200 dark:border-white/10 rounded-2xl shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-black text-[#00E0B8] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block max-w-4xl p-8 md:p-10 bg-gradient-to-br from-[#0F172A] to-[#1e293b] border-2 border-[#00E0B8] rounded-3xl shadow-2xl">
              <div className="text-6xl text-[#00E0B8] mb-4">"</div>
              <p className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
                We don't just migrate stores — we rebuild digital experiences engineered for growth.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E0B8] to-cyan-400 flex items-center justify-center text-[#0F172A] font-black text-xl">
                  V
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Vedpragya Bharat</div>
                  <div className="text-sm text-gray-400">Headless Commerce Specialists</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
