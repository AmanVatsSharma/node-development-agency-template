'use client';

/**
 * Process Section Component - 5-STEP DEVELOPMENT PROCESS
 * Shows our systematic approach to web development
 * 
 * @version 1.0.0 - Development Process
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Code, Rocket, CheckCircle } from 'lucide-react';

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
      description: 'We understand your business goals, target audience, and requirements',
      icon: Search,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes',
      icon: PenTool,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Development & Coding',
      description: 'Build your website using modern technologies and best practices',
      icon: Code,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing across devices and performance optimization',
      icon: CheckCircle,
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Deploy your website and provide ongoing maintenance support',
      icon: Rocket,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900"
      id="process"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our 5-Step Development Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A systematic approach that ensures your Mumbai business gets a world-class website
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white mb-4 mx-auto`}>
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-gray-400 mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}