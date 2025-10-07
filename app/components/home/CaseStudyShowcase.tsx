"use client";

/**
 * @fileoverview CaseStudyShowcase Component - Success Stories Display
 * @description Premium showcase of successful case studies
 * Features:
 * - Interactive case study cards
 * - Before/After comparisons
 * - Metrics and results
 * - Hover effects and animations
 * 
 * @component CaseStudyShowcase
 * @example
 * <CaseStudyShowcase />
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

// Console log for debugging
console.log('[CaseStudyShowcase] Component loaded');

/**
 * Case Study interface
 */
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  gradient: string;
}

/**
 * Case Study Card Component
 */
interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  console.log(`[CaseStudyCard] Rendering case study: ${caseStudy.title}`);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl">
        {/* Gradient Border on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
        
        {/* Content */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 m-0.5">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {caseStudy.title}
              </h3>
              <span className={`px-3 py-1 bg-gradient-to-r ${caseStudy.gradient} text-white text-xs font-semibold rounded-full`}>
                {caseStudy.industry}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Client: <span className="font-semibold text-gray-800 dark:text-white">{caseStudy.client}</span>
            </p>
          </div>
          
          {/* Challenge */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Challenge
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {caseStudy.challenge}
            </p>
          </div>
          
          {/* Solution - Expandable */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Solution
            </h4>
            <p className={`text-gray-600 dark:text-gray-400 text-sm ${!isExpanded && 'line-clamp-2'}`}>
              {caseStudy.solution}
            </p>
            {caseStudy.solution.length > 100 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-2 hover:underline"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
          
          {/* Results */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
              Results & Impact
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.results.map((result, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-cyan-600 dark:text-cyan-400">
                      {result.icon}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {result.metric}
                    </span>
                  </div>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                    {result.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* View Full Case Study Link */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm group-hover:underline cursor-pointer inline-flex items-center">
              View Full Case Study
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main CaseStudyShowcase Component
 */
export default function CaseStudyShowcase() {
  console.log('[CaseStudyShowcase] Component rendering');
  
  // Case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: 'ecommerce-platform',
      title: 'Global E-Commerce Transformation',
      client: 'RetailCo International',
      industry: 'E-Commerce',
      challenge: 'Legacy monolithic platform couldn\'t scale during peak traffic. Page load times exceeded 5 seconds, resulting in 40% cart abandonment.',
      solution: 'Built a headless Shopify solution with Next.js frontend, implementing edge caching, lazy loading, and optimized checkout flow. Integrated with existing ERP and CRM systems.',
      results: [
        {
          metric: 'Revenue Increase',
          value: '+150%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          )
        },
        {
          metric: 'Page Load Time',
          value: '-80%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          metric: 'Conversion Rate',
          value: '+35%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          metric: 'Cart Abandonment',
          value: '-60%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          )
        }
      ],
      technologies: ['Next.js', 'Shopify', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-voice-agents',
      title: 'AI-Powered Customer Support',
      client: 'FinanceFlow Corp',
      industry: 'FinTech',
      challenge: 'Customer support team overwhelmed with 50,000+ monthly calls. Average wait time of 8 minutes leading to customer churn.',
      solution: 'Implemented AI Voice Agents with natural language processing, integrated with existing CRM. Handles routine queries 24/7, escalates complex issues to human agents.',
      results: [
        {
          metric: 'Call Volume Handled',
          value: '10x',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          )
        },
        {
          metric: 'Response Time',
          value: '<30s',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          metric: 'Cost Reduction',
          value: '-70%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          metric: 'Customer Satisfaction',
          value: '+40%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ],
      technologies: ['OpenAI', 'WebSockets', 'Node.js', 'MongoDB', 'Twilio', 'NLP'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'enterprise-erp',
      title: 'Legacy ERP Modernization',
      client: 'Manufacturing Pro Ltd',
      industry: 'Manufacturing',
      challenge: 'Outdated ERP system built in legacy technology. Frequent downtime, no mobile access, and poor integration capabilities.',
      solution: 'Complete rewrite using modern tech stack with microservices architecture. Cloud-native deployment with mobile apps for field workers.',
      results: [
        {
          metric: 'System Uptime',
          value: '99.9%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          metric: 'Productivity Gain',
          value: '+45%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          )
        },
        {
          metric: 'Mobile Adoption',
          value: '95%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          metric: 'Data Accuracy',
          value: '+98%',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ],
      technologies: ['React', 'Node.js', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'React Native'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
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
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve their digital transformation goals
          </p>
        </motion.div>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Case Studies →
          </button>
        </motion.div>
      </div>
    </section>
  );
}