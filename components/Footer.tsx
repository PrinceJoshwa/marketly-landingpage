'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#1A3F22] border-t border-[#2D5A35]">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
            >
              Marketly
            </h3>
            <p className="text-text-light text-sm leading-relaxed">
              Transform your brand with cutting-edge digital marketing solutions. Trusted by 5000+ brands since 2012.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-[#D99201] mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-[#D99201] mb-4">Services</h4>
            <div className="space-y-2">
              {['SEO', 'Social Media', 'PPC', 'Google Ads'].map((service) => (
                <p key={service} className="text-[#f5f5f5] text-sm">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-[#D99201] mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
                <a href="mailto:hello@marketly.com" className="text-[#f5f5f5] hover:text-[#D99201] transition-colors">
                  hello@marketly.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-[#f5f5f5] hover:text-[#D99201] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
                <p className="text-[#f5f5f5]">123 Marketing St, Tech City, TC 12345</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#2D5A35] mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[#f5f5f5] text-sm">© 2024 Marketly. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
