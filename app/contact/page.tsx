'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1A3F22] text-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1a0f 0%, #1A3F22 55%, #142d1a 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #D99201 0%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: '#F5F1E8' }}
            >
              Let's Talk
            </h1>
            <p className="text-xl text-[#f5f5f5] leading-relaxed">
              Ready to transform your marketing strategy? Get in touch with our team for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#1A3F22]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail size={24} className="text-[#D99201] mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:hello@marketly.com"
                    className="text-[#f5f5f5] hover:text-[#D99201] transition-colors"
                  >
                    hello@marketly.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone size={24} className="text-[#D99201] mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-[#f5f5f5] hover:text-[#D99201] transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin size={24} className="text-[#D99201] mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Address</h3>
                  <p className="text-[#f5f5f5]">123 Marketing St, Tech City, TC 12345</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-[#2D5A35]">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[#f5f5f5] hover:text-[#D99201] transition-colors text-sm"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="md:col-span-2 p-8 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35]"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-[#D99201] text-dark-bg rounded-lg font-semibold hover:bg-[#D99201]-light transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-[#D99201]/10 border border-gold/50 rounded-lg text-center"
                >
                  <p className="text-[#D99201] font-semibold">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map or CTA */}
      <section className="py-24 bg-[#1A3F22]-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-[#f5f5f5] text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute strategy consultation with one of our marketing experts. No
              obligations, just insights and recommendations tailored to your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-[#D99201] text-dark-bg rounded-full font-semibold hover:bg-[#D99201]-light transition-colors"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
