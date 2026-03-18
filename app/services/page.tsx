// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { CheckCircle, ArrowRight } from 'lucide-react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';
// // // // import SectionHeader from '@/components/SectionHeader';
// // // // import CTASection from '@/components/CTASection';
// // // // import Link from 'next/link';

// // // // const SERVICES = [
// // // //   {
// // // //     category: 'Digital Marketing',
// // // //     color: 'from-[#D99201] to-[#E5A828]',
// // // //     services: [
// // // //       { name: 'SEO', desc: 'Boost organic visibility and rankings' },
// // // //       { name: 'Social Media Marketing', desc: 'Engage and grow your audience' },
// // // //       { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' },
// // // //       { name: 'Digital Transformations', desc: 'Modernize your digital strategy' },
// // // //       { name: 'Performance Marketing', desc: 'Results-driven marketing approach' },
// // // //       { name: 'Demand Generation', desc: 'Build qualified lead pipelines' },
// // // //     ],
// // // //   },
// // // //   {
// // // //     category: 'Paid Advertising',
// // // //     color: 'from-[#00d4ff] to-[#00e8ff]',
// // // //     services: [
// // // //       { name: 'Google Ads', desc: 'Reach customers actively searching' },
// // // //       { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' },
// // // //       { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' },
// // // //       { name: 'Shopping Ads', desc: 'Showcase products directly' },
// // // //       { name: 'YouTube Ads', desc: 'Engage through video' },
// // // //       { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' },
// // // //     ],
// // // //   },
// // // //   {
// // // //     category: 'Advanced Solutions',
// // // //     color: 'from-[#234B2E] to-[#2D5A35]',
// // // //     services: [
// // // //       { name: 'AI Marketing', desc: 'AI-powered campaign optimization' },
// // // //       { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' },
// // // //       { name: 'OTT Advertising', desc: 'Streaming platform ads' },
// // // //       { name: 'Brand Strategy', desc: 'Build lasting brand value' },
// // // //       { name: 'Analytics & Reporting', desc: 'Data-driven insights' },
// // // //       { name: 'Conversion Optimization', desc: 'Maximize your ROI' },
// // // //     ],
// // // //   },
// // // // ];

// // // // const WHY_CHOOSE = [
// // // //   '5000+ brands trusted since 2012',
// // // //   'Google Partner & Meta Business Partner certified',
// // // //   'Dedicated team of experts and strategists',
// // // //   '100% data privacy and confidentiality',
// // // //   'Transparent reporting and ROI tracking',
// // // //   'Customized strategies for every business',
// // // // ];

