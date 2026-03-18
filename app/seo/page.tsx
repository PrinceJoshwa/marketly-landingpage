// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { Search, LayoutTemplate, FileText, MessageSquare, BarChart2, Target, Globe, CheckCircle } from 'lucide-react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';

// // // // const SEO_SERVICES = [
// // // //   { icon: Search, title: 'Search Engine Optimization', items: ["Increase visibility in search engine results pages.", "Drive organic traffic and improve brand online presence.", "In-depth keyword research and high-quality backlink building."] },
// // // //   { icon: LayoutTemplate, title: 'Content Optimization', items: ["Create high-quality content that resonates with audiences.", "Optimize for search engines and social media platforms.", "Develop a content strategy aligned with business goals."] },
// // // //   { icon: FileText, title: 'On-page Optimization', items: ["Enhance technical SEO for crawlability and indexability.", "Optimize title tags, meta descriptions, and image alt text.", "Improve website speed and overall user experience."] },
// // // //   { icon: MessageSquare, title: 'SEO Consulting', items: ["Get expert advice on SEO strategy and implementation.", "Conduct in-depth website audits with actionable recommendations.", "Ongoing support to achieve your SEO goals."] },
// // // //   { icon: BarChart2, title: 'Data Analysis', items: ["Track metrics to measure SEO campaign effectiveness.", "Identify areas for improvement and optimize strategy.", "Gain insights into target audience online behavior."] },
// // // //   { icon: Target, title: 'SEO Strategy', items: ["Develop a customized strategy tailored to business needs.", "Set realistic, measurable targets for campaigns.", "Monitor and adjust strategy based on performance data."] },
// // // // ];

// // // // const REASONS = [
// // // //   { title: "You aren't targeting the right keywords", desc: "Check search trends in your industry often so you don't miss out on valuable traffic." },
// // // //   { title: "Search engines struggle to crawl your site", desc: "A sitemap is essential. It helps search engine bots crawl your site and reduces overlooked parts." },
// // // //   { title: "Wasting Page Rank Opportunities", desc: "Internal links help visitors navigate efficiently and pass rank to valuable product pages." },
// // // //   { title: "Rankings dropped after a redesign", desc: "Recently relaunched? You must create 301 redirects so you don't lose traffic from old pages." },
// // // //   { title: "The Site Is Slow and Doesn't Rank", desc: "Visitors leave slow sites. Search engines hate them too; site speed is a massive ranking factor." },
// // // // ];

// // // // export default function SeoPage() {
// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* --- HERO & FORM --- */}
// // // //       <section className="pt-32 pb-24 px-6">
// // // //         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
// // // //           <div>
// // // //             <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
// // // //               Your Business <span className="text-[#D99201]">SEO Solution</span>
// // // //             </h1>
// // // //             <p className="text-xl text-[#f5f5f5]/80 mb-8 border-l-4 border-[#D99201] pl-4">Rank your business on top with ease.</p>
// // // //             <div className="flex flex-wrap gap-6 mb-12">
// // // //               {['Satisfied Clients', 'Increased Traffic', 'Higher Engagement'].map((stat, i) => (
// // // //                 <div key={i} className="flex items-center gap-2 text-[#D99201] font-semibold">
// // // //                   <CheckCircle size={20} /> {stat}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-[#234B2E] p-8 md:p-10 rounded-3xl border border-[#D99201]/30 shadow-2xl relative">
// // // //             {/* Corner Accent */}
// // // //             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D99201]/10 rounded-full blur-xl"></div>
            
// // // //             <h3 className="text-2xl font-bold mb-8 text-center text-white">Test Your SEO Score Free</h3>
// // // //             <form className="space-y-4">
// // // //               <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#1A3F22] border border-[#2D5A35] rounded-xl text-white focus:outline-none focus:border-[#D99201]" />
// // // //               <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#1A3F22] border border-[#2D5A35] rounded-xl text-white focus:outline-none focus:border-[#D99201]" />
// // // //               <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#1A3F22] border border-[#2D5A35] rounded-xl text-white focus:outline-none focus:border-[#D99201]" />
// // // //               <input type="url" placeholder="Website URL" className="w-full p-4 bg-[#1A3F22] border border-[#2D5A35] rounded-xl text-white focus:outline-none focus:border-[#D99201]" />
// // // //               <button className="w-full py-4 bg-[#D99201] text-[#1A3F22] font-bold rounded-xl hover:bg-[#E5A828] transition-colors mt-4 shadow-[0_0_20px_rgba(217,146,1,0.2)]">
// // // //                 SUBMIT ANALYSIS
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- SEO SERVICES BENTO --- */}
// // // //       <section className="py-24 px-6 bg-[#0a1f13] border-y border-[#2D5A35]">
// // // //         <div className="container mx-auto">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Our SEO Services</h2>
// // // //             <p className="text-[#D99201]">From Start-up to Scale-up. Marketly Powers Growth.</p>
// // // //           </div>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {SEO_SERVICES.map((service, idx) => (
// // // //               <div key={idx} className="bg-[#1A3F22] p-8 rounded-2xl border border-[#2D5A35] hover:border-[#D99201]/50 transition-all group">
// // // //                 <div className="w-12 h-12 rounded-lg bg-[#234B2E] flex items-center justify-center mb-6">
// // // //                   <service.icon className="text-[#D99201]" />
// // // //                 </div>
// // // //                 <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
// // // //                 <ul className="space-y-3">
// // // //                   {service.items.map((item, i) => (
// // // //                     <li key={i} className="flex items-start gap-2 text-sm text-[#f5f5f5]/70">
// // // //                       <span className="text-[#D99201] mt-1">•</span> {item}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- HIGHLIGHT FEATURES --- */}
// // // //       <section className="py-12 px-6 bg-[#1A3F22]">
// // // //         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           <div className="bg-gradient-to-br from-[#234B2E] to-[#1A3F22] p-8 rounded-2xl border border-[#D99201]/30 relative overflow-hidden">
// // // //             <div className="absolute top-0 right-0 p-8 text-[#D99201] opacity-10"><Globe size={100} /></div>
// // // //             <h3 className="text-2xl font-bold mb-4 text-[#D99201] relative z-10">Backlink Building</h3>
// // // //             <p className="text-sm text-[#f5f5f5]/80 relative z-10">Acquiring high-quality, relevant backlinks from reputable websites. We employ ethical white-hat techniques to improve domain authority and search rankings.</p>
// // // //           </div>
// // // //           <div className="bg-gradient-to-br from-[#234B2E] to-[#1A3F22] p-8 rounded-2xl border border-[#D99201]/30 relative overflow-hidden">
// // // //             <div className="absolute top-0 right-0 p-8 text-[#D99201] opacity-10"><Target size={100} /></div>
// // // //             <h3 className="text-2xl font-bold mb-4 text-[#D99201] relative z-10">Local Citation</h3>
// // // //             <p className="text-sm text-[#f5f5f5]/80 relative z-10">Establish a strong local presence through comprehensive citation management. Accurate listings on Google My Business, Yelp, Bing, and more.</p>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- 5 REASONS & RANKING PROOF --- */}
// // // //       <section className="py-24 px-6 bg-[#234B2E]">
// // // //         <div className="container mx-auto grid lg:grid-cols-2 gap-16">
          
