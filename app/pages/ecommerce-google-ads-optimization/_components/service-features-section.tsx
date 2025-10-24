import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Target, BarChart3, Zap, TrendingUp, Package, Users, Headphones } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Campaigns",
      description: "Advanced Google Shopping campaign optimization for maximum visibility and conversions.",
      metric: "6.8× ROAS"
    },
    {
      icon: Package,
      title: "Product Feed Optimization",
      description: "Comprehensive product feed management with automated updates and quality monitoring.",
      metric: "45% More Sales"
    },
    {
      icon: Target,
      title: "Conversion Tracking",
      description: "Advanced conversion tracking and attribution modeling for accurate ROI measurement.",
      metric: "98% Accuracy"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed analytics and reporting with actionable insights for continuous improvement.",
      metric: "Real-time Data"
    },
    {
      icon: Zap,
      title: "Automated Bidding",
      description: "AI-powered bidding strategies optimized for maximum conversions and ROAS.",
      metric: "95% Automated"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Proven strategies that consistently increase revenue and market share.",
      metric: "45% Growth"
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Advanced audience segmentation and targeting for high-value customers.",
      metric: "3.2× CTR"
    },
    {
      icon: Headphones,
      title: "E-commerce Support",
      description: "Specialized support team with deep e-commerce and Google Shopping expertise.",
      metric: "24/7 Support"
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
            E-commerce Google Ads Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our e-commerce Google Ads optimization includes specialized features designed for online stores and product advertising.
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
              className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-orange-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}