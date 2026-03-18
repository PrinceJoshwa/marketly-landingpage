// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { ArrowRight, TrendingUp, Zap, Search, Shield, Sparkles, ChevronRight } from 'lucide-react';
// // // // import Link from 'next/link';
// // // // import { useState, useEffect } from 'react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';
// // // // import ApproachStep from '@/components/ApproachStep';
// // // // import FaqItem from '@/components/FaqItem';
// // // // import ScoreGauge from '@/components/ScoreGauge';
// // // // import SectionHeader from '@/components/SectionHeader';
// // // // import CTASection from '@/components/CTASection';

// // // // const APPROACH_STEPS = [
// // // //   {
// // // //     icon: TrendingUp,
// // // //     step: 1,
// // // //     title: 'Strategic Planning\n& Goal Setting',
// // // //     description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.',
// // // //     index: 0,
// // // //   },
// // // //   {
// // // //     icon: Zap,
// // // //     step: 2,
// // // //     title: 'Tailored Campaign\nExecution',
// // // //     description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.',
// // // //     index: 1,
// // // //   },
// // // //   {
// // // //     icon: Search,
// // // //     step: 3,
// // // //     title: 'Constant Monitoring\n& Optimization',
// // // //     description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.',
// // // //     index: 2,
// // // //   },
// // // // ];

// // // // const FAQS = [
// // // //   {
// // // //     q: 'What digital marketing services does Marketly offer?',
// // // //     a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).',
// // // //   },
// // // //   {
// // // //     q: 'How long does it take to see results from SEO?',
// // // //     a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.',
// // // //   },
// // // //   {
// // // //     q: 'Do you work with small businesses and startups?',
// // // //     a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.',
// // // //   },
// // // //   {
// // // //     q: 'Is my business data safe with Marketly?',
// // // //     a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.',
// // // //   },
// // // //   {
// // // //     q: 'How do I get started with Marketly?',
// // // //     a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours.",
// // // //   },
// // // //   {
// // // //     q: 'What makes Marketly different from other agencies?',
// // // //     a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.',
// // // //   },
// // // // ];

// // // // const containerVariants = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     transition: { staggerChildren: 0.2 },
// // // //   },
// // // // };

// // // // const itemVariants = {
// // // //   hidden: { opacity: 0, y: 20 },
// // // //   visible: { opacity: 1, y: 0 },
// // // // };

// // // // const portfolioItems = [1, 2, 3, 4, 5, 6, 7, 8];

// // // // const portfolioImages = [
// // // //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
// // // //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
// // // //   ];

// // // // const clientLogos = [
// // // //   // Direct, reliable SVG links to real brand logos
// // // //   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// // // //   "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
// // // //   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
// // // //   "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
// // // //   // "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel_logo_%282020%2C_light_blue%29.svg",
// // // //   // "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
// // // //   "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
// // // //   "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
// // // // ];  

// // // // export default function Home() {
// // // //   const [isMobile, setIsMobile] = useState(false);

// // // //   useEffect(() => {
// // // //     const checkMobile = () => {
// // // //       setIsMobile(window.innerWidth < 768);
// // // //     };
// // // //     checkMobile();
// // // //     window.addEventListener('resize', checkMobile);
// // // //     return () => window.removeEventListener('resize', checkMobile);
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* ===== HERO SECTION ===== */}
// // // //       <section className="min-h-screen bg-[#1A3F22] overflow-hidden">
// // // //         <div className="container mx-auto px-6 py-8 pt-20 md:pt-32">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //             {/* Left Content */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -50 }}
// // // //               animate={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="space-y-8"
// // // //             >
// // // //               <div className="space-y-4">
// // // //                 <h1
// // // //                   className="text-5xl md:text-6xl font-bold leading-tight"
// // // //                   style={{ fontFamily: 'var(--font-serif)' }}
// // // //                 >
// // // //                   Confused about your digital
// // // //                   <span className="text-[#D99201]"> marketing?</span>
// // // //                 </h1>
// // // //                 <p className="text-lg text-[#f5f5f5]/80">
// // // //                   We've got you covered! From strategy to execution, our expert team guides you through every step of your marketing journey.
// // // //                 </p>
// // // //               </div>

// // // //               {/* Stats */}
// // // //               <div className="grid grid-cols-3 gap-4">
// // // //                 {[
// // // //                   { end: 5000, label: 'Brands Served', suffix: '+' },
// // // //                   { end: 13, label: 'Years Experience', suffix: '+' },
// // // //                   { end: 99, label: 'Client Satisfaction', suffix: '%' },
// // // //                 ].map((stat, idx) => (
// // // //                   <motion.div
// // // //                     key={idx}
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     animate={{ opacity: 1, y: 0 }}
// // // //                     transition={{ delay: idx * 0.1 }}
// // // //                     className="bg-[#234B2E] border-2 border-[#D99201] rounded-xl p-4 text-center"
// // // //                   >
// // // //                     <div className="text-2xl md:text-3xl font-bold text-[#D99201]">
// // // //                       {stat.end}{stat.suffix}
// // // //                     </div>
// // // //                     <div className="text-xs md:text-sm text-[#f5f5f5]/70 mt-2">{stat.label}</div>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>

// // // //               {/* CTA */}
// // // //               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// // // //                 <Link
// // // //                   href="/contact"
// // // //                   className="inline-flex items-center gap-3 px-8 py-4 bg-[#D99201] text-[#1A3F22] rounded-full font-bold text-lg hover:bg-[#E5A828] transition-all duration-300 group"
// // // //                 >
// // // //                   Start Your Strategy
// // // //                   <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
// // // //                 </Link>
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             {/* Right Visual - Rotating circular design */}
// // // // {/* Right Visual - Rotating circular design integrated from Hero.jsx */}
// // // // <motion.div
// // // //   initial={{ opacity: 0, scale: 0.8 }}
// // // //   animate={{ opacity: 1, scale: 1 }}
// // // //   transition={{ duration: 0.8 }}
// // // //   className="relative w-full aspect-square max-w-lg mx-auto"
// // // // >
// // // //   {/* Rotating background circles */}
// // // //   <motion.div
// // // //     className="absolute inset-0"
// // // //     animate={{ rotate: 360 }}
// // // //     transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
// // // //   >
// // // //     <div className="absolute inset-0 border-2 border-[#D99201]/30 rounded-full" />
// // // //     <div className="absolute inset-12 border border-[#D99201]/20 rounded-full" />
    
// // // //     {/* Decorative accents (Like the flags in Hero.jsx but styled for your UI) */}
// // // //     <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D99201] rounded-full shadow-[0_0_15px_rgba(217,146,1,0.5)]" />
// // // //     <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00d4ff] rounded-full shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
// // // //   </motion.div>

// // // //   {/* Floating Text Badges (Aligned Around Circle) */}
// // // //   <div className="absolute inset-0 flex items-center justify-center">
// // // //     {[
// // // //       { text: 'SEO Mastery', angle: 0 },
// // // //       { text: 'Social Growth', angle: 45 },
// // // //       { text: 'Paid Ads ROI', angle: 90 },
// // // //       { text: 'Brand Strategy', angle: 135 },
// // // //       { text: 'Analytics', angle: 180 },
// // // //       { text: 'Content Power', angle: 225 },
// // // //       { text: 'Conversion Focus', angle: 270 },
// // // //       { text: 'Market Leaders', angle: 315 },
// // // //     ].map((item, idx) => (
// // // //       <div
// // // //         key={idx}
// // // //         className="absolute z-20"
// // // //         style={{
// // // //           transform: `rotate(${item.angle}deg) translate(${
// // // //             isMobile ? "120px" : "160px"
// // // //           }) rotate(-${item.angle}deg)`,
// // // //         }}
// // // //       >
// // // //         <motion.div
// // // //           whileHover={{ scale: 1.1 }}
// // // //           className="bg-[#234B2E] border-2 border-[#D99201] rounded-xl px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-lg"
// // // //           style={{
// // // //             transform: `scale(${isMobile ? 0.8 : 1})`,
// // // //           }}
// // // //         >
// // // //           {item.text}
// // // //         </motion.div>
// // // //       </div>
// // // //     ))}

// // // //     {/* Center Image Container (Updated to match Hero.jsx logic) */}
// // // //     <motion.div
// // // //       animate={{ scale: [1, 1.05, 1] }}
// // // //       transition={{ duration: 4, repeat: Infinity }}
// // // //       className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#D99201] overflow-hidden shadow-2xl bg-[#0a1f13] z-10"
// // // //     >
// // // //       {/* Assuming the image is the same student image or brand visual */}
// // // //       <img 
// // // //         src="/confused1.jpg" 
// // // //         alt="Marketing Strategy" 
// // // //         className="w-full h-full object-cover"
// // // //       />
// // // //       {/* Overlay gradient to keep it on brand */}
// // // //       <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3F22]/40 to-transparent" />
// // // //     </motion.div>
// // // //   </div>
// // // // </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== TRUST BAR ===== */}
// // // //       <section className="bg-[#234B2E] border-t-4 border-[#D99201] py-6">
// // // //         <div className="container mx-auto px-6">
// // // //           <motion.p
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             className="text-center text-sm md:text-base font-semibold text-[#f5f5f5]"
// // // //           >
// // // //             <span className="text-[#D99201]">Trusted by 5000+ Happy Brands, Businesses, and Entrepreneurs Since 2012</span>
// // // //           </motion.p>
// // // //         </div>
// // // //       </section>

// // // //       <section className="bg-[#1A3F22] py-16 md:py-24 border-t-4 border-[#234B2E]">
// // // //   <div className="container mx-auto px-6 mb-12">
// // // //     <motion.div 
// // // //       initial={{ opacity: 0, y: 20 }}
// // // //       whileInView={{ opacity: 1, y: 0 }}
// // // //       viewport={{ once: true }}
// // // //       className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
// // // //     >
// // // //       {/* Decorative pulse element */}
// // // //       <div className="flex items-center hidden md:flex">
// // // //         <div className="w-6 h-6 rounded-full bg-[#D99201]/80 animate-pulse"></div>
// // // //         <div className="w-6 h-6 rounded-full bg-gray-500/50 -ml-3"></div>
// // // //         <div className="w-6 h-6 rounded-full bg-gray-700/50 -ml-3"></div>
// // // //       </div>
      
// // // //       <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
// // // //         Trusted by <span className="text-[#D99201]">5000+</span> Happy Brands, Businesses, and Entrepreneurs Since 2012
// // // //       </h2>
// // // //     </motion.div>
// // // //   </div>

// // // //   {/* Infinite Scroll Marquee Container */}
// // // //   <div className="relative w-full overflow-hidden flex flex-col gap-6 group">
    
// // // //     {/* Fading Edges for depth */}
// // // //     <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#1A3F22] to-transparent z-10 pointer-events-none" />
// // // //     <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#1A3F22] to-transparent z-10 pointer-events-none" />

