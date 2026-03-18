// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { Target, Home, Store, Cpu, GraduationCap, Car, Globe, Briefcase, Trophy, ChevronDown, ArrowRight, Sparkles, MessageSquareQuote } from 'lucide-react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';
// // // // import Link from 'next/link';
// // // // import { useState } from 'react';

// // // // const INDUSTRIES = [
// // // //   { icon: Target, title: 'Interior Design', desc: "Consistently ranked non-branded keywords top 3 within 4 months, driving an 80% traffic increase." },
// // // //   { icon: Home, title: 'Real Estate', desc: 'Boosted brand visibility and generated high-quality leads at an optimized cost for site visits.' },
// // // //   { icon: Store, title: 'Retail Store', desc: 'Increased foot traffic by 200% in 3 months. Boosted sales through targeted promotions.' },
// // // //   { icon: Cpu, title: 'Tech Product', desc: 'Generated 20% more leads via niche Google ads and increased traffic by 40% through SEO.' },
// // // //   { icon: GraduationCap, title: 'Edutech', desc: '15% more student inquiries through social media and 30% traffic bump via targeted content.' },
// // // //   { icon: Car, title: 'Automobile', desc: 'Generated a 20% increase in qualified leads in 3 months through Meta ads and local SEO.' },
// // // //   { icon: Globe, title: 'Abroad Consulting', desc: 'Increased student inquiries by 25% within 3 months via multi-channel Meta and Google campaigns.' },
// // // //   { icon: Briefcase, title: 'Hiring Platform', desc: '15% bump in employer registrations via LinkedIn ads. 20% better candidate engagement.' },
// // // //   { icon: Trophy, title: 'Cricket Tournament', desc: 'Reached 1M viewers through live streaming and drove 10% more ticket sales via targeted ads.' },
// // // // ];

// // // // const SERVICES = [
// // // //   { title: 'Digital Marketing', desc: "Digital presence is no longer an option; it's a necessity. Unlock significant growth, increased visibility, and cost-effective marketing opportunities." },
// // // //   { title: 'Web Development', desc: "Own a website that stands out. We build cutting-edge static, dynamic, and e-commerce solutions tailored to your specific needs." },
// // // //   { title: 'SEO', desc: "Get found online. See rankings improve in 30, 60, and 90 days. Aiming for a 60% organic traffic ratio for sustainable growth." },
// // // //   { title: 'SMM', desc: "Grow your brand. We craft engaging social media content that resonates with your audience, builds loyalty, and drives real results." },
// // // //   { title: 'SEM', desc: "Dominate search results. Our SEM strategies drive targeted traffic and craft high-performing campaigns targeting niche markets." },
// // // //   { title: 'Paid Advertisement', desc: "Reach your audience. Run impactful campaigns on Google, Meta, and more. Connect with ideal customers and deliver measurable ROI." },
// // // // ];

// // // // const FAQS = [
// // // //   "How can I measure the ROI of my digital marketing campaigns?",
// // // //   "What are the best digital marketing tools for businesses?",
// // // //   "How to boost brand awareness for a startup?",
// // // //   "What companies need digital marketing?",
// // // //   "Why choose digital marketing agencies in Bangalore?",
// // // //   "How to choose the right digital marketing company in Bangalore?",
// // // //   "How a digital marketing company can enhance your business?",
// // // //   "Is digital Marketing the future?"
// // // // ];

// // // // export default function DigitalMarketingPage() {
// // // //   const [openFaq, setOpenFaq] = useState<number | null>(null);

// // // //   const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* --- HERO SECTION --- */}
// // // //       <section className="relative pt-32 pb-24 px-6 overflow-hidden">
// // // //         {/* Background glow */}
// // // //         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D99201]/10 rounded-full blur-[120px] pointer-events-none" />
        
// // // //         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
// // // //           <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
// // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/10 mb-6 text-[#D99201] text-sm font-semibold tracking-wide">
// // // //               <Sparkles size={16} /> From Strategy to Success
// // // //             </motion.div>
// // // //             <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
// // // //               Maximize Your <span className="text-[#D99201]">Online Presence.</span> Today.
// // // //             </motion.h1>
// // // //             <motion.div variants={fadeUp} className="border-l-4 border-[#D99201] pl-6 mb-8">
// // // //               <h3 className="text-2xl font-bold text-white mb-2">Boost Your Website Traffic by 10X</h3>
// // // //               <p className="text-[#f5f5f5]/70">SEO • Google Ads • Meta Ads • Local Listing & much more</p>
// // // //             </motion.div>
// // // //             <motion.div variants={fadeUp}>
// // // //               <Link href="/audit" className="inline-flex items-center gap-3 px-8 py-4 bg-[#D99201] text-[#1A3F22] rounded-full font-bold text-lg hover:bg-[#E5A828] transition-all group">
// // // //                 Get a Free Audit <ArrowRight className="group-hover:translate-x-1 transition-transform" />
// // // //               </Link>
// // // //             </motion.div>
// // // //           </motion.div>
          
// // // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
// // // //             <div className="absolute inset-0 bg-gradient-to-tr from-[#234B2E] to-transparent rounded-3xl transform rotate-3 scale-105" />
// // // //             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard Strategy" className="relative rounded-3xl shadow-2xl border border-[#2D5A35]" />
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- PREMIUM INDUSTRIES BENTO GRID --- */}
// // // //       <section className="py-24 px-6 bg-[#234B2E] border-y border-[#2D5A35]">
// // // //         <div className="container mx-auto">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Industries We <span className="text-[#D99201]">Dominate</span></h2>
// // // //             <p className="text-[#f5f5f5]/70 max-w-2xl mx-auto">Tailored growth strategies that have generated millions in revenue across diverse sectors.</p>
// // // //           </div>
          
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {INDUSTRIES.map((ind, idx) => (
// // // //               <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="bg-[#1A3F22] p-8 rounded-2xl border border-[#2D5A35] hover:border-[#D99201]/50 transition-all group hover:-translate-y-1">
// // // //                 <div className="w-12 h-12 bg-[#234B2E] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D99201] transition-colors">
// // // //                   <ind.icon size={24} className="text-[#D99201] group-hover:text-[#1A3F22]" />
// // // //                 </div>
// // // //                 <h4 className="text-xl font-bold mb-3">{ind.title}</h4>
// // // //                 <p className="text-[#f5f5f5]/70 text-sm leading-relaxed">{ind.desc}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- SERVICES --- */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-serif)' }}>Our Core Services</h2>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {SERVICES.map((service, idx) => (
// // // //               <div key={idx} className="bg-gradient-to-b from-[#234B2E] to-[#1A3F22] p-8 rounded-2xl border border-[#2D5A35] relative overflow-hidden group">
// // // //                 <div className="absolute top-0 left-0 w-full h-1 bg-[#D99201] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
// // // //                 <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
// // // //                 <p className="text-[#f5f5f5]/70 text-sm leading-relaxed">{service.desc}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- MODERN FUNNEL & STRATEGY --- */}
// // // //       <section className="py-24 px-6 bg-[#0a1f13] border-y border-[#2D5A35]">
// // // //         <div className="container mx-auto max-w-5xl">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Struggling to Generate Leads?</h2>
// // // //             <p className="text-[#D99201] font-semibold tracking-widest uppercase">The 5-Step Marketly Process</p>
// // // //           </div>

// // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // //             {/* The "Funnel" Reimagined as a sleek list */}
// // // //             <div className="space-y-4">
// // // //               {['Marketing & SEO', 'Word of Mouth & Social', 'Targeted Advertising', 'Website Optimization', 'High Quality Conversion'].map((step, i) => (
// // // //                 <div key={i} className="flex items-center gap-4 bg-[#1A3F22] p-4 rounded-xl border border-[#2D5A35]">
// // // //                   <div className="w-8 h-8 rounded-full bg-[#D99201] text-[#1A3F22] flex items-center justify-center font-bold">{i + 1}</div>
// // // //                   <span className="font-semibold">{step}</span>
// // // //                 </div>
// // // //               ))}
// // // //               <div className="pt-6">
// // // //                 <button className="w-full py-4 bg-[#D99201] text-[#1A3F22] rounded-xl font-bold text-lg hover:bg-[#E5A828] transition-colors shadow-lg shadow-[#D99201]/20">
// // // //                   BOOK A STRATEGY CALL
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             {/* The "Wheel" Reimagined as a Bento layout */}
// // // //             <div className="grid grid-cols-2 gap-4">
// // // //               <div className="col-span-2 bg-[#234B2E] p-8 rounded-2xl border border-[#D99201]/30 text-center">
// // // //                 <h3 className="text-2xl font-black tracking-widest text-[#D99201] uppercase">Digital Marketing Strategy</h3>
// // // //               </div>
// // // //               <div className="bg-[#1A3F22] p-6 rounded-2xl border border-[#2D5A35] text-center"><p className="text-sm font-bold text-white">Dedicated R&D Session</p></div>
// // // //               <div className="bg-[#1A3F22] p-6 rounded-2xl border border-[#2D5A35] text-center"><p className="text-sm font-bold text-white">Outcome Driven Campaigns</p></div>
// // // //               <div className="bg-[#1A3F22] p-6 rounded-2xl border border-[#2D5A35] text-center"><p className="text-sm font-bold text-white">Tailor-Made Approach</p></div>
// // // //               <div className="bg-[#1A3F22] p-6 rounded-2xl border border-[#2D5A35] text-center"><p className="text-sm font-bold text-white">Dedicated Relationship Manager</p></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- BRAND & TESTIMONIALS --- */}
// // // //       <section className="py-24 px-6 bg-[#1A3F22]">
// // // //         <div className="container mx-auto max-w-5xl">
// // // //           <div className="mb-16 text-center">
// // // //             <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Let's Build Your Brand</h2>
// // // //             <p className="text-[#f5f5f5]/70">We establish and grow powerful brand identities.</p>
// // // //           </div>
// // // //           <div className="grid md:grid-cols-2 gap-8">
// // // //             <div className="bg-[#234B2E] p-8 rounded-2xl border-l-4 border-[#D99201] relative">
// // // //               <MessageSquareQuote size={40} className="text-[#D99201]/20 absolute top-6 right-6" />
// // // //               <p className="text-[#f5f5f5]/90 italic mb-6">"Worked with Ramya's team for 2 years on Google/Meta ads and SEO. Very happy that lead gen is much easier and better with their proficiency."</p>
// // // //               <div><p className="font-bold text-white">Pavan</p><p className="text-sm text-[#D99201]">Director, Sunrise Designhive</p></div>
// // // //             </div>
// // // //             <div className="bg-[#234B2E] p-8 rounded-2xl border-l-4 border-[#D99201] relative">
// // // //               <MessageSquareQuote size={40} className="text-[#D99201]/20 absolute top-6 right-6" />
// // // //               <p className="text-[#f5f5f5]/90 italic mb-6">"Great job of execution on SEO and lead-gen campaigns, especially email marketing campaigns which boosted our sales inquiries significantly."</p>
// // // //               <div><p className="font-bold text-white">Sunil</p><p className="text-sm text-[#D99201]">CEO, Motobay</p></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- FAQS --- */}
// // // //       <section className="py-24 px-6 bg-[#234B2E] border-t border-[#2D5A35]">
// // // //         <div className="container mx-auto max-w-3xl">
// // // //           <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
// // // //           <div className="space-y-4">
// // // //             {FAQS.map((faq, idx) => (
// // // //               <div key={idx} className="bg-[#1A3F22] rounded-xl border border-[#2D5A35] overflow-hidden">
// // // //                 <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-left hover:bg-[#1f4a29] transition-colors">
// // // //                   <span className="font-semibold text-sm md:text-base text-white">{faq}</span>
// // // //                   <ChevronDown className={`text-[#D99201] transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
// // // //                 </button>
// // // //                 {openFaq === idx && (
// // // //                   <div className="p-6 pt-0 text-[#f5f5f5]/70 text-sm border-t border-[#2D5A35]">
// // // //                     We provide comprehensive, tailored strategies to address this specific requirement, ensuring measurable growth and high ROI through market positioning.
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { Target, Home, Store, Cpu, GraduationCap, Car, Globe, Briefcase, Trophy, ChevronDown, ArrowRight, Sparkles, MessageSquareQuote } from 'lucide-react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';
// // // import Link from 'next/link';
// // // import { useState } from 'react';

// // // const INDUSTRIES = [
// // //   { icon: Target, title: 'Interior Design', desc: "Consistently ranked non-branded keywords top 3 within 4 months, driving an 80% traffic increase." },
// // //   { icon: Home, title: 'Real Estate', desc: 'Boosted brand visibility and generated high-quality leads at an optimized cost for site visits.' },
// // //   { icon: Store, title: 'Retail Store', desc: 'Increased foot traffic by 200% in 3 months. Boosted sales through targeted promotions.' },
// // //   { icon: Cpu, title: 'Tech Product', desc: 'Generated 20% more leads via niche Google ads and increased traffic by 40% through SEO.' },
// // //   { icon: GraduationCap, title: 'Edutech', desc: '15% more student inquiries through social media and 30% traffic bump via targeted content.' },
// // //   { icon: Car, title: 'Automobile', desc: 'Generated a 20% increase in qualified leads in 3 months through Meta ads and local SEO.' },
// // //   { icon: Globe, title: 'Abroad Consulting', desc: 'Increased student inquiries by 25% within 3 months via multi-channel Meta and Google campaigns.' },
// // //   { icon: Briefcase, title: 'Hiring Platform', desc: '15% bump in employer registrations via LinkedIn ads. 20% better candidate engagement.' },
// // //   { icon: Trophy, title: 'Cricket Tournament', desc: 'Reached 1M viewers through live streaming and drove 10% more ticket sales via targeted ads.' },
// // // ];

// // // const SERVICES = [
// // //   { title: 'Digital Marketing', desc: "Digital presence is no longer an option; it's a necessity. Unlock significant growth, increased visibility, and cost-effective marketing opportunities." },
// // //   { title: 'Web Development', desc: "Own a website that stands out. We build cutting-edge static, dynamic, and e-commerce solutions tailored to your specific needs." },
// // //   { title: 'SEO', desc: "Get found online. See rankings improve in 30, 60, and 90 days. Aiming for a 60% organic traffic ratio for sustainable growth." },
// // //   { title: 'SMM', desc: "Grow your brand. We craft engaging social media content that resonates with your audience, builds loyalty, and drives real results." },
// // //   { title: 'SEM', desc: "Dominate search results. Our SEM strategies drive targeted traffic and craft high-performing campaigns targeting niche markets." },
// // //   { title: 'Paid Advertisement', desc: "Reach your audience. Run impactful campaigns on Google, Meta, and more. Connect with ideal customers and deliver measurable ROI." },
// // // ];

// // // const FAQS = [
// // //   "How can I measure the ROI of my digital marketing campaigns?",
// // //   "What are the best digital marketing tools for businesses?",
// // //   "How to boost brand awareness for a startup?",
// // //   "What companies need digital marketing?",
// // //   "Why choose digital marketing agencies in Bangalore?",
// // //   "How to choose the right digital marketing company in Bangalore?",
// // //   "How a digital marketing company can enhance your business?",
// // //   "Is digital Marketing the future?"
// // // ];

// // // const customEase = [0.16, 1, 0.3, 1];

// // // export default function DigitalMarketingPage() {
// // //   const [openFaq, setOpenFaq] = useState<number | null>(null);

// // //   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } };

// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white overflow-hidden">
// // //       <Header />

// // //       {/* --- HERO SECTION --- */}
// // //       <section className="relative pt-40 pb-32 px-6">
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none" />
        
// // //         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
// // //           <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
// // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-white/80 text-xs font-medium tracking-widest uppercase">
// // //               <Sparkles size={14} className="text-[#D99201]" /> From Strategy to Success
// // //             </motion.div>
            
// // //             <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-medium leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
// // //               Maximize Your <br/>
// // //               <span className="italic text-white/50">Online</span> <span className="text-[#D99201]">Presence.</span>
// // //             </motion.h1>
            
// // //             <motion.div variants={fadeUp} className="border-l border-[#D99201]/50 pl-8 mb-10 space-y-3">
// // //               <h3 className="text-2xl font-light text-white">Boost Your Website Traffic by 10X</h3>
// // //               <p className="text-white/50 text-sm tracking-wide">SEO • Google Ads • Meta Ads • Local Listing & much more</p>
// // //             </motion.div>
            
// // //             <motion.div variants={fadeUp}>
// // //               <Link href="/audit" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#D99201] text-[#050C07] rounded-full overflow-hidden font-medium">
// // //                 <span className="relative z-10">Get a Free Audit</span>
// // //                 <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
// // //                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
// // //               </Link>
// // //             </motion.div>
// // //           </motion.div>
          
// // //           <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: customEase }} className="relative perspective-1000">
// // //             <div className="absolute inset-0 bg-gradient-to-tr from-[#D99201]/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
// // //             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard Strategy" className="relative rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-[4/3]" />
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* --- INDUSTRIES BENTO GRID --- */}
// // //       <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative">
// // //         <div className="container mx-auto">
// // //           <div className="text-center mb-20">
// // //             <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Industries We <span className="italic text-white/50">Dominate</span></h2>
// // //             <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">Tailored growth strategies that have generated millions in revenue across diverse sectors.</p>
// // //           </div>
          
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {INDUSTRIES.map((ind, idx) => (
// // //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8, ease: customEase }} 
// // //                 className="bg-[#050C07] p-8 rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all group"
// // //               >
// // //                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-colors duration-500">
// // //                   <ind.icon size={20} className="text-white group-hover:text-[#050C07]" />
// // //                 </div>
// // //                 <h4 className="text-xl font-medium mb-4 text-white">{ind.title}</h4>
// // //                 <p className="text-white/50 text-sm leading-relaxed font-light">{ind.desc}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- SERVICES --- */}
// // //       <section className="py-32 px-6">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <h2 className="text-4xl md:text-5xl font-medium text-center mb-20" style={{ fontFamily: 'var(--font-serif)' }}>Our Core Services</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {SERVICES.map((service, idx) => (
// // //               <div key={idx} className="bg-white/[0.03] backdrop-blur-sm p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500">
// // //                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D99201] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
// // //                 <h3 className="text-2xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
// // //                 <p className="text-white/60 text-sm leading-relaxed font-light">{service.desc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- BRAND & TESTIMONIALS --- */}
// // //       <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <div className="mb-20 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Let's Build Your Brand</h2>
// // //             <p className="text-white/50 text-lg font-light">We establish and grow powerful brand identities.</p>
// // //           </div>
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             <div className="bg-[#050C07] p-12 rounded-[2rem] border border-white/10 relative overflow-hidden group">
// // //               <div className="absolute top-0 left-0 w-2 h-full bg-[#D99201] opacity-50" />
// // //               <MessageSquareQuote size={60} className="text-white/5 absolute top-8 right-8" />
// // //               <p className="text-white/80 font-light text-lg leading-relaxed mb-8 relative z-10">"Worked with Ramya's team for 2 years on Google/Meta ads and SEO. Very happy that lead gen is much easier and better with their proficiency."</p>
// // //               <div className="relative z-10"><p className="font-medium text-white text-lg">Pavan</p><p className="text-sm text-[#D99201] tracking-wide uppercase mt-1">Director, Sunrise Designhive</p></div>
// // //             </div>
// // //             <div className="bg-[#050C07] p-12 rounded-[2rem] border border-white/10 relative overflow-hidden group">
// // //               <div className="absolute top-0 left-0 w-2 h-full bg-[#D99201] opacity-50" />
// // //               <MessageSquareQuote size={60} className="text-white/5 absolute top-8 right-8" />
// // //               <p className="text-white/80 font-light text-lg leading-relaxed mb-8 relative z-10">"Great job of execution on SEO and lead-gen campaigns, especially email marketing campaigns which boosted our sales inquiries significantly."</p>
// // //               <div className="relative z-10"><p className="font-medium text-white text-lg">Sunil</p><p className="text-sm text-[#D99201] tracking-wide uppercase mt-1">CEO, Motobay</p></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Target, Home, Store, Cpu, GraduationCap, Car, Globe, Briefcase, Trophy, ChevronDown, ArrowRight, Sparkles, MessageSquareQuote } from 'lucide-react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';
// // import Link from 'next/link';
// // import { useState } from 'react';

// // // Content perfectly preserved
// // const INDUSTRIES = [
// //   { icon: Target, title: 'Interior Design', desc: "Consistently ranked non-branded keywords top 3 within 4 months, driving an 80% traffic increase." },
// //   { icon: Home, title: 'Real Estate', desc: 'Boosted brand visibility and generated high-quality leads at an optimized cost for site visits.' },
// //   { icon: Store, title: 'Retail Store', desc: 'Increased foot traffic by 200% in 3 months. Boosted sales through targeted promotions.' },
// //   { icon: Cpu, title: 'Tech Product', desc: 'Generated 20% more leads via niche Google ads and increased traffic by 40% through SEO.' },
// //   { icon: GraduationCap, title: 'Edutech', desc: '15% more student inquiries through social media and 30% traffic bump via targeted content.' },
// //   { icon: Car, title: 'Automobile', desc: 'Generated a 20% increase in qualified leads in 3 months through Meta ads and local SEO.' },
// //   { icon: Globe, title: 'Abroad Consulting', desc: 'Increased student inquiries by 25% within 3 months via multi-channel Meta and Google campaigns.' },
// //   { icon: Briefcase, title: 'Hiring Platform', desc: '15% bump in employer registrations via LinkedIn ads. 20% better candidate engagement.' },
// //   { icon: Trophy, title: 'Cricket Tournament', desc: 'Reached 1M viewers through live streaming and drove 10% more ticket sales via targeted ads.' },
// // ];

// // const SERVICES = [
// //   { title: 'Digital Marketing', desc: "Digital presence is no longer an option; it's a necessity. Unlock significant growth, increased visibility, and cost-effective marketing opportunities." },
// //   { title: 'Web Development', desc: "Own a website that stands out. We build cutting-edge static, dynamic, and e-commerce solutions tailored to your specific needs." },
// //   { title: 'SEO', desc: "Get found online. See rankings improve in 30, 60, and 90 days. Aiming for a 60% organic traffic ratio for sustainable growth." },
// //   { title: 'SMM', desc: "Grow your brand. We craft engaging social media content that resonates with your audience, builds loyalty, and drives real results." },
// //   { title: 'SEM', desc: "Dominate search results. Our SEM strategies drive targeted traffic and craft high-performing campaigns targeting niche markets." },
// //   { title: 'Paid Advertisement', desc: "Reach your audience. Run impactful campaigns on Google, Meta, and more. Connect with ideal customers and deliver measurable ROI." },
// // ];

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function DigitalMarketingPage() {
// //   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } };

// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white overflow-hidden">
// //       <Header />

// //       <section className="relative pt-40 pb-32 px-6">
// //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#234B2E] rounded-full blur-[150px] pointer-events-none" />
        
// //         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
// //           <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
// //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 text-white/90 text-xs font-medium tracking-widest uppercase">
// //               <Sparkles size={14} className="text-white" /> From Strategy to Success
// //             </motion.div>
            
// //             <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-medium leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Maximize Your <br/>
// //               <span className="italic text-white/60">Online</span> <span className="text-white">Presence.</span>
// //             </motion.h1>
            
// //             <motion.div variants={fadeUp} className="border-l-2 border-white/20 pl-8 mb-10 space-y-3">
// //               <h3 className="text-2xl font-light text-white">Boost Your Website Traffic by 10X</h3>
// //               <p className="text-white/60 text-sm tracking-wide">SEO • Google Ads • Meta Ads • Local Listing & much more</p>
// //             </motion.div>
            
// //             <motion.div variants={fadeUp}>
// //               <Link href="/audit" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-[#1A3F22] rounded-full overflow-hidden font-medium shadow-xl">
// //                 <span className="relative z-10">Get a Free Audit</span>
// //                 <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
// //               </Link>
// //             </motion.div>
// //           </motion.div>
          
// //           <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: customEase }} className="relative perspective-1000">
// //             <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
// //             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard Strategy" className="relative rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-[4/3]" />
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6 bg-[#234B2E]/30 border-y border-white/5 relative">
// //         <div className="container mx-auto">
// //           <div className="text-center mb-20">
// //             <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Industries We <span className="italic text-white/60">Dominate</span></h2>
// //             <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">Tailored growth strategies that have generated millions in revenue across diverse sectors.</p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {INDUSTRIES.map((ind, idx) => (
// //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8, ease: customEase }} 
// //                 className="bg-[#1A3F22] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all group shadow-lg"
// //               >
// //                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white transition-colors duration-500">
// //                   <ind.icon size={20} className="text-white group-hover:text-[#1A3F22]" />
// //                 </div>
// //                 <h4 className="text-xl font-medium mb-4 text-white">{ind.title}</h4>
// //                 <p className="text-white/60 text-sm leading-relaxed font-light">{ind.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6">
// //         <div className="container mx-auto max-w-7xl">
// //           <h2 className="text-4xl md:text-5xl font-medium text-center mb-20" style={{ fontFamily: 'var(--font-serif)' }}>Our Core Services</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {SERVICES.map((service, idx) => (
// //               <div key={idx} className="bg-white/[0.03] backdrop-blur-sm p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-[#234B2E]/40 transition-colors duration-500">
// //                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
// //                 <h3 className="text-2xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
// //                 <p className="text-white/60 text-sm leading-relaxed font-light">{service.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';
// import { Target, Home, Store, Cpu, GraduationCap, Car, Globe, Briefcase, Trophy, ChevronDown, ArrowRight, Sparkles, MessageSquareQuote } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Link from 'next/link';
// import { useState } from 'react';
// import SectionHeader from '@/components/SectionHeader';

// const INDUSTRIES = [
//   { icon: Target, title: 'Interior Design', desc: "Consistently ranked non-branded keywords top 3 within 4 months, driving an 80% traffic increase." },
//   { icon: Home, title: 'Real Estate', desc: 'Boosted brand visibility and generated high-quality leads at an optimized cost for site visits.' },
//   { icon: Store, title: 'Retail Store', desc: 'Increased foot traffic by 200% in 3 months. Boosted sales through targeted promotions.' },
//   { icon: Cpu, title: 'Tech Product', desc: 'Generated 20% more leads via niche Google ads and increased traffic by 40% through SEO.' },
//   { icon: GraduationCap, title: 'Edutech', desc: '15% more student inquiries through social media and 30% traffic bump via targeted content.' },
//   { icon: Car, title: 'Automobile', desc: 'Generated a 20% increase in qualified leads in 3 months through Meta ads and local SEO.' },
//   { icon: Globe, title: 'Abroad Consulting', desc: 'Increased student inquiries by 25% within 3 months via multi-channel Meta and Google campaigns.' },
//   { icon: Briefcase, title: 'Hiring Platform', desc: '15% bump in employer registrations via LinkedIn ads. 20% better candidate engagement.' },
//   { icon: Trophy, title: 'Cricket Tournament', desc: 'Reached 1M viewers through live streaming and drove 10% more ticket sales via targeted ads.' },
// ];

// const SERVICES = [
//   { title: 'Digital Marketing', desc: "Digital presence is no longer an option; it's a necessity. Unlock significant growth, increased visibility, and cost-effective marketing opportunities." },
//   { title: 'Web Development', desc: "Own a website that stands out. We build cutting-edge static, dynamic, and e-commerce solutions tailored to your specific needs." },
//   { title: 'SEO', desc: "Get found online. See rankings improve in 30, 60, and 90 days. Aiming for a 60% organic traffic ratio for sustainable growth." },
//   { title: 'SMM', desc: "Grow your brand. We craft engaging social media content that resonates with your audience, builds loyalty, and drives real results." },
//   { title: 'SEM', desc: "Dominate search results. Our SEM strategies drive targeted traffic and craft high-performing campaigns targeting niche markets." },
//   { title: 'Paid Advertisement', desc: "Reach your audience. Run impactful campaigns on Google, Meta, and more. Connect with ideal customers and deliver measurable ROI." },
// ];

// const FAQS = [
//   "How can I measure the ROI of my digital marketing campaigns?",
//   "What are the best digital marketing tools for businesses?",
//   "How to boost brand awareness for a startup?",
//   "What companies need digital marketing?",
//   "Why choose digital marketing agencies in Bangalore?",
//   "How to choose the right digital marketing company in Bangalore?",
//   "How a digital marketing company can enhance your business?",
//   "Is digital Marketing the future?"
// ];

// const customEase = [0.16, 1, 0.3, 1];

// export default function DigitalMarketingPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } };

//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative pt-40 pb-32 px-6 overflow-hidden">
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1A3F22]/40 rounded-full blur-[120px] pointer-events-none z-0" />
        
//         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
//           <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
//             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8 text-[#D99201] text-xs font-bold tracking-widest uppercase">
//               <Sparkles size={14} /> From Strategy to Success
//             </motion.div>
            
//             <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//               Maximize Your <br/>
//               <span className="text-[#D99201] italic">Online Presence.</span>
//             </motion.h1>
            
//             <motion.div variants={fadeUp} className="border-l border-[#D99201]/50 pl-8 mb-12 space-y-3">
//               <h3 className="text-2xl font-light text-white">Boost Your Website Traffic by 10X</h3>
//               <p className="text-white/50 text-sm tracking-wide font-medium">SEO • Google Ads • Meta Ads • Local Listing & much more</p>
//             </motion.div>
            
//             <motion.div variants={fadeUp}>
//               <Link href="/audit" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#D99201] text-[#0a160d] rounded-full overflow-hidden font-bold text-lg shadow-[0_8px_30px_rgba(217,146,1,0.2)]">
//                 <span className="relative z-10">Get a Free Audit</span>
//                 <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
//                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
//               </Link>
//             </motion.div>
//           </motion.div>
          
//           <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: customEase }} className="relative perspective-1000 hidden lg:block">
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#D99201]/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
//             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard Strategy" className="relative rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 object-cover aspect-[4/3]" />
//           </motion.div>
//         </div>
//       </section>

//       {/* --- INDUSTRIES BENTO GRID --- */}
//       <section className="py-32 px-6 bg-[#1A3F22]/10 border-y border-[#2D5A35]">
//         <div className="container mx-auto">
//           <SectionHeader title="Industries We Dominate" subtitle="Tailored growth strategies that have generated millions in revenue across diverse sectors." />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//             {INDUSTRIES.map((ind, idx) => (
//               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8, ease: customEase }} 
//                 className="bg-[#0a160d] p-10 rounded-[2rem] border border-[#2D5A35] hover:border-[#D99201]/50 transition-all group shadow-xl"
//               >
//                 <div className="w-14 h-14 bg-[#1A3F22] rounded-2xl flex items-center justify-center mb-8 border border-[#2D5A35] group-hover:bg-[#D99201] transition-colors duration-500">
//                   <ind.icon size={24} className="text-[#D99201] group-hover:text-[#0a160d]" />
//                 </div>
//                 <h4 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{ind.title}</h4>
//                 <p className="text-white/50 text-sm leading-relaxed font-light">{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CORE SERVICES --- */}
//       <section className="py-32 px-6 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_100%)] pointer-events-none" />
//         <div className="container mx-auto max-w-7xl relative z-10">
//           <SectionHeader title="Our Core Services" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//             {SERVICES.map((service, idx) => (
//               <div key={idx} className="bg-[#1A3F22]/20 backdrop-blur-md p-10 rounded-[2rem] border border-[#2D5A35] relative overflow-hidden group hover:bg-[#1A3F22]/40 transition-colors duration-500">
//                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
//                 <p className="text-white/60 text-sm leading-relaxed font-light">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROCESS & BRAND REVIEWS --- */}
//       <section className="py-32 px-6 bg-[#1A3F22]/10 border-t border-[#2D5A35]">
//         <div className="container mx-auto max-w-6xl">
//           <div className="mb-20 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Let's Build Your Brand</h2>
//             <p className="text-white/50 text-lg font-light">We establish and grow powerful brand identities.</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-[#0a160d] p-12 rounded-[2.5rem] border border-[#2D5A35] relative overflow-hidden group shadow-2xl">
//               <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#D99201] to-transparent opacity-50" />
//               <MessageSquareQuote size={60} className="text-white/5 absolute top-8 right-8" />
//               <p className="text-white/80 font-light text-lg leading-relaxed mb-8 relative z-10 italic">"Worked with Ramya's team for 2 years on Google/Meta ads and SEO. Very happy that lead gen is much easier and better with their proficiency."</p>
//               <div className="relative z-10"><p className="font-bold text-white text-lg">Pavan</p><p className="text-xs text-[#D99201] tracking-widest uppercase mt-1">Director, Sunrise Designhive</p></div>
//             </div>
            
//             {/* Testimonial 2 */}
//             <div className="bg-[#0a160d] p-12 rounded-[2.5rem] border border-[#2D5A35] relative overflow-hidden group shadow-2xl">
//               <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00d4ff] to-transparent opacity-50" />
//               <MessageSquareQuote size={60} className="text-white/5 absolute top-8 right-8" />
//               <p className="text-white/80 font-light text-lg leading-relaxed mb-8 relative z-10 italic">"Great job of execution on SEO and lead-gen campaigns, especially email marketing campaigns which boosted our sales inquiries significantly."</p>
//               <div className="relative z-10"><p className="font-bold text-white text-lg">Sunil</p><p className="text-xs text-[#00d4ff] tracking-widest uppercase mt-1">CEO, Motobay</p></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- MINIMAL FAQS --- */}
//       <section className="py-32 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <SectionHeader title="Frequently Asked Questions" />
//           <div className="space-y-4 mt-16">
//             {FAQS.map((faq, idx) => (
//               <div key={idx} className="bg-[#1A3F22]/20 rounded-2xl border border-[#2D5A35] overflow-hidden">
//                 <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-8 text-left hover:bg-[#1A3F22]/40 transition-colors">
//                   <span className="font-medium text-lg text-white" style={{ fontFamily: 'var(--font-serif)' }}>{faq}</span>
//                   <ChevronDown className={`text-[#D99201] transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={24} />
//                 </button>
//                 <motion.div initial={false} animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }} className="overflow-hidden">
//                   <div className="p-8 pt-0 text-white/50 text-lg font-light border-t border-white/5">
//                     We provide comprehensive, tailored strategies to address this specific requirement, ensuring measurable growth and high ROI through market positioning.
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Target, Home, Store, Cpu, GraduationCap, Car, Globe, Briefcase, Trophy, ChevronDown, ArrowRight, Sparkles, MessageSquareQuote, CheckCircle, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

// Shared Section Header Component
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="flex flex-col items-center text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
    {subtitle && <p className="text-white/50 text-xl font-light max-w-2xl">{subtitle}</p>}
  </div>
);

const INDUSTRIES = [
  { icon: Target, title: 'Interior Design', desc: "Consistently ranked non-branded keywords top 3 within 4 months, driving an 80% traffic increase." },
  { icon: Home, title: 'Real Estate', desc: 'Boosted brand visibility and generated high-quality leads at an optimized cost for site visits.' },
  { icon: Store, title: 'Retail Store', desc: 'Increased foot traffic by 200% in 3 months. Boosted sales through targeted promotions.' },
  { icon: Cpu, title: 'Tech Product', desc: 'Generated 20% more leads via niche Google ads and increased traffic by 40% through SEO.' },
  { icon: GraduationCap, title: 'Edutech', desc: '15% more student inquiries through social media and 30% traffic bump via targeted content.' },
  { icon: Car, title: 'Automobile', desc: 'Generated a 20% increase in qualified leads in 3 months through Meta ads and local SEO.' },
  { icon: Globe, title: 'Abroad Consulting', desc: 'Increased student inquiries by 25% within 3 months via multi-channel Meta and Google campaigns.' },
  { icon: Briefcase, title: 'Hiring Platform', desc: '15% bump in employer registrations via LinkedIn ads. 20% better candidate engagement.' },
  { icon: Trophy, title: 'Cricket Tournament', desc: 'Reached 1M viewers through live streaming and drove 10% more ticket sales via targeted ads.' },
];

const SERVICES = [
  { title: 'Digital Strategy', desc: "Digital presence is no longer an option; it's a necessity. Unlock significant growth, increased visibility, and cost-effective marketing opportunities." },
  { title: 'Web Development', desc: "Own a website that stands out. We build cutting-edge static, dynamic, and e-commerce solutions tailored to your specific needs." },
  { title: 'Search Engine (SEO)', desc: "Get found online. See rankings improve in 30, 60, and 90 days. Aiming for a 60% organic traffic ratio for sustainable growth." },
  { title: 'Social Media (SMM)', desc: "Grow your brand. We craft engaging social media content that resonates with your audience, builds loyalty, and drives real results." },
  { title: 'Search Marketing (SEM)', desc: "Dominate search results. Our SEM strategies drive targeted traffic and craft high-performing campaigns targeting niche markets." },
  { title: 'Paid Advertisement', desc: "Reach your audience. Run impactful campaigns on Google, Meta, and more. Connect with ideal customers and deliver measurable ROI." },
];

const FAQS = [
  "How can I measure the ROI of my digital marketing campaigns?",
  "What are the best digital marketing tools for businesses?",
  "How to boost brand awareness for a startup?",
  "What companies need digital marketing?",
  "Why choose digital marketing agencies in Bangalore?",
  "How to choose the right digital marketing company in Bangalore?",
  "How a digital marketing company can enhance your business?",
  "Is digital Marketing the future?"
];

const customEase = [0.16, 1, 0.3, 1];

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const fadeUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } 
  };

  return (
    <div className="min-h-screen bg-[#050a06] text-white selection:bg-[#D99201] selection:text-[#0a160d] overflow-hidden">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden z-10">
        {/* Cinematic Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8">
              <Sparkles size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">From Strategy to Success</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5rem] font-medium leading-[1.05] mb-8 text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Maximize Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic pr-4">Online Presence.</span>
            </motion.h1>
            
            <motion.div variants={fadeUp} className="border-l-2 border-[#D99201]/50 pl-8 mb-12 space-y-4">
              <h3 className="text-2xl font-light text-white leading-snug">Boost Your Website Traffic by 10X</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-white/50 text-xs font-bold tracking-[0.15em] uppercase">
                <span>SEO</span> <span className="text-[#D99201]">•</span>
                <span>Google Ads</span> <span className="text-[#D99201]">•</span>
                <span>Meta Ads</span> <span className="text-[#D99201]">•</span>
                <span>Local Listing</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Link href="/audit" className="group relative inline-flex items-center gap-5 px-3 py-3 pl-8 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:border-[#D99201]/50 transition-all duration-300 backdrop-blur-md">
                <span className="tracking-[0.15em] uppercase text-sm">Get a Free Audit</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D99201] to-[#b07600] flex items-center justify-center text-[#050a06] group-hover:scale-110 shadow-[0_0_15px_rgba(217,146,1,0.3)] transition-all duration-300">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95, rotateY: -10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1.2, ease: customEase }} className="relative perspective-[1200px] hidden lg:block">
            {/* Ambient Glow behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D99201]/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 blur-2xl" />
            
            {/* The Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
              <div className="absolute inset-0 bg-[#1A3F22]/20 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Digital Marketing Dashboard Strategy" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-transparent to-transparent opacity-90 z-10" />
            </div>

            {/* Floating Metric Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-2xl z-20 shadow-2xl"
            >
              <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Avg. Client Growth</div>
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                +240% <ArrowUpRight size={24} className="text-[#D99201]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRIES WE DOMINATE --- */}
      <section className="py-32 px-6 bg-[#0a120c] border-y border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionHeader title="Industries We Dominate" subtitle="Tailored growth strategies that have generated millions in revenue across diverse sectors." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <motion.div 
                key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1, duration: 0.8, ease: customEase }} 
                className="bg-[#050a06] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#D99201]/40 transition-all duration-500 group shadow-2xl hover:-translate-y-1 overflow-hidden relative"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D99201] transition-colors duration-500 relative z-10">
                  <ind.icon size={24} className="text-[#D99201] group-hover:text-[#0a160d]" />
                </div>
                
                <h4 className="text-2xl font-medium mb-4 text-white relative z-10 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{ind.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light relative z-10 group-hover:text-white/70 transition-colors">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionHeader title="Our Core Services" subtitle="Comprehensive digital solutions engineered for scale and dominance." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#1A3F22]/20 to-[#0a120c] backdrop-blur-xl p-10 rounded-[2.5rem] border border-[#2D5A35]/50 relative overflow-hidden group hover:border-[#00d4ff]/40 transition-all duration-500 shadow-xl">
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-medium text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-[#00d4ff] transition-colors" />
                </div>
                
                <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STRATEGY: STRUGGLING TO GENERATE LEADS --- */}
      <section className="py-32 px-6 bg-[#0a120c] border-t border-white/5 relative z-10 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Struggling to generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">leads?</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">Let's talk about our 5-step process</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* The Problem / Funnel Side */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {['Marketing', 'Advertising', 'Social Networking', 'Employee Education', 'Your Website', 'SEO', 'High Quality'].map((tag, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-bold tracking-wider uppercase hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="p-10 bg-gradient-to-b from-[#D99201]/10 to-transparent border border-[#D99201]/30 rounded-[2.5rem] text-center backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,146,1,0.2)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                 <h3 className="text-3xl font-medium text-white mb-2 relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>Your Business Revenue</h3>
                 <p className="text-5xl lg:text-7xl font-light text-[#D99201] mt-6 tracking-widest relative z-10 flex justify-center gap-2">
                   <span className="animate-pulse delay-75">$</span><span className="animate-pulse delay-150">$</span><span className="animate-pulse delay-300">$</span>
                 </p>
              </div>
              
              <button className="group relative w-full overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#D99201] to-[#b07600] text-[#050a06] py-6 shadow-[0_0_30px_rgba(217,146,1,0.2)] hover:shadow-[0_0_50px_rgba(217,146,1,0.4)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-bold text-xl tracking-wide">BOOK A CALL WITH OUR TEAM</span>
                  <span className="text-[10px] font-bold mt-2 opacity-70 uppercase tracking-[0.2em]">To Discuss Your Business Objective</span>
                </div>
              </button>
            </div>

            {/* Strategy Circle Layout */}
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-[#1A3F22]/20 to-[#050a06] rounded-[3rem] border border-[#2D5A35]/50 flex items-center justify-center min-h-[500px] shadow-2xl">
              
              {/* Connecting Lines SVG (Abstract representation) */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#D99201" strokeWidth="0.5" strokeDasharray="2 4" className="animate-[spin_60s_linear_infinite]" />
                <path d="M 20 20 L 50 50 M 80 20 L 50 50 M 20 80 L 50 50 M 80 80 L 50 50" stroke="#D99201" strokeWidth="0.5" />
              </svg>

              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 bg-[#0a120c] border border-[#D99201]/50 rounded-full flex items-center justify-center text-center shadow-[0_0_50px_rgba(217,146,1,0.15)] group hover:border-[#D99201] transition-colors duration-500">
                <div className="absolute inset-2 border border-dashed border-[#D99201]/30 rounded-full animate-[spin_40s_linear_infinite]" />
                <h3 className="text-xl md:text-2xl font-medium text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  Digital<br/><span className="text-[#D99201] italic">Marketing</span><br/>Strategy
                </h3>
              </div>
              
              {/* Floating Orbit Nodes */}
              {[
                { top: '10%', left: '10%', icon: Target, label: 'Dedicated R&D Session' },
                { top: '10%', right: '10%', icon: Trophy, label: 'Outcome Driven Campaigns' },
                { bottom: '10%', left: '10%', icon: Briefcase, label: 'Tailor Made Approach' },
                { bottom: '10%', right: '10%', icon: MessageSquareQuote, label: 'Relationship Manager' }
              ].map((node, i) => (
                <div key={i} className="absolute w-32 md:w-40 text-center group/node" style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}>
                  <div className="w-14 h-14 mx-auto bg-[#0a120c] rounded-2xl border border-white/10 flex items-center justify-center mb-4 group-hover/node:bg-[#D99201] group-hover/node:border-[#D99201] transition-all duration-500 shadow-xl">
                    <node.icon size={24} className="text-[#D99201] group-hover/node:text-[#050a06]" />
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest leading-relaxed group-hover/node:text-white transition-colors">{node.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- BRAND BUILDING --- */}
      <section className="py-32 px-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-[#1A3F22]/20 to-[#0a120c] border border-[#2D5A35]/50 rounded-[3rem] p-10 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D99201]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="md:w-1/2 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop" 
                alt="Brand Building Strategy" 
                className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-square md:aspect-auto" 
              />
            </div>
            
            <div className="md:w-1/2 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Identity & Growth</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">brand.</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Marketly understands that a strong brand is the cornerstone of business success. Our team of experienced professionals is dedicated to helping you establish and grow a powerful, unforgettable brand identity.
              </p>
              
              <ul className="space-y-4 pt-4">
                {['Strategic Positioning', 'Visual Identity Design', 'Market Dominance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                    <CheckCircle size={20} className="text-[#D99201]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- HEAR FROM OUR CLIENTS --- */}
      <section className="py-32 px-6 bg-[#0a120c] border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader title="Hear from Our Clients" subtitle="Real results from businesses that trusted us to scale their revenue." />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1A3F22]/20 to-[#050a06] p-12 md:p-16 rounded-[3rem] border border-[#2D5A35]/50 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#D99201] to-transparent opacity-50" />
              <div className="absolute -top-10 -right-10 text-[#D99201] opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <MessageSquareQuote size={250} />
              </div>
              
              <p className="text-white/80 font-light text-xl md:text-2xl leading-relaxed mb-12 relative z-10 italic">
                "Worked with the team for 2 years on Google/Meta ads and SEO. Very happy that lead gen is much easier and better with their proficiency. They truly understand ROI."
              </p>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl border border-white/20">P</div>
                <div>
                  <p className="font-bold text-white text-lg">Pavan</p>
                  <p className="text-[10px] font-bold text-[#D99201] tracking-widest uppercase mt-1">Director, Sunrise Designhive</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#050a06] p-12 md:p-16 rounded-[3rem] border border-[#00d4ff]/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00d4ff] to-transparent opacity-50" />
              <div className="absolute -top-10 -right-10 text-[#00d4ff] opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <MessageSquareQuote size={250} />
              </div>
              
              <p className="text-white/80 font-light text-xl md:text-2xl leading-relaxed mb-12 relative z-10 italic">
                "Great job of execution on SEO and lead-gen campaigns, especially email marketing campaigns which boosted our sales inquiries significantly. Highly recommended."
              </p>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl border border-white/20">S</div>
                <div>
                  <p className="font-bold text-white text-lg">Sunil</p>
                  <p className="text-[10px] font-bold text-[#00d4ff] tracking-widest uppercase mt-1">CEO, Motobay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQS --- */}
      <section className="py-32 px-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader title="Frequently Asked Questions" />
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white/[0.02] rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-8 text-left group">
                  <span className="font-medium text-lg text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{faq}</span>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-[#D99201] border-[#D99201] rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    <ChevronDown className={openFaq === idx ? 'text-[#050a06]' : 'text-[#D99201]'} size={20} />
                  </div>
                </button>
                <motion.div initial={false} animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }} className="overflow-hidden">
                  <div className="p-8 pt-0 text-white/50 text-lg font-light">
                    We provide comprehensive, tailored strategies to address this specific requirement, ensuring measurable growth and high ROI through targeted market positioning and data analysis.
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-32 px-6 bg-[#0a120c] border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-[#1A3F22]/40 to-[#050a06] border border-[#2D5A35]/50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group">
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(217,146,1,0.1),transparent_70%)] pointer-events-none" />

            <div className="p-12 lg:p-20 md:w-3/5 space-y-10 flex flex-col justify-center relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                Talk to our experts <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">today</span>
              </h2>
              
              <div>
                <Link href="/contact" className="group/btn relative inline-flex items-center gap-5 px-3 py-3 pl-8 bg-white/10 border border-white/20 rounded-full text-white font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-md">
                  <span className="tracking-[0.15em] uppercase text-sm">GET IN TOUCH</span>
                  <div className="w-10 h-10 rounded-full bg-[#D99201] flex items-center justify-center text-[#050a06] group-hover/btn:scale-110 group-hover/btn:bg-white transition-all duration-300">
                    <ArrowRight size={18} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-12 pt-10 border-t border-white/10">
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Email</p>
                  <p className="text-white font-medium text-lg">ramya@marketly.tech</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Phone</p>
                  <p className="text-white font-medium text-lg">+91 9606334692</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/5 min-h-[400px] relative bg-black overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Expert consultation call" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-[2s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050a06] via-[#050a06]/50 to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050a06]/20 to-[#050a06] hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}