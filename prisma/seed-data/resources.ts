/**
 * @fileoverview Resources Data for Production
 * @description 15+ downloadable resources across all categories
 * 
 * TYPES INCLUDED:
 * - E-books (5)
 * - Whitepapers (4)
 * - Templates (3)
 * - Videos (2)
 * - Webinars (1)
 */

export const resourcesData = [
  // ===== E-BOOKS =====
  {
    title: 'The Complete Guide to AI Chatbots for Business',
    description: 'Learn how to implement AI chatbots that increase conversions by 300%. Includes ROI calculator, implementation checklist, and 20+ conversation templates. Perfect for business owners and marketing managers.',
    type: 'ebook',
    downloadUrl: '/downloads/ai-chatbot-guide.pdf',
    imageUrl: '/images/resources/ai-chatbot-guide.jpg',
    publishedAt: '2024-10-15',
    featured: true,
  },
  
  {
    title: 'Shopify Headless Commerce: Technical Implementation Guide',
    description: '50-page technical guide covering Next.js + Shopify integration, performance optimization, SEO setup, and deployment. Includes code examples and architecture diagrams.',
    type: 'ebook',
    downloadUrl: '/downloads/shopify-headless-guide.pdf',
    imageUrl: '/images/resources/shopify-headless-ebook.jpg',
    publishedAt: '2024-10-20',
    featured: true,
  },

  {
    title: 'SEO Checklist for E-commerce Websites (2025 Edition)',
    description: '100-point checklist covering technical SEO, on-page optimization, content strategy, and link building specifically for online stores. Used by 500+ Shopify merchants.',
    type: 'ebook',
    downloadUrl: '/downloads/ecommerce-seo-checklist.pdf',
    imageUrl: '/images/resources/seo-checklist.jpg',
    publishedAt: '2024-10-10',
    featured: false,
  },

  {
    title: 'React Performance Optimization: Advanced Techniques',
    description: 'Master React performance with this comprehensive guide covering code splitting, lazy loading, memoization, virtual scrolling, and bundle optimization. Includes real-world examples and benchmarks.',
    type: 'ebook',
    downloadUrl: '/downloads/react-performance.pdf',
    imageUrl: '/images/resources/react-performance.jpg',
    publishedAt: '2024-09-25',
    featured: false,
  },

  {
    title: 'WhatsApp Business API: Setup & Automation Guide',
    description: 'Step-by-step guide to getting WhatsApp Business API approval, creating message templates, building chatbots, and automating customer communication. Includes compliance checklist for India.',
    type: 'ebook',
    downloadUrl: '/downloads/whatsapp-api-guide.pdf',
    imageUrl: '/images/resources/whatsapp-guide.jpg',
    publishedAt: '2024-09-15',
    featured: false,
  },

  // ===== WHITEPAPERS =====
  {
    title: 'AI vs Human: Customer Service Cost Analysis 2025',
    description: 'Data-driven comparison of AI chatbots vs human agents. Includes cost breakdown, performance metrics, customer satisfaction scores, and ROI calculations from 100+ businesses.',
    type: 'whitepaper',
    downloadUrl: '/downloads/ai-vs-human-whitepaper.pdf',
    imageUrl: '/images/resources/ai-vs-human.jpg',
    publishedAt: '2024-11-01',
    featured: true,
  },

  {
    title: 'The State of Headless Commerce in India',
    description: 'Industry report analyzing 200+ headless commerce implementations in India. Includes performance benchmarks, cost analysis, technology trends, and case studies from leading D2C brands.',
    type: 'whitepaper',
    downloadUrl: '/downloads/headless-commerce-india.pdf',
    imageUrl: '/images/resources/headless-report.jpg',
    publishedAt: '2024-10-25',
    featured: false,
  },

  {
    title: 'Next.js vs Traditional React: Performance Benchmark',
    description: 'Technical whitepaper comparing Next.js App Router, Pages Router, and Create React App. Includes Lighthouse scores, build times, bundle sizes, and SEO performance across 50 applications.',
    type: 'whitepaper',
    downloadUrl: '/downloads/nextjs-vs-react.pdf',
    imageUrl: '/images/resources/nextjs-benchmark.jpg',
    publishedAt: '2024-10-05',
    featured: false,
  },

  {
    title: 'Google Ads Benchmarks for Indian E-commerce (2024)',
    description: 'Industry benchmarks for Google Ads performance in Indian e-commerce. Covers CPC, CTR, ROAS, and conversion rates across 15 product categories and 500+ campaigns.',
    type: 'whitepaper',
    downloadUrl: '/downloads/google-ads-benchmarks.pdf',
    imageUrl: '/images/resources/google-ads-report.jpg',
    publishedAt: '2024-09-20',
    featured: false,
  },

  // ===== TEMPLATES =====
  {
    title: 'E-commerce Project Brief Template',
    description: 'Comprehensive project brief template for e-commerce development. Includes sections for requirements, technical specifications, timeline, budget, and deliverables. Editable Notion/Google Docs format.',
    type: 'template',
    downloadUrl: '/downloads/ecommerce-project-brief-template.pdf',
    imageUrl: '/images/resources/project-brief-template.jpg',
    publishedAt: '2024-10-30',
    featured: false,
  },

  {
    title: 'Website Development Contract Template (India)',
    description: 'Legal contract template for web development projects in India. Covers scope, payment terms, IP rights, timelines, and termination clauses. Reviewed by legal experts.',
    type: 'template',
    downloadUrl: '/downloads/web-dev-contract-template.pdf',
    imageUrl: '/images/resources/contract-template.jpg',
    publishedAt: '2024-10-12',
    featured: false,
  },

  {
    title: 'AI Chatbot Conversation Flow Templates',
    description: '20+ conversation flow templates for AI chatbots covering e-commerce, SaaS, real estate, healthcare, and education. Includes decision trees and example dialogues.',
    type: 'template',
    downloadUrl: '/downloads/chatbot-flow-templates.pdf',
    imageUrl: '/images/resources/chatbot-templates.jpg',
    publishedAt: '2024-09-28',
    featured: false,
  },

  // ===== VIDEOS =====
  {
    title: 'Building a Shopify Headless Store with Next.js (Crash Course)',
    description: '90-minute video course showing how to build a complete Shopify headless store from scratch using Next.js 14 and Shopify Storefront API. Includes source code on GitHub.',
    type: 'video',
    downloadUrl: 'https://youtube.com/watch?v=example1',
    imageUrl: '/images/resources/nextjs-shopify-video.jpg',
    publishedAt: '2024-10-18',
    featured: true,
  },

  {
    title: 'Implementing GPT-4 Chatbot in React (Step-by-Step)',
    description: '45-minute tutorial on integrating OpenAI GPT-4 into a React application. Covers authentication, streaming responses, error handling, and cost optimization.',
    type: 'video',
    downloadUrl: 'https://youtube.com/watch?v=example2',
    imageUrl: '/images/resources/gpt4-react-video.jpg',
    publishedAt: '2024-10-08',
    featured: false,
  },

  // ===== WEBINAR =====
  {
    title: 'Scaling Your E-commerce Store to 1 Crore Monthly Revenue',
    description: 'Recorded webinar with 3 successful D2C founders sharing strategies for scaling from ₹10L to ₹1Cr monthly revenue. Covers marketing, operations, technology, and team building. 2 hours with Q&A.',
    type: 'webinar',
    downloadUrl: 'https://youtube.com/watch?v=example3',
    imageUrl: '/images/resources/scaling-webinar.jpg',
    publishedAt: '2024-11-05',
    featured: false,
  },
];

console.log('[Seed Data] Resources data loaded:', resourcesData.length, 'resources');