// // // //     {/* First Row - Scrolling Left */}
// // // //     <motion.div
// // // //       className="flex gap-6 px-3 w-max"
// // // //       animate={{ x: ["0%", "-50%"] }}
// // // //       transition={{ duration: 35, ease: "linear", repeat: Infinity }}
// // // //     >
// // // //       {/* We map the array twice [...arr, ...arr] to create the seamless infinite loop */}
// // // //       {[...clientLogos, ...clientLogos].map((logoUrl, idx) => (
// // // //         <div
// // // //           key={idx}
// // // //           className="flex-shrink-0 w-48 h-28 md:w-56 md:h-32 bg-[#0a1f13] border-2 border-[#2D5A35] rounded-xl flex items-center justify-center p-6 relative overflow-hidden transition-all duration-500 hover:border-[#D99201] hover:shadow-[0_0_25px_rgba(217,146,1,0.2)] hover:-translate-y-2 cursor-pointer group/card"
// // // //         >
// // // //           {/* Subtle background glow effect on hover */}
// // // //           <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          
// // // //           <img
// // // //             src={logoUrl}
// // // //             alt={`Client Logo ${idx}`}
// // // //             className="w-full h-full object-contain filter grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 relative z-20"
// // // //           />
// // // //         </div>
// // // //       ))}
// // // //     </motion.div>
// // // //   </div>
// // // // </section>

// // // // {/* ===== MERGED SERVICES & PORTFOLIO SECTION ===== */}
// // // // <section className="bg-[#1A3F22] py-16 md:py-24 overflow-hidden">
// // // //   <div className="container mx-auto px-6">
// // // //     {/* Single Header for the combined section */}
// // // //     <SectionHeader title="Our Services" />
    
// // // //     {/* --- PART 1: SERVICE BENTO GRID --- */}
// // // //     <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
// // // //       {/* Left Side: Dynamic Image Card */}
// // // //       <motion.div 
// // // //         initial={{ opacity: 0, x: -50 }}
// // // //         whileInView={{ opacity: 1, x: 0 }}
// // // //         viewport={{ once: true }}
// // // //         className="lg:col-span-5 relative group rounded-3xl overflow-hidden border border-[#00d4ff]/30"
// // // //       >
// // // //         <img 
// // // //           src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
// // // //           alt="Digital Strategy" 
// // // //           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/40 to-transparent opacity-90" />
// // // //         <div className="absolute bottom-8 left-8">
// // // //           <p className="text-[#00d4ff] font-mono text-sm mb-2">Next-Gen Solutions</p>
// // // //           <h4 className="text-white text-3xl font-bold leading-tight">Driving Digital <br/> Excellence</h4>
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Right Side: Service Bento Grid */}
// // // //       <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
        
// // // //         {/* Digital Marketing Card */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           className="bg-[#0a1f13]/80 backdrop-blur-md border border-[#2D5A35] p-8 rounded-3xl hover:border-[#00d4ff]/50 transition-all duration-300 group shadow-xl"
// // // //         >
// // // //           <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
// // // //             <span className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></span>
// // // //           </div>
// // // //           <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
// // // //             Digital Marketing
// // // //           </h3>
// // // //           <ul className="space-y-3">
// // // //             {['SEO Optimization', 'Social Media', 'AI Marketing', 'B2B & SaaS'].map((service, idx) => (
// // // //               <li key={idx} className="flex items-center gap-2 text-[#f5f5f5]/80 text-sm">
// // // //                 <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
// // // //                 {service}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </motion.div>

// // // //         {/* Paid Advertising Card */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ delay: 0.2 }}
// // // //           className="bg-[#0a1f13]/80 backdrop-blur-md border border-[#2D5A35] p-8 rounded-3xl hover:border-[#00d4ff]/50 transition-all duration-300 group shadow-xl"
// // // //         >
// // // //           <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-colors">
// // // //             <div className="flex gap-1 items-end h-6">
// // // //               <span className="w-1.5 h-3 bg-[#00d4ff] rounded-full"></span>
// // // //               <span className="w-1.5 h-6 bg-[#00d4ff] rounded-full"></span>
// // // //               <span className="w-1.5 h-4 bg-[#00d4ff] rounded-full"></span>
// // // //             </div>
// // // //           </div>
// // // //           <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
// // // //             Paid Advertising
// // // //           </h3>
// // // //           <ul className="space-y-3">
// // // //             {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'OTT Ads'].map((service, idx) => (
// // // //               <li key={idx} className="flex items-center gap-2 text-[#f5f5f5]/80 text-sm">
// // // //                 <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
// // // //                 {service}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </motion.div>

// // // //         {/* Bottom wide stat or tag line */}
// // // //         <motion.div 
// // // //           className="md:col-span-2 bg-gradient-to-r from-[#00d4ff] to-[#00a8cc] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
// // // //           initial={{ opacity: 0, scale: 0.95 }}
// // // //           whileInView={{ opacity: 1, scale: 1 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ delay: 0.3 }}
// // // //         >
// // // //           <span className="text-[#0a0f0a] font-bold text-lg">Ready to scale your brand?</span>
// // // //           <button className="bg-[#0a0f0a] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-opacity-80 hover:scale-105 transition-all duration-300">
// // // //             Get Started Now
// // // //           </button>
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>

// // // //     {/* --- PART 2: PORTFOLIO / IMAGE GRID --- */}
// // // //     <div className="mt-16 pt-12 border-t border-[#2D5A35]/50">
// // // //       <div className="mb-8 flex items-center justify-between">
// // // //         <h3 className="text-xl md:text-2xl font-bold text-white">Our Work in Action</h3>
// // // //         <p className="text-sm text-[#D99201] font-semibold cursor-pointer hover:text-white transition-colors">View All Projects &rarr;</p>
// // // //       </div>
      
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //         {portfolioImages.map((imgUrl, index) => (
// // // //           <motion.div
// // // //             key={index}
// // // //             initial={{ opacity: 0, scale: 0.95 }}
// // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // //             viewport={{ once: true }}
// // // //             transition={{ duration: 0.4, delay: index * 0.1 }}
// // // //             className="group relative bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl overflow-hidden shadow-xl"
// // // //           >
// // // //             {/* Image Container with Hover Zoom */}
// // // //             <div className="aspect-video sm:aspect-square lg:aspect-[4/3] overflow-hidden">
// // // //               <img
// // // //                 src={imgUrl}
// // // //                 alt={`Digital Marketing Project ${index + 1}`}
// // // //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // //               />
// // // //             </div>

// // // //             {/* Subtle Overlay to match the dark theme depth */}
// // // //             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
// // // //             {/* Hover Text Effect */}
// // // //             <div className="absolute bottom-4 left-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
// // // //               <p className="text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-1">Case Study</p>
// // // //               <p className="text-white text-sm font-semibold">View Project details</p>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </div>

// // // //   </div>
// // // // </section>

// // // //       {/* ===== WHY SEO MATTERS SECTION ===== */}
// // // //       <section className="bg-[#1A3F22] py-16 md:py-24">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader title="Why Digital Marketing Matters" />
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             viewport={{ once: true }}
// // // //             className="mt-12 bg-gradient-to-br from-[#234B2E] to-[#1A3F22] border-2 border-[#D99201] rounded-2xl p-8 md:p-12 overflow-hidden"
// // // //           >
// // // //             <img
// // // //               src="/seo-matters.png"
// // // //               alt="Digital marketing benefits"
// // // //               className="w-full h-auto rounded-lg object-cover"
// // // //             />
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== APPROACH SECTION ===== */}
// // // //       <section className="bg-[#234B2E] py-16 md:py-24">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader title="Our Approach" />
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={containerVariants}
// // // //             className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
// // // //           >
// // // //             {APPROACH_STEPS.map((step) => (
// // // //               <ApproachStep key={step.step} {...step} />
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== PORTFOLIO SECTION ===== */}
// // // //       <section className="bg-[#1A3F22] py-16 md:py-24">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader title="Our Portfolio" subtitle="Explore our recent projects and successful campaigns" />
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             viewport={{ once: true }}
// // // //             className="mt-12 bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl p-8 md:p-12 overflow-hidden"
// // // //           >
// // // //             <img
// // // //               src="/portfolio-showcase.jpg"
// // // //               alt="Portfolio showcase"
// // // //               className="w-full h-auto rounded-lg object-cover mb-8"
// // // //             />
// // // //             <div className="flex justify-center">
// // // //               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// // // //                 <Link
// // // //                   href="/services"
// // // //                   className="inline-flex items-center gap-3 px-8 py-3 bg-[#D99201] text-[#1A3F22] rounded-full font-bold hover:bg-[#E5A828] transition-all group"
// // // //                 >
// // // //                   View Full Portfolio
// // // //                   <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
// // // //                 </Link>
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>



// // // //       {/* ===== TRUST & SECURITY SECTION ===== */}
// // // //       <section className="bg-[#234B2E] py-16 md:py-24">
// // // //         <div className="container mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="relative bg-[#0a1f13] border-4 border-[#D99201] rounded-2xl p-8 md:p-12 overflow-hidden"
// // // //           >
// // // //             {/* Corner accent */}
// // // //             <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D99201]"></div>

// // // //             <h2
// // // //               className="text-3xl md:text-4xl font-bold mb-8 text-center"
// // // //               style={{ fontFamily: 'var(--font-serif)' }}
// // // //             >
// // // //               Your data is protected, 100% confidential and secure
// // // //             </h2>

// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
// // // //               <div className="bg-white rounded-lg p-8 flex items-center justify-center h-48 w-full">
// // // //                 <div className="text-center">
// // // //                   <div className="text-4xl font-bold text-[#1A3F22] mb-2">Google</div>
// // // //                   <div className="text-sm text-gray-600">Partner</div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="bg-white rounded-lg p-8 flex items-center justify-center h-48 w-full">
// // // //                 <div className="text-center">
// // // //                   <div className="text-4xl font-bold text-[#1A3F22] mb-2">Meta Business</div>
// // // //                   <div className="text-sm text-gray-600">Partners</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== AI VISIBILITY TOOL SECTION ===== */}
// // // // {/* ===== AI VISIBILITY TEASER SECTION ===== */}
// // // // <section className="bg-[#1A3F22] py-16 md:py-24 relative overflow-hidden">
// // // //   {/* Background Glow */}
// // // //   <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

// // // //   <div className="container mx-auto px-6 relative z-10">
// // // //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
// // // //       {/* Left Side: Copy & CTA */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, x: -30 }}
// // // //         whileInView={{ opacity: 1, x: 0 }}
// // // //         viewport={{ once: true }}
// // // //       >
// // // //         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
// // // //           <Sparkles size={16} className="text-[#00d4ff]" />
// // // //           <span className="text-[#00d4ff] text-sm font-semibold tracking-wide">Free AI Visibility Audit</span>
// // // //         </div>
        
// // // //         <h2
// // // //           className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
// // // //           style={{ fontFamily: 'var(--font-serif)' }}
// // // //         >
// // // //           How Visible Is Your Brand in <span className="text-[#D99201]">AI Search?</span>
// // // //         </h2>
        
// // // //         <p className="text-[#f5f5f5]/80 text-lg mb-8 leading-relaxed max-w-lg">
// // // //           Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing Copilot, and Claude in just 30 seconds.
// // // //         </p>
        
// // // //         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
// // // //           <Link href="/ai-visibility" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-[#0a1f13] rounded-full font-bold hover:bg-[#00e8ff] transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]">
// // // //             Check Your Score For Free
// // // //             <ArrowRight size={20} />
// // // //           </Link>
// // // //         </motion.div>
// // // //       </motion.div>

// // // //       {/* Right Side: UI Mockup Card */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 30 }}
// // // //         whileInView={{ opacity: 1, y: 0 }}
// // // //         viewport={{ once: true }}
// // // //         className="w-full max-w-md mx-auto"
// // // //       >
// // // //         <div className="bg-[#0a1f13] border border-[#2D5A35] rounded-2xl overflow-hidden shadow-2xl relative">
          
