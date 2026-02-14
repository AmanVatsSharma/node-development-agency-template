import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Target, BarChart3, Zap, TrendingUp, Users, Headphones, CheckCircle } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Landing Page Design",
      description: "Professional, conversion-focused landing page design with mobile-first approach and modern UI/UX.",
      metric: "3.5× Conversion Rate"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Data-driven optimization strategies including A/B testing, heatmaps, and user behavior analysis.",
      metric: "Expert Strategy"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting with conversion tracking and ROI measurement.",
      metric: "Real-time Data"
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Fast loading times, mobile optimization, and technical performance improvements.",
      metric: "95% Faster Loading"
    },
    {
      icon: TrendingUp,
      title: "ROI Improvement",
      description: "Proven strategies that consistently increase conversion rates and return on ad spend.",
      metric: "60% Higher ROI"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive navigation, clear messaging, and user-friendly design for maximum engagement.",
      metric: "Expert UX"
    },
    {
      icon: Headphones,
      title: "Landing Page Support",
      description: "Specialized support team with deep expertise in landing page optimization and conversion.",
      metric: "24/7 Support"
    },
    {
      icon: CheckCircle,
      title: "A/B Testing",
      description: "Continuous testing and optimization with data-driven improvements for maximum results.",
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
            Hire Landing Page Optimization Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our landing page optimization includes specialized features designed for maximum conversion and user experience.
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
              className="group p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-yellow-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}