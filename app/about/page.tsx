// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { Users, Target, Award, Zap } from 'lucide-react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';
// // // // import SectionHeader from '@/components/SectionHeader';
// // // // import ServiceCard from '@/components/ServiceCard';

// // // // export default function About() {
// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* Hero Section */}
// // // //       <section
// // // //         className="relative py-24 overflow-hidden"
// // // //         style={{
// // // //           background: 'linear-gradient(135deg, #0d1a0f 0%, #1A3F22 55%, #142d1a 100%)',
// // // //         }}
// // // //       >
// // // //         <div className="absolute inset-0 pointer-events-none">
// // // //           <div
// // // //             className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
// // // //             style={{
// // // //               background: 'radial-gradient(circle, #D99201 0%, transparent 70%)',
// // // //               filter: 'blur(90px)',
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div className="container mx-auto px-6 relative z-10">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             className="max-w-3xl"
// // // //           >
// // // //             <h1
// // // //               className="text-5xl md:text-6xl font-bold mb-6"
// // // //               style={{ fontFamily: 'var(--font-serif)', color: '#F5F1E8' }}
// // // //             >
// // // //               About Marketly
// // // //             </h1>
// // // //             <p className="text-xl text-[#f5f5f5] leading-relaxed">
// // // //               Over 13 years of transforming brands through strategic digital marketing and cutting-edge solutions.
// // // //             </p>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Our Story */}
// // // //       <section className="py-24 bg-[#1A3F22]">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="grid md:grid-cols-2 gap-16 items-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               <h2
// // // //                 className="text-4xl font-bold mb-6 text-white"
// // // //                 style={{ fontFamily: 'var(--font-serif)' }}
// // // //               >
// // // //                 Our Story
// // // //               </h2>
// // // //               <p className="text-[#f5f5f5] leading-relaxed mb-4">
// // // //                 Founded in 2012, Marketly has grown from a small digital marketing agency to a trusted partner
// // // //                 for over 5000 brands worldwide. We started with a simple mission: to help businesses navigate
// // // //                 the complex world of digital marketing with clarity and confidence.
// // // //               </p>
// // // //               <p className="text-[#f5f5f5] leading-relaxed mb-4">
// // // //                 Today, we combine over a decade of hands-on experience, certified Google and Meta partnerships,
// // // //                 and AI-powered marketing tools to deliver results that generic agencies simply cannot match.
// // // //               </p>
// // // //               <p className="text-[#f5f5f5] leading-relaxed">
// // // //                 Every strategy we create is bespoke, data-driven, and built for long-term growth. We don't
// // // //                 believe in one-size-fits-all solutions — we believe in understanding each client's unique
// // // //                 needs and crafting custom strategies that drive real business impact.
// // // //               </p>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               className="grid grid-cols-2 gap-6"
// // // //             >
// // // //               {[
// // // //                 { number: '5000+', label: 'Brands Served', icon: Users },
// // // //                 { number: '13+', label: 'Years Experience', icon: Award },
// // // //                 { number: '50+', label: 'Countries', icon: Target },
// // // //                 { number: '1000+', label: 'Campaigns', icon: Zap },
// // // //               ].map((stat, i) => (
// // // //                 <motion.div
// // // //                   key={i}
// // // //                   initial={{ opacity: 0, scale: 0.8 }}
// // // //                   whileInView={{ opacity: 1, scale: 1 }}
// // // //                   transition={{ delay: i * 0.1 }}
// // // //                   viewport={{ once: true }}
// // // //                   className="p-6 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35] text-center"
// // // //                 >
// // // //                   <stat.icon size={32} className="text-gold mx-auto mb-3" />
// // // //                   <div
// // // //                     className="text-3xl font-bold mb-2"
// // // //                     style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
// // // //                   >
// // // //                     {stat.number}
// // // //                   </div>
// // // //                   <p className="text-sm text-[#f5f5f5]">{stat.label}</p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Core Values */}
// // // //       <section className="py-24 bg-[#1A3F22]-light">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader
// // // //             title="Our Core Values"
// // // //             subtitle="Principles that guide everything we do"
// // // //           />

