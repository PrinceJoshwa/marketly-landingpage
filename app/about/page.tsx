'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';

export default function About() {
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
              About Marketly
            </h1>
            <p className="text-xl text-[#f5f5f5] leading-relaxed">
              Over 13 years of transforming brands through strategic digital marketing and cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#1A3F22]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our Story
              </h2>
              <p className="text-[#f5f5f5] leading-relaxed mb-4">
                Founded in 2012, Marketly has grown from a small digital marketing agency to a trusted partner
                for over 5000 brands worldwide. We started with a simple mission: to help businesses navigate
                the complex world of digital marketing with clarity and confidence.
              </p>
              <p className="text-[#f5f5f5] leading-relaxed mb-4">
                Today, we combine over a decade of hands-on experience, certified Google and Meta partnerships,
                and AI-powered marketing tools to deliver results that generic agencies simply cannot match.
              </p>
              <p className="text-[#f5f5f5] leading-relaxed">
                Every strategy we create is bespoke, data-driven, and built for long-term growth. We don't
                believe in one-size-fits-all solutions — we believe in understanding each client's unique
                needs and crafting custom strategies that drive real business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '5000+', label: 'Brands Served', icon: Users },
                { number: '13+', label: 'Years Experience', icon: Award },
                { number: '50+', label: 'Countries', icon: Target },
                { number: '1000+', label: 'Campaigns', icon: Zap },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35] text-center"
                >
                  <stat.icon size={32} className="text-gold mx-auto mb-3" />
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-sm text-[#f5f5f5]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#1A3F22]-light">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Core Values"
            subtitle="Principles that guide everything we do"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Target,
                title: 'Data-Driven',
                description: 'Every decision backed by analytics and insights',
              },
              {
                icon: Users,
                title: 'Collaborative',
                description: 'We work as an extension of your team',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to delivering outstanding results',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Always exploring new marketing frontiers',
              },
            ].map((value, i) => (
              <ServiceCard
                key={i}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-[#1A3F22]">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Expertise"
            subtitle="Specializing in every aspect of digital marketing"
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {[
              {
                title: 'Search Engine Optimization',
                items: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
              },
              {
                title: 'Performance Marketing',
                items: ['Conversion Optimization', 'Funnel Analysis', 'A/B Testing', 'Attribution Modeling'],
              },
              {
                title: 'Social Media Marketing',
                items: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Outreach'],
              },
              {
                title: 'AI & Automation',
                items: ['Predictive Analytics', 'Marketing Automation', 'AI Copywriting', 'Chatbot Solutions'],
              },
            ].map((expertise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35]"
              >
                <h3
                  className="text-2xl font-bold mb-6 text-gold"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {expertise.title}
                </h3>
                <ul className="space-y-3">
                  {expertise.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#f5f5f5]">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
