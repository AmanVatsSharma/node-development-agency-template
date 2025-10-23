'use client';

/**
 * Problem/Solution Section Component - Healthcare Software Development
 * Healthcare Industry Challenges vs Our Solutions
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  FileText, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Heart,
  Activity
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] ProblemSolutionSection component loaded');

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: Clock,
      title: "Long Patient Wait Times",
      description: "Patients wait 2-3 hours for basic consultations, leading to poor satisfaction and lost revenue.",
      impact: "60% patient dissatisfaction",
      color: "text-red-500"
    },
    {
      icon: FileText,
      title: "Paper-Based Records",
      description: "Manual record keeping leads to errors, lost files, and compliance issues with medical regulations.",
      impact: "40% data entry errors",
      color: "text-orange-500"
    },
    {
      icon: DollarSign,
      title: "High Operational Costs",
      description: "Inefficient processes and manual work increase operational costs by 30-40% annually.",
      impact: "₹50L+ annual losses",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Data Security Concerns",
      description: "Patient data breaches and non-compliance with HIPAA regulations result in heavy penalties.",
      impact: "₹1Cr+ penalty risk",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Staff Management Issues",
      description: "Difficulty in scheduling, tracking staff performance, and managing multiple departments.",
      impact: "35% staff inefficiency",
      color: "text-pink-500"
    },
    {
      icon: Smartphone,
      title: "No Mobile Access",
      description: "Doctors and staff can't access patient data on-the-go, limiting flexibility and response time.",
      impact: "50% slower response",
      color: "text-indigo-500"
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: "Automated Patient Flow",
      description: "Smart queue management reduces wait times by 60% and improves patient satisfaction.",
      benefit: "60% faster processing",
      color: "text-green-500"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Cloud-based EHR system with real-time updates and instant access to patient history.",
      benefit: "99% accuracy rate",
      color: "text-blue-500"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Automated workflows and efficient resource management reduce operational costs by 40%.",
      benefit: "₹30L+ annual savings",
      color: "text-emerald-500"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "End-to-end encryption and compliance monitoring ensure 100% data security and regulatory adherence.",
      benefit: "Zero breach guarantee",
      color: "text-cyan-500"
    },
    {
      icon: Users,
      title: "Smart Staff Management",
      description: "AI-powered scheduling and performance tracking optimize staff utilization and productivity.",
      benefit: "45% efficiency gain",
      color: "text-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Responsive design and mobile apps enable access from anywhere, anytime with full functionality.",
      benefit: "24/7 accessibility",
      color: "text-violet-500"
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
        staggerChildren: 0.1,
        delayChildren: 0.2
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
            Healthcare Industry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Challenges
            </span>
            {' '}vs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your healthcare facility with cutting-edge software solutions 
            that address real-world problems and deliver measurable results.
          </p>
        </motion.div>

        {/* Problems vs Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Problems Column */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Current Healthcare Problems
              </h3>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01, x: 5 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 ${problem.color}`}>
                      <problem.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm sm:text-base">
                        {problem.description}
                      </p>
                      <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs sm:text-sm font-medium">
                        <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="truncate">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Our Healthcare Solutions
              </h3>
            </motion.div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: -10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 ${solution.color}`}>
                      <solution.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {solution.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                        <CheckCircle className="w-4 h-4" />
                        {solution.benefit}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Healthcare Facility?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Join 100+ healthcare providers who have already transformed their operations 
              with our cutting-edge software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => {
                  console.log('[Healthcare-Software-Dev] Problem/Solution CTA clicked');
                  // Track conversion
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Get Free Analysis',
                      value: 1
                    });
                  }
                }}
              >
                Get Free Healthcare Analysis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}