// // // //           {/* Timeline of Reasons */}
// // // //           <div>
// // // //             <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-serif)' }}>5 Reasons You Need SEO</h2>
// // // //             <div className="space-y-6 border-l-2 border-[#D99201]/30 ml-4 pl-8 relative">
// // // //               {REASONS.map((reason, idx) => (
// // // //                 <div key={idx} className="relative">
// // // //                   <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-[#1A3F22] border-2 border-[#D99201] flex items-center justify-center text-[10px] font-bold text-[#D99201]">
// // // //                     {idx + 1}
// // // //                   </div>
// // // //                   <h4 className="font-bold text-lg mb-2 text-white">{reason.title}</h4>
// // // //                   <p className="text-[#f5f5f5]/70 text-sm">{reason.desc}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* SaaS-Style Dashboard Proofs */}
// // // //           <div className="space-y-6">
// // // //             <div className="flex items-center justify-between mb-8">
// // // //               <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Proven Results</h2>
// // // //             </div>
            
// // // //             {/* Mockup Card 1 */}
// // // //             <div className="bg-[#0a1f13] p-6 rounded-2xl border border-[#2D5A35]">
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <div className="flex items-center gap-2 text-sm"><Search size={16} className="text-[#D99201]"/> <span className="font-mono text-[#D99201]">Interiors near me</span></div>
// // // //                 <span className="bg-[#234B2E] text-white text-xs px-3 py-1 rounded-full border border-[#D99201]/30">3rd Position (Local)</span>
// // // //               </div>
// // // //               <div className="w-full h-2 bg-[#1A3F22] rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#D99201]"></div></div>
// // // //             </div>

// // // //             {/* Mockup Card 2 */}
// // // //             <div className="bg-[#0a1f13] p-6 rounded-2xl border border-[#2D5A35]">
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <div className="flex items-center gap-2 text-sm"><Search size={16} className="text-[#D99201]"/> <span className="font-mono text-[#D99201]">KSPL Non-Branded</span></div>
// // // //                 <span className="bg-[#234B2E] text-white text-xs px-3 py-1 rounded-full border border-[#D99201]/30">Ranked #1 Top</span>
// // // //               </div>
// // // //               <div className="w-full h-2 bg-[#1A3F22] rounded-full overflow-hidden"><div className="w-[95%] h-full bg-[#D99201]"></div></div>
// // // //             </div>

