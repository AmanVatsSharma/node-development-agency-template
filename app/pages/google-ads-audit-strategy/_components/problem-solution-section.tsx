import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Search, TrendingUp, Target, BarChart3 } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Poor Campaign Performance",
      description: "Google Ads campaigns not delivering expected results with low ROAS and high cost-per-conversion."
    },
    {
      icon: AlertTriangle,
      title: "Wasted Ad Spend",
      description: "Budget being spent on ineffective keywords, audiences, and campaigns without proper optimization."
    },
    {
      icon: AlertTriangle,
      title: "Lack of Strategic Direction",
      description: "No clear strategy or roadmap for Google Ads growth and optimization across different campaigns."
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Comprehensive Audit",
      description: "Detailed analysis of your Google Ads account with actionable recommendations for 40%+ improvement."
    },
    {
      icon: CheckCircle,
      title: "Strategic Roadmap",
      description: "Custom strategy development with clear implementation plan and performance benchmarks."
    },
    {
      icon: CheckCircle,
      title: "Expert Analysis",
      description: "Deep dive into account structure, keywords, targeting, and bidding strategies for maximum ROI."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
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
                Google Ads Audit
                <span className="block text-red-600">Challenges</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Many businesses struggle with underperforming Google Ads campaigns and lack strategic direction for optimization.
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
                Our Audit & Strategy
                <span className="block text-teal-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive Google Ads audits and strategic roadmaps for maximum performance improvement.
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
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-teal-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-teal-600" />
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