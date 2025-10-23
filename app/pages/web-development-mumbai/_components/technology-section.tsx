'use client';

/**
 * Technology Section Component - TECH STACK SHOWCASE
 * Shows our expertise with modern web technologies
 * 
 * @version 1.0.0 - Technology Stack
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Cloud, Shield, Zap, Globe } from 'lucide-react';

console.log('[Mumbai-Web-Development] TechnologySection component loaded');

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] TechnologySection mounted');
    return () => console.log('[Mumbai-Web-Development] TechnologySection unmounted');
  }, []);

  const technologies = [
    { name: 'React', category: 'Frontend', icon: Code, color: 'text-blue-500' },
    { name: 'Next.js', category: 'Framework', icon: Code, color: 'text-black' },
    { name: 'Node.js', category: 'Backend', icon: Database, color: 'text-green-500' },
    { name: 'MongoDB', category: 'Database', icon: Database, color: 'text-green-600' },
    { name: 'PostgreSQL', category: 'Database', icon: Database, color: 'text-blue-600' },
    { name: 'AWS', category: 'Cloud', icon: Cloud, color: 'text-orange-500' },
    { name: 'Vercel', category: 'Hosting', icon: Cloud, color: 'text-black' },
    { name: 'Stripe', category: 'Payments', icon: Shield, color: 'text-purple-500' },
    { name: 'Tailwind CSS', category: 'Styling', icon: Zap, color: 'text-cyan-500' },
    { name: 'TypeScript', category: 'Language', icon: Code, color: 'text-blue-600' },
    { name: 'GraphQL', category: 'API', icon: Globe, color: 'text-pink-500' },
    { name: 'Docker', category: 'DevOps', icon: Cloud, color: 'text-blue-500' }
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
      className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50"
      id="technology"
      role="region"
      aria-labelledby="technology-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="technology-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Modern Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, secure, and scalable websites for Mumbai businesses
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <tech.icon className={`h-8 w-8 mx-auto mb-2 ${tech.color}`} />
              <div className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}