// // // //             {/* Mockup Card 3 */}
// // // //             <div className="bg-[#0a1f13] p-6 rounded-2xl border border-[#2D5A35]">
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <div className="flex items-center gap-2 text-sm"><Search size={16} className="text-[#D99201]"/> <span className="font-mono text-[#D99201]">Properties in Sarjapur</span></div>
// // // //                 <span className="bg-[#234B2E] text-white text-xs px-3 py-1 rounded-full border border-[#D99201]/30">Top Page Ranking</span>
// // // //               </div>
// // // //               <div className="w-full h-2 bg-[#1A3F22] rounded-full overflow-hidden"><div className="w-[90%] h-full bg-[#D99201]"></div></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- STATS SECTION --- */}
// // // //       <section className="py-24 px-6 bg-[#1A3F22] border-t border-[#2D5A35]">
// // // //          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-5xl bg-[#234B2E] p-12 rounded-3xl border border-[#D99201]/30 shadow-2xl">
// // // //             <div>
// // // //               <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Let's Do Something Better Together!</h2>
// // // //               <div className="flex gap-12">
// // // //                  <div>
// // // //                    <div className="text-5xl font-black text-[#D99201] mb-2">106</div>
// // // //                    <div className="text-[#f5f5f5]/80 text-sm tracking-wide uppercase">Satisfied Clients</div>
// // // //                  </div>
// // // //                  <div>
// // // //                    <div className="text-5xl font-black text-[#D99201] mb-2">87%</div>
// // // //                    <div className="text-[#f5f5f5]/80 text-sm tracking-wide uppercase">Avg. Conversion</div>
// // // //                  </div>
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team Work" className="rounded-2xl shadow-lg border-4 border-[#1A3F22]" />
// // // //             </div>
// // // //          </div>
// // // //       </section>

// // // //       {/* --- FAQS & LOCATION --- */}
// // // //       <section className="py-24 px-6 bg-[#0a1f13]">
// // // //         <div className="container mx-auto max-w-5xl">
// // // //           <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-serif)' }}>Answers to Your Questions</h2>
// // // //           <div className="grid md:grid-cols-2 gap-12 text-[#f5f5f5]/80">
// // // //             <div className="space-y-8">
// // // //                <div>
// // // //                  <h4 className="text-white font-bold mb-2">What is an SEO expert?</h4>
// // // //                  <p className="text-sm leading-relaxed">Someone who improves your website's visibility on search engines. When people search for related products, SEO ensures your site appears higher.</p>
// // // //                </div>
// // // //                <div>
// // // //                  <h4 className="text-white font-bold mb-2">What are common SEO techniques?</h4>
// // // //                  <p className="text-sm leading-relaxed">Keyword research, on-page optimization, off-page optimization (backlinks), technical SEO, and content marketing.</p>
// // // //                </div>
// // // //                <div>
// // // //                  <h4 className="text-white font-bold mb-2">How long does it take?</h4>
// // // //                  <p className="text-sm leading-relaxed">SEO takes time. While results vary, consistent efforts lead to significant improvements over several months.</p>
// // // //                </div>
// // // //             </div>
// // // //             <div className="space-y-8">
// // // //                <div>
// // // //                  <h4 className="text-white font-bold mb-2">How can I measure success?</h4>
// // // //                  <p className="text-sm leading-relaxed">Track progress by monitoring key metrics like website traffic, keyword rankings, lead generation, and conversion rates.</p>
// // // //                </div>
// // // //                <div>
// // // //                  <h4 className="text-white font-bold mb-2">What is the role of backlinks?</h4>
// // // //                  <p className="text-sm leading-relaxed">They act as "votes" of confidence from other sites. High-quality backlinks significantly improve domain authority and rankings.</p>
// // // //                </div>
// // // //                <div className="pt-4 border-t border-[#2D5A35]">
// // // //                  <h4 className="text-[#D99201] font-bold mb-2">Location HQ</h4>
// // // //                  <p className="text-sm">Sarjapur road, Bangalore 35</p>
// // // //                  <p className="text-sm">+919606334692</p>
// // // //                  <p className="text-sm">ramya@marketly.tech</p>
// // // //                </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { Search, LayoutTemplate, FileText, MessageSquare, BarChart2, Target, Globe, CheckCircle } from 'lucide-react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';

// // // // Keeping exact original arrays
// // // const SEO_SERVICES = [
// // //   { icon: Search, title: 'Search Engine Optimization', items: ["Increase visibility in search engine results pages.", "Drive organic traffic and improve brand online presence.", "In-depth keyword research and high-quality backlink building."] },
// // //   { icon: LayoutTemplate, title: 'Content Optimization', items: ["Create high-quality content that resonates with audiences.", "Optimize for search engines and social media platforms.", "Develop a content strategy aligned with business goals."] },
// // //   { icon: FileText, title: 'On-page Optimization', items: ["Enhance technical SEO for crawlability and indexability.", "Optimize title tags, meta descriptions, and image alt text.", "Improve website speed and overall user experience."] },
// // //   { icon: MessageSquare, title: 'SEO Consulting', items: ["Get expert advice on SEO strategy and implementation.", "Conduct in-depth website audits with actionable recommendations.", "Ongoing support to achieve your SEO goals."] },
// // //   { icon: BarChart2, title: 'Data Analysis', items: ["Track metrics to measure SEO campaign effectiveness.", "Identify areas for improvement and optimize strategy.", "Gain insights into target audience online behavior."] },
// // //   { icon: Target, title: 'SEO Strategy', items: ["Develop a customized strategy tailored to business needs.", "Set realistic, measurable targets for campaigns.", "Monitor and adjust strategy based on performance data."] },
// // // ];

// // // const REASONS = [
// // //   { title: "You aren't targeting the right keywords", desc: "Check search trends in your industry often so you don't miss out on valuable traffic." },
// // //   { title: "Search engines struggle to crawl your site", desc: "A sitemap is essential. It helps search engine bots crawl your site and reduces overlooked parts." },
// // //   { title: "Wasting Page Rank Opportunities", desc: "Internal links help visitors navigate efficiently and pass rank to valuable product pages." },
// // //   { title: "Rankings dropped after a redesign", desc: "Recently relaunched? You must create 301 redirects so you don't lose traffic from old pages." },
// // //   { title: "The Site Is Slow and Doesn't Rank", desc: "Visitors leave slow sites. Search engines hate them too; site speed is a massive ranking factor." },
// // // ];

// // // export default function SeoPage() {
// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white overflow-hidden">
// // //       <Header />

// // //       {/* --- HERO & FORM --- */}
// // //       <section className="pt-40 pb-32 px-6 relative">
// // //         <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#D99201]/5 rounded-full blur-[120px] pointer-events-none" />
        
// // //         <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
// // //           <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
// // //             <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
// // //               Your Business <br/>
// // //               <span className="text-[#D99201] italic">SEO Solution</span>
// // //             </h1>
// // //             <p className="text-xl text-white/60 mb-10 font-light border-l border-white/20 pl-6">Rank your business on top with ease.</p>
// // //             <div className="flex flex-wrap gap-8 mb-12">
// // //               {['Satisfied Clients', 'Increased Traffic', 'Higher Engagement'].map((stat, i) => (
// // //                 <div key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm tracking-wide uppercase">
// // //                   <CheckCircle size={16} className="text-[#D99201]" /> {stat}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>

// // //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
// // //             className="bg-white/[0.03] p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl relative"
// // //           >
// // //             <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#D99201]/10 rounded-full blur-2xl"></div>
            
// // //             <h3 className="text-2xl font-medium mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Test Your SEO Score Free</h3>
// // //             <form className="space-y-5">
// // //               <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#050C07] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
// // //               <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#050C07] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
// // //               <input type="url" placeholder="Website URL" className="w-full p-4 bg-[#050C07] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
// // //               <button className="w-full py-4 bg-[#D99201] text-[#050C07] font-medium text-lg rounded-xl hover:bg-white transition-colors mt-6">
// // //                 Submit Analysis
// // //               </button>
// // //             </form>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* --- SEO SERVICES BENTO --- */}
// // //       <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
// // //         <div className="container mx-auto">
// // //           <div className="text-center mb-20">
// // //             <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our SEO Services</h2>
// // //             <p className="text-white/50 text-lg font-light tracking-wide uppercase">From Start-up to Scale-up.</p>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {SEO_SERVICES.map((service, idx) => (
// // //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} 
// // //                 className="bg-[#050C07] p-10 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all group"
// // //               >
// // //                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
// // //                   <service.icon size={20} className="text-[#D99201]" />
// // //                 </div>
// // //                 <h3 className="text-2xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
// // //                 <ul className="space-y-4">
// // //                   {service.items.map((item, i) => (
// // //                     <li key={i} className="flex items-start gap-3 text-sm text-white/50 font-light leading-relaxed">
// // //                       <span className="w-1.5 h-1.5 rounded-full bg-[#D99201] mt-2 shrink-0" /> {item}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- 5 REASONS & RANKING PROOF --- */}
// // //       <section className="py-32 px-6">
// // //         <div className="container mx-auto grid lg:grid-cols-2 gap-20">
          
// // //           {/* Timeline of Reasons */}
// // //           <div>
// // //             <h2 className="text-4xl md:text-5xl font-medium mb-16" style={{ fontFamily: 'var(--font-serif)' }}>5 Reasons You Need SEO</h2>
// // //             <div className="space-y-12 border-l border-white/10 ml-4 pl-10 relative">
// // //               {REASONS.map((reason, idx) => (
// // //                 <div key={idx} className="relative group">
// // //                   <div className="absolute -left-[51px] top-1 w-6 h-6 rounded-full bg-[#050C07] border border-white/30 flex items-center justify-center text-xs font-medium text-white/50 group-hover:border-[#D99201] group-hover:text-[#D99201] transition-colors">
// // //                     {idx + 1}
// // //                   </div>
// // //                   <h4 className="font-medium text-xl mb-3 text-white">{reason.title}</h4>
// // //                   <p className="text-white/50 font-light leading-relaxed">{reason.desc}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* SaaS-Style Dashboard Proofs */}
// // //           <div className="space-y-6">
// // //             <h2 className="text-4xl md:text-5xl font-medium mb-16" style={{ fontFamily: 'var(--font-serif)' }}>Proven Results</h2>
            
// // //             {[
// // //               { query: "Interiors near me", rank: "3rd Position (Local)", progress: "85%" },
// // //               { query: "KSPL Non-Branded", rank: "Ranked #1 Top", progress: "95%" },
// // //               { query: "Properties in Sarjapur", rank: "Top Page Ranking", progress: "90%" }
// // //             ].map((mock, i) => (
// // //               <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
// // //                 className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
// // //               >
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <div className="flex items-center gap-3 text-sm">
// // //                     <Search size={16} className="text-white/40"/> 
// // //                     <span className="font-mono text-white/80">{mock.query}</span>
// // //                   </div>
// // //                   <span className="bg-white/5 text-white/80 text-xs px-4 py-1.5 rounded-full border border-white/10">{mock.rank}</span>
// // //                 </div>
// // //                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
// // //                   <motion.div initial={{ width: 0 }} whileInView={{ width: mock.progress }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-[#D99201]" />
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Search, LayoutTemplate, FileText, MessageSquare, BarChart2, Target, Globe, CheckCircle } from 'lucide-react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';

