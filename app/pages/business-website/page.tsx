// import React from "react";
// import { BusinessHero } from "@/app/components/sections/business-website/business-hero";
// import { BusinessFeatures } from "@/app/components/sections/business-website/business-features";
// import { BusinessPortfolio } from "@/app/components/sections/business-website/business-portfolio";
// import { BusinessTestimonials } from "@/app/components/sections/business-website/business-testimonials";
// import { BusinessPricing } from "@/app/components/sections/business-website/business-pricing";
// import { BusinessFAQ } from "@/app/components/sections/business-website/business-faq";
// import { BusinessContactCTA } from "@/app/components/sections/business-website/business-contact-cta";
// import { BusinessTrustSignals } from "@/app/components/sections/business-website/business-trust-signals";
// import { BusinessProcess } from "@/app/components/sections/business-website/business-process";
// import { BusinessCTA } from "@/app/components/sections/business-website/business-cta";

// export const metadata = {
//   title: "Professional Business Websites | One-Time Payment, No Subscriptions",
//   description: "Get a professional, conversion-focused business website with a single one-time payment. No monthly fees. Mobile-responsive designs, SEO optimization, and ongoing support included. Request a free quote today!",
// };

// export default function BusinessWebsitePage() {
//   return (
//     <>
//       <BusinessHero />
//       <BusinessTrustSignals />
//       <BusinessFeatures />
//       <BusinessProcess />
//       <BusinessCTA />
//       <BusinessPortfolio />
//       <BusinessTestimonials />
//       <BusinessPricing />
//       <BusinessFAQ />
//       <BusinessContactCTA />
//     </>
//   );
// } 










'use client';

import React, { useState, useRef, useEffect, forwardRef, Ref } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Code,
    Palette,
    DollarSign,
    Briefcase,
    Sparkles,
    Users,
    Clock,
    BarChart2
} from 'lucide-react';

// --- TYPE DEFINITIONS ---

type ButtonBaseProps = {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
};

type AnchorButtonProps = ButtonBaseProps & { href: string } & Omit<HTMLMotionProps<'a'>, 'ref'>;
type NativeButtonProps = ButtonBaseProps & { href?: undefined } & Omit<HTMLMotionProps<'button'>, 'ref'>;
type ButtonProps = AnchorButtonProps | NativeButtonProps;

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Project = {
  id: number;
  title: string;
  industry: string;
  imageUrl: string;
  description: string;
  results: { icon: React.ReactNode; text: string }[];
  link: string;
  featured: boolean;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
};


// --- UTILITY ---
const cn = (...classes: (string | undefined | null | false)[]): string => classes.filter(Boolean).join(' ');

// --- UI COMPONENTS ---

// Button Component (Fixed for hydration errors and typed)
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant, size, href, ...props }, ref) => {
    const Comp: any = href ? motion.a : motion.button;
    
    const variants = {
        default: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
        outline: "border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
    };
    const sizes = {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-full px-8 text-base",
    };

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant || 'default'],
                sizes[size || 'default'],
                className
            )}
            ref={ref as Ref<any>}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={href}
            {...props}
        />
    );
});
Button.displayName = "Button";


