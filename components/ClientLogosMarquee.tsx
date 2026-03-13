'use client';

import { motion } from 'framer-motion';

interface ClientLogosMarqueeProps {
  logos: string[];
}

export default function ClientLogosMarquee({ logos }: ClientLogosMarqueeProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-[#234B2E]/50 py-8 overflow-hidden border-y border-[#2D5A35]">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold mb-6 text-[#D99201] uppercase tracking-wider">
          Trusted by 5000+ Happy Brands, Businesses, and Entrepreneurs Since 2012
        </p>

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: '-100%' }}
            transition={{
              duration: 50,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex gap-12 min-w-full"
          >
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-[#1A3F22] rounded-lg border border-[#2D5A35] hover:border-[#D99201]/50 transition-colors duration-300"
              >
                <div className="text-center px-4">
                  <p className="text-xs font-semibold text-[#f5f5f5]/70 truncate">{logo}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