// // const SEO_SERVICES = [
// //   { icon: Search, title: 'Search Engine Optimization', items: ["Increase visibility in search engine results pages.", "Drive organic traffic and improve brand online presence.", "In-depth keyword research and high-quality backlink building."] },
// //   { icon: LayoutTemplate, title: 'Content Optimization', items: ["Create high-quality content that resonates with audiences.", "Optimize for search engines and social media platforms.", "Develop a content strategy aligned with business goals."] },
// //   { icon: FileText, title: 'On-page Optimization', items: ["Enhance technical SEO for crawlability and indexability.", "Optimize title tags, meta descriptions, and image alt text.", "Improve website speed and overall user experience."] },
// //   { icon: MessageSquare, title: 'SEO Consulting', items: ["Get expert advice on SEO strategy and implementation.", "Conduct in-depth website audits with actionable recommendations.", "Ongoing support to achieve your SEO goals."] },
// //   { icon: BarChart2, title: 'Data Analysis', items: ["Track metrics to measure SEO campaign effectiveness.", "Identify areas for improvement and optimize strategy.", "Gain insights into target audience online behavior."] },
// //   { icon: Target, title: 'SEO Strategy', items: ["Develop a customized strategy tailored to business needs.", "Set realistic, measurable targets for campaigns.", "Monitor and adjust strategy based on performance data."] },
// // ];

// // const REASONS = [
// //   { title: "You aren't targeting the right keywords", desc: "Check search trends in your industry often so you don't miss out on valuable traffic." },
// //   { title: "Search engines struggle to crawl your site", desc: "A sitemap is essential. It helps search engine bots crawl your site and reduces overlooked parts." },
// //   { title: "Wasting Page Rank Opportunities", desc: "Internal links help visitors navigate efficiently and pass rank to valuable product pages." },
// //   { title: "Rankings dropped after a redesign", desc: "Recently relaunched? You must create 301 redirects so you don't lose traffic from old pages." },
// //   { title: "The Site Is Slow and Doesn't Rank", desc: "Visitors leave slow sites. Search engines hate them too; site speed is a massive ranking factor." },
// // ];

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function SeoPage() {
// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white overflow-hidden">
// //       <Header />

// //       <section className="pt-40 pb-32 px-6 relative">
// //         <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        
// //         <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
// //           <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }}>
// //             <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Your Business <br/>
// //               <span className="text-white/60 italic">SEO Solution</span>
// //             </h1>
// //             <p className="text-xl text-white/70 mb-10 font-light border-l border-white/20 pl-6">Rank your business on top with ease.</p>
// //             <div className="flex flex-wrap gap-8 mb-12">
// //               {['Satisfied Clients', 'Increased Traffic', 'Higher Engagement'].map((stat, i) => (
// //                 <div key={i} className="flex items-center gap-3 text-white font-medium text-sm tracking-wide uppercase">
// //                   <CheckCircle size={16} className="text-white/50" /> {stat}
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }} 
// //             className="bg-[#234B2E]/60 p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl relative"
// //           >
// //             <h3 className="text-2xl font-medium mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Test Your SEO Score Free</h3>
// //             <form className="space-y-5">
// //               <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors" />
// //               <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors" />
// //               <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors" />
// //               <input type="url" placeholder="Website URL" className="w-full p-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors" />
// //               <button className="w-full py-4 bg-white text-[#1A3F22] font-medium text-lg rounded-xl hover:bg-white/90 transition-colors mt-6 shadow-xl">
// //                 SUBMIT ANALYSIS
// //               </button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6 bg-[#234B2E]/20 border-y border-white/5">
// //         <div className="container mx-auto">
// //           <div className="text-center mb-20">
// //             <h2 className="text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Our SEO Services</h2>
// //             <p className="text-white/60 text-lg font-light tracking-wide uppercase">From Start-up to Scale-up. Marketly Powers Growth.</p>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {SEO_SERVICES.map((service, idx) => (
// //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} 
// //                 className="bg-white/[0.03] p-10 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all group"
// //               >
// //                 <div className="w-12 h-12 rounded-full bg-[#1A3F22] border border-white/10 flex items-center justify-center mb-8">
// //                   <service.icon size={20} className="text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
// //                 <ul className="space-y-4">
// //                   {service.items.map((item, i) => (
// //                     <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light leading-relaxed">
// //                       <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" /> {item}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6">
// //         <div className="container mx-auto grid lg:grid-cols-2 gap-20">
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-medium mb-16" style={{ fontFamily: 'var(--font-serif)' }}>5 Reasons You Need SEO</h2>
// //             <div className="space-y-12 border-l border-white/20 ml-4 pl-10 relative">
// //               {REASONS.map((reason, idx) => (
// //                 <div key={idx} className="relative group">
// //                   <div className="absolute -left-[51px] top-1 w-6 h-6 rounded-full bg-[#1A3F22] border border-white/30 flex items-center justify-center text-xs font-medium text-white group-hover:border-white transition-colors">
// //                     {idx + 1}
// //                   </div>
// //                   <h4 className="font-medium text-xl mb-3 text-white">{reason.title}</h4>
// //                   <p className="text-white/60 font-light leading-relaxed">{reason.desc}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="space-y-6">
// //             <h2 className="text-4xl md:text-5xl font-medium mb-16" style={{ fontFamily: 'var(--font-serif)' }}>Proven Results</h2>
// //             {[
// //               { query: "Interiors near me", rank: "3rd Position (Local)", progress: "85%" },
// //               { query: "KSPL Non-Branded", rank: "Ranked #1 Top", progress: "95%" },
// //               { query: "Properties in Sarjapur", rank: "Top Page Ranking", progress: "90%" }
// //             ].map((mock, i) => (
// //               <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
// //                 className="bg-[#234B2E]/40 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
// //               >
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="flex items-center gap-3 text-sm">
// //                     <Search size={16} className="text-white/40"/> 
// //                     <span className="font-mono text-white/90">{mock.query}</span>
// //                   </div>
// //                   <span className="bg-white/10 text-white text-xs px-4 py-1.5 rounded-full border border-white/10">{mock.rank}</span>
// //                 </div>
// //                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
// //                   <motion.div initial={{ width: 0 }} whileInView={{ width: mock.progress }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-white/80" />
// //                 </div>
// //               </motion.div>
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
// import { Search, LayoutTemplate, FileText, MessageSquare, BarChart2, Target, Globe, CheckCircle } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import SectionHeader from '@/components/SectionHeader';