// // // //           {/* App Header */}
// // // //           <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D5A35]/50 bg-[#0a1f13]/80">
// // // //             <div className="flex items-center gap-2">
// // // //               <div className="p-1.5 bg-[#234B2E] rounded-md"><Search size={14} className="text-[#00d4ff]" /></div>
// // // //               <span className="text-sm font-semibold text-white">AI Visibility Check</span>
// // // //             </div>
// // // //             <div className="flex gap-1.5">
// // // //               <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
// // // //               <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
// // // //               <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* App Body - The Gauge */}
// // // //           <div className="p-8 flex flex-col items-center">
// // // //             <div className="relative w-64 h-32 mb-4">
// // // //               {/* SVG Half Circle Gauge */}
// // // //               <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-lg">
// // // //                 {/* Background Track */}
// // // //                 <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#234B2E" strokeWidth="8" strokeLinecap="round" />
// // // //                 {/* Progress Track (73%) */}
// // // //                 <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_1.5s_ease-out_forwards]" />
// // // //                 {/* Needle */}
// // // //                 <g className="origin-[50px_50px] rotate-[41deg] transition-transform duration-1000 ease-out">
// // // //                   <line x1="50" y1="50" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
// // // //                   <circle cx="50" cy="50" r="4" fill="#0a1f13" stroke="#00d4ff" strokeWidth="2" />
// // // //                 </g>
// // // //               </svg>
              
// // // //               {/* Labels */}
// // // //               <div className="absolute bottom-0 left-0 text-xs text-gray-500 font-medium">Invisible</div>
// // // //               <div className="absolute bottom-0 right-0 text-xs text-gray-500 font-medium">Excellent</div>
// // // //             </div>

// // // //             {/* Score Text */}
// // // //             <div className="text-center mb-8">
// // // //               <div className="flex items-baseline justify-center gap-1">
// // // //                 <span className="text-6xl font-bold text-white tracking-tighter">73</span>
// // // //                 <span className="text-xl text-gray-400 font-medium">/100</span>
// // // //               </div>
// // // //               <p className="text-[#00d4ff] font-semibold mt-1">Good Visibility</p>
// // // //               <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-2">Sample Score</p>
// // // //             </div>

// // // //             {/* AI Engines Legend */}
// // // //             <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full px-4 text-sm text-gray-400">
// // // //               {['ChatGPT', 'Google AI Overviews', 'Perplexity', 'Bing Copilot', 'Gemini', 'Claude'].map((ai, i) => (
// // // //                 <div key={i} className="flex items-center gap-2">
// // // //                   <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
// // // //                   <span>{ai}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>

// // // //     </div>
// // // //   </div>
// // // // </section>

// // // //       {/* ===== FAQ SECTION ===== */}
// // // //       <section className="bg-[#234B2E] py-16 md:py-24">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader title="Frequently Asked Questions" />
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={containerVariants}
// // // //             className="mt-12 max-w-3xl mx-auto bg-[#0a1f13] border-2 border-[#2D5A35] rounded-2xl overflow-hidden"
// // // //           >
// // // //             {FAQS.map((faq, idx) => (
// // // //               <FaqItem key={idx} question={faq.q} answer={faq.a} />
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== CTA SECTION ===== */}
// // // //       <CTASection
// // // //         title="Ready to Transform Your Digital Presence?"
// // // //         description="Join 5000+ brands that have achieved remarkable growth with Marketly. Let's build your winning strategy today."
// // // //         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
// // // //         secondaryCTA={{ text: 'View Case Studies', href: '/about' }}
// // // //       />

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // import { ArrowRight, TrendingUp, Zap, Search, Shield, Sparkles, ChevronRight, Play } from 'lucide-react';
// // // import Link from 'next/link';
// // // import { useRef } from 'react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';

// // // // Keeping your original exact content
// // // const APPROACH_STEPS = [
// // //   { icon: TrendingUp, step: 1, title: 'Strategic Planning\n& Goal Setting', description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.' },
// // //   { icon: Zap, step: 2, title: 'Tailored Campaign\nExecution', description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.' },
// // //   { icon: Search, step: 3, title: 'Constant Monitoring\n& Optimization', description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.' },
// // // ];

// // // const FAQS = [
// // //   { q: 'What digital marketing services does Marketly offer?', a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).' },
// // //   { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.' },
// // //   { q: 'Do you work with small businesses and startups?', a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.' },
// // //   { q: 'Is my business data safe with Marketly?', a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.' },
// // //   { q: 'How do I get started with Marketly?', a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours." },
// // //   { q: 'What makes Marketly different from other agencies?', a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.' },
// // // ];

// // // const clientLogos = [
// // //   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// // //   "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
// // //   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
// // //   "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
// // //   "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
// // //   "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
// // // ];

// // // // Custom Easing for Premium Feel
// // // const customEase = [0.16, 1, 0.3, 1];

// // // export default function Home() {
// // //   const targetRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
// // //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
// // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white selection:bg-[#D99201] selection:text-[#050C07] overflow-hidden">
// // //       <Header />

// // //       {/* ===== HERO SECTION ===== */}
// // //       <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
// // //         {/* Ambient Premium Glow */}
// // //         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#D99201] opacity-[0.07] blur-[120px] pointer-events-none mix-blend-screen" />
// // //         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00d4ff] opacity-[0.05] blur-[120px] pointer-events-none mix-blend-screen" />

// // //         <div className="container mx-auto px-6 relative z-10">
// // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
// // //             {/* Left Content */}
// // //             <motion.div 
// // //               className="lg:col-span-7 space-y-10"
// // //               initial={{ opacity: 0, y: 40 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 1, ease: customEase }}
// // //             >
// // //               <div className="space-y-6">
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   animate={{ opacity: 1, scale: 1 }}
// // //                   transition={{ delay: 0.2, duration: 0.8 }}
// // //                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
// // //                 >
// // //                   <span className="w-2 h-2 rounded-full bg-[#D99201] animate-pulse" />
// // //                   <span className="text-xs font-medium tracking-widest uppercase text-white/80">Premium Digital Agency</span>
// // //                 </motion.div>
                
// // //                 <h1 className="text-6xl md:text-8xl font-medium leading-[1.05] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                   Confused about <br />
// // //                   <span className="italic text-white/50">your digital</span> <br />
// // //                   <span className="text-[#D99201] relative inline-block">
// // //                     marketing?
// // //                     {/* Artistic swoosh under the word */}
// // //                     <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#D99201] opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
// // //                       <path d="M0 10 Q 50 20 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
// // //                     </svg>
// // //                   </span>
// // //                 </h1>
                
// // //                 <p className="text-xl text-white/60 max-w-xl font-light leading-relaxed">
// // //                   We've got you covered! From strategy to execution, our expert team guides you through every step of your marketing journey.
// // //                 </p>
// // //               </div>

// // //               {/* Stats - Redesigned as sleek minimal dividers */}
// // //               <div className="flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-white/10">
// // //                 {[
// // //                   { end: '5000+', label: 'Brands Served' },
// // //                   { end: '13+', label: 'Years Experience' },
// // //                   { end: '99%', label: 'Client Satisfaction' },
// // //                 ].map((stat, idx) => (
// // //                   <motion.div 
// // //                     key={idx}
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8, ease: customEase }}
// // //                     className="flex flex-col gap-1"
// // //                   >
// // //                     <div className="text-3xl font-light text-white" style={{ fontFamily: 'var(--font-serif)' }}>{stat.end}</div>
// // //                     <div className="text-xs tracking-widest uppercase text-white/40 font-medium">{stat.label}</div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>

// // //               {/* CTA */}
// // //               <motion.div 
// // //                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
// // //                 className="pt-4"
// // //               >
// // //                 <Link href="/contact" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-[#050C07] rounded-full overflow-hidden">
// // //                   <div className="absolute inset-0 bg-[#D99201] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
// // //                   <span className="relative font-medium text-lg group-hover:text-white transition-colors duration-500">Start Your Strategy</span>
// // //                   <div className="relative w-8 h-8 rounded-full bg-[#050C07]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
// // //                     <ArrowRight size={16} className="group-hover:text-white group-hover:translate-x-1 transition-all" />
// // //                   </div>
// // //                 </Link>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* Right Visual - Abstract Glass & Image Composition */}
// // //             <motion.div 
// // //               style={{ y, opacity }}
// // //               className="lg:col-span-5 relative hidden lg:block h-[700px] w-full"
// // //             >
// // //               {/* Main Image masked in a pill shape */}
// // //               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20">
// // //                 <div className="absolute inset-0 bg-black/20 z-10" />
// // //                 <img src="/confused1.jpg" alt="Strategy" className="w-full h-full object-cover scale-105" />
// // //               </div>

// // //               {/* Orbiting Glass Elements */}
// // //               <motion.div 
// // //                 animate={{ rotate: 360 }} 
// // //                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //                 className="absolute inset-0 z-30"
// // //               >
// // //                 {[
// // //                   { text: 'SEO Mastery', top: '10%', left: '50%' },
// // //                   { text: 'Paid Ads ROI', top: '70%', left: '15%' },
// // //                   { text: 'Analytics', top: '40%', left: '85%' },
// // //                 ].map((tag, i) => (
// // //                   <div 
// // //                     key={i} 
// // //                     className="absolute bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-xs font-medium text-white shadow-xl"
// // //                     style={{ top: tag.top, left: tag.left, transform: 'translate(-50%, -50%)' }}
// // //                   >
// // //                     {tag.text}
// // //                   </div>
// // //                 ))}
// // //               </motion.div>

// // //               {/* Decorative graphic element */}
// // //               <div className="absolute bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#D99201] to-transparent rounded-full blur-3xl opacity-40 z-10" />
// // //             </motion.div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== INFINITE TRUST MARQUEE ===== */}
// // //       <section className="py-10 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
// // //         <div className="container mx-auto px-6 mb-6">
// // //           <p className="text-center text-sm font-medium tracking-widest uppercase text-white/50">
// // //             Trusted by <span className="text-[#D99201]">5000+</span> Happy Brands Since 2012
// // //           </p>
// // //         </div>
        
// // //         <div className="relative flex overflow-x-hidden group">
// // //           <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050C07] to-transparent z-10" />
// // //           <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050C07] to-transparent z-10" />
          
// // //           <motion.div 
// // //             className="flex gap-16 px-8 items-center w-max"
// // //             animate={{ x: ["0%", "-50%"] }}
// // //             transition={{ duration: 40, ease: "linear", repeat: Infinity }}
// // //           >
// // //             {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
// // //               <img 
// // //                 key={idx} 
// // //                 src={logo} 
// // //                 alt="Client Logo" 
// // //                 className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
// // //               />
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SERVICES BENTO GRID ===== */}
// // //       <section className="py-32 relative">
// // //         <div className="container mx-auto px-6">
// // //           <div className="mb-20">
// // //             <h2 className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: 'var(--font-serif)' }}>Our Services</h2>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            
// // //             {/* Bento 1: Large Image Reveal */}
// // //             <motion.div 
// // //               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
// // //               className="md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden group border border-white/10"
// // //             >
// // //               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Strategy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-[#050C07] via-[#050C07]/40 to-transparent" />
// // //               <div className="absolute bottom-10 left-10">
// // //                 <p className="text-[#00d4ff] text-sm tracking-widest uppercase mb-3 font-medium">Next-Gen Solutions</p>
// // //                 <h3 className="text-4xl font-medium text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>Driving Digital <br/> Excellence</h3>
// // //               </div>
// // //             </motion.div>

