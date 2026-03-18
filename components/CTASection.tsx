// // // 'use client';

// // // import Link from 'next/link';
// // // import { motion } from 'framer-motion';
// // // import { ArrowRight } from 'lucide-react';

// // // interface CTASectionProps {
// // //   title?: string;
// // //   description?: string;
// // //   primaryCTA?: {
// // //     text: string;
// // //     href: string;
// // //   };
// // //   secondaryCTA?: {
// // //     text: string;
// // //     href: string;
// // //   };
// // // }

// // // export default function CTASection({
// // //   title = 'Ready to Transform Your Marketing?',
// // //   description = 'Get started with a free consultation from our team of experts.',
// // //   primaryCTA = { text: "Let's Talk", href: '/contact' },
// // //   secondaryCTA,
// // // }: CTASectionProps) {
// // //   return (
// // //     <section className="py-24 bg-[#234B2E]">
// // //       <div className="container mx-auto px-6">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="text-center"
// // //         >
// // //           <h2
// // //             className="text-4xl md:text-5xl font-bold mb-6 text-white"
// // //             style={{ fontFamily: 'var(--font-serif)' }}
// // //           >
// // //             {title}
// // //           </h2>

// // //           <p className="text-[#f5f5f5] text-lg mb-8 max-w-2xl mx-auto">{description}</p>

// // //           <div className="flex gap-4 justify-center flex-wrap">
// // //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// // //               <Link
// // //                 href={primaryCTA.href}
// // //                 className="inline-flex items-center gap-2 px-8 py-3 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-all duration-300 hover:gap-3 group"
// // //               >
// // //                 {primaryCTA.text}
// // //                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
// // //               </Link>
// // //             </motion.div>

// // //             {secondaryCTA && (
// // //               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// // //                 <Link
// // //                   href={secondaryCTA.href}
// // //                   className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A3F22] border border-[#D99201] text-[#D99201] rounded-full font-semibold hover:bg-[#D99201]/10 transition-all duration-300 hover:gap-3 group"
// // //                 >
// // //                   {secondaryCTA.text}
// // //                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
// // //                 </Link>
// // //               </motion.div>
// // //             )}
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // 'use client';
// // import Link from 'next/link';
// // import { motion } from 'framer-motion';

// // interface CTASectionProps {
// //   title?: string;
// //   description?: string;
// //   primaryCTA?: { text: string; href: string; };
// //   secondaryCTA?: { text: string; href: string; };
// // }

// // export default function CTASection({
// //   title = 'Ready to Transform Your Marketing?',
// //   description = 'Get started with a free consultation from our team of experts.',
// //   primaryCTA = { text: "Let's Talk", href: '/contact' },
// //   secondaryCTA,
// // }: CTASectionProps) {
// //   return (
// //     <section className="py-32 relative overflow-hidden">
// //       {/* Premium minimal gradient background */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D99201]/5" />
      
// //       <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
// //         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
// //           <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// //             {title}
// //           </h2>
// //           <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
// //             {description}
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
// //             <Link href={primaryCTA.href} className="px-10 py-5 bg-[#D99201] text-[#050C07] rounded-full font-medium text-lg hover:bg-white transition-colors duration-500 w-full sm:w-auto">
// //               {primaryCTA.text}
// //             </Link>
// //             {secondaryCTA && (
// //               <Link href={secondaryCTA.href} className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-colors duration-500 w-full sm:w-auto">
// //                 {secondaryCTA.text}
// //               </Link>
// //             )}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// interface CTASectionProps { title?: string; description?: string; primaryCTA?: { text: string; href: string; }; secondaryCTA?: { text: string; href: string; }; }

// export default function CTASection({ title = 'Ready to Transform Your Marketing?', description = 'Get started with a free consultation from our team of experts.', primaryCTA = { text: "Let's Talk", href: '/contact' }, secondaryCTA }: CTASectionProps) {
//   return (
//     <section className="py-32 relative overflow-hidden bg-[#234B2E]/30 border-t border-white/5">
//       <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
//         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
//           <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
//           <p className="text-white/70 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <Link href={primaryCTA.href} className="px-10 py-5 bg-white text-[#1A3F22] rounded-full font-medium text-lg hover:bg-white/90 transition-colors duration-500 w-full sm:w-auto shadow-xl">{primaryCTA.text}</Link>
//             {secondaryCTA && (<Link href={secondaryCTA.href} className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors duration-500 w-full sm:w-auto">{secondaryCTA.text}</Link>)}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps { 
  title?: React.ReactNode | string; 
  description?: React.ReactNode | string; 
  primaryCTA?: { text: string; href: string; }; 
  secondaryCTA?: { text: string; href: string; }; 
}

export default function CTASection({ 
  title = (
    <>
      Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic">Marketing?</span>
    </>
  ), 
  description = 'Get started with a free consultation from our team of experts and discover your true growth potential.', 
  primaryCTA = { text: "Let's Talk", href: '/contact' }, 
  secondaryCTA 
}: CTASectionProps) {
  
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 relative overflow-hidden bg-[#050a06] border-t border-white/5 z-10">
      
      {/* Deep Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#1A3F22]/20 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Massive Glassmorphic Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.2, ease: customEase }}
          className="relative max-w-5xl mx-auto rounded-[3rem] p-1 overflow-hidden group perspective-[1000px]"
        >
          {/* Animated Gradient Border Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/30 via-transparent to-[#1A3F22]/50 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-[#0a120c]/80 backdrop-blur-3xl rounded-[2.8rem] p-10 md:p-20 overflow-hidden text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
            
            {/* Inner Container Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#D99201]/10 to-transparent pointer-events-none" />
            
            {/* Decorative Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#D99201] to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, delay: 0.2, ease: customEase }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D99201]/20 bg-[#D99201]/5 backdrop-blur-md mb-8"
              >
                <Sparkles size={14} className="text-[#D99201]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D99201]">Next Steps</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, delay: 0.3, ease: customEase }}
                className="text-5xl md:text-7xl font-medium mb-8 text-white leading-[1.1] tracking-tight" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, delay: 0.4, ease: customEase }}
                className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed"
              >
                {description}
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, delay: 0.5, ease: customEase }}
                className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
              >
                <Link 
                  href={primaryCTA.href} 
                  className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-[#D99201] to-[#b07600] text-[#050a06] rounded-full font-bold text-lg w-full sm:w-auto overflow-hidden shadow-[0_0_30px_rgba(217,146,1,0.3)] hover:shadow-[0_0_50px_rgba(217,146,1,0.5)] transition-all duration-500 hover:scale-105"
                >
                  {/* Sweep Effect */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  <span className="relative z-10 tracking-wide">{primaryCTA.text}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {secondaryCTA && (
                  <Link 
                    href={secondaryCTA.href} 
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg w-full sm:w-auto hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-md"
                  >
                    <span className="tracking-wide">{secondaryCTA.text}</span>
                  </Link>
                )}
              </motion.div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}