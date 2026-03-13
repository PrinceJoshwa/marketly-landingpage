'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 bg-[#234B2E] rounded-lg border border-[#2D5A35] hover:border-[#D99201] transition-all duration-300 hover:shadow-lg"
      style={{
        boxShadow: 'hover' ? '0 0 20px rgba(217, 146, 1, 0.2)' : 'none',
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D99201]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 bg-[#1A3F22] rounded-lg group-hover:bg-[#D99201]/10 transition-colors duration-300">
          <Icon size={24} className="text-[#D99201]" />
        </div>
        <h3
          className="text-xl font-semibold mb-3 text-white"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h3>
        <p className="text-[#f5f5f5] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
