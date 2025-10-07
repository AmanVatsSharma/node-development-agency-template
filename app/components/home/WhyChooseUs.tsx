"use client";

/**
 * @fileoverview WhyChooseUs Component - Trust Signals & Differentiators
 * @description Premium section showcasing company strengths and unique value propositions
 * Features:
 * - Animated feature cards
 * - Icon-based visual hierarchy
 * - Trust signals and certifications
 * - Responsive grid layout
 * 
 * @component WhyChooseUs
 * @example
 * <WhyChooseUs />
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Console log for debugging
console.log('[WhyChooseUs] Component loaded');

/**
 * Reason/Feature interface
 */
interface Reason {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats?: string; // Optional stat highlight
}

/**
 * Reason Card Component
 */
interface ReasonCardProps {
  reason: Reason;
  index: number;
}

function ReasonCard({ reason, index }: ReasonCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  console.log(`[ReasonCard] Rendering reason: ${reason.title}`);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {reason.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            {reason.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {reason.description}
          </p>
          
          {/* Optional Stat */}
          {reason.stats && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className={`text-2xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                {reason.stats}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main WhyChooseUs Component
 */
export default function WhyChooseUs() {
  console.log('[WhyChooseUs] Component rendering');
  
  // Reasons data
  const reasons: Reason[] = [
    {
      id: 'expertise',
      title: 'Deep Technical Expertise',
      description: 'Our team of senior engineers brings 10+ years of combined experience in Node.js, React, and cutting-edge technologies. We don\'t just code, we architect solutions.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '50+ Certified Engineers',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'global',
      title: 'Global Presence, Local Touch',
      description: 'With offices in India, Dubai, California, Toronto, and Shenzhen, we provide 24/7 support and understand diverse market needs while delivering personalized service.',
      gradient: 'from-green-500 to-emerald-600',
      stats: '5 Global Offices',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'scalability',
      title: 'Built for Scale',
      description: 'Every solution we build is designed to scale from day one. Whether you have 100 users or 10 million, our architecture handles growth seamlessly.',
      gradient: 'from-purple-500 to-pink-600',
      stats: '99.9% Uptime SLA',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 'security',
      title: 'Enterprise-Grade Security',
      description: 'Security is not an afterthought. We implement industry-leading security practices, compliance standards, and regular audits to protect your data.',
      gradient: 'from-red-500 to-orange-600',
      stats: 'SOC 2 Compliant',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'agile',
      title: 'Agile & Transparent',
      description: 'We follow agile methodologies with 2-week sprints, daily standups, and complete transparency. You\'re always in the loop with project progress.',
      gradient: 'from-indigo-500 to-blue-600',
      stats: '2-Week Sprint Cycles',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: 'Dedicated Support',
      description: 'Your success is our priority. We provide comprehensive post-launch support, regular updates, and a dedicated account manager for every project.',
      gradient: 'from-teal-500 to-cyan-600',
      stats: '24/7 Support Available',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine technical excellence, global reach, and unwavering commitment to deliver exceptional results
          </p>
        </motion.div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>
        
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Trusted By Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for trust badges/certifications */}
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
              AWS Partner
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
              ISO 27001
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
              SOC 2 Type II
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
              GDPR Compliant
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}