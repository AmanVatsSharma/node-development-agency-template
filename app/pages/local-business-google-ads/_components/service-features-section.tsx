import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, BarChart3, Zap, TrendingUp, Users, Headphones, Clock } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Local Targeting",
      description: "Precise geographic targeting to reach customers in your service area and surrounding neighborhoods.",
      metric: "5.8× ROAS"
    },
    {
      icon: Target,
      title: "Local Keywords",
      description: "Optimized local keyword strategies including 'near me' searches and location-specific terms.",
      metric: "60% More Customers"
    },
    {
      icon: BarChart3,
      title: "Local Analytics",
      description: "Detailed reporting on local performance, foot traffic, and customer acquisition by location.",
      metric: "Real-time Data"
    },
    {
      icon: Zap,
      title: "Location Extensions",
      description: "Google My Business integration with location extensions and call extensions for local visibility.",
      metric: "95% Automated"
    },
    {
      icon: TrendingUp,
      title: "Local Growth",
      description: "Proven strategies that consistently increase local market share and customer base.",
      metric: "45% Growth"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Deep understanding of local market dynamics and community-specific marketing strategies.",
      metric: "Local Expertise"
    },
    {
      icon: Headphones,
      title: "Local Support",
      description: "Specialized support team with deep local business marketing expertise and understanding.",
      metric: "24/7 Support"
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "Fast implementation and optimization for immediate local market impact and visibility.",
      metric: "7-Day Setup"
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
            Local Business Google Ads Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our local business Google Ads includes specialized features designed for local market domination and customer acquisition.
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