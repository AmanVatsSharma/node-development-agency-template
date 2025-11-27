'use client';

/**
 * Workflow Section - PREMIUM INTERACTIVE TIMELINE
 * Beautiful vertical timeline with animated steps
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, PenTool, Code2, TestTube, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

console.log('[ReactJS-Dev] WorkflowSection component loaded');

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  gradient: string;
}

export function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] WorkflowSection mounted');
    return () => console.log('[ReactJS-Dev] WorkflowSection unmounted');
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      icon: Lightbulb,
      title: 'Discovery & Ideation',
      subtitle: 'Understanding Your Vision',
      description: 'Deep dive into your business goals, target audience, and technical requirements',
      deliverables: ['Requirements doc', 'User personas', 'Tech recommendations'],
      duration: '3-5 days',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      number: 2,
      icon: PenTool,
      title: 'Design & Prototyping',
      subtitle: 'Bringing Ideas to Life',
      description: 'Creating intuitive wireframes, mockups, and interactive prototypes',
      deliverables: ['Wireframes', 'UI mockups', 'Interactive prototype'],
      duration: '5-7 days',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      number: 3,
      icon: Code2,
      title: 'React Development',
      subtitle: 'Building Your App',
      description: 'Clean, scalable React code with best practices and performance optimization',
      deliverables: ['Component library', 'API integration', 'State management'],
      duration: '14-21 days',
      gradient: 'from-[#61DAFB] to-[#00C897]'
    },
    {
      number: 4,
      icon: TestTube,
      title: 'Testing & QA',
      subtitle: 'Ensuring Quality',
      description: 'Rigorous testing for bugs, performance, accessibility, and cross-browser compatibility',
      deliverables: ['Test coverage', 'Bug fixes', 'Performance report'],
      duration: '3-5 days',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      number: 5,
      icon: Rocket,
      title: 'Launch & Support',
      subtitle: 'Going Live',
      description: 'Deployment, monitoring, and ongoing support to ensure smooth operation',
      deliverables: ['Production deploy', 'Documentation', 'Support package'],
      duration: 'Ongoing',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      id="workflow"
      role="region"
      aria-labelledby="workflow-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2361DAFB' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Our Process
            </span>
          </motion.div>

          <motion.h2
            id="workflow-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              How Our Hire React.js Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4"
          >
            Agile methodology — see your project grow every 7 days
          </motion.p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#61DAFB] via-[#00C897] to-[#61DAFB] opacity-20 dark:opacity-30" />

            {/* Steps */}
            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(null)}
                    className="relative pl-16 sm:pl-24 group"
                  >
                    {/* Step Number & Icon */}
                    <div className="absolute left-0 top-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                        
                        {/* Icon Container */}
                        <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>

                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-[#61DAFB] flex items-center justify-center">
                          <span className="text-xs sm:text-sm font-black text-[#61DAFB]">
                            {step.number}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      animate={isActive ? { y: -4 } : { y: 0 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-[#61DAFB]/10 transition-all duration-500 overflow-hidden"
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#61DAFB] font-bold">
                              {step.subtitle}
                            </p>
                          </div>

                          {/* Duration Badge */}
                          <div className="flex-shrink-0 px-3 py-1.5 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 rounded-full border border-[#61DAFB]/30">
                            <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                              {step.duration}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div>
                          <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                            Deliverables
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15 + idx * 0.05 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#00C897]" />
                                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  {deliverable}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 sm:p-10 bg-gradient-to-br from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 backdrop-blur-xl rounded-3xl border border-[#61DAFB]/20 max-w-2xl">
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-[#61DAFB]" />
            <p className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white">
              From idea to production in 4-6 weeks
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              With weekly progress updates and transparent communication
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
