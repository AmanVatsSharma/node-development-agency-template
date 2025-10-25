import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function FinalCTASection() {
  const handleCTAClick = (ctaType: string) => {
    console.log(`[Google-Ads-Audit-Final-CTA] CTA clicked: ${ctaType}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'google_ads_audit_final_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const benefits = [
    "40%+ Improvement Guarantee",
    "Google Ads Audit Specialists",
    "24/7 Consultation Support",
    "30-Day Money-Back Guarantee"
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/20 to-cyan-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
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
              Ready to Optimize Your
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Google Ads Performance?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join 300+ businesses who trust us with their Google Ads audits. 
              Get comprehensive analysis, strategic recommendations, and guaranteed 40%+ improvement.
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
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25"
            >
              <Phone className="w-5 h-5" />
              Call Audit Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="mailto:audit@rajapragyabharat.com"
              onClick={() => handleCTAClick('email')}
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Audit Team
            </Link>

            <Link
              href="#contact"
              onClick={() => handleCTAClick('schedule_consultation')}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
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
              Google Ads Audit Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">1</div>
                <h4 className="text-white font-semibold mb-2">Account Analysis</h4>
                <p className="text-gray-300 text-sm">Comprehensive analysis of your Google Ads account structure, performance, and optimization opportunities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">2</div>
                <h4 className="text-white font-semibold mb-2">Strategic Report</h4>
                <p className="text-gray-300 text-sm">Detailed audit report with actionable recommendations and strategic roadmap for improvement</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">3</div>
                <h4 className="text-white font-semibold mb-2">Implementation</h4>
                <p className="text-gray-300 text-sm">Implementation support and consultation to ensure successful execution of recommendations</p>
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
              <strong>Limited Time:</strong> First 20 audit clients get 25% off their audit + free strategy consultation
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4 text-sm text-gray-400">
              <span>✓ No setup fees</span>
              <span>✓ Free consultation</span>
              <span>✓ 30-day guarantee</span>
              <span>✓ 24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}