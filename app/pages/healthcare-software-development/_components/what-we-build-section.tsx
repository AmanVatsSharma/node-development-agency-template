'use client';

/**
 * What We Build Section Component - Healthcare Software Development
 * Comprehensive Healthcare Solutions + Technology Stack
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  Smartphone, 
  Shield, 
  Database, 
  Users, 
  FileText, 
  Heart,
  Activity,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Cloud,
  Lock,
  Zap
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] WhatWeBuildSection component loaded');

export function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('hms');

  const solutions = [
    {
      id: 'hms',
      title: 'Hospital Management System',
      icon: Building2,
      description: 'Complete hospital operations management with patient records, billing, staff management, and real-time analytics.',
      features: [
        'Patient Registration & Records',
        'Appointment Scheduling',
        'Billing & Insurance Management',
        'Staff & Department Management',
        'Inventory & Pharmacy Management',
        'Real-time Analytics Dashboard'
      ],
      pricing: '₹5L - ₹15L',
      timeline: '3-6 months',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ehr',
      title: 'Electronic Health Records (EHR)',
      icon: FileText,
      description: 'HIPAA-compliant digital health records with secure patient data management and seamless integration.',
      features: [
        'Digital Patient Records',
        'Medical History Tracking',
        'Prescription Management',
        'Lab Results Integration',
        'Secure Data Storage',
        'Multi-location Access'
      ],
      pricing: '₹3L - ₹8L',
      timeline: '2-4 months',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine Platform',
      icon: Smartphone,
      description: 'Complete telemedicine solution with video consultations, prescription management, and patient portal.',
      features: [
        'Video Consultations',
        'Online Appointment Booking',
        'Digital Prescriptions',
        'Patient Portal',
        'Payment Integration',
        'Mobile App Support'
      ],
      pricing: '₹4L - ₹12L',
      timeline: '3-5 months',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Management',
      icon: Activity,
      description: 'Comprehensive pharmacy management system with inventory, billing, and prescription tracking.',
      features: [
        'Inventory Management',
        'Prescription Processing',
        'Billing & Payments',
        'Supplier Management',
        'Expiry Tracking',
        'Sales Analytics'
      ],
      pricing: '₹2L - ₹6L',
      timeline: '2-3 months',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'lab',
      title: 'Lab Management System',
      icon: Database,
      description: 'Complete laboratory management with test scheduling, result management, and integration capabilities.',
      features: [
        'Test Scheduling',
        'Sample Tracking',
        'Result Management',
        'Report Generation',
        'Quality Control',
        'Integration APIs'
      ],
      pricing: '₹2.5L - ₹7L',
      timeline: '2-4 months',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'analytics',
      title: 'Healthcare Analytics',
      icon: Users,
      description: 'Advanced analytics dashboard with patient insights, operational metrics, and predictive analytics.',
      features: [
        'Patient Analytics',
        'Operational Metrics',
        'Financial Reports',
        'Predictive Analytics',
        'Custom Dashboards',
        'Real-time Monitoring'
      ],
      pricing: '₹3L - ₹10L',
      timeline: '2-5 months',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const techStack = [
    { name: 'React.js', category: 'Frontend', icon: Code },
    { name: 'Node.js', category: 'Backend', icon: Code },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'Docker', category: 'DevOps', icon: Code },
    { name: 'Redis', category: 'Caching', icon: Database },
    { name: 'MongoDB', category: 'NoSQL', icon: Database },
    { name: 'Kubernetes', category: 'Orchestration', icon: Cloud }
  ];

  const compliance = [
    { name: 'HIPAA Compliant', icon: Shield, description: 'Full compliance with healthcare data protection standards' },
    { name: 'ISO 27001', icon: Lock, description: 'Information security management certification' },
    { name: 'SOC 2 Type II', icon: CheckCircle, description: 'Security, availability, and confidentiality controls' },
    { name: 'GDPR Ready', icon: Shield, description: 'European data protection regulation compliance' }
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
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
            What We Build for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Healthcare
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive healthcare software solutions designed to streamline operations, 
            improve patient care, and ensure regulatory compliance.
          </p>
        </motion.div>

        {/* Solutions Tabs */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === solution.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <solution.icon className="w-5 h-5 inline mr-2" />
                {solution.title}
              </button>
            ))}
          </div>

          {/* Active Solution Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          >
            {solutions.map((solution) => (
              activeTab === solution.id && (
                <div key={solution.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {solution.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {solution.pricing}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {solution.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <tech.icon className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance & Security */}
        <motion.div 
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Compliance & Security
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
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
            Ready to Build Your Healthcare Solution?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a custom healthcare software 
            solution that transforms your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Schedule Demo
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}