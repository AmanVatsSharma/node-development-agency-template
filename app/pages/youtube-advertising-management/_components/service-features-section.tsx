import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target, BarChart3, Zap, TrendingUp, Users, Headphones, Video } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Play,
      title: "Video Ad Creation",
      description: "Professional video ad production including TrueView, Bumper, and Display ads for maximum engagement.",
      metric: "6.2× ROAS"
    },
    {
      icon: Target,
      title: "Advanced Targeting",
      description: "Precise audience targeting using demographics, interests, keywords, and behavioral data.",
      metric: "40% Higher CTR"
    },
    {
      icon: BarChart3,
      title: "Video Analytics",
      description: "Comprehensive YouTube analytics including view rates, engagement, and conversion tracking.",
      metric: "Real-time Data"
    },
    {
      icon: Zap,
      title: "Ad Optimization",
      description: "Continuous optimization of video ads, targeting, and bidding for maximum performance.",
      metric: "95% Automated"
    },
    {
      icon: TrendingUp,
      title: "Channel Growth",
      description: "Proven strategies that consistently increase subscribers, views, and brand awareness.",
      metric: "60% Growth"
    },
    {
      icon: Users,
      title: "Audience Building",
      description: "Strategic audience development and retention strategies for long-term YouTube success.",
      metric: "Expert Strategy"
    },
    {
      icon: Headphones,
      title: "YouTube Support",
      description: "Specialized support team with deep YouTube marketing and advertising expertise.",
      metric: "24/7 Support"
    },
    {
      icon: Video,
      title: "Content Strategy",
      description: "Data-driven content strategy and video optimization for maximum engagement and conversions.",
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
            Hire YouTube Ads Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our YouTube advertising includes specialized features designed for video marketing success and audience engagement.
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
              className="group p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-red-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}