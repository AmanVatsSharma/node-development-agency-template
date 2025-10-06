'use client';

import React from 'react';
import { fireConversion } from '@/utils/conversions';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Limited: Only 3 New Clients This Month
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Get 5-10x ROAS from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Google Ads
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We manage Google Ads for Indian businesses. <span className="font-semibold text-gray-900">Guaranteed 3x ROAS in 60 days</span> or work for free until you do.
          </p>

          {/* Results Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">8.7x</div>
              <div className="text-sm text-gray-600">Avg. ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">₹2.3Cr</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              See Pricing & Get Started →
            </a>
            <a
              href="tel:+919963730111"
              onClick={() => void fireConversion('call_click', 'google-ads-management')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold text-lg hover:border-blue-600 transition-all"
            >
              📞 Call +91 99637 30111
            </a>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-sm text-gray-500">
            ✓ Free Google Ads Audit • ✓ No Setup Fees • ✓ Cancel Anytime
          </p>
        </div>
      </div>
    </section>
  );
}
