'use client';

/**
 * @fileoverview Google Ads Ecosystem Hub - Main showcase page for all Google Ads services
 * @description High-converting ecosystem page showcasing mastery of Google Ads industry
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Premium ecosystem positioning as India's top Google Ads authority
 * - Interactive service discovery and comparison
 * - Cross-service navigation and upselling
 * - Industry-specific service recommendations
 * - High-value lead generation with multiple conversion points
 * 
 * ARCHITECTURE:
 * - Component-based architecture with enhanced shared components
 * - Interactive calculators and tools
 * - Dynamic service recommendations
 * - Mobile-first responsive design with animations
 * - Comprehensive error handling and logging
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Enhanced Components
import { ServiceCard } from '@/app/components/GoogleAdsEcosystem/ServiceCard';
import { ROICalculator } from '@/app/components/GoogleAdsEcosystem/ROICalculator';
import { ServiceNavigation } from '@/app/components/GoogleAdsEcosystem/ServiceNavigation';

// Section Components
import { HeroSection } from './_components/hero-section';
import { EcosystemOverview } from './_components/ecosystem-overview';
import { ServiceTiers } from './_components/service-tiers';
import { IndustryFocus } from './_components/industry-focus';
import { WhyChooseUs } from './_components/why-choose-us';
import { CaseStudiesShowcase } from './_components/case-studies-showcase';
import { ExpertTeam } from './_components/expert-team';
import { PricingOverview } from './_components/pricing-overview';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

// Icons
import { 
  Target, 
  TrendingUp, 
  Users, 
  Star, 
  Zap, 
  BarChart3, 
  Shield, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

console.log('[Google-Ads-Ecosystem] Main ecosystem page component loaded');

/**
 * Google Ads Ecosystem Hub Component
 * MASTER ECOSYSTEM SHOWCASE VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Position as India's premier Google Ads ecosystem
 * 2. Ecosystem Overview - Show complete service mastery
 * 3. Service Tiers - Clear hierarchy and value proposition
 * 4. Industry Focus - Industry-specific service recommendations
 * 5. ROI Calculator - Interactive tool for engagement
 * 6. Why Choose Us - Key differentiators and expertise
 * 7. Case Studies - Real results across all service types
 * 8. Expert Team - Credibility and trust building
 * 9. Pricing Overview - Transparent ecosystem pricing
 * 10. Testimonials - Social proof from successful clients
 * 11. FAQ - Address common objections
 * 12. Final CTA - Lead form with ecosystem context
 * 
 * KEY FEATURES:
 * - Interactive service discovery
 * - Cross-service navigation
 * - Industry-specific recommendations
 * - ROI calculation tools
 * - Expert team showcase
 * - Comprehensive service coverage
 */

export default function GoogleAdsEcosystemPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [selectedTier, setSelectedTier] = useState<string>('All Tiers');

  useEffect(() => {
    console.log('[Google-Ads-Ecosystem] Page mounted');
    console.log('[Google-Ads-Ecosystem] User Agent:', navigator.userAgent);
    console.log('[Google-Ads-Ecosystem] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Google Ads Ecosystem | Complete PPC Services | Rajapragya Bharat',
        page_location: window.location.href,
        page_path: '/pages/google-ads-ecosystem'
      });
    }

    return () => {
      console.log('[Google-Ads-Ecosystem] Page unmounted');
    };
  }, []);

  // Service data for the ecosystem
  const ecosystemServices = [
    // Tier 1 Services
    {
      title: 'Enterprise Google Ads Management',
      description: 'Complete enterprise-level Google Ads management with dedicated team and advanced strategies',
      price: '₹75K-₹2L+/month',
      priceNote: 'Based on ad spend',
      tier: 'Tier 1' as const,
      icon: <Target className="w-8 h-8 text-blue-600" />,
      features: [
        'Dedicated account manager',
        'Advanced bid strategies',
        'Cross-platform integration',
        'Custom reporting dashboard',
        '24/7 campaign monitoring',
        'Strategic consultation'
      ],
      ctaText: 'Get Enterprise Quote',
      ctaLink: '/pages/enterprise-google-ads-management',
      isPopular: true,
      metrics: [
        { label: 'Avg ROAS', value: '8.5×', trend: 'up' as const },
        { label: 'CPC Reduction', value: '45%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'E-commerce Optimization', link: '/pages/ecommerce-google-ads-optimization' },
        { title: 'B2B Lead Generation', link: '/pages/b2b-lead-generation-ads' }
      ],
      industry: ['Real Estate', 'Healthcare', 'B2B Services', 'SaaS']
    },
    {
      title: 'E-commerce Google Ads Optimization',
      description: 'Specialized e-commerce campaign optimization for maximum conversions and sales',
      price: '₹50K-₹1.5L/month',
      priceNote: 'Based on ad spend',
      tier: 'Tier 1' as const,
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      features: [
        'Shopping campaign optimization',
        'Product feed management',
        'Dynamic remarketing',
        'Conversion tracking setup',
        'Landing page optimization',
        'A/B testing framework'
      ],
      ctaText: 'Optimize E-commerce',
      ctaLink: '/pages/ecommerce-google-ads-optimization',
      metrics: [
        { label: 'Sales Increase', value: '320%', trend: 'up' as const },
        { label: 'Conversion Rate', value: '12.4%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'Performance Max', link: '/pages/performance-max-campaigns' },
        { title: 'Landing Page Optimization', link: '/pages/landing-page-optimization' }
      ],
      industry: ['E-commerce', 'Retail', 'Fashion', 'Electronics']
    },
    {
      title: 'B2B Lead Generation',
      description: 'High-quality B2B leads through targeted Google Ads campaigns and lead nurturing',
      price: '₹60K-₹1.25L/month',
      priceNote: 'Based on lead volume',
      tier: 'Tier 1' as const,
      icon: <Users className="w-8 h-8 text-purple-600" />,
      features: [
        'Lead qualification setup',
        'CRM integration',
        'Lead scoring system',
        'Nurturing sequences',
        'Quality lead tracking',
        'ROI optimization'
      ],
      ctaText: 'Generate B2B Leads',
      ctaLink: '/pages/b2b-lead-generation-ads',
      metrics: [
        { label: 'Lead Quality', value: '9.2/10', trend: 'up' as const },
        { label: 'Cost Per Lead', value: '₹850', trend: 'down' as const }
      ],
      relatedServices: [
        { title: 'Enterprise Management', link: '/pages/enterprise-google-ads-management' },
        { title: 'Google Ads Audit', link: '/pages/google-ads-audit-strategy' }
      ],
      industry: ['B2B Services', 'SaaS', 'Consulting', 'Technology']
    },
    // Tier 2 Services
    {
      title: 'Local Business Google Ads',
      description: 'Local-focused campaigns to drive foot traffic, calls, and local conversions',
      price: '₹25K-₹75K/month',
      priceNote: 'Based on location count',
      tier: 'Tier 2' as const,
      icon: <Target className="w-8 h-8 text-orange-600" />,
      features: [
        'Local keyword targeting',
        'Google My Business optimization',
        'Call tracking setup',
        'Location extensions',
        'Local competitor analysis',
        'Foot traffic reporting'
      ],
      ctaText: 'Go Local',
      ctaLink: '/pages/local-business-google-ads',
      metrics: [
        { label: 'Call Increase', value: '180%', trend: 'up' as const },
        { label: 'Foot Traffic', value: '+65%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'YouTube Advertising', link: '/pages/youtube-advertising-management' },
        { title: 'Google Ads Audit', link: '/pages/google-ads-audit-strategy' }
      ],
      industry: ['Restaurants', 'Healthcare', 'Beauty', 'Automotive']
    },
    {
      title: 'YouTube Advertising Management',
      description: 'Video advertising campaigns for brand awareness, engagement, and conversions',
      price: '₹35K-₹85K/month',
      priceNote: 'Based on video production',
      tier: 'Tier 2' as const,
      icon: <Zap className="w-8 h-8 text-red-600" />,
      features: [
        'Video ad creation',
        'YouTube targeting',
        'Brand awareness campaigns',
        'Conversion tracking',
        'Video analytics',
        'Creative optimization'
      ],
      ctaText: 'Start Video Ads',
      ctaLink: '/pages/youtube-advertising-management',
      isNew: true,
      metrics: [
        { label: 'View Rate', value: '15.2%', trend: 'up' as const },
        { label: 'Engagement', value: '8.7%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'Performance Max', link: '/pages/performance-max-campaigns' },
        { title: 'E-commerce Optimization', link: '/pages/ecommerce-google-ads-optimization' }
      ],
      industry: ['Education', 'Entertainment', 'Technology', 'Fashion']
    },
    {
      title: 'Performance Max Campaigns',
      description: 'AI-powered campaigns across all Google networks for maximum reach and conversions',
      price: '₹40K-₹90K/month',
      priceNote: 'Based on campaign complexity',
      tier: 'Tier 2' as const,
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      features: [
        'AI-powered optimization',
        'Multi-network reach',
        'Asset creation',
        'Audience insights',
        'Performance tracking',
        'Automated bidding'
      ],
      ctaText: 'Launch Performance Max',
      ctaLink: '/pages/performance-max-campaigns',
      metrics: [
        { label: 'Reach Increase', value: '250%', trend: 'up' as const },
        { label: 'Cost Efficiency', value: '35%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'E-commerce Optimization', link: '/pages/ecommerce-google-ads-optimization' },
        { title: 'YouTube Advertising', link: '/pages/youtube-advertising-management' }
      ],
      industry: ['E-commerce', 'Retail', 'Fashion', 'Electronics']
    },
    // Tier 3 Services
    {
      title: 'Google Ads Audit & Strategy',
      description: 'Comprehensive audit and strategic recommendations for campaign optimization',
      price: '₹25K-₹75K',
      priceNote: 'One-time project',
      tier: 'Tier 3' as const,
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      features: [
        'Complete account audit',
        'Competitor analysis',
        'Strategic recommendations',
        'Implementation roadmap',
        'ROI projections',
        'Follow-up consultation'
      ],
      ctaText: 'Get Free Audit',
      ctaLink: '/pages/google-ads-audit-strategy',
      metrics: [
        { label: 'Issues Found', value: '12-25', trend: 'stable' as const },
        { label: 'Potential ROI', value: '300%', trend: 'up' as const }
      ],
      relatedServices: [
        { title: 'Enterprise Management', link: '/pages/enterprise-google-ads-management' },
        { title: 'B2B Lead Generation', link: '/pages/b2b-lead-generation-ads' }
      ],
      industry: ['All Industries']
    },
    {
      title: 'Landing Page Optimization',
      description: 'Convert more visitors with optimized landing pages designed for your campaigns',
      price: '₹30K-₹1L',
      priceNote: 'One-time project',
      tier: 'Tier 3' as const,
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      features: [
        'Conversion-focused design',
        'A/B testing setup',
        'Mobile optimization',
        'Speed optimization',
        'Analytics integration',
        'Performance monitoring'
      ],
      ctaText: 'Optimize Landing Page',
      ctaLink: '/pages/landing-page-optimization',
      metrics: [
        { label: 'Conversion Rate', value: '15.8%', trend: 'up' as const },
        { label: 'Page Speed', value: '2.1s', trend: 'down' as const }
      ],
      relatedServices: [
        { title: 'E-commerce Optimization', link: '/pages/ecommerce-google-ads-optimization' },
        { title: 'B2B Lead Generation', link: '/pages/b2b-lead-generation-ads' }
      ],
      industry: ['All Industries']
    }
  ];

  const filteredServices = ecosystemServices.filter(service => {
    const industryMatch = selectedIndustry === 'All Industries' || 
      service.industry.includes(selectedIndustry);
    const tierMatch = selectedTier === 'All Tiers' || 
      service.tier === selectedTier;
    return industryMatch && tierMatch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section - Ecosystem Mastery */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Ecosystem Overview - Complete Service Mastery */}
      <SectionErrorBoundary name="EcosystemOverview">
        <EcosystemOverview />
      </SectionErrorBoundary>

      {/* Service Tiers - Clear Hierarchy */}
      <SectionErrorBoundary name="ServiceTiers">
        <ServiceTiers 
          services={ecosystemServices}
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
        />
      </SectionErrorBoundary>

      {/* Industry Focus - Industry-Specific Recommendations */}
      <SectionErrorBoundary name="IndustryFocus">
        <IndustryFocus 
          selectedIndustry={selectedIndustry}
          onIndustryChange={setSelectedIndustry}
        />
      </SectionErrorBoundary>

      {/* ROI Calculator - Interactive Engagement Tool */}
      <SectionErrorBoundary name="ROICalculator">
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator industry={selectedIndustry} />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Why Choose Us - Key Differentiators */}
      <SectionErrorBoundary name="WhyChooseUs">
        <WhyChooseUs />
      </SectionErrorBoundary>

      {/* Case Studies Showcase - Real Results */}
      <SectionErrorBoundary name="CaseStudiesShowcase">
        <CaseStudiesShowcase />
      </SectionErrorBoundary>

      {/* Expert Team - Credibility Building */}
      <SectionErrorBoundary name="ExpertTeam">
        <ExpertTeam />
      </SectionErrorBoundary>

      {/* Pricing Overview - Transparent Ecosystem Pricing */}
      <SectionErrorBoundary name="PricingOverview">
        <PricingOverview />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Service Navigation - Cross-Service Discovery */}
      <SectionErrorBoundary name="ServiceNavigation">
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceNavigation showAllServices={true} />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA - Lead Form with Ecosystem Context */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Scroll To Top - UX Enhancement */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always Accessible */}
      <MobileFloatingCTA />
    </main>
  );
}