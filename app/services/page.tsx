'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

const SERVICES = [
  {
    category: 'Digital Marketing',
    color: 'from-[#D99201] to-[#E5A828]',
    services: [
      { name: 'SEO', desc: 'Boost organic visibility and rankings' },
      { name: 'Social Media Marketing', desc: 'Engage and grow your audience' },
      { name: 'PPC Campaigns', desc: 'Drive immediate, measurable results' },
      { name: 'Digital Transformations', desc: 'Modernize your digital strategy' },
      { name: 'Performance Marketing', desc: 'Results-driven marketing approach' },
      { name: 'Demand Generation', desc: 'Build qualified lead pipelines' },
    ],
  },
  {
    category: 'Paid Advertising',
    color: 'from-[#00d4ff] to-[#00e8ff]',
    services: [
      { name: 'Google Ads', desc: 'Reach customers actively searching' },
      { name: 'Facebook & Instagram Ads', desc: 'Target precise audiences' },
      { name: 'Amazon Advertising', desc: 'Maximize e-commerce sales' },
      { name: 'Shopping Ads', desc: 'Showcase products directly' },
      { name: 'YouTube Ads', desc: 'Engage through video' },
      { name: 'LinkedIn Ads', desc: 'B2B targeting and awareness' },
    ],
  },
  {
    category: 'Advanced Solutions',
    color: 'from-[#234B2E] to-[#2D5A35]',
    services: [
      { name: 'AI Marketing', desc: 'AI-powered campaign optimization' },
      { name: 'B2B & SaaS Marketing', desc: 'Enterprise growth strategies' },
      { name: 'OTT Advertising', desc: 'Streaming platform ads' },
      { name: 'Brand Strategy', desc: 'Build lasting brand value' },
      { name: 'Analytics & Reporting', desc: 'Data-driven insights' },
      { name: 'Conversion Optimization', desc: 'Maximize your ROI' },
    ],
  },
];

const WHY_CHOOSE = [
  '5000+ brands trusted since 2012',
  'Google Partner & Meta Business Partner certified',
  'Dedicated team of experts and strategists',
  '100% data privacy and confidentiality',
  'Transparent reporting and ROI tracking',
  'Customized strategies for every business',
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#1A3F22] text-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#234B2E] to-[#1A3F22] py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Services Designed For Your Success
            </h1>
            <p className="text-xl text-[#f5f5f5]/80">
              From SEO to paid advertising, we offer comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#234B2E] border-2 border-[#2D5A35] rounded-2xl p-8 hover:border-[#D99201] transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${service.color} h-1 w-12 mb-6 rounded-full`}></div>
                <h3
                  className="text-2xl font-bold mb-6 text-[#D99201] group-hover:text-[#E5A828] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {service.category}
                </h3>
                <ul className="space-y-4">
                  {service.services.map((svc, sIdx) => (
                    <li key={sIdx} className="flex gap-3 group/item">
                      <CheckCircle size={20} className="text-[#D99201] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-white">{svc.name}</div>
                        <div className="text-sm text-[#f5f5f5]/60">{svc.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#234B2E] py-20 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader title="Why Choose Marketly?" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {WHY_CHOOSE.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-4 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-[#D99201] flex-shrink-0 mt-1"></div>
                <p className="text-[#f5f5f5] text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Grow Your Business?"
        description="Let's discuss your goals and create a customized strategy that drives real results."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
      />

      <Footer />
    </div>
  );
}
