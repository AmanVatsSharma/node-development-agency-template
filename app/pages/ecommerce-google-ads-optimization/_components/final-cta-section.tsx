import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function FinalCTASection() {
  const handleCTAClick = (ctaType: string) => {
    console.log(`[Ecommerce-Final-CTA] CTA clicked: ${ctaType}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ecommerce_final_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const benefits = [
    "6.8× Average ROAS Guarantee",
    "E-commerce Specialists",
    "24/7 Campaign Monitoring",
    "30-Day Money-Back Guarantee"
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                E-commerce Sales?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join 150+ e-commerce businesses who trust us with their Google Ads optimization. 
              Get specialized support, advanced strategies, and guaranteed 6.8× ROAS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="tel:+919876543210"
              onClick={() => handleCTAClick('phone_call')}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              <Phone className="w-5 h-5" />
              Call E-commerce Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="mailto:ecommerce@rajapragyabharat.com"
              onClick={() => handleCTAClick('email')}
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email E-commerce Team
            </Link>

            <Link
              href="#contact"
              onClick={() => handleCTAClick('schedule_consultation')}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              E-commerce Consultation Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">1</div>
                <h4 className="text-white font-semibold mb-2">Store Analysis</h4>
                <p className="text-gray-300 text-sm">Comprehensive analysis of your e-commerce store and current Google Ads performance</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">2</div>
                <h4 className="text-white font-semibold mb-2">Custom Strategy</h4>
                <p className="text-gray-300 text-sm">Tailored Google Shopping strategy designed for your products and target audience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">3</div>
                <h4 className="text-white font-semibold mb-2">Implementation</h4>
                <p className="text-gray-300 text-sm">Full implementation with 30-day guarantee and ongoing optimization</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-sm">
              <strong>Limited Time:</strong> First 20 e-commerce clients get 25% off their first 3 months + free product feed optimization
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4 text-sm text-gray-400">
              <span>✓ No setup fees</span>
              <span>✓ Free migration</span>
              <span>✓ 30-day guarantee</span>
              <span>✓ 24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}