'use client';

/**
 * Final CTA Section Component with Lead Form
 * "Your Leads Are One Click Away"
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

console.log('[Google-Ads] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    budget: '',
    phone: '',
    goal: '',
    message: ''
  });

  useEffect(() => {
    console.log('[Google-Ads] FinalCTASection mounted');
    return () => console.log('[Google-Ads] FinalCTASection unmounted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Google-Ads] Lead Form submitted:', formData);
    
    // Track form submission
    console.log('[Google Ads Management] Lead submit conversion fired');
    void fireConversion('google_ads_management_lead_submit');

    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        businessName: '',
        website: '',
        budget: '',
        phone: '',
        goal: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"
      id="lead-form"
      role="region"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - MOBILE OPTIMIZED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="cta-heading"
              className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-white"
            >
              Your Leads Are One Click Away
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to grow with Google Ads that pay back? Let Rajapragya Bharat's experts build and run your entire Google Ads machine — <span className="font-bold text-yellow-400">strategic, profitable & transparent</span>.
            </p>
          </motion.div>

          {/* Lead Form - MOBILE OPTIMIZED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-4 border-yellow-400"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                  Thank you, {formData.name}! 🎉
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  Our Google Ads team will review your business and contact you within <span className="font-bold text-blue-600 dark:text-blue-400">24 hours</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <Label htmlFor="businessName" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => handleChange('businessName', e.target.value)}
                      className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <Label htmlFor="website" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Website
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                      className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Monthly Budget */}
                  <div>
                    <Label htmlFor="budget" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Monthly Budget *
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)} required>
                      <SelectTrigger className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                        <SelectItem value="2l+">₹2,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Goal */}
                  <div>
                    <Label htmlFor="goal" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Primary Goal *
                    </Label>
                    <Select value={formData.goal} onValueChange={(value) => handleChange('goal', value)} required>
                      <SelectTrigger className="mt-2 h-12 text-base border-2 border-gray-300 dark:border-gray-600">
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leads">Generate Leads</SelectItem>
                        <SelectItem value="sales">Increase Sales</SelectItem>
                        <SelectItem value="traffic">Drive Website Traffic</SelectItem>
                        <SelectItem value="brand">Build Brand Awareness</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    Tell us about your business (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="mt-2 min-h-[100px] text-base border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    placeholder="What products/services do you offer? Who is your target audience?"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 h-14 text-base sm:text-lg font-black bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600 shadow-xl"
                  >
                    Request Free Ad Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="h-14 text-base sm:text-lg font-black border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    onClick={() => window.location.href = 'tel:+919876543210'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Talk to Ads Expert Now
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