// // //             {/* Bento 2: Digital Marketing */}
// // //             <motion.div 
// // //               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
// // //               className="md:col-span-4 row-span-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors flex flex-col justify-between"
// // //             >
// // //               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
// // //                 <Sparkles size={18} className="text-[#D99201]" />
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Digital Marketing</h4>
// // //                 <div className="flex flex-wrap gap-2 text-sm text-white/60">
// // //                   <span className="px-3 py-1 rounded-full border border-white/10">SEO</span>
// // //                   <span className="px-3 py-1 rounded-full border border-white/10">Social Media</span>
// // //                   <span className="px-3 py-1 rounded-full border border-white/10">AI Marketing</span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* Bento 3: Paid Ads */}
// // //             <motion.div 
// // //               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
// // //               className="md:col-span-4 row-span-1 bg-gradient-to-br from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
// // //             >
// // //                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff] opacity-10 blur-3xl rounded-full" />
// // //               <div className="w-10 h-10 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
// // //                 <Zap size={18} className="text-[#00d4ff]" />
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Paid Advertising</h4>
// // //                 <div className="flex flex-wrap gap-2 text-sm text-[#00d4ff]/70">
// // //                   <span className="px-3 py-1 rounded-full border border-[#00d4ff]/20">Google Ads</span>
// // //                   <span className="px-3 py-1 rounded-full border border-[#00d4ff]/20">Meta</span>
// // //                   <span className="px-3 py-1 rounded-full border border-[#00d4ff]/20">LinkedIn</span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== APPROACH SECTION (Redesigned as scrolling timeline) ===== */}
// // //       <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
// // //         <div className="container mx-auto px-6">
// // //           <div className="grid lg:grid-cols-2 gap-20">
// // //             <div className="sticky top-32 h-fit">
// // //               <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our Approach</h2>
// // //               <p className="text-xl text-white/50 font-light max-w-md">A methodical, data-driven process designed to eliminate guesswork and scale your brand predictably.</p>
// // //             </div>

// // //             <div className="space-y-12">
// // //               {APPROACH_STEPS.map((step, idx) => (
// // //                 <motion.div 
// // //                   key={idx}
// // //                   initial={{ opacity: 0, x: 50 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   viewport={{ once: true, margin: "-100px" }}
// // //                   transition={{ duration: 0.8, ease: customEase }}
// // //                   className="flex gap-8 group"
// // //                 >
// // //                   <div className="flex flex-col items-center">
// // //                     <div className="w-16 h-16 rounded-full border border-white/10 bg-[#050C07] flex items-center justify-center text-[#D99201] text-xl font-light group-hover:border-[#D99201] transition-colors duration-500">
// // //                       0{step.step}
// // //                     </div>
// // //                     {idx !== APPROACH_STEPS.length - 1 && (
// // //                       <div className="w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent my-4" />
// // //                     )}
// // //                   </div>
// // //                   <div className="pb-12">
// // //                     <h3 className="text-3xl font-medium text-white mb-4 whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{step.title}</h3>
// // //                     <p className="text-lg text-white/60 font-light leading-relaxed">{step.description}</p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== AI VISIBILITY TOOL (Premium Mac-like Window) ===== */}
// // //       <section className="py-32 relative overflow-hidden">
// // //         {/* Deep ambient glow */}
// // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

// // //         <div className="container mx-auto px-6 relative z-10">
// // //           <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            
// // //             {/* Copy */}
// // //             <div className="flex-1">
// // //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 mb-8 text-[#00d4ff] text-xs font-bold tracking-widest uppercase">
// // //                 Free AI Visibility Audit
// // //               </div>
// // //               <h2 className="text-5xl lg:text-6xl font-medium mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                 How Visible Is Your Brand in <span className="text-[#00d4ff] italic">AI Search?</span>
// // //               </h2>
// // //               <p className="text-lg text-white/60 font-light mb-10 max-w-lg leading-relaxed">
// // //                 Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing Copilot, and Claude in just 30 seconds.
// // //               </p>
// // //               <Link href="/ai-visibility" className="inline-flex items-center gap-4 px-8 py-4 bg-[#00d4ff] text-[#050C07] rounded-full font-medium text-lg hover:bg-white transition-colors duration-300">
// // //                 Check Your Score For Free
// // //               </Link>
// // //             </div>

// // //             {/* Premium UI Mockup */}
// // //             <motion.div 
// // //               initial={{ opacity: 0, rotateY: 15, x: 50 }}
// // //               whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 1, ease: customEase }}
// // //               className="flex-1 w-full max-w-md perspective-1000"
// // //             >
// // //               <div className="bg-[#0A1610] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
// // //                 {/* Mac Header */}
// // //                 <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
// // //                   <div className="w-3 h-3 rounded-full bg-white/20" />
// // //                   <div className="w-3 h-3 rounded-full bg-white/20" />
// // //                   <div className="w-3 h-3 rounded-full bg-white/20" />
// // //                 </div>
                
// // //                 {/* App Content */}
// // //                 <div className="p-10 flex flex-col items-center">
// // //                   <div className="relative w-48 h-24 mb-6">
// // //                     <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">
// // //                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" />
// // //                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_2s_ease-out_forwards]" />
// // //                       <circle cx="70" cy="15" r="4" fill="#00d4ff" className="animate-pulse" />
// // //                     </svg>
// // //                   </div>
// // //                   <div className="flex items-baseline gap-1 mb-2">
// // //                     <span className="text-6xl font-light text-white tracking-tighter">73</span>
// // //                     <span className="text-xl text-white/40">/100</span>
// // //                   </div>
// // //                   <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-medium">Good Visibility</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== FAQS (Minimal Accordion) ===== */}
// // //       <section className="py-32">
// // //         <div className="container mx-auto px-6 max-w-3xl">
// // //           <h2 className="text-4xl md:text-5xl font-medium text-center mb-16" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
// // //           <div className="space-y-4">
// // //             {FAQS.map((faq, idx) => (
// // //               <details key={idx} className="group bg-white/[0.02] border border-white/10 rounded-2xl cursor-pointer">
// // //                 <summary className="flex items-center justify-between p-6 list-none font-medium text-lg outline-none">
// // //                   {faq.q}
// // //                   <span className="transition-transform duration-300 group-open:rotate-45 text-[#D99201] text-2xl font-light">+</span>
// // //                 </summary>
// // //                 <div className="px-6 pb-6 text-white/60 font-light leading-relaxed">
// // //                   {faq.a}
// // //                 </div>
// // //               </details>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { ArrowRight, TrendingUp, Zap, Search, Shield, Sparkles, ChevronRight } from 'lucide-react';
// // import Link from 'next/link';
// // import { useRef, useState, useEffect } from 'react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';

// // // Content strictly preserved
// // const APPROACH_STEPS = [
// //   { icon: TrendingUp, step: 1, title: 'Strategic Planning\n& Goal Setting', description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.' },
// //   { icon: Zap, step: 2, title: 'Tailored Campaign\nExecution', description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.' },
// //   { icon: Search, step: 3, title: 'Constant Monitoring\n& Optimization', description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.' },
// // ];

// // const FAQS = [
// //   { q: 'What digital marketing services does Marketly offer?', a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).' },
// //   { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.' },
// //   { q: 'Do you work with small businesses and startups?', a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.' },
// //   { q: 'Is my business data safe with Marketly?', a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.' },
// //   { q: 'How do I get started with Marketly?', a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours." },
// //   { q: 'What makes Marketly different from other agencies?', a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.' },
// // ];

// // const clientLogos = [
// //   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// //   "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
// //   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
// //   "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
// //   "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
// //   "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
// // ];

// // const portfolioImages = [
// //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
// // ];

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function Home() {
// //   const targetRef = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
// //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
// //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// //     checkMobile();
// //     window.addEventListener('resize', checkMobile);
// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white selection:bg-white selection:text-[#1A3F22]">
// //       <Header />

// //       {/* ===== HERO SECTION ===== */}
// //       <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
// //         {/* Soft Ambient Lights */}
// //         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#234B2E] opacity-50 blur-[150px] pointer-events-none" />
// //         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#234B2E] opacity-30 blur-[120px] pointer-events-none" />

// //         <div className="container mx-auto px-6 relative z-10">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
// //             <motion.div className="lg:col-span-7 space-y-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }}>
// //               <div className="space-y-6">
// //                 <h1 className="text-6xl md:text-8xl font-medium leading-[1.05] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// //                   Confused about <br />
// //                   <span className="italic text-white/60">your digital</span> <br />
// //                   <span className="relative inline-block text-white">
// //                     marketing?
// //                     <svg className="absolute w-full h-4 -bottom-2 left-0 text-white/30" viewBox="0 0 100 20" preserveAspectRatio="none">
// //                       <path d="M0 10 Q 50 20 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
// //                     </svg>
// //                   </span>
// //                 </h1>
                
// //                 <p className="text-xl text-white/70 max-w-xl font-light leading-relaxed">
// //                   We've got you covered! From strategy to execution, our expert team guides you through every step of your marketing journey.
// //                 </p>
// //               </div>

// //               <div className="flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-white/10">
// //                 {[
// //                   { end: '5000+', label: 'Brands Served' },
// //                   { end: '13+', label: 'Years Experience' },
// //                   { end: '99%', label: 'Client Satisfaction' },
// //                 ].map((stat, idx) => (
// //                   <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8, ease: customEase }} className="flex flex-col gap-1">
// //                     <div className="text-3xl font-light text-white" style={{ fontFamily: 'var(--font-serif)' }}>{stat.end}</div>
// //                     <div className="text-xs tracking-widest uppercase text-white/50 font-medium">{stat.label}</div>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pt-4">
// //                 <Link href="/contact" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-[#1A3F22] rounded-full overflow-hidden shadow-2xl">
// //                   <div className="absolute inset-0 bg-[#234B2E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
// //                   <span className="relative font-medium text-lg group-hover:text-white transition-colors duration-500">Start Your Strategy</span>
// //                   <div className="relative w-8 h-8 rounded-full bg-[#1A3F22]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
// //                     <ArrowRight size={16} className="group-hover:text-white group-hover:translate-x-1 transition-all" />
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             </motion.div>

// //             <motion.div style={{ y, opacity }} className="lg:col-span-5 relative hidden lg:block h-[700px] w-full">
// //               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] z-20">
// //                 <div className="absolute inset-0 bg-[#1A3F22]/20 mix-blend-overlay z-10" />
// //                 <img src="/confused1.jpg" alt="Strategy" className="w-full h-full object-cover scale-105" />
// //               </div>

// //               <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-30">
// //                 {[
// //                   { text: 'SEO Mastery', top: '10%', left: '50%' },
// //                   { text: 'Social Growth', top: '70%', left: '15%' },
// //                   { text: 'Analytics', top: '40%', left: '85%' },
// //                 ].map((tag, i) => (
// //                   <div key={i} className="absolute bg-[#234B2E]/80 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-xs font-medium text-white shadow-xl" style={{ top: tag.top, left: tag.left, transform: 'translate(-50%, -50%)' }}>
// //                     {tag.text}
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== INFINITE TRUST MARQUEE ===== */}
// //       <section className="py-12 border-y border-white/5 bg-[#234B2E]/20 relative overflow-hidden">
// //         <div className="container mx-auto px-6 mb-8">
// //           <p className="text-center text-sm font-medium tracking-widest uppercase text-white/60">
// //             Trusted by 5000+ Happy Brands, Businesses, and Entrepreneurs Since 2012
// //           </p>
// //         </div>
        
