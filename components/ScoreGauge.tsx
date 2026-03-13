'use client';

import { motion } from 'framer-motion';

interface ScoreGaugeProps {
  score: number;
  label?: string;
}

export default function ScoreGauge({ score, label = 'Good Visibility' }: ScoreGaugeProps) {
  const circumference = Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <svg width="180" height="100" viewBox="0 0 180 100" className="drop-shadow-lg">
        {/* Background arc */}
        <path
          d="M 10 90 A 80 80 0 0 1 170 90"
          fill="none"
          stroke="rgba(217,146,1,0.15)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Animated score arc */}
        <motion.path
          d="M 10 90 A 80 80 0 0 1 170 90"
          fill="none"
          stroke="url(#goldGradGauge)"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          strokeDasharray={circumference}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="goldGradGauge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99201" />
            <stop offset="100%" stopColor="#EDB36A" />
          </linearGradient>
        </defs>
        <text x="90" y="82" textAnchor="middle" fill="#E6E2DA" fontSize="28" fontWeight="bold">
          {score}
        </text>
        <text x="90" y="96" textAnchor="middle" fill="#a89880" fontSize="9">
          /100
        </text>
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-xs tracking-widest uppercase font-semibold"
        style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