// const SEO_SERVICES = [
//   { icon: Search, title: 'Search Engine Optimization', items: ["Increase visibility in search engine results pages.", "Drive organic traffic and improve brand online presence.", "In-depth keyword research and high-quality backlink building."] },
//   { icon: LayoutTemplate, title: 'Content Optimization', items: ["Create high-quality content that resonates with audiences.", "Optimize for search engines and social media platforms.", "Develop a content strategy aligned with business goals."] },
//   { icon: FileText, title: 'On-page Optimization', items: ["Enhance technical SEO for crawlability and indexability.", "Optimize title tags, meta descriptions, and image alt text.", "Improve website speed and overall user experience."] },
//   { icon: MessageSquare, title: 'SEO Consulting', items: ["Get expert advice on SEO strategy and implementation.", "Conduct in-depth website audits with actionable recommendations.", "Ongoing support to achieve your SEO goals."] },
//   { icon: BarChart2, title: 'Data Analysis', items: ["Track metrics to measure SEO campaign effectiveness.", "Identify areas for improvement and optimize strategy.", "Gain insights into target audience online behavior."] },
//   { icon: Target, title: 'SEO Strategy', items: ["Develop a customized strategy tailored to business needs.", "Set realistic, measurable targets for campaigns.", "Monitor and adjust strategy based on performance data."] },
// ];

// const REASONS = [
//   { title: "You aren't targeting the right keywords", desc: "Check search trends in your industry often so you don't miss out on valuable traffic." },
//   { title: "Search engines struggle to crawl your site", desc: "A sitemap is essential. It helps search engine bots crawl your site and reduces overlooked parts." },
//   { title: "Wasting Page Rank Opportunities", desc: "Internal links help visitors navigate efficiently and pass rank to valuable product pages." },
//   { title: "Rankings dropped after a redesign", desc: "Recently relaunched? You must create 301 redirects so you don't lose traffic from old pages." },
//   { title: "The Site Is Slow and Doesn't Rank", desc: "Visitors leave slow sites. Search engines hate them too; site speed is a massive ranking factor." },
// ];

// const customEase = [0.16, 1, 0.3, 1];

// export default function SeoPage() {
//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* --- HERO & FORM --- */}
//       <section className="pt-40 pb-32 px-6 relative overflow-hidden">
//         <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none z-0" />
        
//         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
//           <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }}>
//             <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//               Your Business <br/>
//               <span className="text-[#D99201] italic">SEO Solution</span>
//             </h1>
//             <p className="text-xl text-white/60 mb-10 font-light border-l border-[#D99201]/50 pl-6">Rank your business on top with ease.</p>
//             <div className="flex flex-wrap gap-6 mb-12">
//               {['Satisfied Clients', 'Increased Traffic', 'Higher Engagement'].map((stat, i) => (
//                 <div key={i} className="flex items-center gap-3 text-white font-medium text-sm tracking-wide uppercase">
//                   <CheckCircle size={18} className="text-[#D99201]" /> {stat}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }} 
//             className="bg-[#1A3F22]/40 backdrop-blur-2xl p-10 md:p-12 rounded-[2.5rem] border border-[#2D5A35] shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative"
//           >
//             <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#D99201]/20 rounded-full blur-2xl pointer-events-none" />
            