// // // // export default function Services() {
// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* Hero */}
// // // //       <section className="bg-gradient-to-br from-[#234B2E] to-[#1A3F22] py-20 md:py-32">
// // // //         <div className="container mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             className="text-center max-w-3xl mx-auto"
// // // //           >
// // // //             <h1
// // // //               className="text-5xl md:text-6xl font-bold mb-6"
// // // //               style={{ fontFamily: 'var(--font-serif)' }}
// // // //             >
// // // //               Services Designed For Your Success
// // // //             </h1>
// // // //             <p className="text-xl text-[#f5f5f5]/80">
// // // //               From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to your business goals.
// // // //             </p>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Services Grid */}
// // // //       <section className="py-20 md:py-32">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {SERVICES.map((service, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 30 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: idx * 0.1 }}
// // // //                 className="bg-[#234B2E] border-2 border-[#2D5A35] rounded-2xl p-8 hover:border-[#D99201] transition-all duration-300 group"
// // // //               >
// // // //                 <div className={`bg-gradient-to-r ${service.color} h-1 w-12 mb-6 rounded-full`}></div>
// // // //                 <h3
// // // //                   className="text-2xl font-bold mb-6 text-[#D99201] group-hover:text-[#E5A828] transition-colors"
// // // //                   style={{ fontFamily: 'var(--font-serif)' }}
// // // //                 >
// // // //                   {service.category}
// // // //                 </h3>
// // // //                 <ul className="space-y-4">
// // // //                   {service.services.map((svc, sIdx) => (
// // // //                     <li key={sIdx} className="flex gap-3 group/item">
// // // //                       <CheckCircle size={20} className="text-[#D99201] flex-shrink-0 mt-1" />
// // // //                       <div>
// // // //                         <div className="font-semibold text-white">{svc.name}</div>
// // // //                         <div className="text-sm text-[#f5f5f5]/60">{svc.desc}</div>
// // // //                       </div>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Why Choose Section */}
// // // //       <section className="bg-[#234B2E] py-20 md:py-32">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader title="Why Choose Marketly?" />
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={{
// // // //               hidden: { opacity: 0 },
// // // //               visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // //             }}
// // // //             className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
// // // //           >
// // // //             {WHY_CHOOSE.map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 variants={{
// // // //                   hidden: { opacity: 0, x: -20 },
// // // //                   visible: { opacity: 1, x: 0 },
// // // //                 }}
// // // //                 className="flex gap-4 items-start"
// // // //               >
// // // //                 <div className="w-6 h-6 rounded-full bg-[#D99201] flex-shrink-0 mt-1"></div>
// // // //                 <p className="text-[#f5f5f5] text-lg">{item}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA */}
// // // //       <CTASection
// // // //         title="Ready to Grow Your Business?"
// // // //         description="Let's discuss your goals and create a customized strategy that drives real results."
// // // //         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
// // // //       />

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { ArrowRight } from 'lucide-react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';
// // // import SectionHeader from '@/components/SectionHeader';
// // // import CTASection from '@/components/CTASection';

// // // const SERVICES = [
// // //   {
// // //     category: 'Digital Marketing',
// // //     services: [
// // //       { name: 'SEO', desc: 'Boost organic visibility and rankings' },
// // //       { name: 'Social Media Marketing', desc: 'Engage and grow your audience' },
// // //       { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' },
// // //       { name: 'Digital Transformations', desc: 'Modernize your digital strategy' },
// // //       { name: 'Performance Marketing', desc: 'Results-driven marketing approach' },
// // //       { name: 'Demand Generation', desc: 'Build qualified lead pipelines' },
// // //     ],
// // //   },
// // //   {
// // //     category: 'Paid Advertising',
// // //     services: [
// // //       { name: 'Google Ads', desc: 'Reach customers actively searching' },
// // //       { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' },
// // //       { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' },
// // //       { name: 'Shopping Ads', desc: 'Showcase products directly' },
// // //       { name: 'YouTube Ads', desc: 'Engage through video' },
// // //       { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' },
// // //     ],
// // //   },
// // //   {
// // //     category: 'Advanced Solutions',
// // //     services: [
// // //       { name: 'AI Marketing', desc: 'AI-powered campaign optimization' },
// // //       { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' },
// // //       { name: 'OTT Advertising', desc: 'Streaming platform ads' },
// // //       { name: 'Brand Strategy', desc: 'Build lasting brand value' },
// // //       { name: 'Analytics & Reporting', desc: 'Data-driven insights' },
// // //       { name: 'Conversion Optimization', desc: 'Maximize your ROI' },
// // //     ],
// // //   },
// // // ];

// // // const WHY_CHOOSE = [
// // //   '5000+ brands trusted since 2012',
// // //   'Google Partner & Meta Business Partner certified',
// // //   'Dedicated team of experts and strategists',
// // //   '100% data privacy and confidentiality',
// // //   'Transparent reporting and ROI tracking',
// // //   'Customized strategies for every business',
// // // ];

// // // export default function Services() {
// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white overflow-hidden">
// // //       <Header />

// // //       {/* Hero */}
// // //       <section className="pt-40 pb-20 px-6 relative">
// // //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
// // //         <div className="container mx-auto">
// // //           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-center max-w-4xl mx-auto">
// // //             <h1 className="text-5xl md:text-7xl font-medium mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-serif)' }}>
// // //               Services Designed <br/> <span className="text-white/50 italic">For Your Success</span>
// // //             </h1>
// // //             <p className="text-xl text-white/50 font-light">
// // //               From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to your business goals.
// // //             </p>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Services Grid */}
// // //       <section className="py-20 px-6">
// // //         <div className="container mx-auto">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {SERVICES.map((service, idx) => (
// // //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }}
// // //                 className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.04] transition-colors duration-500"
// // //               >
// // //                 <h3 className="text-3xl font-medium mb-10 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{service.category}</h3>
// // //                 <ul className="space-y-8">
// // //                   {service.services.map((svc, sIdx) => (
// // //                     <li key={sIdx} className="group">
// // //                       <div className="font-medium text-white/90 mb-1 group-hover:text-[#D99201] transition-colors">{svc.name}</div>
// // //                       <div className="text-sm text-white/40 font-light">{svc.desc}</div>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Why Choose Section */}
// // //       <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
// // //         <div className="container mx-auto">
// // //           <SectionHeader title="Why Choose Marketly?" />
// // //           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
// // //             {WHY_CHOOSE.map((item, idx) => (
// // //               <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
// // //                 className="flex items-center gap-6 p-6 border-b border-white/5"
// // //               >
// // //                 <div className="w-2 h-2 rounded-full bg-[#D99201] shrink-0 shadow-[0_0_10px_rgba(217,146,1,0.5)]" />
// // //                 <p className="text-white/70 font-light text-lg">{item}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <CTASection
// // //         title="Ready to Grow Your Business?"
// // //         description="Let's discuss your goals and create a customized strategy that drives real results."
// // //         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
// // //       />
// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { motion } from 'framer-motion';
// // import { ArrowRight } from 'lucide-react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';
// // import SectionHeader from '@/components/SectionHeader';
// // import CTASection from '@/components/CTASection';

// // const SERVICES = [
// //   { category: 'Digital Marketing', services: [{ name: 'SEO', desc: 'Boost organic visibility and rankings' }, { name: 'Social Media Marketing', desc: 'Engage and grow your audience' }, { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' }, { name: 'Digital Transformations', desc: 'Modernize your digital strategy' }, { name: 'Performance Marketing', desc: 'Results-driven marketing approach' }, { name: 'Demand Generation', desc: 'Build qualified lead pipelines' }] },
// //   { category: 'Paid Advertising', services: [{ name: 'Google Ads', desc: 'Reach customers actively searching' }, { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' }, { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' }, { name: 'Shopping Ads', desc: 'Showcase products directly' }, { name: 'YouTube Ads', desc: 'Engage through video' }, { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' }] },
// //   { category: 'Advanced Solutions', services: [{ name: 'AI Marketing', desc: 'AI-powered campaign optimization' }, { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' }, { name: 'OTT Advertising', desc: 'Streaming platform ads' }, { name: 'Brand Strategy', desc: 'Build lasting brand value' }, { name: 'Analytics & Reporting', desc: 'Data-driven insights' }, { name: 'Conversion Optimization', desc: 'Maximize your ROI' }] },
// // ];

// // const WHY_CHOOSE = [
// //   '5000+ brands trusted since 2012', 'Google Partner & Meta Business Partner certified', 'Dedicated team of experts and strategists', '100% data privacy and confidentiality', 'Transparent reporting and ROI tracking', 'Customized strategies for every business',
// // ];

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function Services() {
// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white overflow-hidden">
// //       <Header />

// //       <section className="pt-40 pb-20 px-6 relative">
// //         <div className="container mx-auto">
// //           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="text-center max-w-4xl mx-auto">
// //             <h1 className="text-5xl md:text-7xl font-medium mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Services Designed <br/> <span className="text-white/60 italic">For Your Success</span>
// //             </h1>
// //             <p className="text-xl text-white/70 font-light">
// //               From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to your business goals.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-20 px-6">
// //         <div className="container mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {SERVICES.map((service, idx) => (
// //               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }}
// //                 className="bg-[#234B2E]/40 border border-white/10 rounded-[2rem] p-10 hover:bg-[#234B2E]/60 transition-colors duration-500 shadow-xl"
// //               >
// //                 <h3 className="text-3xl font-medium mb-10 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{service.category}</h3>
// //                 <ul className="space-y-8">
// //                   {service.services.map((svc, sIdx) => (
// //                     <li key={sIdx} className="group">
// //                       <div className="font-medium text-white/90 mb-1 group-hover:text-white transition-colors">{svc.name}</div>
// //                       <div className="text-sm text-white/50 font-light">{svc.desc}</div>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6 bg-[#234B2E]/20 border-t border-white/5">
// //         <div className="container mx-auto">
// //           <SectionHeader title="Why Choose Marketly?" />
// //           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
// //             {WHY_CHOOSE.map((item, idx) => (
// //               <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
// //                 className="flex items-center gap-6 p-6 border-b border-white/10"
// //               >
// //                 <div className="w-2 h-2 rounded-full bg-white/40 shrink-0" />
// //                 <p className="text-white/80 font-light text-lg">{item}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTASection
// //         title="Ready to Grow Your Business?"
// //         description="Let's discuss your goals and create a customized strategy that drives real results."
// //         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
// //       />
// //       <Footer />
// //     </div>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';
// import { CheckCircle, Sparkles } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import SectionHeader from '@/components/SectionHeader';
// import CTASection from '@/components/CTASection';

// const SERVICES = [
//   {
//     category: 'Digital Marketing',
//     color: 'from-[#D99201] to-[#E5A828]',
//     services: [
//       { name: 'SEO', desc: 'Boost organic visibility and rankings' },
//       { name: 'Social Media Marketing', desc: 'Engage and grow your audience' },
//       { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' },
//       { name: 'Digital Transformations', desc: 'Modernize your digital strategy' },
//       { name: 'Performance Marketing', desc: 'Results-driven marketing approach' },
//       { name: 'Demand Generation', desc: 'Build qualified lead pipelines' },
//     ],
//   },
//   {
//     category: 'Paid Advertising',
//     color: 'from-[#00d4ff] to-[#00e8ff]',
//     services: [
//       { name: 'Google Ads', desc: 'Reach customers actively searching' },
//       { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' },
//       { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' },
//       { name: 'Shopping Ads', desc: 'Showcase products directly' },
//       { name: 'YouTube Ads', desc: 'Engage through video' },
//       { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' },
//     ],
//   },
//   {
//     category: 'Advanced Solutions',
//     color: 'from-[#234B2E] to-[#458553]',
//     services: [
//       { name: 'AI Marketing', desc: 'AI-powered campaign optimization' },
//       { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' },
//       { name: 'OTT Advertising', desc: 'Streaming platform ads' },
//       { name: 'Brand Strategy', desc: 'Build lasting brand value' },
//       { name: 'Analytics & Reporting', desc: 'Data-driven insights' },
//       { name: 'Conversion Optimization', desc: 'Maximize your ROI' },
//     ],
//   },
// ];

// const WHY_CHOOSE = [
//   '5000+ brands trusted since 2012',
//   'Google Partner & Meta Business Partner certified',
//   'Dedicated team of experts and strategists',
//   '100% data privacy and confidentiality',
//   'Transparent reporting and ROI tracking',
//   'Customized strategies for every business',
// ];

// const customEase = [0.16, 1, 0.3, 1];

// export default function Services() {
//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* ===== HERO ===== */}
//       <section className="relative pt-40 pb-24 overflow-hidden">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3F22] rounded-full blur-[150px] pointer-events-none" />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8">
//               <Sparkles size={14} className="text-[#D99201]" />
//               <span className="text-xs font-medium tracking-widest uppercase text-[#D99201]">Capabilities</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//               Services Designed <br className="hidden md:block"/> <span className="italic text-white/50">For Your Success</span>
//             </h1>
//             <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
//               From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to your business goals.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== SERVICES GRID ===== */}
//       <section className="py-24 relative z-10">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {SERVICES.map((service, idx) => (
//               <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }}
//                 className="bg-[#1A3F22]/20 backdrop-blur-xl border border-[#2D5A35] rounded-[2.5rem] p-10 hover:bg-[#1A3F22]/40 transition-all duration-500 group shadow-2xl relative overflow-hidden"
//               >
//                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
//                 <div className={`w-12 h-1 bg-gradient-to-r ${service.color} mb-8 rounded-full`} />
                
//                 <h3 className="text-3xl font-bold mb-10 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//                   {service.category}
//                 </h3>
                
//                 <ul className="space-y-6">
//                   {service.services.map((svc, sIdx) => (
//                     <li key={sIdx} className="flex gap-4 group/item items-start">
//                       <div className="mt-1">
//                         <CheckCircle size={18} className="text-[#D99201] opacity-70 group-hover/item:opacity-100 transition-opacity" />
//                       </div>
//                       <div>
//                         <div className="font-bold text-white mb-1">{svc.name}</div>
//                         <div className="text-sm text-white/50 font-light leading-relaxed">{svc.desc}</div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== WHY CHOOSE US ===== */}
//       <section className="py-32 bg-[#1A3F22]/10 border-y border-[#2D5A35] relative">
//         <div className="container mx-auto px-6">
//           <SectionHeader title="Why Choose Marketly?" subtitle="Partner with the agency that scales industry leaders." />
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
//             className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto"
//           >
//             {WHY_CHOOSE.map((item, idx) => (
//               <motion.div key={idx} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
//                 className="flex gap-4 items-center p-4 border-b border-white/5"
//               >
//                 <div className="w-2 h-2 rounded-full bg-[#D99201] flex-shrink-0 shadow-[0_0_10px_#D99201]" />
//                 <p className="text-white/80 font-light text-lg">{item}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <CTASection
//         title="Ready to Grow Your Business?"
//         description="Let's discuss your goals and create a customized strategy that drives real results."
//         primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
//       />
//       <Footer />
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

// Note: Assuming you have SectionHeader, if not, it's just a styled title/subtitle block
import SectionHeader from '@/components/SectionHeader';

const SERVICES = [
  {
    category: 'Digital Marketing',
    color: 'from-[#D99201] to-[#E5A828]',
    glow: 'group-hover:bg-[#D99201]/10',
    border: 'group-hover:border-[#D99201]/30',
    services: [
      { name: 'SEO', desc: 'Boost organic visibility and rankings' },
      { name: 'Social Media Marketing', desc: 'Engage and grow your audience' },
      { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' },
      { name: 'Digital Transformations', desc: 'Modernize your digital strategy' },
      { name: 'Performance Marketing', desc: 'Results-driven marketing approach' },
      { name: 'Demand Generation', desc: 'Build qualified lead pipelines' },
    ],
  },
  {
    category: 'Paid Advertising',
    color: 'from-[#00d4ff] to-[#00e8ff]',
    glow: 'group-hover:bg-[#00d4ff]/10',
    border: 'group-hover:border-[#00d4ff]/30',
    services: [
      { name: 'Google Ads', desc: 'Reach customers actively searching' },
      { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' },
      { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' },
      { name: 'Shopping Ads', desc: 'Showcase products directly' },
      { name: 'YouTube Ads', desc: 'Engage through video' },
      { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' },
    ],
  },
  {
    category: 'Advanced Solutions',
    color: 'from-[#4ade80] to-[#22c55e]', // Brightened the green for better dark-mode contrast
    glow: 'group-hover:bg-[#4ade80]/10',
    border: 'group-hover:border-[#4ade80]/30',
    services: [
      { name: 'AI Marketing', desc: 'AI-powered campaign optimization' },
      { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' },
      { name: 'OTT Advertising', desc: 'Streaming platform ads' },
      { name: 'Brand Strategy', desc: 'Build lasting brand value' },
      { name: 'Analytics & Reporting', desc: 'Data-driven insights' },
      { name: 'Conversion Optimization', desc: 'Maximize your ROI' },
    ],
  },
];

const WHY_CHOOSE = [
  '5,000+ brands trusted since 2012',
  'Google Partner & Meta Business Partner certified',
  'Dedicated team of experts and strategists',
  '100% data privacy and confidentiality',
  'Transparent reporting and ROI tracking',
  'Customized strategies for every business',
];

const customEase = [0.16, 1, 0.3, 1];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#050a06] text-white selection:bg-[#D99201] selection:text-[#0a160d] overflow-hidden">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-24 overflow-hidden flex items-center min-h-[55vh] z-10">
        {/* Soft Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D99201]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: customEase }} className="text-center max-w-5xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8">
              <Sparkles size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Capabilities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium mb-8 leading-[1.05] text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Services Designed <br className="hidden md:block"/> 
              For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic pr-4">Success</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-3xl mx-auto">
              From organic dominance to elite paid acquisition, we engineer comprehensive digital ecosystems tailored to scale your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#0a120c]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.8, ease: customEase }}
                className={`bg-[#050a06] border border-white/5 rounded-[2.5rem] p-10 md:p-12 transition-all duration-700 group shadow-2xl relative overflow-hidden ${service.border}`}
              >
                {/* Dynamic Ambient Glow based on category color */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none ${service.glow} mix-blend-screen blur-3xl`} />
                
                {/* Animated Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`} />
                
                {/* Title & Icon Header */}
                <div className="mb-12">
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.color} mb-8 rounded-full`} />
                  <h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                    {service.category}
                  </h3>
                </div>
                
                <ul className="space-y-6 relative z-10">
                  {service.services.map((svc, sIdx) => (
                    <li key={sIdx} className="flex gap-5 group/item items-start">
                      <div className="mt-1">
                        <CheckCircle2 size={20} className="text-white/20 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="font-medium text-white/80 group-hover/item:text-white transition-colors mb-1 text-lg">{svc.name}</div>
                        <div className="text-sm text-white/40 font-light leading-relaxed group-hover/item:text-white/60 transition-colors">{svc.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-32 bg-[#050a06] border-t border-white/5 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D99201]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader title="Why Choose Marketly?" subtitle="Partner with the agency that scales industry leaders." />
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {WHY_CHOOSE.map((item, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } } }}
                className="group flex gap-6 items-center p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#D99201]/10 border border-[#D99201]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D99201] transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-[#D99201] group-hover:bg-[#050a06] transition-colors shadow-[0_0_10px_#D99201]" />
                </div>
                <p className="text-white/70 font-light text-lg group-hover:text-white transition-colors leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <CTASection
        title={
          <>
            Ready to Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">Revenue?</span>
          </>
        }
        description="Let's discuss your goals and engineer a customized digital strategy that drives undeniable results."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
      />
      
      <Footer />
    </div>
  );
}