// // // //           <div className="grid md:grid-cols-4 gap-6 mt-12">
// // // //             {[
// // // //               {
// // // //                 icon: Target,
// // // //                 title: 'Data-Driven',
// // // //                 description: 'Every decision backed by analytics and insights',
// // // //               },
// // // //               {
// // // //                 icon: Users,
// // // //                 title: 'Collaborative',
// // // //                 description: 'We work as an extension of your team',
// // // //               },
// // // //               {
// // // //                 icon: Award,
// // // //                 title: 'Excellence',
// // // //                 description: 'Committed to delivering outstanding results',
// // // //               },
// // // //               {
// // // //                 icon: Zap,
// // // //                 title: 'Innovation',
// // // //                 description: 'Always exploring new marketing frontiers',
// // // //               },
// // // //             ].map((value, i) => (
// // // //               <ServiceCard
// // // //                 key={i}
// // // //                 icon={value.icon}
// // // //                 title={value.title}
// // // //                 description={value.description}
// // // //                 index={i}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Expertise */}
// // // //       <section className="py-24 bg-[#1A3F22]">
// // // //         <div className="container mx-auto px-6">
// // // //           <SectionHeader
// // // //             title="Our Expertise"
// // // //             subtitle="Specializing in every aspect of digital marketing"
// // // //           />

// // // //           <div className="grid md:grid-cols-2 gap-12 mt-12">
// // // //             {[
// // // //               {
// // // //                 title: 'Search Engine Optimization',
// // // //                 items: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
// // // //               },
// // // //               {
// // // //                 title: 'Performance Marketing',
// // // //                 items: ['Conversion Optimization', 'Funnel Analysis', 'A/B Testing', 'Attribution Modeling'],
// // // //               },
// // // //               {
// // // //                 title: 'Social Media Marketing',
// // // //                 items: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Outreach'],
// // // //               },
// // // //               {
// // // //                 title: 'AI & Automation',
// // // //                 items: ['Predictive Analytics', 'Marketing Automation', 'AI Copywriting', 'Chatbot Solutions'],
// // // //               },
// // // //             ].map((expertise, i) => (
// // // //               <motion.div
// // // //                 key={i}
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: i * 0.1 }}
// // // //                 viewport={{ once: true }}
// // // //                 className="p-8 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35]"
// // // //               >
// // // //                 <h3
// // // //                   className="text-2xl font-bold mb-6 text-gold"
// // // //                   style={{ fontFamily: 'var(--font-serif)' }}
// // // //                 >
// // // //                   {expertise.title}
// // // //                 </h3>
// // // //                 <ul className="space-y-3">
// // // //                   {expertise.items.map((item, j) => (
// // // //                     <li key={j} className="flex items-center gap-3 text-[#f5f5f5]">
// // // //                       <div className="w-2 h-2 rounded-full bg-gold" />
// // // //                       {item}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </motion.div>
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
// // // import { Users, Target, Award, Zap } from 'lucide-react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';
// // // import SectionHeader from '@/components/SectionHeader';

// // // const customEase = [0.16, 1, 0.3, 1];

// // // export default function About() {
// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white overflow-hidden">
// // //       <Header />

// // //       {/* Hero Section */}
// // //       <section className="relative pt-40 pb-32 px-6">
// // //         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D99201]/5 rounded-full blur-[150px] pointer-events-none" />
        
