import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart3, TrendingUp, Users, Headphones, Settings, Globe } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Advanced machine learning algorithms that automatically optimize campaigns across all Google networks.",
      metric: "6.5× ROAS"
    },
    {
      icon: Target,
      title: "Cross-Network Targeting",
      description: "Unified targeting strategies that work across Search, Display, YouTube, and Shopping networks.",
      metric: "45% Higher CTR"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive reporting and analytics across all networks with unified performance metrics.",
      metric: "Real-time Data"
    },
    {
      icon: TrendingUp,
      title: "Automated Optimization",
      description: "Continuous optimization of bidding, targeting, and creative elements without manual intervention.",
      metric: "95% Automated"
    },
    {
      icon: Users,
      title: "Audience Intelligence",
      description: "Advanced audience insights and automated audience creation for maximum reach and conversion.",
      metric: "60% Growth"
    },
    {
      icon: Settings,
      title: "Campaign Management",
      description: "Streamlined campaign setup and management across all Google advertising networks.",
      metric: "Expert Strategy"
    },
    {
      icon: Headphones,
      title: "Performance Max Support",
      description: "Specialized support team with deep expertise in Performance Max campaigns and automation.",
      metric: "24/7 Support"
    },
    {
      icon: Globe,
      title: "Multi-Network Reach",
      description: "Maximum reach across Search, Display, YouTube, Shopping, and Discovery networks.",
      metric: "Proven Results"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hire Performance Max Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Performance Max campaigns include specialized features designed for automated cross-network optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-purple-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}