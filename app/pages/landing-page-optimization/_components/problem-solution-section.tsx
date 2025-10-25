import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Monitor, TrendingUp, Target, Zap } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Low Conversion Rates",
      description: "Landing pages not converting visitors into leads or customers with poor user experience and design."
    },
    {
      icon: AlertTriangle,
      title: "Poor User Experience",
      description: "Confusing navigation, slow loading times, and mobile-unfriendly designs driving visitors away."
    },
    {
      icon: AlertTriangle,
      title: "Wasted Ad Spend",
      description: "High-quality traffic from Google Ads being wasted on poorly optimized landing pages."
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "High-Converting Landing Pages",
      description: "Professional landing page design and optimization with 3.5× conversion rate improvement."
    },
    {
      icon: CheckCircle,
      title: "User Experience Optimization",
      description: "Mobile-first design, fast loading, and intuitive navigation for maximum engagement."
    },
    {
      icon: CheckCircle,
      title: "Conversion Rate Optimization",
      description: "Data-driven optimization strategies and A/B testing for continuous improvement."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Landing Page
                <span className="block text-red-600">Challenges</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Many businesses struggle with underperforming landing pages that waste valuable traffic and ad spend.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-red-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Landing Page
                <span className="block text-yellow-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in landing page optimization with proven strategies for maximum conversion and user experience.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-yellow-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}