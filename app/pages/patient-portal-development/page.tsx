'use client';

import React, { useEffect } from 'react';

export default function PatientPortalPage() {
  useEffect(() => {
    console.log('[Patient-Portal] Page mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 sm:mb-12 lg:mb-0 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm font-medium">Patient-Centric • 180+ Hospitals</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Patient{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-rose-400">
                  Portal Development
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build comprehensive patient portals with appointment booking, 
                medical records access, prescription management, and secure communication for modern healthcare.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Appointment Booking</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Medical Records</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Prescription Access</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Secure Messaging</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Portal Analysis
                    <span className="text-lg">→</span>
                  </span>
                </button>
                
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-lg">▶</span>
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-12 px-4 sm:px-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Patient Portal Impact</h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">
                      180+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Hospitals Using</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">
                      500K+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Active Patients</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-400 mb-1 sm:mb-2">
                      92%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Patient Satisfaction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      65%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Appointment Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                Patient Portal Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything patients need for seamless healthcare management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Appointment Management */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Appointment Management</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Online Booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Rescheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Reminder Notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Waitlist Management
                </li>
              </ul>
            </div>

            {/* Medical Records */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Medical Records</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Health History
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Lab Results
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Imaging Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Download Records
                </li>
              </ul>
            </div>

            {/* Prescription Management */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Prescription Management</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Digital Prescriptions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Refill Requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Medication History
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Drug Interactions
                </li>
              </ul>
            </div>

            {/* Secure Messaging */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Secure Messaging</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Doctor Communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  File Attachments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Message History
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Emergency Alerts
                </li>
              </ul>
            </div>

            {/* Billing & Payments */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Billing & Payments</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  View Bills
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Online Payments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Insurance Claims
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Payment History
                </li>
              </ul>
            </div>

            {/* Health Tracking */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Health Tracking</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Vital Signs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Medication Reminders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Health Goals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Progress Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Affordable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect patient portal solution for your healthcare facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Basic Portal</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small clinics (1-10 doctors)</p>
                <div className="text-4xl font-bold text-red-600 mb-2">₹10L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Appointment Booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Medical Records</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Prescription Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Secure Messaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Billing</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-200 dark:border-red-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Professional Portal</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for medium hospitals (10-50 doctors)</p>
                <div className="text-4xl font-bold text-red-600 mb-2">₹20L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Health Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Mobile App</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enterprise Portal</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Complete solution for large hospitals (50+ doctors)</p>
                <div className="text-4xl font-bold text-red-600 mb-2">₹30L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">AI-Powered Insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Training & Onboarding</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Empower Your Patients?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join 180+ hospitals across India who have enhanced patient engagement with our portal platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
