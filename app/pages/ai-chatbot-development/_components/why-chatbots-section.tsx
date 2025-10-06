'use client';

/**
 * Why AI Chatbots Section
 * Problem-Solution Matrix
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, DollarSign, TrendingDown, Unplug, CheckCircle2, Zap, HeartHandshake, Link2 } from 'lucide-react';

console.log('[AI-Chatbot-Dev] WhyChatbotsSection component loaded');

interface ProblemSolution {
  problem: string;
  problemIcon: React.ReactNode;
  solution: string;
  solutionIcon: React.ReactNode;
}

export function WhyChatbotsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] WhyChatbotsSection mounted');
    return () => console.log('[AI-Chatbot-Dev] WhyChatbotsSection unmounted');
  }, []);

  const problemSolutions: ProblemSolution[] = [
    {
      problem: 'Missed Leads & Slow Response Time',
      problemIcon: <Clock className="h-6 w-6" />,
      solution: 'Instant AI chat engagement 24/7',
      solutionIcon: <Zap className="h-6 w-6" />
    },
    {
      problem: 'High Support Cost',
      problemIcon: <DollarSign className="h-6 w-6" />,
      solution: '80% automation of repetitive queries',
      solutionIcon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      problem: 'Low Conversion Rate',
      problemIcon: <TrendingDown className="h-6 w-6" />,
      solution: 'Intelligent upselling & lead qualification',
      solutionIcon: <HeartHandshake className="h-6 w-6" />
    },
    {
      problem: 'Disconnected Customer Journey',
      problemIcon: <Unplug className="h-6 w-6" />,
      solution: 'Seamless integration across web, CRM, and social',
      solutionIcon: <Link2 className="h-6 w-6" />
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="why-chatbots"
      role="region"
      aria-labelledby="why-chatbots-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border border-red-200 dark:border-red-800 text-sm sm:text-base">
            <span className="font-bold text-red-700 dark:text-red-300 uppercase tracking-wide">
              Why Businesses Are Switching
            </span>
          </div>

          <h2
            id="why-chatbots-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            The Problem with Traditional Support
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your website is talking — but are you listening?
          </p>
        </motion.div>

        {/* Problem-Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] dark:hover:border-[#FFB100] hover:shadow-2xl transition-all duration-300"
            >
              {/* Problem */}
              <div className="mb-6 pb-6 border-b-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    {item.problemIcon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-wide">Problem</div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.problem}
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    {item.solutionIcon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wide">Solution</div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#0A2540] to-[#FFB100] flex items-center justify-center text-white shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-out Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-[#FFB100] max-w-4xl mx-auto"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            💡 Let Your Bot Handle the First Hello!
          </div>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            While you focus on closing deals, your AI chatbot qualifies leads, answers questions, and books meetings — automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