// //         <div className="relative flex overflow-x-hidden group">
// //           <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#1A3F22] to-transparent z-10" />
// //           <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#1A3F22] to-transparent z-10" />
          
// //           <motion.div className="flex gap-16 px-8 items-center w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
// //             {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
// //               <img key={idx} src={logo} alt="Client Logo" className="h-8 md:h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ===== BENTO SERVICES ===== */}
// //       <section className="py-32 relative">
// //         <div className="container mx-auto px-6">
// //           <div className="mb-20 text-center">
// //             <h2 className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: 'var(--font-serif)' }}>Our Services</h2>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
// //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
// //               className="md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden group border border-white/10"
// //             >
// //               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Strategy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
// //               <div className="absolute inset-0 bg-gradient-to-t from-[#1A3F22] via-[#1A3F22]/60 to-transparent" />
// //               <div className="absolute bottom-10 left-10">
// //                 <p className="text-white/70 text-sm tracking-widest uppercase mb-3 font-medium">Next-Gen Solutions</p>
// //                 <h3 className="text-4xl font-medium text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>Driving Digital <br/> Excellence</h3>
// //               </div>
// //             </motion.div>

// //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
// //               className="md:col-span-4 row-span-1 bg-[#234B2E]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-[#234B2E]/60 transition-colors flex flex-col justify-between"
// //             >
// //               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
// //                 <Sparkles size={18} className="text-white" />
// //               </div>
// //               <div>
// //                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Digital Marketing</h4>
// //                 <div className="flex flex-wrap gap-2 text-sm text-white/70">
// //                   <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">SEO Optimization</span>
// //                   <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Social Media</span>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
// //               className="md:col-span-4 row-span-1 bg-gradient-to-br from-[#234B2E] to-[#1A3F22] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
// //             >
// //               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative z-10">
// //                 <Zap size={18} className="text-white" />
// //               </div>
// //               <div className="relative z-10">
// //                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Paid Advertising</h4>
// //                 <div className="flex flex-wrap gap-2 text-sm text-white/70">
// //                   <span className="px-3 py-1 rounded-full border border-white/10">Google Ads</span>
// //                   <span className="px-3 py-1 rounded-full border border-white/10">Meta Ads</span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== APPROACH SECTION ===== */}
// //       <section className="py-32 bg-[#234B2E]/20 border-y border-white/5 relative">
// //         <div className="container mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-20">
// //             <div className="sticky top-32 h-fit">
// //               <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our Approach</h2>
// //               <p className="text-xl text-white/60 font-light max-w-md">A methodical, data-driven process designed to eliminate guesswork and scale your brand predictably.</p>
// //             </div>

// //             <div className="space-y-12">
// //               {APPROACH_STEPS.map((step, idx) => (
// //                 <motion.div key={idx} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: customEase }}
// //                   className="flex gap-8 group"
// //                 >
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-16 h-16 rounded-full border border-white/20 bg-[#1A3F22] flex items-center justify-center text-white text-xl font-light group-hover:border-white transition-colors duration-500">
// //                       0{step.step}
// //                     </div>
// //                     {idx !== APPROACH_STEPS.length - 1 && (
// //                       <div className="w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent my-4" />
// //                     )}
// //                   </div>
// //                   <div className="pb-12">
// //                     <h3 className="text-3xl font-medium text-white mb-4 whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{step.title}</h3>
// //                     <p className="text-lg text-white/70 font-light leading-relaxed">{step.description}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== AI VISIBILITY TEASER SECTION ===== */}
// //       <section className="py-32 relative overflow-hidden">
// //         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[100px] pointer-events-none" />

// //         <div className="container mx-auto px-6 relative z-10">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
// //             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
// //                 <Sparkles size={16} className="text-[#00d4ff]" />
// //                 <span className="text-[#00d4ff] text-sm font-semibold tracking-wide uppercase">Free AI Visibility Audit</span>
// //               </div>
              
// //               <h2 className="text-5xl lg:text-6xl font-medium mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// //                 How Visible Is Your Brand in <span className="text-[#00d4ff] italic">AI Search?</span>
// //               </h2>
              
// //               <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-lg font-light">
// //                 Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing Copilot, and Claude in just 30 seconds.
// //               </p>
              
// //               <Link href="/ai-visibility" className="inline-flex items-center gap-4 px-8 py-4 bg-[#00d4ff] text-[#1A3F22] rounded-full font-medium hover:bg-white transition-colors duration-300">
// //                 Check Your Score For Free
// //                 <ArrowRight size={18} />
// //               </Link>
// //             </motion.div>

// //             <motion.div initial={{ opacity: 0, rotateY: 15, x: 50 }} whileInView={{ opacity: 1, rotateY: 0, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="w-full max-w-md mx-auto perspective-1000">
// //               <div className="bg-[#1A3F22]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// //                 <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
// //                   <div className="flex items-center gap-2">
// //                     <Search size={14} className="text-[#00d4ff]" />
// //                     <span className="text-sm font-medium text-white">AI Visibility Check</span>
// //                   </div>
// //                   <div className="flex gap-1.5">
// //                     <div className="w-2 h-2 rounded-full bg-white/20" />
// //                     <div className="w-2 h-2 rounded-full bg-white/20" />
// //                     <div className="w-2 h-2 rounded-full bg-white/20" />
// //                   </div>
// //                 </div>

// //                 <div className="p-10 flex flex-col items-center">
// //                   <div className="relative w-64 h-32 mb-4">
// //                     <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-lg">
// //                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" />
// //                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_1.5s_ease-out_forwards]" />
// //                       <g className="origin-[50px_50px] rotate-[41deg] transition-transform duration-1000 ease-out">
// //                         <line x1="50" y1="50" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
// //                         <circle cx="50" cy="50" r="4" fill="#1A3F22" stroke="#00d4ff" strokeWidth="2" />
// //                       </g>
// //                     </svg>
// //                     <div className="absolute bottom-0 left-0 text-xs text-white/40 font-medium">Invisible</div>
// //                     <div className="absolute bottom-0 right-0 text-xs text-white/40 font-medium">Excellent</div>
// //                   </div>

// //                   <div className="text-center mb-8">
// //                     <div className="flex items-baseline justify-center gap-1">
// //                       <span className="text-6xl font-light text-white tracking-tighter">73</span>
// //                       <span className="text-xl text-white/40 font-medium">/100</span>
// //                     </div>
// //                     <p className="text-[#00d4ff] font-medium mt-1 uppercase tracking-widest text-sm">Good Visibility</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== FAQ SECTION ===== */}
// //       <section className="py-32 bg-[#234B2E]/20 border-y border-white/5">
// //         <div className="container mx-auto px-6">
// //           <div className="mb-16 text-center">
// //             <h2 className="text-5xl font-medium text-white" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
// //           </div>
// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto space-y-4">
// //             {FAQS.map((faq, idx) => (
// //               <details key={idx} className="group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl cursor-pointer">
// //                 <summary className="flex items-center justify-between p-6 list-none font-medium text-lg outline-none text-white">
// //                   {faq.q}
// //                   <span className="transition-transform duration-300 group-open:rotate-45 text-white/50 text-2xl font-light">+</span>
// //                 </summary>
// //                 <div className="px-6 pb-6 text-white/60 font-light leading-relaxed">
// //                   {faq.a}
// //                 </div>
// //               </details>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ===== CTA SECTION ===== */}
// //       <section className="py-32 relative overflow-hidden">
// //         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
// //           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}>
// //             <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Ready to Transform Your Digital Presence?
// //             </h2>
// //             <p className="text-white/70 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
// //               Join 5000+ brands that have achieved remarkable growth with Marketly. Let's build your winning strategy today.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
// //               <Link href="/contact" className="px-10 py-5 bg-white text-[#1A3F22] rounded-full font-medium text-lg hover:bg-white/90 transition-colors duration-500 w-full sm:w-auto shadow-xl">
// //                 Schedule a Consultation
// //               </Link>
// //               <Link href="/about" className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors duration-500 w-full sm:w-auto">
// //                 View Case Studies
// //               </Link>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }

// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ArrowRight, TrendingUp, Zap, Search, Sparkles, Play } from 'lucide-react';
// import Link from 'next/link';
// import { useRef, useState, useEffect } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import ApproachStep from '@/components/ApproachStep';
// import FaqItem from '@/components/FaqItem';
// import SectionHeader from '@/components/SectionHeader';
// import CTASection from '@/components/CTASection';

// // --- STRICTLY PRESERVED CONTENT ---
// const APPROACH_STEPS = [
//   { icon: TrendingUp, step: 1, title: 'Strategic Planning\n& Goal Setting', description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.', index: 0 },
//   { icon: Zap, step: 2, title: 'Tailored Campaign\nExecution', description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.', index: 1 },
//   { icon: Search, step: 3, title: 'Constant Monitoring\n& Optimization', description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.', index: 2 },
// ];

// const FAQS = [
//   { q: 'What digital marketing services does Marketly offer?', a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).' },
//   { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.' },
//   { q: 'Do you work with small businesses and startups?', a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.' },
//   { q: 'Is my business data safe with Marketly?', a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.' },
//   { q: 'How do I get started with Marketly?', a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours." },
//   { q: 'What makes Marketly different from other agencies?', a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.' },
// ];

// const portfolioImages = [
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
// ];

// const clientLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
// ];

// const customEase = [0.16, 1, 0.3, 1];

// export default function Home() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* ===== IMMERSIVE HERO SECTION (Completely Redesigned) ===== */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
//         {/* Dynamic Dark Gradient Background using your Green */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#1A3F22]/40 via-[#0a160d] to-[#0a160d] z-0" />
        
//         {/* Abstract Glowing Aura */}
//         <motion.div 
//           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D99201]/10 rounded-full blur-[120px] pointer-events-none z-0"
//         />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-5xl mx-auto text-center">
            
//             <motion.div 
//               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8"
//             >
//               <Sparkles size={14} className="text-[#D99201]" />
//               <span className="text-xs font-medium tracking-widest uppercase text-[#D99201]">Premium Digital Agency</span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: customEase }}
//               className="text-6xl md:text-8xl lg:text-[100px] font-medium leading-[1.05] tracking-tight mb-8"
//               style={{ fontFamily: 'var(--font-serif)' }}
//             >
//               Confused about <br className="hidden md:block" />
//               <span className="italic text-white/50">your digital</span>{' '}
//               <span className="text-[#D99201] relative inline-block">
//                 marketing?
//                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D99201] opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
//                   <path d="M0 10 Q 50 20 100 0" fill="none" stroke="currentColor" strokeWidth="3" />
//                 </svg>
//               </span>
//             </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }}
//               className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12"
//             >
//               We've got you covered! From strategy to execution, our expert team guides you through every step of your marketing journey.
//             </motion.p>

//             <motion.div 
//               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: customEase }}
//               className="flex flex-col sm:flex-row items-center justify-center gap-6"
//             >
//               <Link href="/contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#D99201] text-[#0a160d] rounded-full overflow-hidden w-full sm:w-auto">
//                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
//                 <span className="relative font-bold text-lg transition-colors duration-500">Start Your Strategy</span>
//                 <div className="relative w-8 h-8 rounded-full bg-[#0a160d]/10 flex items-center justify-center group-hover:bg-[#0a160d]/5 transition-colors duration-500">
//                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </Link>

//               <button className="group inline-flex items-center gap-4 px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-all w-full sm:w-auto backdrop-blur-sm">
//                 <Play size={18} className="text-[#D99201] group-hover:scale-110 transition-transform" />
//                 See Our Work
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Cinematic Dashboard Reveal (Replaces the Orbital Graphic) */}
//         <motion.div style={{ y, opacity }} className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-20 hidden lg:block perspective-[2000px]">
//           <div className="w-full h-[400px] bg-[#1A3F22]/40 backdrop-blur-2xl border-t border-l border-r border-[#D99201]/30 rounded-t-[2.5rem] shadow-[0_-20px_80px_rgba(0,0,0,0.8)] overflow-hidden transform rotateX-[20deg] translateZ(100px)">
//             <img src="/confused1.jpg" alt="Dashboard" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0a160d] via-transparent to-transparent" />
//           </div>
//         </motion.div>
//       </section>

