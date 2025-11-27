'use client';

/**
 * @fileoverview Core Modules Section - EnterpriseHero CRM
 * @description 6 animated module cards with icons
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - 6 core CRM modules
 * - Animated icons grid
 * - Hover effects with glow
 * - Mobile-responsive grid layout
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  CheckSquare, 
  FileText, 
  BarChart3, 
  Shield,
  TrendingUp,
  UserCog
} from 'lucide-react';

console.log('[CRM] CoreModulesSection component loaded');

export function CoreModulesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const modules = [
    {
      icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'Leads & Sales',
      description: 'Track every opportunity from first contact to closed deal. Pipeline visualization, lead scoring, and automated follow-ups.',
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: <Users className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'Contacts & Accounts',
      description: 'Centralized customer database with 360° view. Track interactions, notes, documents, and relationship history.',
      gradient: 'from-purple-500 via-purple-600 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: <CheckSquare className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'Projects & Tasks',
      description: 'Manage client projects, assign tasks, track progress. Gantt charts, deadlines, and team collaboration tools.',
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: <FileText className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'Invoices & Payments',
      description: 'Generate professional invoices, track payments, manage receivables. Integrated with payment gateways and BharatERP Accounts.',
      gradient: 'from-orange-500 via-orange-600 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20'
    },
    {
      icon: <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'Reports & Analytics',
      description: 'Real-time dashboards, custom reports, sales forecasting. Data-driven insights for smarter business decisions.',
      gradient: 'from-red-500 via-red-600 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20'
    },
    {
      icon: <UserCog className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: 'User Roles & Permissions',
      description: 'Granular access control, role-based permissions, audit logs. Secure multi-team collaboration with data privacy.',
      gradient: 'from-indigo-500 via-indigo-600 to-violet-500',
      bgGradient: 'from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="features"
      role="region"
      aria-labelledby="modules-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      
      {/* Animated Background Patterns */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#002F9E]/20 to-[#FFD700]/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00C897]/20 to-[#002F9E]/20 rounded-full blur-3xl"
      />

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
              <Briefcase className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Complete Business Suite</span>
            </div>
            
            <h2 
              id="modules-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Hire CRM Developer <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Services We Offer</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to run your business, beautifully integrated. Each module works together seamlessly.
            </p>
          </motion.div>

          {/* Modules Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${module.bgGradient} backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden`}>
                  
                  {/* Hover Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]`}>
                    <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${module.bgGradient} backdrop-blur-xl`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${module.gradient} text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {module.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-4">
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-bl-full" />
                </div>

                {/* External Glow */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-gray-800/80 backdrop-blur-xl rounded-3xl border-2 border-[#FFD700] shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                🎨 Each module can be renamed, reshaped, and re-automated
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                for your <span className="font-black text-[#002F9E] dark:text-[#FFD700]">exact business flow</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
