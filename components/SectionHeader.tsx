// // 'use client';

// // import { motion } from 'framer-motion';

// // interface SectionHeaderProps {
// //   title: string;
// //   subtitle?: string;
// //   align?: 'left' | 'center' | 'right';
// // }

// // export default function SectionHeader({
// //   title,
// //   subtitle,
// //   align = 'center',
// // }: SectionHeaderProps) {
// //   const alignClass = {
// //     left: 'text-left',
// //     center: 'text-center',
// //     right: 'text-right',
// //   }[align];

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       className={`mb-12 ${alignClass}`}
// //     >
// //       <h2
// //         className="text-4xl md:text-5xl font-bold mb-4 text-white"
// //         style={{ fontFamily: 'var(--font-serif)' }}
// //       >
// //         {title}
// //       </h2>
// //       {subtitle && (
// //         <p className="text-text-light text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
// //           {subtitle}
// //         </p>
// //       )}
// //     </motion.div>
// //   );
// // }
// 'use client';
// import { motion } from 'framer-motion';

// interface SectionHeaderProps {
//   title: string;
//   subtitle?: string;
//   align?: 'left' | 'center' | 'right';
// }

// export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
//   const alignClass = { left: 'text-left', center: 'text-center items-center flex flex-col', right: 'text-right items-end flex flex-col' }[align];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       className={`mb-20 ${alignClass}`}
//     >
//       <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="text-white/50 text-xl font-light max-w-2xl leading-relaxed">
//           {subtitle}
//         </p>
//       )}
//     </motion.div>
//   );
// }
'use client';
import { motion } from 'framer-motion';

interface SectionHeaderProps { title: string; subtitle?: string; align?: 'left' | 'center' | 'right'; }

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = { left: 'text-left', center: 'text-center items-center flex flex-col', right: 'text-right items-end flex flex-col' }[align];
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className={`mb-20 ${alignClass}`}>
      <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
      {subtitle && (<p className="text-white/70 text-xl font-light max-w-2xl leading-relaxed">{subtitle}</p>)}
    </motion.div>
  );
}