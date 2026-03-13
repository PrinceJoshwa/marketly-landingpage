'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ApproachStepProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  index?: number;
}

export default function ApproachStep({
  icon: Icon,
  step,
  title,
  description,
  index = 0,
}: ApproachStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#D99201]/20 to-[#D99201]/5 flex items-center justify-center border border-[#D99201]/30 hover:border-[#D99201] transition-colors duration-300"
      >
        <Icon size={32} className="text-[#D99201]" />
      </motion.div>

      {/* Step Number */}
      <div
        className="text-sm font-bold uppercase tracking-widest mb-3"
        style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
      >
        Step {step}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-4 text-white whitespace-pre-line leading-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#f5f5f5] text-sm leading-relaxed max-w-xs">{description}</p>

      {/* Connector line (hidden on last item) */}
      {index < 2 && (
        <div
          className="hidden md:block absolute top-32 left-1/2 w-1 h-12 bg-gradient-to-b from-[#D99201]/50 to-transparent -translate-x-1/2"
          style={{ transform: 'translateX(-50%)', top: '130px' }}
        />
      )}
    </motion.div>
  );
}