//             <h3 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Test Your SEO Score Free</h3>
//             <form className="space-y-5 relative z-10">
//               <input type="text" placeholder="Your Name" className="w-full p-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
//               <input type="email" placeholder="Email Address" className="w-full p-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
//               <input type="tel" placeholder="Phone Number" className="w-full p-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
//               <input type="url" placeholder="Website URL" className="w-full p-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201] transition-colors" />
//               <button className="w-full py-5 bg-[#D99201] text-[#0a160d] font-bold text-lg rounded-xl hover:bg-white transition-colors mt-4 shadow-[0_0_20px_rgba(217,146,1,0.2)]">
//                 SUBMIT ANALYSIS
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- SEO SERVICES BENTO --- */}
//       <section className="py-32 px-6 bg-[#1A3F22]/10 border-y border-[#2D5A35]">
//         <div className="container mx-auto max-w-7xl">
//           <SectionHeader title="Our SEO Services" subtitle="From Start-up to Scale-up. Marketly Powers Growth." />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//             {SEO_SERVICES.map((service, idx) => (
//               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} 
//                 className="bg-[#0a160d] p-10 rounded-[2rem] border border-[#2D5A35] hover:border-[#D99201]/50 transition-all group shadow-xl"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-[#1A3F22] border border-[#2D5A35] flex items-center justify-center mb-8 group-hover:bg-[#D99201] transition-colors duration-500">
//                   <service.icon size={24} className="text-[#D99201] group-hover:text-[#0a160d]" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
//                 <ul className="space-y-4">
//                   {service.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light leading-relaxed">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#D99201] mt-2 shrink-0" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- 5 REASONS & RANKING PROOF (SaaS Style) --- */}
//       <section className="py-32 px-6">
//         <div className="container mx-auto grid lg:grid-cols-2 gap-20 max-w-7xl">
          
//           {/* Timeline of Reasons */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white" style={{ fontFamily: 'var(--font-serif)' }}>5 Reasons You Need SEO</h2>
//             <div className="space-y-12 border-l border-[#2D5A35] ml-4 pl-10 relative">
//               {REASONS.map((reason, idx) => (
//                 <div key={idx} className="relative group">
//                   <div className="absolute -left-[51px] top-1 w-8 h-8 rounded-full bg-[#0a160d] border border-[#2D5A35] flex items-center justify-center text-xs font-bold text-[#D99201] group-hover:border-[#D99201] group-hover:bg-[#D99201]/10 transition-colors">
//                     {idx + 1}
//                   </div>
//                   <h4 className="font-bold text-xl mb-3 text-white">{reason.title}</h4>
//                   <p className="text-white/60 font-light leading-relaxed">{reason.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SaaS-Style Dashboard Proofs */}
//           <div className="space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Proven Results</h2>
            
//             {[
//               { query: "Interiors near me", rank: "3rd Position (Local)", progress: "85%" },
//               { query: "KSPL Non-Branded", rank: "Ranked #1 Top", progress: "95%" },
//               { query: "Properties in Sarjapur", rank: "Top Page Ranking", progress: "90%" }
//             ].map((mock, i) => (
//               <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
//                 className="bg-[#1A3F22]/30 p-8 rounded-[1.5rem] border border-[#2D5A35] backdrop-blur-sm hover:bg-[#1A3F22]/50 transition-colors"
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <div className="flex items-center gap-3 text-sm">
//                     <Search size={18} className="text-[#00d4ff]"/> 
//                     <span className="font-mono text-white text-lg">{mock.query}</span>
//                   </div>
//                   <span className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold px-4 py-2 rounded-full border border-[#00d4ff]/20 uppercase tracking-widest">{mock.rank}</span>
//                 </div>
//                 <div className="w-full h-2 bg-[#0a160d] rounded-full overflow-hidden">
//                   <motion.div initial={{ width: 0 }} whileInView={{ width: mock.progress }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0088ff]" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- STATS SECTION --- */}
//       <section className="py-32 px-6 bg-[#1A3F22]/10 border-t border-[#2D5A35]">
//          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl bg-[#1A3F22]/40 backdrop-blur-xl p-12 lg:p-16 rounded-[3rem] border border-[#D99201]/30 shadow-2xl relative overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,146,1,0.1),transparent_50%)]" />
            
//             <div className="relative z-10">
//               <h2 className="text-4xl lg:text-5xl font-bold mb-12 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>Let's Do Something Better Together!</h2>
//               <div className="flex gap-16">
//                  <div>
//                    <div className="text-6xl font-light text-[#D99201] mb-2">106</div>
//                    <div className="text-white/60 text-xs font-bold tracking-widest uppercase">Satisfied Clients</div>
//                  </div>
//                  <div>
//                    <div className="text-6xl font-light text-[#D99201] mb-2">87%</div>
//                    <div className="text-white/60 text-xs font-bold tracking-widest uppercase">Avg. Conversion</div>
//                  </div>
//               </div>
//             </div>
//             <div className="relative z-10">
//               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team Work" className="rounded-[2rem] shadow-2xl border border-[#2D5A35] object-cover aspect-square" />
//             </div>
//          </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Search, LayoutTemplate, FileText, MessageSquare, BarChart2, Target, Globe, CheckCircle, ArrowRight, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Use standard UI components if you have them, otherwise simple HTML wrappers work perfectly here
const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="flex flex-col items-center text-center mb-16">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
    <p className="text-white/50 text-xl font-light max-w-2xl">{subtitle}</p>
  </div>
);

const SEO_SERVICES = [
  { icon: Search, title: 'Search Engine Optimization', items: ["Increase visibility in search engine results pages.", "Drive organic traffic and improve brand online presence.", "In-depth keyword research and high-quality backlink building."] },
  { icon: LayoutTemplate, title: 'Content Optimization', items: ["Create high-quality content that resonates with audiences.", "Optimize for search engines and social media platforms.", "Develop a content strategy aligned with business goals."] },
  { icon: FileText, title: 'On-page Optimization', items: ["Enhance technical SEO for crawlability and indexability.", "Optimize title tags, meta descriptions, and image alt text.", "Improve website speed and overall user experience."] },
  { icon: MessageSquare, title: 'SEO Consulting', items: ["Get expert advice on SEO strategy and implementation.", "Conduct in-depth website audits with actionable recommendations.", "Ongoing support to achieve your SEO goals."] },
  { icon: BarChart2, title: 'Data Analysis', items: ["Track metrics to measure SEO campaign effectiveness.", "Identify areas for improvement and optimize strategy.", "Gain insights into target audience online behavior."] },
  { icon: Target, title: 'SEO Strategy', items: ["Develop a customized strategy tailored to business needs.", "Set realistic, measurable targets for campaigns.", "Monitor and adjust strategy based on performance data."] },
];

