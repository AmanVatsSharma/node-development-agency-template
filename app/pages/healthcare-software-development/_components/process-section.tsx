'use client';

/**
 * Process Section Component - Healthcare Software Development
 * 6-Step Delivery Methodology
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, 
  Users, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] ProcessSection component loaded');

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      icon: Search,
      description: 'We conduct a comprehensive analysis of your healthcare facility, understand your workflows, and identify pain points.',
      duration: '1-2 weeks',
      deliverables: [
        'Current system audit',
        'Requirements documentation',
        'Technical feasibility study',
        'Project roadmap'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Design & Planning',
      icon: Users,
      description: 'Our UX/UI experts create intuitive designs that healthcare professionals will love, ensuring compliance with medical standards.',
      duration: '2-3 weeks',
      deliverables: [
        'User experience design',
        'System architecture',
        'Database design',
        'Security protocols'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      title: 'Development & Integration',
      icon: Code,
      description: 'Our expert developers build your healthcare software using cutting-edge technologies and best practices.',
      duration: '8-16 weeks',
      deliverables: [
        'Core system development',
        'Third-party integrations',
        'API development',
        'Mobile app development'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      icon: TestTube,
      description: 'Rigorous testing ensures your software is bug-free, secure, and performs flawlessly in real-world scenarios.',
      duration: '2-4 weeks',
      deliverables: [
        'Functional testing',
        'Security testing',
        'Performance testing',
        'Compliance validation'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      icon: Rocket,
      description: 'We handle the complete deployment process, ensuring zero downtime and smooth transition to your new system.',
      duration: '1-2 weeks',
      deliverables: [
        'Production deployment',
        'Data migration',
        'Staff training',
        'Go-live support'
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      icon: Headphones,
      description: 'Ongoing support and maintenance ensure your healthcare software continues to perform optimally and stays updated.',
      duration: 'Ongoing',
      deliverables: [
        '24/7 technical support',
        'Regular updates',
        'Security patches',
        'Performance monitoring'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hire Healthcare Software Developer Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From initial consultation to ongoing support, we follow a proven methodology 
            that ensures successful healthcare software delivery.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-6 lg:w-1/4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}>
                    {step.number}
                  </div>
                  <div className="lg:hidden">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="hidden lg:block">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{step.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Included</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      What You Get:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Benefits */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Our Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Risk-Free</h4>
              <p className="text-blue-100">
                Our structured approach minimizes risks and ensures project success with clear milestones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-blue-100">
                Agile methodology ensures faster delivery without compromising on quality or security.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Healthcare Focus</h4>
              <p className="text-blue-100">
                Every step is designed specifically for healthcare workflows and compliance requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Start Your Healthcare Software Project?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a detailed project plan 
            tailored to your healthcare facility's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Download Process Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}