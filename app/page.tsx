'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Search, Shield, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachStep from '@/components/ApproachStep';
import FaqItem from '@/components/FaqItem';
import ScoreGauge from '@/components/ScoreGauge';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const APPROACH_STEPS = [
  {
    icon: TrendingUp,
    step: 1,
    title: 'Strategic Planning\n& Goal Setting',
    description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.',
    index: 0,
  },
  {
    icon: Zap,
    step: 2,
    title: 'Tailored Campaign\nExecution',
    description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.',
    index: 1,
  },
  {
    icon: Search,
    step: 3,
    title: 'Constant Monitoring\n& Optimization',
    description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.',
    index: 2,
  },
];

const FAQS = [
  {
    q: 'What digital marketing services does Marketly offer?',
    a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).',
  },
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.',
  },
  {
    q: 'Is my business data safe with Marketly?',
    a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.',
  },
  {
    q: 'How do I get started with Marketly?',
    a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours.",
  },
  {
    q: 'What makes Marketly different from other agencies?',
    a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const portfolioItems = [1, 2, 3, 4, 5, 6, 7, 8];

const portfolioImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  ];

const clientLogos = [
  // Direct, reliable SVG links to real brand logos
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  // "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel_logo_%282020%2C_light_blue%29.svg",
  // "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
];  

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A3F22] text-white">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen bg-[#1A3F22] overflow-hidden">
        <div className="container mx-auto px-6 py-8 pt-20 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1
                  className="text-5xl md:text-6xl font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Confused about your digital
                  <span className="text-[#D99201]"> marketing?</span>
                </h1>
                <p className="text-lg text-[#f5f5f5]/80">
                  We've got you covered! From strategy to execution, our expert team guides you through every step of your marketing journey.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { end: 5000, label: 'Brands Served', suffix: '+' },
                  { end: 13, label: 'Years Experience', suffix: '+' },
                  { end: 99, label: 'Client Satisfaction', suffix: '%' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#234B2E] border-2 border-[#D99201] rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#D99201]">
                      {stat.end}{stat.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-[#f5f5f5]/70 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#D99201] text-[#1A3F22] rounded-full font-bold text-lg hover:bg-[#E5A828] transition-all duration-300 group"
                >
                  Start Your Strategy
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual - Rotating circular design */}
{/* Right Visual - Rotating circular design integrated from Hero.jsx */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full aspect-square max-w-lg mx-auto"
>
  {/* Rotating background circles */}
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
  >
    <div className="absolute inset-0 border-2 border-[#D99201]/30 rounded-full" />
    <div className="absolute inset-12 border border-[#D99201]/20 rounded-full" />
    
    {/* Decorative accents (Like the flags in Hero.jsx but styled for your UI) */}
    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D99201] rounded-full shadow-[0_0_15px_rgba(217,146,1,0.5)]" />
    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00d4ff] rounded-full shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
  </motion.div>

  {/* Floating Text Badges (Aligned Around Circle) */}
  <div className="absolute inset-0 flex items-center justify-center">
    {[
      { text: 'SEO Mastery', angle: 0 },
      { text: 'Social Growth', angle: 45 },
      { text: 'Paid Ads ROI', angle: 90 },
      { text: 'Brand Strategy', angle: 135 },
      { text: 'Analytics', angle: 180 },
      { text: 'Content Power', angle: 225 },
      { text: 'Conversion Focus', angle: 270 },
      { text: 'Market Leaders', angle: 315 },
    ].map((item, idx) => (
      <div
        key={idx}
        className="absolute z-20"
        style={{
          transform: `rotate(${item.angle}deg) translate(${
            isMobile ? "120px" : "160px"
          }) rotate(-${item.angle}deg)`,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-[#234B2E] border-2 border-[#D99201] rounded-xl px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-lg"
          style={{
            transform: `scale(${isMobile ? 0.8 : 1})`,
          }}
        >
          {item.text}
        </motion.div>
      </div>
    ))}

    {/* Center Image Container (Updated to match Hero.jsx logic) */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#D99201] overflow-hidden shadow-2xl bg-[#0a1f13] z-10"
    >
      {/* Assuming the image is the same student image or brand visual */}
      <img 
        src="/confused1.jpg" 
        alt="Marketing Strategy" 
        className="w-full h-full object-cover"
      />
      {/* Overlay gradient to keep it on brand */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3F22]/40 to-transparent" />
    </motion.div>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[#234B2E] border-t-4 border-[#D99201] py-6">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-sm md:text-base font-semibold text-[#f5f5f5]"
          >
            <span className="text-[#D99201]">Trusted by 5000+ Happy Brands, Businesses, and Entrepreneurs Since 2012</span>
          </motion.p>
        </div>
      </section>

      <section className="bg-[#1A3F22] py-16 md:py-24 border-t-4 border-[#234B2E]">
  <div className="container mx-auto px-6 mb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
    >
      {/* Decorative pulse element */}
      <div className="flex items-center hidden md:flex">
        <div className="w-6 h-6 rounded-full bg-[#D99201]/80 animate-pulse"></div>
        <div className="w-6 h-6 rounded-full bg-gray-500/50 -ml-3"></div>
        <div className="w-6 h-6 rounded-full bg-gray-700/50 -ml-3"></div>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
        Trusted by <span className="text-[#D99201]">5000+</span> Happy Brands, Businesses, and Entrepreneurs Since 2012
      </h2>
    </motion.div>
  </div>

  {/* Infinite Scroll Marquee Container */}
  <div className="relative w-full overflow-hidden flex flex-col gap-6 group">
    
    {/* Fading Edges for depth */}
    <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#1A3F22] to-transparent z-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#1A3F22] to-transparent z-10 pointer-events-none" />

    {/* First Row - Scrolling Left */}
    <motion.div
      className="flex gap-6 px-3 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      {/* We map the array twice [...arr, ...arr] to create the seamless infinite loop */}
      {[...clientLogos, ...clientLogos].map((logoUrl, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-48 h-28 md:w-56 md:h-32 bg-[#0a1f13] border-2 border-[#2D5A35] rounded-xl flex items-center justify-center p-6 relative overflow-hidden transition-all duration-500 hover:border-[#D99201] hover:shadow-[0_0_25px_rgba(217,146,1,0.2)] hover:-translate-y-2 cursor-pointer group/card"
        >
          {/* Subtle background glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          
          <img
            src={logoUrl}
            alt={`Client Logo ${idx}`}
            className="w-full h-full object-contain filter grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 relative z-20"
          />
        </div>
      ))}
    </motion.div>
  </div>
</section>

{/* ===== MERGED SERVICES & PORTFOLIO SECTION ===== */}
<section className="bg-[#1A3F22] py-16 md:py-24 overflow-hidden">
  <div className="container mx-auto px-6">
    {/* Single Header for the combined section */}
    <SectionHeader title="Our Services" />
    
    {/* --- PART 1: SERVICE BENTO GRID --- */}
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Left Side: Dynamic Image Card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-5 relative group rounded-3xl overflow-hidden border border-[#00d4ff]/30"
      >
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
          alt="Digital Strategy" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/40 to-transparent opacity-90" />
        <div className="absolute bottom-8 left-8">
          <p className="text-[#00d4ff] font-mono text-sm mb-2">Next-Gen Solutions</p>
          <h4 className="text-white text-3xl font-bold leading-tight">Driving Digital <br/> Excellence</h4>
        </div>
      </motion.div>

      {/* Right Side: Service Bento Grid */}
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Digital Marketing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a1f13]/80 backdrop-blur-md border border-[#2D5A35] p-8 rounded-3xl hover:border-[#00d4ff]/50 transition-all duration-300 group shadow-xl"
        >
          <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
            <span className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Digital Marketing
          </h3>
          <ul className="space-y-3">
            {['SEO Optimization', 'Social Media', 'AI Marketing', 'B2B & SaaS'].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[#f5f5f5]/80 text-sm">
                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Paid Advertising Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0a1f13]/80 backdrop-blur-md border border-[#2D5A35] p-8 rounded-3xl hover:border-[#00d4ff]/50 transition-all duration-300 group shadow-xl"
        >
          <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
            <div className="flex gap-1 items-end h-6">
              <span className="w-1.5 h-3 bg-[#00d4ff] rounded-full"></span>
              <span className="w-1.5 h-6 bg-[#00d4ff] rounded-full"></span>
              <span className="w-1.5 h-4 bg-[#00d4ff] rounded-full"></span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Paid Advertising
          </h3>
          <ul className="space-y-3">
            {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'OTT Ads'].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[#f5f5f5]/80 text-sm">
                <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom wide stat or tag line */}
        <motion.div 
          className="md:col-span-2 bg-gradient-to-r from-[#00d4ff] to-[#00a8cc] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#0a0f0a] font-bold text-lg">Ready to scale your brand?</span>
          <button className="bg-[#0a0f0a] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-opacity-80 hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>

    {/* --- PART 2: PORTFOLIO / IMAGE GRID --- */}
    <div className="mt-16 pt-12 border-t border-[#2D5A35]/50">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-bold text-white">Our Work in Action</h3>
        <p className="text-sm text-[#D99201] font-semibold cursor-pointer hover:text-white transition-colors">View All Projects &rarr;</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioImages.map((imgUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Image Container with Hover Zoom */}
            <div className="aspect-video sm:aspect-square lg:aspect-[4/3] overflow-hidden">
              <img
                src={imgUrl}
                alt={`Digital Marketing Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Subtle Overlay to match the dark theme depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Hover Text Effect */}
            <div className="absolute bottom-4 left-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <p className="text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-1">Case Study</p>
              <p className="text-white text-sm font-semibold">View Project details</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ===== WHY SEO MATTERS SECTION ===== */}
      <section className="bg-[#1A3F22] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Why Digital Marketing Matters" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#234B2E] to-[#1A3F22] border-2 border-[#D99201] rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <img
              src="/seo-matters.png"
              alt="Digital marketing benefits"
              className="w-full h-auto rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
      <section className="bg-[#234B2E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Approach" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {APPROACH_STEPS.map((step) => (
              <ApproachStep key={step.step} {...step} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section className="bg-[#1A3F22] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Portfolio" subtitle="Explore our recent projects and successful campaigns" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <img
              src="/portfolio-showcase.jpg"
              alt="Portfolio showcase"
              className="w-full h-auto rounded-lg object-cover mb-8"
            />
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-[#D99201] text-[#1A3F22] rounded-full font-bold hover:bg-[#E5A828] transition-all group"
                >
                  View Full Portfolio
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ===== TRUST & SECURITY SECTION ===== */}
      <section className="bg-[#234B2E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0a1f13] border-4 border-[#D99201] rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D99201]"></div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your data is protected, 100% confidential and secure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
              <div className="bg-white rounded-lg p-8 flex items-center justify-center h-48 w-full">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1A3F22] mb-2">Google</div>
                  <div className="text-sm text-gray-600">Partner</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 flex items-center justify-center h-48 w-full">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1A3F22] mb-2">Meta Business</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== AI VISIBILITY TOOL SECTION ===== */}
{/* ===== AI VISIBILITY TEASER SECTION ===== */}
<section className="bg-[#1A3F22] py-16 md:py-24 relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left Side: Copy & CTA */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
          <Sparkles size={16} className="text-[#00d4ff]" />
          <span className="text-[#00d4ff] text-sm font-semibold tracking-wide">Free AI Visibility Audit</span>
        </div>
        
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          How Visible Is Your Brand in <span className="text-[#D99201]">AI Search?</span>
        </h2>
        
        <p className="text-[#f5f5f5]/80 text-lg mb-8 leading-relaxed max-w-lg">
          Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing Copilot, and Claude in just 30 seconds.
        </p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Link href="/ai-visibility" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-[#0a1f13] rounded-full font-bold hover:bg-[#00e8ff] transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Check Your Score For Free
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side: UI Mockup Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-md mx-auto"
      >
        <div className="bg-[#0a1f13] border border-[#2D5A35] rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* App Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D5A35]/50 bg-[#0a1f13]/80">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#234B2E] rounded-md"><Search size={14} className="text-[#00d4ff]" /></div>
              <span className="text-sm font-semibold text-white">AI Visibility Check</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            </div>
          </div>

          {/* App Body - The Gauge */}
          <div className="p-8 flex flex-col items-center">
            <div className="relative w-64 h-32 mb-4">
              {/* SVG Half Circle Gauge */}
              <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-lg">
                {/* Background Track */}
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#234B2E" strokeWidth="8" strokeLinecap="round" />
                {/* Progress Track (73%) */}
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_1.5s_ease-out_forwards]" />
                {/* Needle */}
                <g className="origin-[50px_50px] rotate-[41deg] transition-transform duration-1000 ease-out">
                  <line x1="50" y1="50" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="4" fill="#0a1f13" stroke="#00d4ff" strokeWidth="2" />
                </g>
              </svg>
              
              {/* Labels */}
              <div className="absolute bottom-0 left-0 text-xs text-gray-500 font-medium">Invisible</div>
              <div className="absolute bottom-0 right-0 text-xs text-gray-500 font-medium">Excellent</div>
            </div>

            {/* Score Text */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl font-bold text-white tracking-tighter">73</span>
                <span className="text-xl text-gray-400 font-medium">/100</span>
              </div>
              <p className="text-[#00d4ff] font-semibold mt-1">Good Visibility</p>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-2">Sample Score</p>
            </div>

            {/* AI Engines Legend */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full px-4 text-sm text-gray-400">
              {['ChatGPT', 'Google AI Overviews', 'Perplexity', 'Bing Copilot', 'Gemini', 'Claude'].map((ai, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                  <span>{ai}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* ===== FAQ SECTION ===== */}
      <section className="bg-[#234B2E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Frequently Asked Questions" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-12 max-w-3xl mx-auto bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl overflow-hidden"
          >
            {FAQS.map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Join 5000+ brands that have achieved remarkable growth with Marketly. Let's build your winning strategy today."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/about' }}
      />

      <Footer />
    </div>
  );
}