// 3D Globe Component (Client-side only, responsive + resilient)
const GlobeComponent: React.FC = () => {
    const globeRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        console.info('[Business-Website] GlobeComponent mounted');
        let phi = 0;
        let frame: number | null = null;
        const c = globeRef.current;
        if (!c) {
            console.error('[Business-Website] Globe canvas ref missing');
            return;
        }
        const ctx = c.getContext('2d');
        if (!ctx) {
            console.error('[Business-Website] Globe 2D context unavailable');
            return;
        }

        // Track canvas dimensions and device pixel ratio
        let width = 0;
        let height = 0;
        let halfHeight = 0;
        const dotColor = '#6366f1';

        const resizeCanvas = () => {
            const rect = c.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            halfHeight = height / 2;
            const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
            c.width = Math.max(1, Math.floor(width * dpr));
            c.height = Math.max(1, Math.floor(height * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const totalDots = prefersReducedMotion ? 400 : 1000;

        const draw = () => {
            try {
                phi += prefersReducedMotion ? 0.002 : 0.005;
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.fillStyle = dotColor;
                const centerX = width / 2;
                for (let i = 0; i < totalDots; i++) {
                    const r = Math.cos(i * 1.1) * Math.min(halfHeight, width / 2) * 0.9;
                    const s = Math.sin(i) * Math.cos(i * 0.9);
                    const t = Math.sin(i * 0.9) * Math.cos(i);
                    const px = s * r;
                    const py = t * r;
                    const pz = Math.cos(i * 1.2) * r;
                    const rotX = px * Math.cos(phi) - pz * Math.sin(phi);
                    const rotZ = px * Math.sin(phi) + pz * Math.cos(phi);
                    const m = 200 / (200 + rotZ);
                    ctx.beginPath();
                    ctx.arc(centerX + rotX * m, halfHeight + py * m, m * 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                frame = requestAnimationFrame(draw);
            } catch (err) {
                console.error('[Business-Website] Globe draw error', err);
                if (frame) cancelAnimationFrame(frame);
            }
        };

        const handleResize = () => {
            resizeCanvas();
        };

        resizeCanvas();
        window.addEventListener('resize', handleResize);
        frame = requestAnimationFrame(draw);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener('resize', handleResize);
            console.info('[Business-Website] GlobeComponent unmounted');
        };
    }, []);

    return (
        <canvas
            ref={globeRef}
            className="w-[min(85vw,640px)] max-w-[640px] aspect-square opacity-20 dark:opacity-30"
            aria-hidden="true"
        />
    );
};

// Dynamically import GlobeComponent to prevent SSR issues
const DynamicGlobe = dynamic(() => Promise.resolve(GlobeComponent), {
    ssr: false,
});


// --- ERROR BOUNDARY FOR SECTIONS ---
class SectionErrorBoundary extends React.Component<{ name: string; children: React.ReactNode }, { hasError: boolean }>
{
    constructor(props: { name: string; children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: unknown, info: unknown) {
        console.error(`[Business-Website] Error in section: ${this.props.name}` , { error, info });
    }

    render() {
        if (this.state.hasError) {
            return (
                <section className="py-12" role="alert" aria-live="polite">
                    <div className="container mx-auto px-4">
                        <div className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/10 p-6 text-red-700 dark:text-red-300">
                            This section failed to load. Please refresh the page.
                        </div>
                    </div>
                </section>
            );
        }
        return this.props.children as React.ReactElement;
    }
}

// --- SECTIONS ---

// 1. HERO SECTION
const BusinessHero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.3 });
    useEffect(() => {
        console.log('[Business-Website] BusinessHero mounted');
        return () => console.log('[Business-Website] BusinessHero unmounted');
    }, []);
    
    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-0 overflow-hidden" id="home" role="region" aria-labelledby="hero-heading">
            <div className="absolute inset-0 -z-20 bg-gray-50 dark:bg-gray-950" />
            <div className="absolute inset-0 -z-10 bg-grid-gray-200/[0.6] dark:bg-grid-gray-800/[0.4]" />
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <DynamicGlobe />
            </div>
            <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_60%)]" />

            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={{ show: { transition: { staggerChildren: 0.15 } } }}
                className="container mx-auto px-4 text-center z-10"
            >
                <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100/80 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-full mb-6 shadow-sm backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                    </span>
                    <span className="text-sm font-medium">We Build Digital Masterpieces</span>
                </motion.div>
                
                <motion.h1 id="hero-heading" variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter text-gray-900 dark:text-white">
                    Your Vision,
                    <br />
                    <span className="relative inline-block mt-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Engineered.</span>
                    </span>
                </motion.h1>
                
                <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    We are a creative engineering agency crafting bespoke, high-performance websites that captivate users, drive growth, and elevate your brand—globally.
                </motion.p>
                
                <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="#pricing" size="lg" aria-label="View pricing packages">
                        View Our Packages <ArrowRight size={18} className="ml-2" />
                    </Button>
                    <Button href="#contact" size="lg" variant="outline" aria-label="Book a free consultation">
                        Book a Free Consultation
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