// // //         <div className="container mx-auto max-w-5xl relative z-10 text-center">
// // //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }}>
// // //             <h1 className="text-6xl md:text-8xl font-medium mb-8 leading-[1.05]" style={{ fontFamily: 'var(--font-serif)' }}>
// // //               About <span className="text-[#D99201] italic">Marketly</span>
// // //             </h1>
// // //             <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
// // //               Over 13 years of transforming brands through strategic digital marketing and cutting-edge solutions.
// // //             </p>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Our Story */}
// // //       <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
// // //         <div className="container mx-auto px-6 max-w-7xl">
// // //           <div className="grid lg:grid-cols-2 gap-20 items-center">
// // //             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}>
// // //               <h2 className="text-4xl md:text-5xl font-medium mb-10 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                 Our Story
// // //               </h2>
// // //               <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
// // //                 <p>
// // //                   Founded in 2012, Marketly has grown from a small digital marketing agency to a trusted partner
// // //                   for over 5000 brands worldwide. We started with a simple mission: to help businesses navigate
// // //                   the complex world of digital marketing with clarity and confidence.
// // //                 </p>
// // //                 <p>
// // //                   Today, we combine over a decade of hands-on experience, certified Google and Meta partnerships,
// // //                   and AI-powered marketing tools to deliver results that generic agencies simply cannot match.
// // //                 </p>
// // //                 <p>
// // //                   Every strategy we create is bespoke, data-driven, and built for long-term growth. We don't
// // //                   believe in one-size-fits-all solutions — we believe in understanding each client's unique
// // //                   needs and crafting custom strategies that drive real business impact.
// // //                 </p>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="grid grid-cols-2 gap-6">
// // //               {[
// // //                 { number: '5000+', label: 'Brands Served', icon: Users },
// // //                 { number: '13+', label: 'Years Experience', icon: Award },
// // //                 { number: '50+', label: 'Countries', icon: Target },
// // //                 { number: '1000+', label: 'Campaigns', icon: Zap },
// // //               ].map((stat, i) => (
// // //                 <div key={i} className="p-10 bg-[#050C07] rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-colors">
// // //                   <stat.icon size={24} className="text-[#D99201] mb-6 group-hover:scale-110 transition-transform duration-500" />
// // //                   <div className="text-4xl font-medium mb-2 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                     {stat.number}
// // //                   </div>
// // //                   <p className="text-xs tracking-widest uppercase font-medium text-white/40">{stat.label}</p>
// // //                 </div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Core Values */}
// // //       <section className="py-32 px-6">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <SectionHeader title="Our Core Values" subtitle="Principles that guide everything we do" />

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
// // //             {[
// // //               { icon: Target, title: 'Data-Driven', description: 'Every decision backed by analytics and insights' },
// // //               { icon: Users, title: 'Collaborative', description: 'We work as an extension of your team' },
// // //               { icon: Award, title: 'Excellence', description: 'Committed to delivering outstanding results' },
// // //               { icon: Zap, title: 'Innovation', description: 'Always exploring new marketing frontiers' },
// // //             ].map((value, i) => (
// // //               <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} 
// // //                 className="bg-white/[0.03] backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-colors"
// // //               >
// // //                 <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8">
// // //                   <value.icon size={20} className="text-[#D99201]" />
// // //                 </div>
// // //                 <h3 className="text-2xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{value.title}</h3>
// // //                 <p className="text-white/50 font-light leading-relaxed">{value.description}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Expertise */}
// // //       <section className="py-32 bg-white/[0.02] border-t border-white/5 px-6">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <SectionHeader title="Our Expertise" subtitle="Specializing in every aspect of digital marketing" />

