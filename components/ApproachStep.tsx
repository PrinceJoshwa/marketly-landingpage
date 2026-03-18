// // 'use client';

// // import { motion } from 'framer-motion';
// // import { LucideIcon } from 'lucide-react';

// // interface ApproachStepProps {
// //   icon: LucideIcon;
// //   step: string;
// //   title: string;
// //   description: string;
// //   index?: number;
// // }

// // export default function ApproachStep({
// //   icon: Icon,
// //   step,
// //   title,
// //   description,
// //   index = 0,
// // }: ApproachStepProps) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ delay: index * 0.15 }}
// //       viewport={{ once: true }}
// //       className="relative flex flex-col items-center text-center"
// //     >
// //       {/* Icon Circle */}
// //       <motion.div
// //         whileHover={{ scale: 1.1, rotate: 5 }}
// //         className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#D99201]/20 to-[#D99201]/5 flex items-center justify-center border border-[#D99201]/30 hover:border-[#D99201] transition-colors duration-300"
// //       >
// //         <Icon size={32} className="text-[#D99201]" />
// //       </motion.div>

// //       {/* Step Number */}
// //       <div
// //         className="text-sm font-bold uppercase tracking-widest mb-3"
// //         style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
// //       >
// //         Step {step}
// //       </div>

// //       {/* Title */}
// //       <h3
// //         className="text-xl font-bold mb-4 text-white whitespace-pre-line leading-tight"
// //         style={{ fontFamily: 'var(--font-serif)' }}
// //       >
// //         {title}
// //       </h3>

// //       {/* Description */}
// //       <p className="text-[#f5f5f5] text-sm leading-relaxed max-w-xs">{description}</p>

// //       {/* Connector line (hidden on last item) */}
// //       {index < 2 && (
// //         <div
// //           className="hidden md:block absolute top-32 left-1/2 w-1 h-12 bg-gradient-to-b from-[#D99201]/50 to-transparent -translate-x-1/2"
// //           style={{ transform: 'translateX(-50%)', top: '130px' }}
// //         />
// //       )}
// //     </motion.div>
// //   );
// // }
// 'use client';

// import { motion } from 'framer-motion';
// import { LucideIcon } from 'lucide-react';

// interface ApproachStepProps {
//   icon: LucideIcon;
//   step: number;
//   title: string;
//   description: string;
//   index?: number;
// }

// export default function ApproachStep({ icon: Icon, step, title, description, index = 0 }: ApproachStepProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="relative flex flex-col items-center text-center group"
//     >
//       <div className="mb-8 w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#D99201] group-hover:bg-transparent transition-all duration-500">
//         <Icon size={24} className="text-white/50 group-hover:text-[#D99201] transition-colors" />
//       </div>

//       <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-4 text-[#D99201]">
//         Phase 0{step}
//       </div>

//       <h3 className="text-2xl font-medium mb-4 text-white whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
//         {title}
//       </h3>

//       <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">{description}</p>
//     </motion.div>
//   );
// }
'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ApproachStepProps { icon: LucideIcon; step: number; title: string; description: string; index?: number; }

export default function ApproachStep({ icon: Icon, step, title, description, index = 0 }: ApproachStepProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-100px" }} className="relative flex flex-col items-center text-center group">
      <div className="mb-8 w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-500 shadow-lg">
        <Icon size={24} className="text-white/80 group-hover:text-white transition-colors" />
      </div>
      <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-4 text-white/50">Phase 0{step}</div>
      <h3 className="text-2xl font-medium mb-4 text-white whitespace-pre-line leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h3>
      <p className="text-white/70 text-sm font-light leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  );
}