//       {/* ===== EDITORIAL STATS & LOGOS ===== */}
//       <section className="py-20 bg-[#0a160d] relative z-30 border-t border-white/5">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
//             {[
//               { end: '5000+', label: 'Brands Served' },
//               { end: '13+', label: 'Years Experience' },
//               { end: '99%', label: 'Client Satisfaction' },
//             ].map((stat, idx) => (
//               <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} 
//                 className="flex flex-col items-center justify-center text-center border-r last:border-0 border-white/10"
//               >
//                 <div className="text-5xl md:text-6xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{stat.end}</div>
//                 <div className="text-sm tracking-[0.2em] uppercase text-[#D99201] font-bold">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="relative flex overflow-x-hidden border-y border-white/5 py-10 bg-[#1A3F22]/10">
//             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a160d] to-transparent z-10" />
//             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a160d] to-transparent z-10" />
//             <motion.div className="flex gap-20 px-10 items-center w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
//               {[...clientLogos, ...clientLogos].map((logo, idx) => (
//                 <img key={idx} src={logo} alt="Client" className="h-10 w-auto opacity-30 hover:opacity-100 transition-opacity duration-500" />
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== THE NEW BENTO SERVICES GRID ===== */}
//       <section className="py-32 bg-[#0a160d] relative">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,63,34,0.1)_0%,transparent_100%)] pointer-events-none" />
//         <div className="container mx-auto px-6 relative z-10">
//           <SectionHeader title="Our Services" subtitle="A suite of elite digital solutions to scale your business." />
          
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
//             {/* Massive Image Bento */}
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 row-span-2 relative rounded-[2rem] overflow-hidden group border border-[#2D5A35]">
//               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Strategy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0a160d] via-[#1A3F22]/60 to-transparent" />
//               <div className="absolute bottom-12 left-12">
//                 <p className="text-[#D99201] text-sm font-bold tracking-[0.2em] uppercase mb-4">Core Strategy</p>
//                 <h3 className="text-5xl font-medium text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>Driving Digital <br/> Excellence</h3>
//               </div>
//             </motion.div>

//             {/* Service Module 1 */}
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
//               className="md:col-span-4 row-span-1 bg-[#1A3F22]/30 backdrop-blur-xl border border-[#2D5A35] rounded-[2rem] p-10 hover:bg-[#1A3F22]/50 transition-colors flex flex-col justify-between group"
//             >
//               <div className="w-14 h-14 rounded-full bg-[#D99201]/10 flex items-center justify-center border border-[#D99201]/20 group-hover:bg-[#D99201] transition-colors duration-500">
//                 <TrendingUp size={24} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
//               </div>
//               <div>
//                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Digital Marketing</h4>
//                 <p className="text-white/50 text-sm font-light leading-relaxed">End-to-end SEO, Social Media, and Performance marketing built for scale.</p>
//               </div>
//             </motion.div>

//             {/* Service Module 2 */}
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} 
//               className="md:col-span-4 row-span-1 bg-gradient-to-br from-[#1A3F22] to-[#0a160d] border border-[#2D5A35] rounded-[2rem] p-10 hover:border-[#D99201]/50 transition-colors flex flex-col justify-between group relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99201]/10 blur-3xl rounded-full" />
//               <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 relative z-10">
//                 <Zap size={24} className="text-[#D99201]" />
//               </div>
//               <div className="relative z-10">
//                 <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Paid Advertising</h4>
//                 <p className="text-white/50 text-sm font-light leading-relaxed">Laser-targeted Google, Meta, and LinkedIn ads optimizing your ROI.</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== VERTICAL TIMELINE APPROACH (Luxury Redesign) ===== */}
//       <section className="py-32 bg-[#0a160d] border-y border-white/5 relative">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-20">
//             <div className="sticky top-32 h-fit">
//               <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our Methodology</h2>
//               <p className="text-xl text-white/50 font-light max-w-md">A methodical, data-driven process designed to eliminate guesswork and scale your brand predictably.</p>
//             </div>

//             <div className="space-y-16">
//               {APPROACH_STEPS.map((step, idx) => (
//                 <motion.div key={idx} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: customEase }}
//                   className="relative pl-12 md:pl-20"
//                 >
//                   {/* Glowing Node */}
//                   <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a160d] border border-[#D99201] flex items-center justify-center text-[#D99201] shadow-[0_0_20px_rgba(217,146,1,0.2)]">
//                     <step.icon size={20} />
//                   </div>
//                   {/* Connecting Line */}
//                   {idx !== APPROACH_STEPS.length - 1 && (
//                     <div className="absolute top-16 left-6 md:left-8 w-[1px] h-[calc(100%+2rem)] bg-gradient-to-b from-[#D99201]/50 to-transparent" />
//                   )}
                  
//                   <div className="pt-2">
//                     <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#D99201]">Phase 0{step.step}</div>
//                     <h3 className="text-3xl font-medium text-white mb-4 whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{step.title}</h3>
//                     <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== MAC OS GLASS AI TOOL (Your Cyan Integration) ===== */}
//       <section className="py-32 relative overflow-hidden bg-[#0a160d]">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="bg-[#1A3F22]/20 backdrop-blur-3xl border border-[#00d4ff]/30 rounded-[2.5rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 shadow-[0_30px_100px_rgba(0,212,255,0.05)]">
            
//             <div className="flex-1">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-8 text-[#00d4ff] text-xs font-bold tracking-widest uppercase">
//                 <Sparkles size={14} /> Free AI Visibility Audit
//               </div>
//               <h2 className="text-5xl lg:text-6xl font-medium mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//                 How Visible Is Your Brand in <span className="text-[#00d4ff] italic">AI Search?</span>
//               </h2>
//               <p className="text-lg text-white/60 font-light mb-10 max-w-lg leading-relaxed">
//                 Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing Copilot, and Claude in just 30 seconds.
//               </p>
//               <Link href="/ai-visibility" className="inline-flex items-center gap-4 px-8 py-4 bg-[#00d4ff] text-[#0a160d] rounded-full font-bold text-lg hover:bg-white transition-colors duration-300">
//                 Check Your Score For Free
//               </Link>
//             </div>

//             <motion.div initial={{ opacity: 0, rotateY: -15, x: 50 }} whileInView={{ opacity: 1, rotateY: 0, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="flex-1 w-full max-w-md perspective-[1000px]">
//               <div className="bg-[#050a06] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
//                 {/* macOS Style Header */}
//                 <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
//                   <div className="w-3 h-3 rounded-full bg-white/20" />
//                   <div className="w-3 h-3 rounded-full bg-white/20" />
//                   <div className="w-3 h-3 rounded-full bg-white/20" />
//                 </div>
                
//                 <div className="p-12 flex flex-col items-center">
//                   <div className="relative w-56 h-28 mb-8">
//                     <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
//                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" strokeLinecap="round" />
//                       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_2s_ease-out_forwards]" />
//                       <g className="origin-[50px_50px] rotate-[41deg]">
//                         <circle cx="50" cy="50" r="4" fill="#00d4ff" className="animate-pulse" />
//                       </g>
//                     </svg>
//                   </div>
//                   <div className="flex items-baseline gap-2 mb-2">
//                     <span className="text-7xl font-light text-white tracking-tighter">73</span>
//                     <span className="text-2xl text-white/30 font-light">/100</span>
//                   </div>
//                   <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-bold">Good Visibility</p>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ===== EDITORIAL FAQ ===== */}
//       <section className="py-32 bg-[#0a160d]">
//         <div className="container mx-auto px-6 max-w-4xl">
//           <SectionHeader title="Frequently Asked Questions" />
//           <div className="mt-16 space-y-4">
//             {FAQS.map((faq, idx) => (
//               <details key={idx} className="group bg-[#1A3F22]/20 border border-[#2D5A35] rounded-2xl cursor-pointer hover:bg-[#1A3F22]/40 transition-colors">
//                 <summary className="flex items-center justify-between p-8 list-none font-medium text-xl text-white outline-none" style={{ fontFamily: 'var(--font-serif)' }}>
//                   {faq.q}
//                   <span className="transition-transform duration-300 group-open:rotate-45 text-[#D99201] text-3xl font-light">+</span>
//                 </summary>
//                 <div className="px-8 pb-8 text-white/60 font-light text-lg leading-relaxed">
//                   {faq.a}
//                 </div>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Ready to Transform Your Digital Presence?"
//         description="Join 5000+ brands that have achieved remarkable growth with Marketly. Let's build your winning strategy today."
//         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
//       />