// // //           <div className="grid md:grid-cols-2 gap-8 mt-20">
// // //             {[
// // //               { title: 'Search Engine Optimization', items: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'] },
// // //               { title: 'Performance Marketing', items: ['Conversion Optimization', 'Funnel Analysis', 'A/B Testing', 'Attribution Modeling'] },
// // //               { title: 'Social Media Marketing', items: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Outreach'] },
// // //               { title: 'AI & Automation', items: ['Predictive Analytics', 'Marketing Automation', 'AI Copywriting', 'Chatbot Solutions'] },
// // //             ].map((expertise, i) => (
// // //               <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} 
// // //                 className="p-12 bg-[#050C07] rounded-[2rem] border border-white/10 relative overflow-hidden group"
// // //               >
// // //                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99201]/5 rounded-full blur-3xl group-hover:bg-[#D99201]/10 transition-colors duration-700" />
// // //                 <h3 className="text-3xl font-medium mb-8 text-[#D99201]" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                   {expertise.title}
// // //                 </h3>
// // //                 <ul className="space-y-4">
// // //                   {expertise.items.map((item, j) => (
// // //                     <li key={j} className="flex items-center gap-4 text-white/70 font-light text-lg">
// // //                       <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
// // //                       {item}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
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
// // import { Users, Target, Award, Zap } from 'lucide-react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';
// // import SectionHeader from '@/components/SectionHeader';

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function About() {
// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white overflow-hidden">
// //       <Header />

// //       <section className="relative pt-40 pb-32 px-6">
// //         <div className="container mx-auto max-w-5xl relative z-10 text-center">
// //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }}>
// //             <h1 className="text-6xl md:text-8xl font-medium mb-8 leading-[1.05]" style={{ fontFamily: 'var(--font-serif)' }}>
// //               About <span className="text-white/60 italic">Marketly</span>
// //             </h1>
// //             <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
// //               Over 13 years of transforming brands through strategic digital marketing and cutting-edge solutions.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-32 bg-[#234B2E]/30 border-y border-white/5 relative">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           <div className="grid lg:grid-cols-2 gap-20 items-center">
// //             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}>
// //               <h2 className="text-4xl md:text-5xl font-medium mb-10 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
// //                 Our Story
// //               </h2>
// //               <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
// //                 <p>Founded in 2012, Marketly has grown from a small digital marketing agency to a trusted partner for over 5000 brands worldwide. We started with a simple mission: to help businesses navigate the complex world of digital marketing with clarity and confidence.</p>
// //                 <p>Today, we combine over a decade of hands-on experience, certified Google and Meta partnerships, and AI-powered marketing tools to deliver results that generic agencies simply cannot match.</p>
// //                 <p>Every strategy we create is bespoke, data-driven, and built for long-term growth. We don't believe in one-size-fits-all solutions — we believe in understanding each client's unique needs and crafting custom strategies that drive real business impact.</p>
// //               </div>
// //             </motion.div>

// //             <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="grid grid-cols-2 gap-6">
// //               {[
// //                 { number: '5000+', label: 'Brands Served', icon: Users },
// //                 { number: '13+', label: 'Years Experience', icon: Award },
// //                 { number: '50+', label: 'Countries', icon: Target },
// //                 { number: '1000+', label: 'Campaigns', icon: Zap },
// //               ].map((stat, i) => (
// //                 <div key={i} className="p-10 bg-white/[0.03] rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-colors">
// //                   <stat.icon size={24} className="text-white/60 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500" />
// //                   <div className="text-4xl font-medium mb-2 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{stat.number}</div>
// //                   <p className="text-xs tracking-widest uppercase font-medium text-white/50">{stat.label}</p>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-32 px-6">
// //         <div className="container mx-auto max-w-7xl">
// //           <SectionHeader title="Our Core Values" subtitle="Principles that guide everything we do" />
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
// //             {[
// //               { icon: Target, title: 'Data-Driven', description: 'Every decision backed by analytics and insights' },
// //               { icon: Users, title: 'Collaborative', description: 'We work as an extension of your team' },
// //               { icon: Award, title: 'Excellence', description: 'Committed to delivering outstanding results' },
// //               { icon: Zap, title: 'Innovation', description: 'Always exploring new marketing frontiers' },
// //             ].map((value, i) => (
// //               <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} 
// //                 className="bg-[#234B2E]/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:bg-[#234B2E]/60 transition-colors"
// //               >
// //                 <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8">
// //                   <value.icon size={20} className="text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{value.title}</h3>
// //                 <p className="text-white/60 font-light leading-relaxed">{value.description}</p>
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
// import { Users, Target, Award, Zap, Sparkles } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import SectionHeader from '@/components/SectionHeader';

// const customEase = [0.16, 1, 0.3, 1];

// export default function About() {
//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative pt-32 pb-24 overflow-hidden flex items-center min-h-[60vh]">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#1A3F22]/30 to-[#0a160d] z-0" />
//         <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none" />

//         <div className="container mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99201]/30 bg-[#D99201]/5 backdrop-blur-md mb-8">
//               <Sparkles size={14} className="text-[#D99201]" />
//               <span className="text-xs font-medium tracking-widest uppercase text-[#D99201]">Our Heritage</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//               About <span className="italic text-white/50">Marketly</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
//               Over 13 years of transforming brands through strategic digital marketing and cutting-edge solutions.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== OUR STORY & STATS BENTO ===== */}
//       <section className="py-24 relative z-10">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
//             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//                 Our Story
//               </h2>
//               <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
//                 <p>
//                   Founded in 2012, Marketly has grown from a small digital marketing agency to a trusted partner
//                   for over 5000 brands worldwide. We started with a simple mission: to help businesses navigate
//                   the complex world of digital marketing with clarity and confidence.
//                 </p>
//                 <p>
//                   Today, we combine over a decade of hands-on experience, certified Google and Meta partnerships,
//                   and AI-powered marketing tools to deliver results that generic agencies simply cannot match.
//                 </p>
//                 <p>
//                   Every strategy we create is bespoke, data-driven, and built for long-term growth. We don't
//                   believe in one-size-fits-all solutions — we believe in understanding each client's unique
//                   needs and crafting custom strategies that drive real business impact.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="grid grid-cols-2 gap-4 md:gap-6">
//               {[
//                 { number: '5000+', label: 'Brands Served', icon: Users },
//                 { number: '13+', label: 'Years Experience', icon: Award },
//                 { number: '50+', label: 'Countries', icon: Target },
//                 { number: '1000+', label: 'Campaigns', icon: Zap },
//               ].map((stat, i) => (
//                 <div key={i} className="p-8 bg-[#1A3F22]/20 backdrop-blur-md rounded-[2rem] border border-[#2D5A35] text-center group hover:bg-[#1A3F22]/40 transition-colors duration-500 shadow-xl">
//                   <div className="w-12 h-12 mx-auto rounded-full bg-[#D99201]/10 flex items-center justify-center mb-6 group-hover:bg-[#D99201] transition-colors duration-500">
//                     <stat.icon size={24} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
//                   </div>
//                   <div className="text-3xl md:text-4xl font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
//                     {stat.number}
//                   </div>
//                   <p className="text-xs tracking-widest uppercase font-bold text-[#D99201]">{stat.label}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CORE VALUES ===== */}
//       <section className="py-32 bg-[#1A3F22]/10 border-y border-[#2D5A35] relative">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <SectionHeader title="Our Core Values" subtitle="Principles that guide everything we do" />

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {[
//               { icon: Target, title: 'Data-Driven', description: 'Every decision backed by analytics and insights' },
//               { icon: Users, title: 'Collaborative', description: 'We work as an extension of your team' },
//               { icon: Award, title: 'Excellence', description: 'Committed to delivering outstanding results' },
//               { icon: Zap, title: 'Innovation', description: 'Always exploring new marketing frontiers' },
//             ].map((value, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} 
//                 className="bg-[#0a160d] p-10 rounded-[2rem] border border-[#2D5A35] hover:border-[#D99201]/50 transition-colors group"
//               >
//                 <div className="w-12 h-12 rounded-full border border-[#D99201]/20 bg-[#D99201]/5 flex items-center justify-center mb-8 group-hover:bg-[#D99201]/20 transition-colors">
//                   <value.icon size={20} className="text-[#D99201]" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>{value.title}</h3>
//                 <p className="text-white/50 font-light leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== EXPERTISE BENTO ===== */}
//       <section className="py-32 relative">
//         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
//         <div className="container mx-auto px-6 max-w-7xl relative z-10">
//           <SectionHeader title="Our Expertise" subtitle="Specializing in every aspect of digital marketing" />

//           <div className="grid md:grid-cols-2 gap-8 mt-16">
//             {[
//               { title: 'Search Engine Optimization', items: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'] },
//               { title: 'Performance Marketing', items: ['Conversion Optimization', 'Funnel Analysis', 'A/B Testing', 'Attribution Modeling'] },
//               { title: 'Social Media Marketing', items: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Outreach'] },
//               { title: 'AI & Automation', items: ['Predictive Analytics', 'Marketing Automation', 'AI Copywriting', 'Chatbot Solutions'] },
//             ].map((expertise, i) => (
//               <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} 
//                 className="p-12 bg-[#1A3F22]/20 backdrop-blur-xl rounded-[2rem] border border-[#2D5A35] relative overflow-hidden group"
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99201]/10 rounded-full blur-3xl group-hover:bg-[#00d4ff]/10 transition-colors duration-700" />
//                 <h3 className="text-3xl font-bold mb-8 text-[#D99201]" style={{ fontFamily: 'var(--font-serif)' }}>
//                   {expertise.title}
//                 </h3>
//                 <ul className="space-y-4 relative z-10">
//                   {expertise.items.map((item, j) => (
//                     <li key={j} className="flex items-center gap-4 text-white/70 font-light text-lg">
//                       <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
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
import { Users, Target, Award, Zap, Sparkles, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const customEase = [0.16, 1, 0.3, 1];

// Shared Premium Section Header
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="flex flex-col items-center text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
    {subtitle && <p className="text-white/50 text-xl font-light max-w-2xl">{subtitle}</p>}
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-[#050a06] text-white selection:bg-[#D99201] selection:text-[#0a160d] overflow-hidden">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-40 pb-24 overflow-hidden flex items-center min-h-[65vh] z-10">
        {/* Cinematic Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: customEase }} className="max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1, ease: customEase }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D99201]/30 bg-gradient-to-r from-[#D99201]/10 to-transparent backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">Our Heritage</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-medium mb-8 leading-[1.05] text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic pr-4">Marketly</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
              Over 13 years of transforming ambitious visions into digital masterpieces through strategic marketing and elite execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR STORY & STATS BENTO ===== */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#0a120c]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Story Text */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-medium mb-10 text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                The <span className="text-[#D99201] italic">Marketly</span> Story
              </h2>
              
              <div className="space-y-8 text-lg md:text-xl text-white/60 font-light leading-relaxed">
                <p>
                  Founded in 2012, Marketly has grown from a specialized digital boutique to a premier growth partner
                  for over 5,000 brands worldwide. We started with a simple mandate: to cut through the noise and deliver absolute clarity and undeniable ROI.
                </p>
                <p>
                  Today, we combine over a decade of hands-on experience, elite certified partnerships with Google and Meta,
                  and proprietary AI-powered methodologies to architect campaigns that generic agencies simply cannot replicate.
                </p>
                <div className="pl-6 border-l-2 border-[#D99201]/50 py-2">
                  <p className="text-white/80 font-medium italic">
                    "We don't believe in one-size-fits-all solutions. We believe in total market dominance through bespoke, data-driven strategy."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Stats Grid */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 perspective-[1000px]">
              {[
                { number: '5,000+', label: 'Brands Served', icon: Users },
                { number: '13+', label: 'Years Experience', icon: Award },
                { number: '50+', label: 'Global Markets', icon: Target },
                { number: '1,000+', label: 'Active Campaigns', icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="relative group bg-[#050a06] p-8 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl hover:-translate-y-1 transition-transform duration-500">
                  {/* Hover Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-all duration-500">
                      <stat.icon size={24} className="text-[#D99201] group-hover:text-[#050a06] transition-colors" />
                    </div>
                    <div className="text-3xl md:text-4xl font-light mb-2 text-white tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                      {stat.number}
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40 group-hover:text-[#D99201] transition-colors">{stat.label}</p>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D99201]/30 rounded-[2rem] transition-colors duration-700 pointer-events-none" />
                </div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-32 bg-[#050a06] border-t border-white/5 relative z-10 overflow-hidden">
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader title="Our Core Values" subtitle="The unwavering principles that dictate our standard of excellence." />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              { icon: Target, title: 'Data-Driven', description: 'Every strategic move is backed by rigorous analytics and deep market insights.' },
              { icon: Users, title: 'Collaborative', description: 'We embed ourselves deeply, acting as a seamless extension of your internal team.' },
              { icon: Award, title: 'Excellence', description: 'An obsessive commitment to delivering flawless execution and outstanding ROI.' },
              { icon: Zap, title: 'Innovation', description: 'Relentlessly exploring and adopting new marketing technologies and AI frontiers.' },
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8, ease: customEase }} viewport={{ once: true }} 
                className="bg-gradient-to-b from-[#0a120c] to-[#050a06] p-10 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-[#D99201]/40 transition-all duration-500 group shadow-xl relative overflow-hidden"
              >
                {/* Number Watermark */}
                <div className="absolute -top-4 -right-4 text-[100px] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none" style={{ fontFamily: 'var(--font-serif)' }}>
                  0{i + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#1A3F22]/30 border border-[#2D5A35]/50 flex items-center justify-center mb-10 group-hover:bg-[#D99201] group-hover:border-[#D99201] group-hover:scale-110 transition-all duration-500 relative z-10">
                  <value.icon size={28} className="text-[#D99201] group-hover:text-[#050a06] transition-colors" />
                </div>
                
                <h3 className="text-2xl font-medium mb-4 text-white relative z-10 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>{value.title}</h3>
                <p className="text-white/50 font-light leading-relaxed relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE BENTO ===== */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#0a120c]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader title="Our Expertise" subtitle="Masters of every critical discipline in the digital growth ecosystem." />

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {[
              { title: 'Search Engine Optimization', items: ['Technical Architecture', 'High-Intent Content Optimization', 'Authority Link Building', 'Local Market Domination'] },
              { title: 'Performance Marketing', items: ['Conversion Rate Optimization', 'Full-Funnel Analysis', 'Rigorous A/B Testing', 'Multi-Touch Attribution'] },
              { title: 'Social Media Strategy', items: ['Brand Narrative Strategy', 'Viral Content Creation', 'Community Architecture', 'Elite Influencer Networks'] },
              { title: 'AI & Automation', items: ['Predictive Market Analytics', 'Workflow Automation', 'LLM-Powered Copywriting', 'Intelligent Chat Solutions'] },
            ].map((expertise, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1, duration: 0.8, ease: customEase }} viewport={{ once: true }} 
                className="p-12 md:p-16 bg-[#050a06] rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-2xl hover:border-white/10 transition-colors"
              >
                {/* Interactive Radial Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D99201]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-[80%]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {expertise.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-all duration-500">
                     <ArrowUpRight size={20} className="text-[#D99201] group-hover:text-[#050a06]" />
                  </div>
                </div>

                <ul className="space-y-5 relative z-10">
                  {expertise.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-4 text-white/60 font-light text-lg group-hover:text-white/80 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#D99201] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(217,146,1,0.8)] transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}