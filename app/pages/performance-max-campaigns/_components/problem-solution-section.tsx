import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Zap, TrendingUp, Target, BarChart3 } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Complex Campaign Management",
      description: "Managing multiple Google Ads campaigns across different networks is time-consuming and inefficient."
    },
    {
      icon: AlertTriangle,
      title: "Poor Cross-Network Performance",
      description: "Campaigns not performing well across Search, Display, YouTube, and Shopping networks."
    },
    {
      icon: AlertTriangle,
      title: "Manual Optimization Overhead",
      description: "Spending too much time on manual bidding, targeting, and creative optimization across platforms."
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Automated Performance Max",
      description: "AI-powered campaigns that automatically optimize across all Google networks with 6.5× ROAS."
    },
    {
      icon: CheckCircle,
      title: "Cross-Network Optimization",
      description: "Unified campaign management that maximizes performance across Search, Display, YouTube, and Shopping."
    },
    {
      icon: CheckCircle,
      title: "Advanced Automation",
      description: "Machine learning algorithms that handle bidding, targeting, and creative optimization automatically."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
                Performance Max
                <span className="block text-red-600">Challenges</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Managing campaigns across multiple Google networks requires advanced automation and optimization expertise.
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
                Our Performance Max
                <span className="block text-purple-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in Performance Max campaigns with advanced automation and cross-network optimization.
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
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-purple-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-purple-600" />
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