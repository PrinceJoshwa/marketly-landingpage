'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A3F22] border-b border-[#2D5A35]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-bold"
              style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
            >
              Marketly
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-colors duration-300 text-sm"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D99201] hover:text-[#E5A828] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#2D5A35] pt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-colors duration-300 w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
