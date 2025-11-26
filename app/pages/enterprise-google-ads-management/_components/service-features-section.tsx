import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, BarChart3, Clock, Target, Zap, TrendingUp, Headphones } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and compliance with enterprise standards.",
      metric: "100% Secure"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Dedicated account managers and specialists for your enterprise needs.",
      metric: "24/7 Support"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics with custom dashboards.",
      metric: "Real-time Data"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock campaign monitoring and optimization.",
      metric: "Always Active"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience targeting and bid optimization strategies.",
      metric: "8.5× ROAS"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "AI-powered automation for bid management and optimization.",
      metric: "95% Automated"
    },
    {
      icon: TrendingUp,
      title: "Performance Growth",
      description: "Continuous optimization for sustained growth and ROI improvement.",
      metric: "45% Growth"
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated support team with direct access to senior specialists.",
      metric: "1-Hour Response"
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
            Hire Enterprise Google Ads Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our enterprise Google Ads management includes advanced features designed for large-scale operations and maximum ROI.
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
              className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-blue-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}