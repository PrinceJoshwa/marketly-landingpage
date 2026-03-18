// 'use client';

// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface FaqItemProps {
//   question: string;
//   answer: string;
//   index?: number;
// }

// export default function FaqItem({ question, answer, index = 0 }: FaqItemProps) {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.05 }}
//       viewport={{ once: true }}
//       className="border-b border-[#2D5A35]"
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full py-5 px-4 flex items-center justify-between hover:bg-[#234B2E]/50 transition-colors duration-300 text-left"
//       >
//         <h3
//           className="text-base font-semibold leading-snug text-[#f5f5f5] flex-1 pr-4"
//           style={{ fontFamily: 'var(--font-serif)' }}
//         >
//           {question}
//         </h3>
//         <motion.div
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex-shrink-0"
//           style={{ color: '#D99201' }}
//         >
//           {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="px-4 pb-5"
//           >
//             <p className="text-sm leading-relaxed text-[#f5f5f5] opacity-80">{answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps { question: string; answer: string; index?: number; }

export default function FaqItem({ question, answer, index = 0 }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.5 }} viewport={{ once: true }} className="border-b border-white/10 group">
      <button onClick={() => setOpen(!open)} className="w-full py-8 flex items-center justify-between text-left focus:outline-none">
        <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-white/70 transition-colors pr-8" style={{ fontFamily: 'var(--font-serif)' }}>{question}</h3>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex-shrink-0 text-white/50 text-3xl font-light leading-none">+</motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="pb-8 text-lg font-light text-white/70 leading-relaxed max-w-4xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}