'use client';

/**
 * Process Section Component - 5-STEP DEVELOPMENT PROCESS
 * Premium process section with professional design
 * 
 * @version 2.0.0 - Production Ready Process
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Code, Rocket, CheckCircle, Users, Clock, Shield } from 'lucide-react';

console.log('[Mumbai-Web-Development] ProcessSection component loaded');

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] ProcessSection mounted');
    return () => console.log('[Mumbai-Web-Development] ProcessSection unmounted');
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, target audience, and requirements through detailed consultation',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      features: ['Business Analysis', 'Target Audience Research', 'Competitor Analysis', 'Project Scope Definition']
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes that align with your brand',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Brand Integration']
    },
    {
      number: '03',
      title: 'Development & Coding',
      description: 'Build your website using modern technologies and best practices for optimal performance',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration']
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing across devices and performance optimization for the best user experience',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/20',
      features: ['Quality Assurance', 'Performance Testing', 'Cross-Browser Testing', 'Mobile Optimization']
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Deploy your website and provide ongoing maintenance support for continued success',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/20',
      features: ['Website Deployment', 'Domain Setup', 'SSL Configuration', 'Ongoing Support']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900"
      id="process"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            How Our Hire Web Developer Mumbai Works
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A systematic approach that ensures your Mumbai business gets a world-class website delivered on time and within budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
            >
              {/* Step Number */}
              <div className="text-4xl font-bold text-slate-400 mb-4 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Collaborative Approach</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">We work closely with you throughout the entire process</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Timely Delivery</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">14-21 days average delivery time with regular updates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quality Assurance</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Rigorous testing ensures your website works perfectly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}