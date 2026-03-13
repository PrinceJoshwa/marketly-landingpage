'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1A3F22] text-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl font-bold mb-4 text-[#D99201]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            404
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-[#f5f5f5] text-lg mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-all duration-300 hover:gap-3 group"
          >
            Back to Home
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