// 2. SERVICES SECTION
const ServicesSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });
    useEffect(() => {
        console.log('[Business-Website] ServicesSection mounted');
        return () => console.log('[Business-Website] ServicesSection unmounted');
    }, []);
    const services: Service[] = [
        { icon: <Briefcase className="h-8 w-8 text-indigo-500" />, title: "Corporate & Business Websites", description: "Establish a powerful online presence with a professional, feature-rich website that builds trust and authority." },
        { icon: <DollarSign className="h-8 w-8 text-green-500" />, title: "High-Converting Landing Pages", description: "Launch targeted campaigns with landing pages designed for a single purpose: to convert visitors into customers." },
        { icon: <Code className="h-8 w-8 text-purple-500" />, title: "Custom Web Applications", description: "Bring your unique ideas to life with complex, scalable web applications built from the ground up." },
        { icon: <Palette className="h-8 w-8 text-pink-500" />, title: "UI/UX & Brand Identity", description: "Create a memorable brand and an intuitive user experience that sets you apart from the competition." },
    ];

    return (
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900" id="services" role="region" aria-labelledby="services-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" ref={sectionRef}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">Our Expertise</span>
                    </motion.div>
                    <motion.h2 id="services-heading" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Solutions to Elevate Your Brand
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From simple landing pages to complex web applications, we offer a complete suite of services to meet your digital needs.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {(services || []).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="h-full p-8 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 relative overflow-hidden group bg-white dark:bg-gray-800/50 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl">
                                <div className="relative z-10 flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 dark:border-gray-700">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 3. PORTFOLIO SECTION
const BusinessPortfolio: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });
    useEffect(() => {
        console.log('[Business-Website] BusinessPortfolio mounted');
        return () => console.log('[Business-Website] BusinessPortfolio unmounted');
    }, []);
    const portfolioProjects: Project[] = [
        { id: 1, title: "QuantumLeap AI", industry: "Tech Startup", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", description: "A cutting-edge website for an AI startup, featuring interactive demos and a secure investor portal.", results: [{ icon: <BarChart2 className="h-4 w-4" />, text: "300% increase in demo requests" }, { icon: <Clock className="h-4 w-4" />, text: "Delivered in 20 days" }], link: "#", featured: true },
        { id: 2, title: "The Artisan Loaf", industry: "E-Commerce", imageUrl: "https://images.unsplash.com/photo-1509440159596-024908877212?q=80&w=1974&auto=format&fit=crop", description: "A beautiful e-commerce store for a local bakery, driving a 150% increase in online sales.", results: [{ icon: <BarChart2 className="h-4 w-4" />, text: "150% YoY revenue growth" }], link: "#", featured: false },
        { id: 3, title: "Innovate Legal", industry: "Legal Services", imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop", description: "A sophisticated and professional site that tripled qualified lead generation for a law firm.", results: [{ icon: <Users className="h-4 w-4" />, text: "3x qualified client leads" }], link: "#", featured: false },
    ];

    const ProjectCard = ({ project }: { project: Project }) => {
        const cardRef = useRef<HTMLDivElement | null>(null);
        const cardInView = useInView(cardRef, { once: true, amount: 0.2 });
        const [imageError, setImageError] = useState(false);
        const fallbackImage = 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60';
        const imgSrc = imageError ? fallbackImage : project.imageUrl;

        return (
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className={cn("group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 shadow-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]", project.featured ? "md:col-span-2" : "md:col-span-1")}
            >
                <div className="relative h-60 md:h-80 w-full overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        onError={() => {
                            console.error('[Business-Website] Portfolio image failed', { id: project.id, src: project.imageUrl });
                            setImageError(true);
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full">{project.industry}</span>
                        <h3 className="text-2xl font-bold mt-2 text-white">{project.title}</h3>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="mb-5 space-y-2">
                        {project.results.map((result, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="text-green-500">{result.icon}</span>
                                <span>{result.text}</span>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" size="sm" href={project.link} aria-label={`View case study: ${project.title}`}>
                        View Case Study <ArrowRight size={14} className="ml-1" />
                    </Button>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950" id="portfolio" role="region" aria-labelledby="portfolio-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" ref={sectionRef}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">Our Work</span>
                    </motion.div>
                    <motion.h2 id="portfolio-heading" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Proven Results, Stunning Design
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We don't just build websites; we build engines for business growth. Explore our success stories.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {(portfolioProjects || []).map((project) => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </section>
    );
};

// 4. PRICING SECTION
const PricingSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
    useEffect(() => {
        console.log('[Business-Website] PricingSection mounted');
        return () => console.log('[Business-Website] PricingSection unmounted');
    }, []);
    
    const plans: { [key: string]: Plan[] } = {
        INR: [
            { name: "LaunchPad", price: "₹49,999", description: "Perfect for startups and individuals.", features: ["5-Page Website", "Custom Design", "Mobile Responsive", "Basic SEO", "1 Month Support"] },
            { name: "Business Growth", price: "₹99,999", popular: true, description: "The complete package for growing businesses.", features: ["Up to 15 Pages", "Advanced SEO", "CMS Integration", "Blog Setup", "3 Months Support"] },
            { name: "Enterprise", price: "Custom", description: "Tailored solutions for large-scale needs.", features: ["Unlimited Pages", "E-commerce / App", "API Integrations", "Dedicated Support", "And much more..."] },
        ],
        USD: [
            { name: "LaunchPad", price: "$699", description: "Perfect for startups and individuals.", features: ["5-Page Website", "Custom Design", "Mobile Responsive", "Basic SEO", "1 Month Support"] },
            { name: "Business Growth", price: "$1,399", popular: true, description: "The complete package for growing businesses.", features: ["Up to 15 Pages", "Advanced SEO", "CMS Integration", "Blog Setup", "3 Months Support"] },
            { name: "Enterprise", price: "Custom", description: "Tailored solutions for large-scale needs.", features: ["Unlimited Pages", "E-commerce / App", "API Integrations", "Dedicated Support", "And much more..."] },
        ]
    };

    return (
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900" id="pricing" role="region" aria-labelledby="pricing-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" ref={sectionRef}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">One-Time Investment</span>
                    </motion.div>
                    <motion.h2 id="pricing-heading" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Transparent Pricing for Every Goal
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        No subscriptions. No hidden fees. Just a single payment for a website you own forever.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 flex justify-center">
                        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full flex items-center gap-2" role="tablist" aria-label="Currency selector">
                           <button type="button" onClick={() => { console.log('[Business-Website] Pricing currency -> INR'); setCurrency('INR'); }} className={cn("px-4 py-1.5 rounded-full text-sm font-semibold transition-colors", currency === 'INR' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500 dark:text-gray-400')} role="tab" aria-selected={currency === 'INR'} aria-controls="pricing-plans">INR (₹)</button>
                           <button type="button" onClick={() => { console.log('[Business-Website] Pricing currency -> USD'); setCurrency('USD'); }} className={cn("px-4 py-1.5 rounded-full text-sm font-semibold transition-colors", currency === 'USD' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500 dark:text-gray-400')} role="tab" aria-selected={currency === 'USD'} aria-controls="pricing-plans">USD ($)</button>
                        </div>
                    </motion.div>
                </div>
                <div id="pricing-plans" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans[currency].map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col",
                                plan.popular 
                                ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105" 
                                : "bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                            )}
                        >
                            {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">MOST POPULAR</div>}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">{plan.description}</p>
                            <div className="my-8">
                                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                                {plan.price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400"> /one-time</span>}
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button href="#contact" variant={plan.popular ? 'default' : 'outline'} className="w-full">
                                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 5. FAQ SECTION
const BusinessFAQ: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [openItem, setOpenItem] = useState<number | null>(1);
    useEffect(() => {
        console.log('[Business-Website] BusinessFAQ mounted');
        return () => console.log('[Business-Website] BusinessFAQ unmounted');
    }, []);
    const faqs: FAQ[] = [
        { id: 1, question: "What does 'one-time payment' really mean?", answer: "It means you pay a single, agreed-upon price for your website. Once it's built and launched, you own it completely. There are no recurring monthly fees from us to keep your site online. The only recurring costs are for your domain name and hosting, which you control." },
        { id: 2, question: "How long is the 14-day delivery promise?", answer: "Our 14-day delivery starts the moment we have all the necessary materials from you (e.g., text, images, brand guidelines). This ensures a swift and efficient process. For more complex projects, we'll provide a clear timeline upfront." },
        { id: 3, question: "Can you help with content and branding?", answer: "Yes! We offer comprehensive branding packages, including logo design, color palettes, and typography. We also have expert copywriters who can craft compelling content that resonates with your audience and drives conversions." },
        { id: 4, question: "What kind of support is included after launch?", answer: "Each package comes with a set period of post-launch support to fix any bugs or issues. We also offer affordable annual maintenance plans for ongoing updates, security checks, and peace of mind." },
    ];

    const FAQItem = ({ faq, isOpen, toggleAccordion }: { faq: FAQ, isOpen: boolean, toggleAccordion: () => void }) => (
        <div className="border-b border-gray-200 dark:border-gray-700/50 py-6">
            <button type="button" onClick={toggleAccordion} className="flex items-center justify-between w-full text-left" aria-expanded={isOpen} aria-controls={`faq-panel-${faq.id}`}>
                <span className="font-medium text-lg text-gray-800 dark:text-gray-100">{faq.question}</span>
                <ChevronDown className={cn("h-5 w-5 text-indigo-500 transition-transform duration-300", isOpen && "transform rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div id={`faq-panel-${faq.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="pt-4 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950" id="faq" role="region" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" ref={sectionRef}>
                    <motion.h2 id="faq-heading" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Your Questions, Answered
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Everything you need to know before we start building your digital future together.
                    </motion.p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}>
                            <FAQItem faq={faq} isOpen={openItem === faq.id} toggleAccordion={() => { console.log('[Business-Website] FAQ toggle', { id: faq.id }); setOpenItem(openItem === faq.id ? null : faq.id); }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. CONTACT / CTA SECTION
const BusinessContactCTA: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.1 });
    useEffect(() => {
        console.log('[Business-Website] BusinessContactCTA mounted');
        return () => console.log('[Business-Website] BusinessContactCTA unmounted');
    }, []);
    
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-gray-900" id="contact" role="region" aria-labelledby="contact-heading">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-2xl shadow-indigo-500/20"
                >
                    <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        Let's Build Something Extraordinary.
                    </h2>
                    <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Have a project in mind? Or just curious about our process? We'd love to hear from you. Schedule a free, no-pressure call with our experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" aria-label="Schedule a free call">
                            Schedule a Free Call <ArrowRight size={18} className="ml-2" />
                        </Button>
                        <Button href="mailto:hello@devagency.com" size="lg" variant="ghost" className="text-white hover:bg-white/10" aria-label="Email us">
                            Email Us
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


// --- MAIN PAGE COMPONENT (Replaces App) ---

export default function HomePage() {
  return (
    <>
        <SectionErrorBoundary name="BusinessHero"><BusinessHero /></SectionErrorBoundary>
        <SectionErrorBoundary name="ServicesSection"><ServicesSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="BusinessPortfolio"><BusinessPortfolio /></SectionErrorBoundary>
        <SectionErrorBoundary name="PricingSection"><PricingSection /></SectionErrorBoundary>
        <SectionErrorBoundary name="BusinessFAQ"><BusinessFAQ /></SectionErrorBoundary>
        <SectionErrorBoundary name="BusinessContactCTA"><BusinessContactCTA /></SectionErrorBoundary>
    </>
  );
}