//       <Footer />
//     </div>
//   );
// }

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {Rocket, Megaphone, Smartphone, Trophy, ArrowRight, TrendingUp, Zap, Search, Sparkles, Play, ChevronRight, CheckCircle2, Activity, Award, BarChart3, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApproachStep from '@/components/ApproachStep';
import FaqItem from '@/components/FaqItem';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

// --- STRICTLY PRESERVED CONTENT ---
const APPROACH_STEPS = [
  { icon: TrendingUp, step: 1, title: 'Strategic Planning\n& Goal Setting', description: 'We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.', index: 0 },
  { icon: Zap, step: 2, title: 'Tailored Campaign\nExecution', description: 'Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.', index: 1 },
  { icon: Search, step: 3, title: 'Constant Monitoring\n& Optimization', description: 'We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.', index: 2 },
];

const FAQS = [
  { q: 'What digital marketing services does Marketly offer?', a: 'We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).' },
  { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.' },
  { q: 'Do you work with small businesses and startups?', a: 'Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.' },
  { q: 'Is my business data safe with Marketly?', a: 'Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.' },
  { q: 'How do I get started with Marketly?', a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours." },
  { q: 'What makes Marketly different from other agencies?', a: 'We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.' },
];

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
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
];

const customEase = [0.16, 1, 0.3, 1];

// const customEase = [0.16, 1, 0.3, 1];

  const floatingBadges = [
    { text: 'SEO Mastery', angle: 0 },
    { text: 'Social Growth', angle: 45 },
    { text: 'Paid Ads ROI', angle: 90 },
    { text: 'Brand Strategy', angle: 135 },
    { text: 'Analytics', angle: 180 },
    { text: 'Content Power', angle: 225 },
    { text: 'Conversion Focus', angle: 270 },
    { text: 'Market Leaders', angle: 315 },
  ];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  const PILLARS = [
    {
      icon: Activity,
      title: 'Organic Traffic',
      desc: 'Attract high-intent visitors actively searching for your solutions without paying for every single click.',
      color: 'from-[#00d4ff] to-[#3b82f6]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]'
    },
    {
      icon: Smartphone,
      title: 'User Experience',
      desc: 'Deliver lightning-fast, intuitive, and highly-optimized digital experiences that keep users engaged.',
      color: 'from-[#4ade80] to-[#10b981]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]'
    },
    {
      icon: Megaphone,
      title: 'Brand Awareness',
      desc: 'Establish undeniable authority and trust by consistently dominating the top of search engine results.',
      color: 'from-[#D99201] to-[#fcd34d]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(217,146,1,0.2)]'
    },
    {
      icon: Trophy,
      title: 'Competitive Edge',
      desc: 'Outrank industry rivals and capture significant market share before they even know what happened.',
      color: 'from-[#ec4899] to-[#ef4444]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
    }
  ];
  const projects = [
    {
      title: "Data-Driven SEO Scaling",
      category: "Search Visibility",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Analytics/Charts
    },
    {
      title: "Global Brand Strategy",
      category: "Brand Identity",
      imgUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", // Team Strategy
    },
    {
      title: "High-Converting UI/UX",
      category: "Web Design",
      imgUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", // Creative/Design
    },
    {
      title: "Social Media Domination",
      category: "Paid Social Media",
      imgUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop", // Mobile/Social
    },
    {
      title: "E-Commerce Funnel Optimization",
      category: "Conversion Rate",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Data/Screen
    },
    {
      title: "B2B Lead Generation",
      category: "Content Marketing",
      imgUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop", // Workspace/Planning
    }
  ];
  

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
      <Header />

      {/* ===== IMMERSIVE HERO SECTION ===== */}
<section className="relative min-h-screen bg-[#050a06] overflow-hidden flex items-center z-0">
      
      {/* Premium Cinematic Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D99201]/15 rounded-full blur-[160px] pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#1A3F22]/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3 mix-blend-screen" />
      
      {/* Subtle Noise / Grid Texture for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: customEase }}
            className="space-y-12"
          >
            <div className="space-y-8 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 1, ease: customEase }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D99201]/30 bg-gradient-to-r from-[#D99201]/10 to-transparent backdrop-blur-md shadow-[0_0_20px_rgba(217,146,1,0.05)]"
              >
                <Sparkles size={14} className="text-[#D99201]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">Elite Digital Agency</span>
              </motion.div>

              {/* UPDATED FONT STYLE: Applying the serif font from previous sections */}
              <h1 
                className="text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] text-white tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Confused about <br />
                <span className="font-light italic text-white/50 pr-2">your digital</span>{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d]">
                  marketing?
                  {/* Decorative underline */}
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#D99201]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 20 100 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-lg">
                We've got you covered. From overarching strategy to precise execution, our expert team guides you through every step of your digital journey.
              </p>
            </div>

            {/* Premium Glassmorphic Stats Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: customEase }}
              className="grid grid-cols-3 gap-6 p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D99201]/0 via-[#D99201]/5 to-[#D99201]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {[
                { end: '5,000', label: 'Brands Served', suffix: '+' },
                { end: '13', label: 'Years Exp.', suffix: '+' },
                { end: '99', label: 'Satisfaction', suffix: '%' },
              ].map((stat, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center md:items-start">
                  {idx !== 0 && <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />}
                  <div className="text-3xl md:text-4xl font-light text-white tracking-tight flex items-baseline gap-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    {stat.end}<span className="text-xl md:text-2xl text-[#D99201] font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-white/40 mt-2 uppercase tracking-[0.15em] font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Elevated CTA */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-5 px-2 py-2 pr-8 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-[#D99201]/50"
              >
                {/* Glowing orb inside button */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D99201] to-[#b07600] flex items-center justify-center shadow-[0_0_20px_rgba(217,146,1,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <ArrowRight size={20} className="text-[#050a06] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="font-semibold text-lg tracking-wide group-hover:text-[#D99201] transition-colors">Start Your Strategy</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* --- RIGHT VISUAL (The Grand Orbit) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: customEase }}
            className="relative w-full aspect-square max-w-[550px] mx-auto lg:ml-auto mt-10 lg:mt-0"
          >
            {/* Multi-layered rotating geometric rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Ring - Clockwise */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute w-full h-full border border-dashed border-white/10 rounded-full" />
              
              {/* Middle Ring - Counter Clockwise */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute w-[75%] h-[75%] border-[0.5px] border-[#D99201]/20 rounded-full flex items-center justify-center">
                <div className="absolute top-0 w-2 h-2 bg-[#D99201] rounded-full shadow-[0_0_15px_rgba(217,146,1,0.8)] -translate-y-1/2" />
              </motion.div>
              
              {/* Inner Ring - Clockwise */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute w-[50%] h-[50%] border-[0.5px] border-white/5 rounded-full flex items-center justify-center">
                <div className="absolute bottom-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] translate-y-1/2" />
              </motion.div>
            </div>

            {/* Floating Glass Badges (Dynamically positioned around a circle) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              {floatingBadges.map((item, idx) => {
                // Responsive orbit radius: 240px for desktop, smaller for mobile
                const radius = "min(42vw, 260px)"; 
                return (
                  <div
                    key={idx}
                    className="absolute z-20"
                    style={{
                      transform: `rotate(${item.angle}deg) translateY(calc(-1 * ${radius})) rotate(-${item.angle}deg)`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="pointer-events-auto bg-[#0a120c]/80 backdrop-blur-xl border border-[#D99201]/30 rounded-full px-5 py-2.5 text-[10px] md:text-xs font-bold text-[#D99201] tracking-[0.1em] uppercase whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-[#D99201] hover:shadow-[0_0_20px_rgba(217,146,1,0.2)] transition-colors"
                    >
                      {item.text}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Center Masterpiece Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-56 md:w-80 md:h-80 group"
              >
                {/* Glowing Outer Aura */}
                <div className="absolute -inset-4 bg-[#D99201]/20 rounded-full blur-2xl group-hover:bg-[#D99201]/30 transition-colors duration-700" />
                
                {/* Premium Bezel */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D99201] via-[#1A3F22] to-[#D99201]/50 p-[3px] shadow-[0_0_50px_rgba(217,146,1,0.15)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#050a06] relative border-4 border-[#050a06]">
                    
                    {/* The Image */}
                    <img 
                      src="/confused1.jpg" 
                      alt="Marketing Strategy" 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    
                    {/* Inner Vignette / Shadow */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(5,10,6,0.9)] pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>

      {/* ===== EDITORIAL STATS & LOGOS ===== */}
      <section className="py-20 bg-[#0a160d] relative z-30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            {[
              { end: '5000+', label: 'Brands Served' },
              { end: '13+', label: 'Years Experience' },
              { end: '99%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} 
                className="flex flex-col items-center justify-center text-center border-r last:border-0 border-white/10"
              >
                <div className="text-5xl md:text-6xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{stat.end}</div>
                <div className="text-sm tracking-[0.2em] uppercase text-[#D99201] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex overflow-x-hidden border-y border-white/5 py-10 bg-[#1A3F22]/10">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a160d] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a160d] to-transparent z-10" />
            <motion.div className="flex gap-20 px-10 items-center w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <img key={idx} src={logo} alt="Client" className="h-10 w-auto opacity-30 hover:opacity-100 transition-opacity duration-500" />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== THE BENTO SERVICES GRID ===== */}
      <section className="py-32 bg-[#0a160d] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,63,34,0.1)_0%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Our Services" subtitle="A suite of elite digital solutions to scale your business." />
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
            {/* Massive Image Bento */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 row-span-2 relative rounded-[2rem] overflow-hidden group border border-[#2D5A35]">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Strategy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a160d] via-[#1A3F22]/60 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <p className="text-[#D99201] text-sm font-bold tracking-[0.2em] uppercase mb-4">Core Strategy</p>
                <h3 className="text-5xl font-medium text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>Driving Digital <br/> Excellence</h3>
              </div>
            </motion.div>

            {/* Service Module 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
              className="md:col-span-4 row-span-1 bg-[#1A3F22]/30 backdrop-blur-xl border border-[#2D5A35] rounded-[2rem] p-10 hover:bg-[#1A3F22]/50 transition-colors flex flex-col justify-between group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D99201]/10 flex items-center justify-center border border-[#D99201]/20 group-hover:bg-[#D99201] transition-colors duration-500">
                <TrendingUp size={24} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
              </div>
              <div>
                <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Digital Marketing</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">End-to-end SEO, Social Media, and Performance marketing built for scale.</p>
              </div>
            </motion.div>

            {/* Service Module 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} 
              className="md:col-span-4 row-span-1 bg-gradient-to-br from-[#1A3F22] to-[#0a160d] border border-[#2D5A35] rounded-[2rem] p-10 hover:border-[#D99201]/50 transition-colors flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99201]/10 blur-3xl rounded-full" />
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 relative z-10">
                <Zap size={24} className="text-[#D99201]" />
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Paid Advertising</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">Laser-targeted Google, Meta, and LinkedIn ads optimizing your ROI.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO GRID (RESTORED MISSING SECTION) ===== */}
      <section className="py-32 bg-[#1A3F22]/10 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Our Work in Action</h2>
              <p className="text-white/50 text-lg font-light">Explore our recent projects and successful campaigns</p>
            </div>
            <Link href="/services" className="text-[#D99201] font-bold hover:text-white transition-colors flex items-center gap-2 tracking-wide uppercase text-sm">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((imgUrl, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-[#0a160d] border border-[#2D5A35] rounded-[1.5rem] overflow-hidden shadow-xl aspect-video sm:aspect-square lg:aspect-[4/3]"
              >
                <img src={imgUrl} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a160d] via-[#0a160d]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-1">Case Study</p>
                  <p className="text-white text-sm font-medium">View Project Details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY SEO MATTERS SECTION (RESTORED MISSING SECTION) ===== */}
<section className="py-32 bg-[#050a06] relative overflow-hidden z-10 border-t border-white/5">
      
      {/* Ambient Deep Space Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionHeader 
          title={
            <>
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">Digital Marketing</span> Matters
            </>
          } 
          subtitle="The strategic advantages of dominating the digital landscape." 
        />

        {/* The Central "Propulsion" Grid */}
        <div className="relative mt-24">
          
          {/* Connecting Lines (Visible on Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

          {/* Center Orb (The "Rocket" Hub) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border border-[#D99201]/30 animate-ping opacity-50" />
            <div className="absolute -inset-4 rounded-full border border-[#D99201]/10 animate-[spin_10s_linear_infinite]" />
            
            {/* Core Element */}
            <div className="w-24 h-24 bg-[#0a120c] border border-[#D99201]/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,146,1,0.2)] backdrop-blur-xl group cursor-default">
              <motion.div 
                animate={{ y: [-2, 2, -2] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket size={32} className="text-[#D99201] group-hover:-translate-y-2 transition-transform duration-500" />
              </motion.div>
            </div>
          </div>

          {/* 2x2 Grid for the Pillars */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-x-24 md:gap-y-16 relative z-10">
            {PILLARS.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1, duration: 0.8, ease: customEase }}
                className={`bg-[#050a06]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/5 transition-all duration-500 group overflow-hidden relative ${pillar.glow} hover:border-white/10`}
              >
                {/* Background Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                <div className="flex items-start gap-6">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-20`} />
                    <pillar.icon size={24} className="text-white relative z-10" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="pt-1">
                    <h3 className="text-2xl font-medium mb-3 text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-white/40 font-light text-sm md:text-base leading-relaxed group-hover:text-white/60 transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>

      {/* ===== VERTICAL TIMELINE APPROACH ===== */}
      <section className="py-32 bg-[#0a160d] border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="sticky top-32 h-fit">
              <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our Methodology</h2>
              <p className="text-xl text-white/50 font-light max-w-md">A methodical, data-driven process designed to eliminate guesswork and scale your brand predictably.</p>
            </div>

            <div className="space-y-16">
              {APPROACH_STEPS.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: customEase }}
                  className="relative pl-12 md:pl-20"
                >
                  <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a160d] border border-[#D99201] flex items-center justify-center text-[#D99201] shadow-[0_0_20px_rgba(217,146,1,0.2)]">
                    <step.icon size={20} />
                  </div>
                  {idx !== APPROACH_STEPS.length - 1 && (
                    <div className="absolute top-16 left-6 md:left-8 w-[1px] h-[calc(100%+2rem)] bg-gradient-to-b from-[#D99201]/50 to-transparent" />
                  )}
                  
                  <div className="pt-2">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#D99201]">Phase 0{step.step}</div>
                    <h3 className="text-3xl font-medium text-white mb-4 whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{step.title}</h3>
                    <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SHOWCASE SECTION (RESTORED MISSING SECTION) ===== */}
<section className="bg-[#050a06] py-32 relative z-10 overflow-hidden border-t border-white/5">
      
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_15%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Premium Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D99201]/30 bg-gradient-to-r from-[#D99201]/10 to-transparent backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">Our Masterpieces</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">Campaigns</span>
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Explore how we combine data-driven strategy with breathtaking creative to deliver measurable growth for our partners.
            </p>
          </motion.div>

          {/* View All Button aligned to the right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: customEase }}
            className="shrink-0"
          >
            <Link 
              href="/portfolio" 
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold overflow-hidden transition-all hover:border-[#D99201]/50 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D99201]/0 via-[#D99201]/20 to-[#D99201]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 tracking-[0.1em] uppercase text-sm">View Full Portfolio</span>
            </Link>
          </motion.div>
        </div>

        {/* Staggered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pb-16">
          {projects.map((project, index) => {
            // Create the staggered effect: Middle column is pushed down on large screens
            const isMiddleColumn = index % 3 === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: customEase }}
                className={`group relative ${isMiddleColumn ? 'lg:translate-y-16' : ''}`}
              >
                <Link href={`/portfolio/${index}`} className="block relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#0a120c] border border-white/5 shadow-2xl">
                  
                  {/* Image with slow cinematic zoom */}
                  <img 
                    src={project.imgUrl} 
                    alt={project.title} 
                    className="w-full h-full object-fill opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />

                  {/* Dual Gradient Overlays for perfect text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-[#050a06]/40 to-transparent opacity-90 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 bg-[#D99201]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                      
                      {/* Category Badge */}
                      <p className="text-[#D99201] text-xs font-bold uppercase tracking-[0.2em] mb-4 drop-shadow-md">
                        {project.category}
                      </p>
                      
                      {/* Title & Arrow Container */}
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="text-white text-3xl font-medium tracking-tight leading-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                          {project.title}
                        </h3>
                        
                        {/* Animated Arrow Icon */}
                        <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D99201] group-hover:text-[#050a06] group-hover:border-[#D99201] transition-all duration-500 group-hover:-rotate-12">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Glowing Hover Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D99201]/40 rounded-[2.5rem] transition-colors duration-700 z-30 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
    
      {/* ===== PARTNER & CERTIFICATIONS (BASED ON UPLOADED SAAS IMAGE) ===== */}
<section className="bg-[#0a160d] py-32 relative overflow-hidden z-10 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D99201]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Certified Excellence" subtitle="Your data is protected, 100% confidential and secure" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Google Partner Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative group h-full">
              {/* Glowing Border effect based on Image */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-[#ea4335] via-[#fbbc05] to-[#34a853] rounded-[2.5rem] blur-[8px] opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative bg-[#0c1611] border border-[#2D5A35] rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col z-10">
                 <div className="flex justify-between items-start mb-12">
                   
                   {/* UPDATED: Google Image Icon */}
                   <div className="w-20 h-20 bg-white rounded-[1.2rem] flex items-center justify-center shadow-lg p-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                        alt="Google Logo" 
                        className="w-full h-full object-contain"
                      />
                   </div>

                   <div className="text-right">
                      <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">STATUS</p>
                      <span className="bg-[#4285f4]/10 text-[#4285f4] text-xs font-bold px-4 py-2 rounded-full border border-[#4285f4]/20">Premier Partner</span>
                   </div>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Google Partner</h3>
                 <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">Certified Google Ads Partner with proven expertise in managing high-performing campaigns across search, display, and video channels.</p>
                 <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D99201] transition-colors mt-2">
                     View Specs <ChevronRight size={16}/>
                   </Link>
                 </div>
              </div>
            </motion.div>

            {/* Meta Partner Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative group h-full">
              {/* Glowing Border effect based on Image */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-[#00d4ff] to-blue-600 rounded-[2.5rem] blur-[8px] opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative bg-[#0c1611] border border-[#2D5A35] rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col z-10">
                 <div className="flex justify-between items-start mb-12">
                   
                   {/* UPDATED: Meta Image Icon */}
                   <div className="w-20 h-20 bg-white rounded-[1.2rem] flex items-center justify-center shadow-lg p-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                        alt="Meta Logo" 
                        className="w-full h-full object-contain"
                      />
                   </div>

                   <div className="text-right">
                      <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">STATUS</p>
                      <span className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold px-4 py-2 rounded-full border border-[#00d4ff]/20">Business Partner</span>
                   </div>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Meta Partner</h3>
                 <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">Certified Meta Business Partner specializing in Facebook and Instagram advertising with advanced audience targeting capabilities.</p>
                 <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00d4ff] transition-colors mt-2">
                     View Specs <ChevronRight size={16}/>
                   </Link>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== MAC OS GLASS AI TOOL (Your Cyan Integration) ===== */}
<section className="py-32 relative overflow-hidden bg-[#030705]">
      {/* Premium Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00d4ff]/15 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#1A3F22]/20 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />
      
      {/* Subtle Noise Texture for Premium Feel (Optional, using a standard CSS pattern) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Glassmorphic Container */}
        <div className="relative rounded-[3rem] p-1 lg:p-[2px] overflow-hidden group">
          
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/40 via-transparent to-[#2D5A35]/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-[#08120b]/80 backdrop-blur-3xl rounded-[2.8rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 shadow-[0_20px_80px_-20px_rgba(0,212,255,0.15)]">
            
            {/* Left Content */}
            <div className="flex-1 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00d4ff]/20 bg-gradient-to-r from-[#00d4ff]/10 to-transparent mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#00d4ff]" />
                <span className="text-[#00d4ff] text-xs font-bold tracking-[0.2em] uppercase">Free AI Visibility Audit</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-medium mb-8 leading-[1.1] text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                How Visible Is Your Brand in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#4ade80] italic pr-4">
                  AI Search?
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 font-light mb-12 max-w-xl leading-relaxed"
              >
                Discover your AI Visibility Score across ChatGPT, Perplexity, Gemini, and Claude in just 30 seconds. Stop guessing, start dominating.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.3 }}
              >
                <Link href="/ai-visibility" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-[#0a160d] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#4ade80] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  Check Your Score For Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="mt-4 text-sm text-white/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" /> No credit card required.
                </p>
              </motion.div>
            </div>

            {/* Right Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, x: 50 }} 
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, type: "spring", stiffness: 50 }} 
              className="flex-1 w-full max-w-lg perspective-[1200px]"
            >
              <div className="relative group/card">
                {/* Floating Glow Behind Card */}
                <div className="absolute -inset-1 bg-gradient-to-b from-[#00d4ff]/30 to-transparent rounded-3xl blur-2xl opacity-50 group-hover/card:opacity-80 transition-opacity duration-500" />
                
                {/* Card UI */}
                <div className="relative bg-gradient-to-b from-[#0a140d] to-[#040805] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                  
                  {/* MacOS Style Header */}
                  <div className="h-14 bg-white/[0.03] border-b border-white/10 flex items-center justify-between px-6">
                    <div className="flex gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
                      <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
                      <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-mono bg-white/5 px-3 py-1 rounded-full">
                      <Activity className="w-3 h-3 text-[#00d4ff]" /> Scanning target engines...
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-10 flex flex-col items-center">
                    
                    {/* SVG Gauge */}
                    <div className="relative w-64 h-32 mb-8">
                      <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                        <defs>
                          <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" /> {/* Red */}
                            <stop offset="50%" stopColor="#facc15" /> {/* Yellow */}
                            <stop offset="100%" stopColor="#00d4ff" /> {/* Cyan */}
                          </linearGradient>
                        </defs>
                        {/* Background Arc */}
                        <path d="M 5 45 A 40 40 0 0 1 95 45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" />
                        {/* Foreground Animated Arc */}
                        <path d="M 5 45 A 40 40 0 0 1 95 45" fill="none" stroke="url(#gauge-gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="38" className="animate-[dash_2s_ease-out_forwards]" />
                      </svg>
                      
                      {/* Score Display (Absolute Centered inside the arc) */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-6xl font-light text-white tracking-tighter">73</span>
                          <span className="text-xl text-white/30 font-light">/100</span>
                        </div>
                        <p className="text-[#00d4ff] text-[10px] tracking-[0.2em] uppercase font-bold mt-1">Excellent Status</p>
                      </div>
                    </div>

                    {/* Mock Data Rows */}
                    <div className="w-full space-y-3 mt-4">
                      {[
                        { name: "ChatGPT (GPT-4o)", score: "85%", color: "bg-[#00d4ff]" },
                        { name: "Perplexity AI", score: "72%", color: "bg-[#4ade80]" },
                        { name: "Google Gemini", score: "62%", color: "bg-yellow-400" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                            <span className="text-white/80 text-sm font-medium">{item.name}</span>
                          </div>
                          <span className="text-white font-mono text-sm">{item.score}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>

      {/* ===== EDITORIAL FAQ ===== */}
      <section className="py-32 bg-[#0a160d]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-16 space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-[#1A3F22]/20 border border-[#2D5A35] rounded-2xl cursor-pointer hover:bg-[#1A3F22]/40 transition-colors">
                <summary className="flex items-center justify-between p-8 list-none font-medium text-xl text-white outline-none" style={{ fontFamily: 'var(--font-serif)' }}>
                  {faq.q}
                  <span className="transition-transform duration-300 group-open:rotate-45 text-[#D99201] text-3xl font-light">+</span>
                </summary>
                <div className="px-8 pb-8 text-white/60 font-light text-lg leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Join 5000+ brands that have achieved remarkable growth with Marketly. Let's build your winning strategy today."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
      />

      <Footer />
    </div>
  );
}