'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignClass}`}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 text-white"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-light text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
