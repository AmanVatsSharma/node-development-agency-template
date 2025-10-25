'use client';

/**
 * @fileoverview Expert Team - Team expertise and credibility showcase
 * @description Component highlighting team members, credentials, and expertise
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Team member profiles with expertise
 * - Credentials and certifications display
 * - Interactive team member cards
 * - Company achievements and milestones
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Target,
  TrendingUp,
  Users,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Headphones,
  ArrowRight,
  Play,
  Download,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  expertise: string[];
  experience: string;
  certifications: string[];
  achievements: string[];
  bio: string;
  image?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  isLead?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    position: 'Founder & CEO',
    expertise: ['Google Ads Strategy', 'Enterprise Management', 'ROI Optimization'],
    experience: '12+ Years',
    certifications: ['Google Ads Certified', 'Google Analytics Certified', 'Shopping Ads Certified'],
    achievements: ['500+ Successful Campaigns', '₹50Cr+ Revenue Generated', '98% Client Retention'],
    bio: 'Rajesh founded Rajapragya Bharat with a vision to democratize high-quality digital marketing. With over 12 years of experience, he has helped 500+ businesses achieve their growth goals through strategic Google Ads management.',
    isLead: true,
    social: {
      linkedin: 'https://linkedin.com/in/rajesh-kumar',
      email: 'rajesh@rajapragyabharat.com'
    }
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    position: 'Head of Strategy',
    expertise: ['E-commerce Optimization', 'Performance Max', 'Conversion Optimization'],
    experience: '8+ Years',
    certifications: ['Google Ads Certified', 'Display Ads Certified', 'Video Ads Certified'],
    achievements: ['320% Average Sales Increase', '150+ E-commerce Clients', '12.4% Avg Conversion Rate'],
    bio: 'Priya specializes in e-commerce Google Ads optimization and has helped fashion, electronics, and retail brands achieve remarkable growth. Her data-driven approach ensures every campaign delivers measurable results.',
    social: {
      linkedin: 'https://linkedin.com/in/priya-sharma',
      email: 'priya@rajapragyabharat.com'
    }
  },
  {
    id: 'amit-patel',
    name: 'Amit Patel',
    position: 'Lead B2B Specialist',
    expertise: ['B2B Lead Generation', 'Account-Based Marketing', 'LinkedIn Ads'],
    experience: '10+ Years',
    certifications: ['Google Ads Certified', 'LinkedIn Marketing Certified', 'HubSpot Certified'],
    achievements: ['500+ Qualified B2B Leads', '9.5× Average ROAS', '40% CPL Reduction'],
    bio: 'Amit is our B2B marketing expert who has helped SaaS, consulting, and technology companies generate high-quality leads. His account-based marketing strategies have transformed lead generation for our clients.',
    social: {
      linkedin: 'https://linkedin.com/in/amit-patel',
      email: 'amit@rajapragyabharat.com'
    }
  },
  {
    id: 'neha-gupta',
    name: 'Dr. Neha Gupta',
    position: 'Healthcare Marketing Director',
    expertise: ['Healthcare Marketing', 'Local Business Ads', 'Compliance Marketing'],
    experience: '6+ Years',
    certifications: ['Google Ads Certified', 'Healthcare Marketing Certified', 'HIPAA Compliant'],
    achievements: ['300% Appointment Increase', '60% Cost Reduction', '4.8/5 Patient Satisfaction'],
    bio: 'Dr. Neha brings medical expertise to digital marketing, ensuring our healthcare clients maintain compliance while driving patient engagement. She understands the unique challenges of healthcare marketing.',
    social: {
      linkedin: 'https://linkedin.com/in/neha-gupta',
      email: 'neha@rajapragyabharat.com'
    }
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    position: 'Creative Director',
    expertise: ['Video Marketing', 'YouTube Advertising', 'Creative Strategy'],
    experience: '7+ Years',
    certifications: ['YouTube Ads Certified', 'Video Marketing Certified', 'Creative Strategy Certified'],
    achievements: ['2.5M+ Video Views', '8.7% Engagement Rate', '150% Course Enrollments'],
    bio: 'Vikram leads our creative team and specializes in video marketing campaigns. His innovative approach to YouTube advertising has helped education and entertainment brands achieve remarkable engagement.',
    social: {
      linkedin: 'https://linkedin.com/in/vikram-singh',
      email: 'vikram@rajapragyabharat.com'
    }
  },
  {
    id: 'suresh-kumar',
    name: 'Suresh Kumar',
    position: 'Technical Lead',
    expertise: ['Campaign Automation', 'AI Implementation', 'Technical Optimization'],
    experience: '9+ Years',
    certifications: ['Google Ads Certified', 'Machine Learning Certified', 'Automation Specialist'],
    achievements: ['95% Campaign Automation', '35% Efficiency Improvement', 'AI-Powered Optimization'],
    bio: 'Suresh leads our technical team and implements advanced automation and AI solutions. His technical expertise ensures our campaigns run at peak efficiency with minimal manual intervention.',
    social: {
      linkedin: 'https://linkedin.com/in/suresh-kumar',
      email: 'suresh@rajapragyabharat.com'
    }
  }
];

const companyStats = [
  { metric: '10+', label: 'Years Experience', icon: Clock },
  { metric: '500+', label: 'Campaigns Managed', icon: Target },
  { metric: '₹50Cr+', label: 'Revenue Generated', icon: TrendingUp },
  { metric: '98%', label: 'Client Retention', icon: Users },
  { metric: '15+', label: 'Industry Expertise', icon: Globe },
  { metric: '24/7', label: 'Support Available', icon: Headphones }
];

const certifications = [
  'Google Partner',
  'Google Ads Certified',
  'Google Analytics Certified',
  'Shopping Ads Certified',
  'Display Ads Certified',
  'Video Ads Certified',
  'YouTube Ads Certified',
  'LinkedIn Marketing Certified',
  'HubSpot Certified',
  'Healthcare Marketing Certified'
];

export function ExpertTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    console.log(`[ExpertTeam] Member selected: ${member.name}`);
  };

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`[ExpertTeam] Social clicked: ${platform} - ${url}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'team_social_click', {
        platform: platform,
        member_name: selectedMember?.name,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Google Ads Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of certified Google Ads experts brings decades of combined experience 
            and a track record of delivering exceptional results for businesses across industries.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                member.isLead ? 'ring-2 ring-blue-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleMemberClick(member)}
            >
              {/* Member Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    {member.isLead && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        Lead
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 font-semibold">{member.position}</p>
                  <p className="text-gray-500 text-sm">{member.experience}</p>
                </div>

                {/* Expertise */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Achievement */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievement</h4>
                  <p className="text-sm text-gray-600">{member.achievements[0]}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      onClick={() => handleSocialClick('linkedin', member.social.linkedin!)}
                      className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </Link>
                  )}
                  {member.social.email && (
                    <Link
                      href={`mailto:${member.social.email}`}
                      onClick={() => handleSocialClick('email', member.social.email!)}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Certifications & Credentials
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900">{cert}</div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Work with India's Top Google Ads Experts
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our certified team is ready to help you achieve exceptional results. 
            Let's discuss how we can grow your business together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Calculate My ROI
            </Link>
            
            <Link
              href="tel:+919876543210"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              <Play className="w-5 h-5" />
              Meet Our Team
            </Link>
            
            <Link
              href="#final-cta"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-blue-600 font-semibold">{selectedMember.position}</p>
                  <p className="text-gray-500">{selectedMember.experience}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 mb-6">{selectedMember.bio}</p>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                <div className="space-y-2">
                  {selectedMember.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {selectedMember.social.linkedin && (
                  <Link
                    href={selectedMember.social.linkedin}
                    onClick={() => handleSocialClick('linkedin', selectedMember.social.linkedin!)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Link>
                )}
                {selectedMember.social.email && (
                  <Link
                    href={`mailto:${selectedMember.social.email}`}
                    onClick={() => handleSocialClick('email', selectedMember.social.email!)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default ExpertTeam;