const REASONS = [
  { title: "You aren't targeting the right keywords", desc: "Check search trends in your industry often so you don't miss out on valuable traffic." },
  { title: "Search engines struggle to crawl your site", desc: "A sitemap is essential. It helps search engine bots crawl your site and reduces overlooked parts." },
  { title: "Wasting Page Rank Opportunities", desc: "Internal links help visitors navigate efficiently and pass rank to valuable product pages." },
  { title: "Rankings dropped after a redesign", desc: "Recently relaunched? You must create 301 redirects so you don't lose traffic from old pages." },
  { title: "The Site Is Slow and Doesn't Rank", desc: "Visitors leave slow sites. Search engines hate them too; site speed is a massive ranking factor." },
];

const customEase = [0.16, 1, 0.3, 1];

export default function SeoPage() {
  return (
    <div className="min-h-screen bg-[#050a06] text-white selection:bg-[#D99201] selection:text-[#0a160d] overflow-hidden">
      <Header />

      {/* --- HERO & FORM --- */}
      <section className="pt-40 pb-32 px-6 relative z-10">
        {/* Cinematic Lighting */}
        <div className="absolute top-20 right-20 w-[800px] h-[800px] bg-[#D99201]/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
          
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8">
              <Globe size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">Dominate Search</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] mb-8 text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Business <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic pr-4">SEO Solution</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 font-light border-l-2 border-[#D99201]/50 pl-6 leading-relaxed">
              Stop guessing with your organic growth. We deploy data-driven strategies to rank your business on top and drive high-intent traffic.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 mb-12">
              {['Satisfied Clients', 'Increased Traffic', 'Higher Engagement'].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-xs tracking-widest uppercase bg-white/5 px-4 py-2.5 rounded-full border border-white/10">
                  <CheckCircle size={16} className="text-[#D99201]" /> {stat}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40, rotateY: 10 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }} className="perspective-[1000px]">
            <div className="bg-[#0a120c]/80 backdrop-blur-3xl p-1 relative rounded-[3rem] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/40 via-transparent to-[#1A3F22]/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-[#050a06]/90 p-10 md:p-14 rounded-[2.8rem] border border-white/5 h-full z-10">
                <h3 className="text-3xl font-medium mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                  Test Your <span className="text-[#D99201] italic">SEO Score</span> Free
                </h3>
                
                <form className="space-y-5">
                  {[
                    { type: 'text', placeholder: 'Full Name' },
                    { type: 'email', placeholder: 'Work Email Address' },
                    { type: 'tel', placeholder: 'Phone Number' },
                    { type: 'url', placeholder: 'Website URL' },
                  ].map((input, idx) => (
                    <input 
                      key={idx}
                      type={input.type} 
                      placeholder={input.placeholder} 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#D99201]/70 focus:bg-white/10 transition-all duration-300" 
                    />
                  ))}
                  
                  <button className="group relative w-full mt-8 overflow-hidden rounded-2xl bg-[#D99201] text-[#050a06] font-bold text-lg py-5 shadow-[0_0_30px_rgba(217,146,1,0.2)] hover:shadow-[0_0_50px_rgba(217,146,1,0.4)] transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="relative flex items-center justify-center gap-3 tracking-wide">
                      SUBMIT ANALYSIS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- HIGHLIGHT FEATURES --- */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5 bg-[#0a120c]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
          {[
            { icon: Globe, title: "Backlink Building", desc: "Acquiring high-quality, relevant backlinks from reputable websites. We employ ethical white-hat techniques to improve domain authority and search rankings." },
            { icon: Target, title: "Local Citation", desc: "Establish a strong local presence through comprehensive citation management. Accurate listings on Google My Business, Yelp, Bing, and more." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#1A3F22]/20 to-[#050a06] p-12 rounded-[2.5rem] border border-[#2D5A35]/50 relative overflow-hidden group hover:border-[#D99201]/40 transition-all duration-700 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-10 -right-10 text-[#D99201] opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
                <feature.icon size={250} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#D99201]/10 border border-[#D99201]/20 flex items-center justify-center mb-8 text-[#D99201] group-hover:bg-[#D99201] group-hover:text-[#050a06] transition-colors duration-500">
                <feature.icon size={30} />
              </div>
              <h3 className="text-3xl font-medium mb-4 text-white relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>{feature.title}</h3>
              <p className="text-lg text-white/60 relative z-10 font-light leading-relaxed max-w-md">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEO SERVICES BENTO --- */}
      <section className="py-32 px-6 relative border-t border-white/5 bg-[#050a06]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionHeader title="Our SEO Services" subtitle="From Start-up to Scale-up. Marketly Powers Growth." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {SEO_SERVICES.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1, duration: 0.8, ease: customEase }} 
                className="bg-[#0a120c] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#D99201]/40 transition-all duration-500 group shadow-2xl hover:-translate-y-1 overflow-hidden relative"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D99201] transition-colors duration-500 relative z-10">
                  <service.icon size={24} className="text-[#D99201] group-hover:text-[#0a160d]" />
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-6 relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
                <ul className="space-y-4 relative z-10">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D99201] mt-2 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5 REASONS & RANKING PROOF (SaaS Style) --- */}
      <section className="py-32 px-6 relative bg-[#0a120c] border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-24 max-w-7xl relative z-10">
          
          {/* Timeline of Reasons */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-16 text-white" style={{ fontFamily: 'var(--font-serif)' }}>5 Reasons You Need <span className="text-[#D99201] italic">SEO</span></h2>
            
            <div className="space-y-12 relative">
              {/* Continuous glowing timeline line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-[#D99201] via-[#D99201]/20 to-transparent" />
              
              {REASONS.map((reason, idx) => (
                <div key={idx} className="relative group pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#050a06] border border-[#D99201]/30 flex items-center justify-center text-sm font-bold text-[#D99201] group-hover:border-[#D99201] group-hover:bg-[#D99201] group-hover:text-[#050a06] transition-all duration-500 shadow-[0_0_15px_rgba(217,146,1,0.2)]">
                    0{idx + 1}
                  </div>
                  <h4 className="font-medium text-2xl mb-3 text-white tracking-tight">{reason.title}</h4>
                  <p className="text-white/50 font-light leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SaaS-Style Dashboard Proofs */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium mb-16 text-white" style={{ fontFamily: 'var(--font-serif)' }}>Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#4ade80] italic">Results</span></h2>
            
            <div className="relative group/card perspective-[1200px]">
              {/* Floating Glow Behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#00d4ff]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover/card:opacity-80 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-[#050a06] to-[#0a120c] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl p-2 md:p-8">
                
                {/* MacOS Style Header */}
                <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 mb-8">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Activity className="w-3 h-3 text-[#00d4ff]" /> Live SERP Tracking
                  </div>
                </div>

                <div className="space-y-6 px-2 md:px-4 pb-4">
                  {[
                    { query: "Interiors near me", rank: "3rd Position (Local)", progress: "85%", color: "from-[#00d4ff] to-[#3b82f6]" },
                    { query: "KSPL Non-Branded", rank: "Ranked #1 Top", progress: "98%", color: "from-[#4ade80] to-[#10b981]" },
                    { query: "Properties in Sarjapur", rank: "Top Page Ranking", progress: "90%", color: "from-[#D99201] to-[#f59e0b]" }
                  ].map((mock, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                      className="bg-white/[0.02] p-6 rounded-[1.5rem] border border-white/5 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Search size={16} className="text-white/60"/> 
                          </div>
                          <span className="font-medium text-white text-lg tracking-wide">{mock.query}</span>
                        </div>
                        <span className="bg-white/5 text-white/80 text-[10px] font-bold px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest whitespace-nowrap">
                          {mock.rank}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: mock.progress }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} className={`h-full bg-gradient-to-r ${mock.color} relative`}>
                           <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] -skew-x-12" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-32 px-6 relative bg-[#050a06] border-t border-white/5">
         <div className="container mx-auto max-w-7xl">
           {/* Grand Glassmorphic Wrapper */}
           <div className="bg-gradient-to-br from-[#1A3F22]/30 to-[#0a120c] backdrop-blur-3xl p-8 md:p-16 lg:p-20 rounded-[3rem] border border-[#2D5A35]/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,146,1,0.15),transparent_60%)] pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-12">
                  <h2 className="text-4xl lg:text-6xl font-medium leading-[1.1] text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                    Let's Do Something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">Better Together!</span>
                  </h2>
                  
                  <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
                     <div className="relative">
                       <div className="text-7xl font-light text-[#D99201] mb-4 tracking-tighter">106<span className="text-4xl">+</span></div>
                       <div className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-[#D99201] animate-pulse" /> Satisfied Clients
                       </div>
                     </div>
                     <div className="relative">
                       <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10 hidden sm:block" />
                       <div className="text-7xl font-light text-[#D99201] mb-4 tracking-tighter">87<span className="text-4xl">%</span></div>
                       <div className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" /> Avg. Conversion
                       </div>
                     </div>
                  </div>
                </div>
                
                <div className="relative perspective-[1000px]">
                  {/* Floating Metric Badge */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl z-20 shadow-2xl"
                  >
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Growth</div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      +450% <ArrowRight size={16} className="text-[#4ade80] -rotate-45" />
                    </div>
                  </motion.div>

                  <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group-hover:border-[#D99201]/30 transition-colors duration-700 relative">
                    <div className="absolute inset-0 bg-[#1A3F22]/20 mix-blend-multiply z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                      alt="SEO Team Data Analysis" 
                      className="w-full object-cover aspect-square md:aspect-[4/3] group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90" 
                    />
                  </div>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* --- FAQS & LOCATION --- */}
      <section className="py-32 px-6 relative bg-[#0a120c] border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader title="Answers to Your Questions" subtitle="Everything you need to know about our premium SEO methodology." />
          
          <div className="grid lg:grid-cols-12 gap-16 mt-20">
            {/* FAQ List */}
            <div className="lg:col-span-7 space-y-2">
               {[
                 { q: "What exactly is an SEO expert?", a: "A strategic partner who improves your website's visibility on search engines. When people search for related products, we ensure your site dominates the top results." },
                 { q: "What are your core SEO techniques?", a: "We utilize data-driven keyword research, flawless on-page optimization, high-authority backlink building, technical SEO restructuring, and high-intent content marketing." },
                 { q: "How long does it take to see results?", a: "SEO is a compound growth strategy. While quick wins are possible in weeks, sustainable and massive traffic shifts typically mature over 3 to 6 months." },
                 { q: "How do we track success?", a: "Total transparency. We provide real-time dashboards tracking key metrics like organic traffic growth, keyword ranking shifts, lead generation, and ultimately, ROI." }
               ].map((faq, idx) => (
                 <div key={idx} className="group border-b border-white/10 py-8 hover:border-[#D99201]/50 transition-colors">
                   <h4 className="text-2xl text-white font-medium mb-4 group-hover:text-[#D99201] transition-colors tracking-tight">{faq.q}</h4>
                   <p className="text-white/50 font-light leading-relaxed max-w-2xl">{faq.a}</p>
                 </div>
               ))}
            </div>

            {/* Premium Location Card */}
            <div className="lg:col-span-5 h-full">
              <div className="sticky top-32 bg-gradient-to-b from-[#1A3F22]/40 to-[#050a06] border border-[#2D5A35]/50 p-10 lg:p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[#D99201] opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:rotate-12">
                  <Globe size={200} />
                </div>
                
                <h4 className="text-[#D99201] text-3xl font-medium mb-10" style={{ fontFamily: 'var(--font-serif)' }}>Global Headquarters</h4>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-5 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#D99201] group-hover/item:border-[#D99201] transition-all text-[#D99201] group-hover/item:text-[#050a06]">
                      <Globe size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Location</div>
                      <p className="text-white/80 font-light text-lg">Sarjapur road, Bangalore 35</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#D99201] group-hover/item:border-[#D99201] transition-all text-[#D99201] group-hover/item:text-[#050a06]">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone Line</div>
                      <p className="text-white/80 font-light text-lg">+91 9606334692</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#D99201] group-hover/item:border-[#D99201] transition-all text-[#D99201] group-hover/item:text-[#050a06]">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email Address</div>
                      <p className="text-white/80 font-light text-lg">ramya@marketly.tech</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-12 py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white hover:text-[#050a06] transition-all duration-300 tracking-wide uppercase text-sm">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}