'use client';

/**
 * @fileoverview About the Product Section - EnterpriseHero CRM
 * @description Battle-tested CRM with 4-pillar infographic
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - 4-column pillar infographic
 * - Animated on scroll
 * - Premium card design with glass effect
 * - Mobile-first responsive grid
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Database, 
  Settings, 
  Link2, 
  Palette,
  Shield,
  Zap
} from 'lucide-react';

console.log('[CRM] AboutSection component loaded');

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const pillars = [
    {
      icon: <Database className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Data Ownership',
      description: 'Your data stays on your servers. Complete control, zero vendor lock-in. GDPR compliant.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: <Settings className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Custom Workflows',
      description: 'Every field, form, and automation can be tailored to match your exact business process.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: <Link2 className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'BharatERP Integration',
      description: 'Seamlessly connect with Accounts, Inventory, HRM, and more. One unified system.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: <Palette className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'White-Label Branding',
      description: 'Your logo, your colors, your domain. Make it truly yours from day one.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="about"
      role="region"
      aria-labelledby="about-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,47,158,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,200,151,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full border border-[#FFD700]/40 mb-6">
              <Shield className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Enterprise-Grade Solution</span>
            </div>
            
            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Battle-Tested CRM,<br />
              <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">
                Tailored to You
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Built from the ground up for <span className="font-bold text-[#002F9E] dark:text-[#FFD700]">Indian enterprises</span> needing full control. 
              100% customizable modules, hosted on <span className="font-bold">your own infrastructure</span>, with{' '}
              <span className="font-bold text-[#00C897]">ERP-ready scalability</span>.
            </p>
          </motion.div>

          {/* 4-Pillar Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${pillar.bgColor} backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFD700] dark:hover:border-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${pillar.color} text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                </div>

                {/* External Glow */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-20`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#002F9E] via-[#0041E2] to-[#002F9E] rounded-2xl text-white shadow-xl">
              <Zap className="h-5 w-5 text-[#FFD700]" />
              <span className="text-base sm:text-lg font-bold">
                Each module can be renamed, reshaped, and re-automated for your exact business flow.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
