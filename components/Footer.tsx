// 'use client';

// import Link from 'next/link';
// import { Mail, MapPin, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Footer() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <footer className="bg-[#1A3F22] border-t border-[#2D5A35]">
//       <div className="container mx-auto px-6 py-16">
//         <motion.div
//           className="grid md:grid-cols-4 gap-12 mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Brand */}
//           <motion.div variants={itemVariants}>
//             <h3
//               className="text-2xl font-bold mb-4"
//               style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
//             >
//               Marketly
//             </h3>
//             <p className="text-text-light text-sm leading-relaxed">
//               Transform your brand with cutting-edge digital marketing solutions. Trusted by 5000+ brands since 2012.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h4 className="font-semibold text-[#D99201] mb-4">Quick Links</h4>
//             <div className="space-y-2">
//               {['Home', 'About', 'Services', 'Contact'].map((link) => (
//                 <Link
//                   key={link}
//                   href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
//                   className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm block"
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>

//           {/* Services */}
//           <motion.div variants={itemVariants}>
//             <h4 className="font-semibold text-[#D99201] mb-4">Services</h4>
//             <div className="space-y-2">
//               {['SEO', 'Social Media', 'PPC', 'Google Ads'].map((service) => (
//                 <p key={service} className="text-[#f5f5f5] text-sm">
//                   {service}
//                 </p>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact */}
//           <motion.div variants={itemVariants}>
//             <h4 className="font-semibold text-[#D99201] mb-4">Contact</h4>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start gap-3">
//                 <Mail size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
//                 <a href="mailto:ramya@marketly.tech" className="text-[#f5f5f5] hover:text-[#D99201] transition-colors">
//                   ramya@marketly.tech
//                 </a>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Phone size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
//                 <a href="tel:+919606334692" className="text-[#f5f5f5] hover:text-[#D99201] transition-colors">
//                   +91 9606334692
//                 </a>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin size={16} className="text-[#D99201] mt-1 flex-shrink-0" />
//                 <p className="text-[#f5f5f5]">Sarjapur road, Bangalore 35</p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Divider */}
//         <div className="border-t border-[#2D5A35] mb-8" />

//         {/* Bottom */}
//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-between gap-4"
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <p className="text-[#f5f5f5] text-sm">© 2024 Marketly. All rights reserved.</p>
//           <div className="flex gap-6">
//             {['Privacy', 'Terms', 'Cookies'].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }
'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer className="relative bg-[#020503] border-t border-white/5 overflow-hidden pt-24 pb-8">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-[#1A3F22]/20 to-transparent blur-[150px] pointer-events-none" />
      
      {/* Giant Background Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.02]">
        <h2 
          className="text-[15vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          MARKETLY
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand & Newsletter Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <h3 className="text-3xl font-bold tracking-tight text-white transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                Marketly<span className="text-[#D99201]">.</span>
              </h3>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-8 font-light">
              Transforming bold visions into digital masterpieces. We build strategies that dominate markets and scale revenue.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#D99201] hover:border-[#D99201] hover:text-[#050a06] transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-[0.15em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Work', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <ArrowRight size={14} className="text-[#D99201] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-[0.15em] text-xs mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Search Engine Optimization', 'Social Media Strategy', 'Paid Media & PPC', 'Brand Development'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="group flex items-center text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                    <span className="relative overflow-hidden">
                      {service}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D99201] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-[0.15em] text-xs mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <a href="mailto:ramya@marketly.tech" className="group flex items-start gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D99201]/10 group-hover:border-[#D99201]/30 transition-colors">
                  <Mail size={16} className="text-[#D99201]" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Email Us</span>
                  <span className="text-sm font-medium">ramya@marketly.tech</span>
                </div>
              </a>
              
              <a href="tel:+919606334692" className="group flex items-start gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D99201]/10 group-hover:border-[#D99201]/30 transition-colors">
                  <Phone size={16} className="text-[#D99201]" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Call Us</span>
                  <span className="text-sm font-medium">+91 9606334692</span>
                </div>
              </a>

              <div className="flex items-start gap-4 text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#D99201]" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Visit Us</span>
                  <span className="text-sm font-medium leading-relaxed">Sarjapur road,<br />Bangalore 35</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-xs tracking-wider">
            © {new Date().getFullYear()} Marketly. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-white transition-colors duration-300 text-xs tracking-wider relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}