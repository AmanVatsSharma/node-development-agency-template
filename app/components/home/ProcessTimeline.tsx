"use client";

/**
 * @fileoverview ProcessTimeline Component - Our Development Process
 * @description Premium timeline showcasing the project delivery process
 * Features:
 * - Vertical timeline with animations
 * - Step-by-step process visualization
 * - Interactive hover effects
 * - Responsive design
 * 
 * @component ProcessTimeline
 * @example
 * <ProcessTimeline />
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Console log for debugging
console.log('[ProcessTimeline] Component loaded');

/**
 * Process Step interface
 */
interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: React.ReactNode;
  color: string;
}

/**
 * Step Card Component
 */
interface StepCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

function StepCard({ step, index, isLast }: StepCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  console.log(`[StepCard] Rendering step: ${step.title}`);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex gap-8 pb-16 group"
    >
      {/* Timeline Line */}
      <div className="relative flex flex-col items-center">
        {/* Circle */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
          {step.icon}
        </div>
        
        {/* Vertical Line */}
        {!isLast && (
          <div className="w-0.5 flex-grow bg-gradient-to-b from-cyan-500/50 to-blue-500/20 mt-4"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 -mt-2">
        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2 block`}>
                Step {step.number}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
            </div>
            <span className="px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium whitespace-nowrap">
              {step.duration}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {step.description}
          </p>
          
          {/* Deliverables */}
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Key Deliverables:
            </p>
            <ul className="space-y-2">
              {step.deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main ProcessTimeline Component
 */
export default function ProcessTimeline() {
  console.log('[ProcessTimeline] Component rendering');
  
  // Process steps data
  const steps: ProcessStep[] = [
    {
      id: 'discovery',
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, technical requirements, and constraints. Deep-dive workshops and stakeholder interviews ensure we\'re aligned from day one.',
      duration: '1-2 Weeks',
      deliverables: [
        'Project roadmap and timeline',
        'Technical architecture document',
        'User stories and requirements',
        'Risk assessment and mitigation plan'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 'design',
      number: 2,
      title: 'Design & Prototyping',
      description: 'Our design team creates intuitive, beautiful interfaces that users love. We prototype key flows and gather feedback before writing a single line of code.',
      duration: '2-3 Weeks',
      deliverables: [
        'UI/UX wireframes and mockups',
        'Interactive prototypes',
        'Design system and style guide',
        'User flow diagrams'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 'development',
      number: 3,
      title: 'Agile Development',
      description: 'Our engineers build your solution in 2-week sprints with continuous integration and deployment. You get working software every sprint with full transparency.',
      duration: '6-12 Weeks',
      deliverables: [
        'Clean, well-documented code',
        'Automated test suites',
        'Sprint demos and reviews',
        'Continuous deployment pipeline'
      ],
      color: 'from-green-500 to-emerald-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'testing',
      number: 4,
      title: 'Quality Assurance',
      description: 'Rigorous testing across devices, browsers, and scenarios ensures your application is bug-free and performs flawlessly under load.',
      duration: '1-2 Weeks',
      deliverables: [
        'Comprehensive test reports',
        'Performance benchmarks',
        'Security audit results',
        'Cross-browser compatibility matrix'
      ],
      color: 'from-orange-500 to-red-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'launch',
      number: 5,
      title: 'Launch & Support',
      description: 'We handle the entire deployment process and provide comprehensive training. Post-launch, we monitor, optimize, and provide ongoing support.',
      duration: 'Ongoing',
      deliverables: [
        'Production deployment',
        'Team training and documentation',
        'Performance monitoring setup',
        '24/7 support and maintenance'
      ],
      color: 'from-indigo-500 to-purple-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A battle-tested methodology that delivers exceptional results on time and within budget
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Your Project →
          </button>
        </motion.div>
      </div>
    </section>
  );
}