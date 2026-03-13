'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  title = 'Ready to Transform Your Marketing?',
  description = 'Get started with a free consultation from our team of experts.',
  primaryCTA = { text: "Let's Talk", href: '/contact' },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-24 bg-[#234B2E]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {title}
          </h2>

          <p className="text-[#f5f5f5] text-lg mb-8 max-w-2xl mx-auto">{description}</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-all duration-300 hover:gap-3 group"
              >
                {primaryCTA.text}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {secondaryCTA && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A3F22] border border-[#D99201] text-[#D99201] rounded-full font-semibold hover:bg-[#D99201]/10 transition-all duration-300 hover:gap-3 group"
                >
                  {secondaryCTA.text}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
