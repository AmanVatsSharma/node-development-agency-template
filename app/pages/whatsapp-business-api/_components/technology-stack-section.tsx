'use client';

/**
 * @fileoverview Technology Stack Section
 * @description Showcase technical expertise and reliability
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Cloud, 
  Database, 
  Shield,
  Zap,
  CheckCircle2
} from 'lucide-react';

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[TechnologyStackSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const techStack = [
    {
      category: 'WhatsApp API',
      icon: <Code2 className="h-6 w-6" />,
      color: '#25D366',
      technologies: [
        { name: 'WhatsApp Cloud API', description: 'Official Meta Cloud API', badge: 'Recommended' },
        { name: '360Dialog', description: 'BSP Partner', badge: null },
        { name: 'Gupshup', description: 'Enterprise BSP', badge: null },
        { name: 'Twilio', description: 'Global Infrastructure', badge: null }
      ]
    },
    {
      category: 'Backend',
      icon: <Cloud className="h-6 w-6" />,
      color: '#FF7A00',
      technologies: [
        { name: 'Node.js / NestJS', description: 'Scalable backend', badge: 'Fast' },
        { name: 'Next.js Webhooks', description: 'Real-time processing', badge: null },
        { name: 'Express.js', description: 'API endpoints', badge: null },
        { name: 'REST & GraphQL', description: 'Flexible APIs', badge: null }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6" />,
      color: '#075E54',
      technologies: [
        { name: 'MongoDB', description: 'NoSQL database', badge: 'Flexible' },
        { name: 'PostgreSQL', description: 'Relational database', badge: null },
        { name: 'Redis', description: 'Caching layer', badge: 'Fast' },
        { name: 'Firebase', description: 'Real-time sync', badge: null }
      ]
    },
    {
      category: 'Integrations',
      icon: <Zap className="h-6 w-6" />,
      color: '#FFB100',
      technologies: [
        { name: 'Zapier', description: '5000+ app connections', badge: 'Popular' },
        { name: 'Google Sheets', description: 'Easy data sync', badge: null },
        { name: 'Webhooks', description: 'Custom integrations', badge: null },
        { name: 'REST APIs', description: 'Universal connectivity', badge: null }
      ]
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Bank-Grade Security',
      description: 'End-to-end encryption • GDPR compliant • ISO certified',
      color: 'from-[#25D366] to-[#128C7E]'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: '99.9% Uptime SLA',
      description: 'Reliable infrastructure • Auto-scaling • Load balanced',
      color: 'from-[#FF7A00] to-[#FFB100]'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Native',
      description: 'Hosted on AWS/GCP • Global CDN • Lightning fast',
      color: 'from-[#075E54] to-[#128C7E]'
    }
  ];

  const certifications = [
    '✅ Meta Business Partner',
    '✅ ISO 27001 Certified',
    '✅ GDPR Compliant',
    '✅ SOC 2 Type II'
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="technology"
      role="region"
      aria-labelledby="technology-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#075E54]/10 rounded-full text-[#075E54] dark:text-[#25D366] font-bold text-sm border border-[#075E54]/20">
                <Code2 className="h-4 w-4" />
                Enterprise-Grade Technology
              </span>
            </div>
            <h2 
              id="technology-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Built on
              <br />
              <span className="bg-gradient-to-r from-[#075E54] to-[#25D366] bg-clip-text text-transparent">
                Rock-Solid Infrastructure
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We use the same tech stack trusted by Fortune 500 companies
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="h-12 w-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: stack.color }}
                  >
                    {stack.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                    {stack.category}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  {stack.technologies.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                            {tech.name}
                          </span>
                          {tech.badge && (
                            <span 
                              className="text-xs px-2 py-0.5 rounded-full text-white font-bold"
                              style={{ backgroundColor: stack.color }}
                            >
                              {tech.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Row */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 text-center"
              >
                <div className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Banner */}
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Trusted & Certified
              </h3>
              <p className="text-white/90">
                We meet the highest industry standards
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                >
                  <p className="text-white font-bold text-sm md:text-base">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] TechnologyStackSection component loaded');
