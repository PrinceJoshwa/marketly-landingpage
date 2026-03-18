// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { Mail, Phone, MapPin, Send } from 'lucide-react';
// // // // import { useState } from 'react';
// // // // import Header from '@/components/Header';
// // // // import Footer from '@/components/Footer';

// // // // export default function Contact() {
// // // //   const [formState, setFormState] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     company: '',
// // // //     message: '',
// // // //   });
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     setFormState({
// // // //       ...formState,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     setSubmitted(true);
// // // //     setTimeout(() => {
// // // //       setFormState({ name: '', email: '', company: '', message: '' });
// // // //       setSubmitted(false);
// // // //     }, 3000);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-[#1A3F22] text-white">
// // // //       <Header />

// // // //       {/* Hero Section */}
// // // //       <section
// // // //         className="relative py-24 overflow-hidden"
// // // //         style={{
// // // //           background: 'linear-gradient(135deg, #0d1a0f 0%, #1A3F22 55%, #142d1a 100%)',
// // // //         }}
// // // //       >
// // // //         <div className="absolute inset-0 pointer-events-none">
// // // //           <div
// // // //             className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
// // // //             style={{
// // // //               background: 'radial-gradient(circle, #D99201 0%, transparent 70%)',
// // // //               filter: 'blur(90px)',
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div className="container mx-auto px-6 relative z-10">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             className="max-w-3xl"
// // // //           >
// // // //             <h1
// // // //               className="text-5xl md:text-6xl font-bold mb-6"
// // // //               style={{ fontFamily: 'var(--font-serif)', color: '#F5F1E8' }}
// // // //             >
// // // //               Let's Talk
// // // //             </h1>
// // // //             <p className="text-xl text-[#f5f5f5] leading-relaxed">
// // // //               Ready to transform your marketing strategy? Get in touch with our team for a free consultation.
// // // //             </p>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Contact Section */}
// // // //       <section className="py-24 bg-[#1A3F22]">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="grid md:grid-cols-3 gap-12">
// // // //             {/* Contact Info */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               className="space-y-8"
// // // //             >
// // // //               <div className="flex gap-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <Mail size={24} className="text-[#D99201] mt-1" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="font-semibold text-white mb-2">Email</h3>
// // // //                   <a
// // // //                     href="mailto:ramya@marketly.tech"
// // // //                     className="text-[#f5f5f5] hover:text-[#D99201] transition-colors"
// // // //                   >
// // // //                     ramya@marketly.tech
// // // //                   </a>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex gap-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <Phone size={24} className="text-[#D99201] mt-1" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="font-semibold text-white mb-2">Phone</h3>
// // // //                   <a
// // // //                     href="tel:+919606334692"
// // // //                     className="text-[#f5f5f5] hover:text-[#D99201] transition-colors"
// // // //                   >
// // // //                     +91 9606334692
// // // //                   </a>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex gap-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <MapPin size={24} className="text-[#D99201] mt-1" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="font-semibold text-white mb-2">Address</h3>
// // // //                   <p className="text-[#f5f5f5]">Sarjapur road, Bangalore 35</p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Social Links */}
// // // //               <div className="pt-8 border-t border-[#2D5A35]">
// // // //                 <h3 className="font-semibold text-white mb-4">Follow Us</h3>
// // // //                 <div className="flex gap-4">
// // // //                   {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
// // // //                     <a
// // // //                       key={social}
// // // //                       href="#"
// // // //                       className="text-[#f5f5f5] hover:text-[#D99201] transition-colors text-sm"
// // // //                     >
// // // //                       {social}
// // // //                     </a>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             {/* Contact Form */}
// // // //             <motion.form
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               onSubmit={handleSubmit}
// // // //               className="md:col-span-2 p-8 bg-[#1A3F22]-light rounded-lg border border-[#2D5A35]"
// // // //             >
// // // //               <div className="grid md:grid-cols-2 gap-6 mb-6">
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Name</label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="name"
// // // //                     value={formState.name}
// // // //                     onChange={handleChange}
// // // //                     required
// // // //                     className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
// // // //                     placeholder="Your name"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Email</label>
// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     value={formState.email}
// // // //                     onChange={handleChange}
// // // //                     required
// // // //                     className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
// // // //                     placeholder="your@email.com"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Company</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="company"
// // // //                   value={formState.company}
// // // //                   onChange={handleChange}
// // // //                   className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors"
// // // //                   placeholder="Your company"
// // // //                 />
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <label className="block text-sm font-semibold text-[#f5f5f5] mb-2">Message</label>
// // // //                 <textarea
// // // //                   name="message"
// // // //                   value={formState.message}
// // // //                   onChange={handleChange}
// // // //                   required
// // // //                   rows={6}
// // // //                   className="w-full px-4 py-3 bg-[#1A3F22] border border-[#2D5A35] rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors resize-none"
// // // //                   placeholder="Tell us about your project"
// // // //                 />
// // // //               </div>

// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.02 }}
// // // //                 whileTap={{ scale: 0.98 }}
// // // //                 type="submit"
// // // //                 className="w-full px-6 py-3 bg-[#D99201] text-dark-bg rounded-lg font-semibold hover:bg-[#D99201]-light transition-colors flex items-center justify-center gap-2"
// // // //               >
// // // //                 <span>Send Message</span>
// // // //                 <Send size={18} />
// // // //               </motion.button>

// // // //               {submitted && (
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   className="mt-4 p-4 bg-[#D99201]/10 border border-gold/50 rounded-lg text-center"
// // // //                 >
// // // //                   <p className="text-[#D99201] font-semibold">
// // // //                     Thank you! We'll be in touch within 24 hours.
// // // //                   </p>
// // // //                 </motion.div>
// // // //               )}
// // // //             </motion.form>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Map or CTA */}
// // // //       <section className="py-24 bg-[#1A3F22]-light">
// // // //         <div className="container mx-auto px-6">
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center"
// // // //           >
// // // //             <h2
// // // //               className="text-4xl font-bold mb-6"
// // // //               style={{ fontFamily: 'var(--font-serif)' }}
// // // //             >
// // // //               Ready to Get Started?
// // // //             </h2>
// // // //             <p className="text-[#f5f5f5] text-lg mb-8 max-w-2xl mx-auto">
// // // //               Schedule a free 30-minute strategy consultation with one of our marketing experts. No
// // // //               obligations, just insights and recommendations tailored to your business.
// // // //             </p>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               className="px-8 py-4 bg-[#D99201] text-dark-bg rounded-full font-semibold hover:bg-[#D99201]-light transition-colors"
// // // //             >
// // // //               Schedule Consultation
// // // //             </motion.button>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { Mail, Phone, MapPin, Send } from 'lucide-react';
// // // import { useState } from 'react';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';

// // // const customEase = [0.16, 1, 0.3, 1];

// // // export default function Contact() {
// // //   const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     setFormState({ ...formState, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setSubmitted(true);
// // //     setTimeout(() => {
// // //       setFormState({ name: '', email: '', company: '', message: '' });
// // //       setSubmitted(false);
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#050C07] text-white overflow-hidden">
// // //       <Header />

// // //       {/* Hero Section */}
// // //       <section className="relative pt-40 pb-20 px-6">
// // //         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D99201]/5 rounded-full blur-[150px] pointer-events-none" />
        
// // //         <div className="container mx-auto max-w-6xl relative z-10">
// // //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-3xl">
// // //             <h1 className="text-6xl md:text-8xl font-medium mb-8 leading-[1.05]" style={{ fontFamily: 'var(--font-serif)' }}>
// // //               Let's <span className="italic text-white/50">Talk</span>
// // //             </h1>
// // //             <p className="text-xl text-white/50 font-light leading-relaxed">
// // //               Ready to transform your marketing strategy? Get in touch with our team for a free consultation.
// // //             </p>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Section */}
// // //       <section className="py-20 px-6">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <div className="grid lg:grid-cols-12 gap-16">
            
// // //             {/* Contact Info */}
// // //             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-4 space-y-12">
// // //               <div className="space-y-8">
// // //                 <div className="flex gap-6 items-start group">
// // //                   <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#D99201] transition-colors">
// // //                     <Mail size={18} className="text-white/50 group-hover:text-[#D99201] transition-colors" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Email</h3>
// // //                     <a href="mailto:ramya@marketly.tech" className="text-lg text-white hover:text-[#D99201] transition-colors font-light">ramya@marketly.tech</a>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex gap-6 items-start group">
// // //                   <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#D99201] transition-colors">
// // //                     <Phone size={18} className="text-white/50 group-hover:text-[#D99201] transition-colors" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Phone</h3>
// // //                     <a href="tel:+919606334692" className="text-lg text-white hover:text-[#D99201] transition-colors font-light">+91 9606334692</a>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex gap-6 items-start group">
// // //                   <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#D99201] transition-colors">
// // //                     <MapPin size={18} className="text-white/50 group-hover:text-[#D99201] transition-colors" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-2">Address</h3>
// // //                     <p className="text-lg text-white font-light leading-relaxed">Sarjapur road, Bangalore 35</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Social Links */}
// // //               <div className="pt-12 border-t border-white/10">
// // //                 <h3 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6">Follow Us</h3>
// // //                 <div className="flex gap-6">
// // //                   {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
// // //                     <a key={social} href="#" className="text-white/60 hover:text-white transition-colors font-light border-b border-transparent hover:border-white pb-1">
// // //                       {social}
// // //                     </a>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* Contact Form */}
// // //             <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} onSubmit={handleSubmit} 
// // //               className="lg:col-span-8 bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-10 md:p-16"
// // //             >
// // //               <div className="grid md:grid-cols-2 gap-8 mb-8">
// // //                 <div>
// // //                   <label className="block text-xs font-medium tracking-widest uppercase text-white/40 mb-3">Name</label>
// // //                   <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name"
// // //                     className="w-full px-6 py-4 bg-[#050C07] border border-white/10 rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-xs font-medium tracking-widest uppercase text-white/40 mb-3">Email</label>
// // //                   <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="your@email.com"
// // //                     className="w-full px-6 py-4 bg-[#050C07] border border-white/10 rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="mb-8">
// // //                 <label className="block text-xs font-medium tracking-widest uppercase text-white/40 mb-3">Company</label>
// // //                 <input type="text" name="company" value={formState.company} onChange={handleChange} placeholder="Your company"
// // //                   className="w-full px-6 py-4 bg-[#050C07] border border-white/10 rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
// // //                 />
// // //               </div>

// // //               <div className="mb-10">
// // //                 <label className="block text-xs font-medium tracking-widest uppercase text-white/40 mb-3">Message</label>
// // //                 <textarea name="message" value={formState.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project"
// // //                   className="w-full px-6 py-4 bg-[#050C07] border border-white/10 rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors resize-none"
// // //                 />
// // //               </div>

// // //               <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" 
// // //                 className="w-full px-8 py-5 bg-[#D99201] text-[#050C07] rounded-xl font-medium text-lg hover:bg-white transition-colors flex items-center justify-center gap-3"
// // //               >
// // //                 <span>Send Message</span>
// // //                 <Send size={18} />
// // //               </motion.button>

// // //               {submitted && (
// // //                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-[#D99201]/10 border border-[#D99201]/20 rounded-xl text-center">
// // //                   <p className="text-[#D99201] font-light">Thank you! We'll be in touch within 24 hours.</p>
// // //                 </motion.div>
// // //               )}
// // //             </motion.form>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="py-32 bg-white/[0.02] border-t border-white/5">
// // //         <div className="container mx-auto px-6 text-center max-w-3xl">
// // //           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
// // //             <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Ready to Get Started?</h2>
// // //             <p className="text-white/50 text-xl font-light mb-12 leading-relaxed">
// // //               Schedule a free 30-minute strategy consultation with one of our marketing experts. No
// // //               obligations, just insights and recommendations tailored to your business.
// // //             </p>
// // //             <button className="px-10 py-5 bg-[#D99201] text-[#050C07] rounded-full font-medium text-lg hover:bg-white transition-colors">
// // //               Schedule Consultation
// // //             </button>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Mail, Phone, MapPin, Send } from 'lucide-react';
// // import { useState } from 'react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function Contact() {
// //   const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFormState({ ...formState, [e.target.name]: e.target.value }); };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault(); setSubmitted(true);
// //     setTimeout(() => { setFormState({ name: '', email: '', company: '', message: '' }); setSubmitted(false); }, 3000);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#1A3F22] text-white overflow-hidden">
// //       <Header />

// //       <section className="relative pt-40 pb-20 px-6">
// //         <div className="container mx-auto max-w-6xl relative z-10">
// //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-3xl">
// //             <h1 className="text-6xl md:text-8xl font-medium mb-8 leading-[1.05]" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Let's <span className="italic text-white/60">Talk</span>
// //             </h1>
// //             <p className="text-xl text-white/70 font-light leading-relaxed">
// //               Ready to transform your marketing strategy? Get in touch with our team for a free consultation.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-20 px-6">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="grid lg:grid-cols-12 gap-16">
            
// //             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-4 space-y-12">
// //               <div className="space-y-8">
// //                 <div className="flex gap-6 items-start group">
// //                   <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
// //                     <Mail size={18} className="text-white/80 group-hover:text-white transition-colors" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-2">Email</h3>
// //                     <a href="mailto:ramya@marketly.tech" className="text-lg text-white hover:text-white/70 transition-colors font-light">ramya@marketly.tech</a>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-6 items-start group">
// //                   <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
// //                     <Phone size={18} className="text-white/80 group-hover:text-white transition-colors" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-2">Phone</h3>
// //                     <a href="tel:+919606334692" className="text-lg text-white hover:text-white/70 transition-colors font-light">+91 9606334692</a>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-6 items-start group">
// //                   <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
// //                     <MapPin size={18} className="text-white/80 group-hover:text-white transition-colors" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-2">Address</h3>
// //                     <p className="text-lg text-white font-light leading-relaxed">Sarjapur road, Bangalore 35</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} onSubmit={handleSubmit} 
// //               className="lg:col-span-8 bg-[#234B2E]/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-10 md:p-16 shadow-2xl"
// //             >
// //               <div className="grid md:grid-cols-2 gap-8 mb-8">
// //                 <div>
// //                   <label className="block text-xs font-medium tracking-widest uppercase text-white/60 mb-3">Name</label>
// //                   <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name"
// //                     className="w-full px-6 py-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white font-light placeholder-white/30 focus:outline-none focus:border-white transition-colors"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-xs font-medium tracking-widest uppercase text-white/60 mb-3">Email</label>
// //                   <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="your@email.com"
// //                     className="w-full px-6 py-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white font-light placeholder-white/30 focus:outline-none focus:border-white transition-colors"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="mb-8">
// //                 <label className="block text-xs font-medium tracking-widest uppercase text-white/60 mb-3">Company</label>
// //                 <input type="text" name="company" value={formState.company} onChange={handleChange} placeholder="Your company"
// //                   className="w-full px-6 py-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white font-light placeholder-white/30 focus:outline-none focus:border-white transition-colors"
// //                 />
// //               </div>

// //               <div className="mb-10">
// //                 <label className="block text-xs font-medium tracking-widest uppercase text-white/60 mb-3">Message</label>
// //                 <textarea name="message" value={formState.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project"
// //                   className="w-full px-6 py-4 bg-[#1A3F22]/50 border border-white/10 rounded-xl text-white font-light placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
// //                 />
// //               </div>

// //               <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" 
// //                 className="w-full px-8 py-5 bg-white text-[#1A3F22] rounded-xl font-medium text-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-3 shadow-lg"
// //               >
// //                 <span>Send Message</span>
// //                 <Send size={18} />
// //               </motion.button>

// //               {submitted && (
// //                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-white/10 border border-white/20 rounded-xl text-center">
// //                   <p className="text-white font-medium">Thank you! We'll be in touch within 24 hours.</p>
// //                 </motion.div>
// //               )}
// //             </motion.form>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }
// 'use client';

// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const customEase = [0.16, 1, 0.3, 1];

// export default function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setFormState({ name: '', email: '', company: '', message: '' });
//       setSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a160d] text-white selection:bg-[#D99201] selection:text-[#0a160d]">
//       <Header />

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative pt-40 pb-20 px-6 overflow-hidden">
//         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none z-0" />
        
//         <div className="container mx-auto max-w-6xl relative z-10">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-3xl">
//             <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05]" style={{ fontFamily: 'var(--font-serif)' }}>
//               Let's <span className="italic text-white/50">Talk</span>
//             </h1>
//             <p className="text-xl text-white/60 font-light leading-relaxed">
//               Ready to transform your marketing strategy? Get in touch with our team for a free consultation.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== CONTACT SPLIT SECTION ===== */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
//             {/* Contact Info */}
//             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-5 space-y-12">
//               <div className="space-y-10">
                
//                 <div className="flex gap-6 items-start group">
//                   <div className="w-14 h-14 rounded-full border border-[#2D5A35] bg-[#1A3F22]/50 flex items-center justify-center shrink-0 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-colors duration-500">
//                     <Mail size={20} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
//                   </div>
//                   <div className="pt-2">
//                     <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Email</h3>
//                     <a href="mailto:ramya@marketly.tech" className="text-xl text-white hover:text-[#D99201] transition-colors font-light">ramya@marketly.tech</a>
//                   </div>
//                 </div>

//                 <div className="flex gap-6 items-start group">
//                   <div className="w-14 h-14 rounded-full border border-[#2D5A35] bg-[#1A3F22]/50 flex items-center justify-center shrink-0 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-colors duration-500">
//                     <Phone size={20} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
//                   </div>
//                   <div className="pt-2">
//                     <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Phone</h3>
//                     <a href="tel:+919606334692" className="text-xl text-white hover:text-[#D99201] transition-colors font-light">+91 9606334692</a>
//                   </div>
//                 </div>

//                 <div className="flex gap-6 items-start group">
//                   <div className="w-14 h-14 rounded-full border border-[#2D5A35] bg-[#1A3F22]/50 flex items-center justify-center shrink-0 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-colors duration-500">
//                     <MapPin size={20} className="text-[#D99201] group-hover:text-[#0a160d] transition-colors" />
//                   </div>
//                   <div className="pt-2">
//                     <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Address</h3>
//                     <p className="text-xl text-white font-light leading-relaxed max-w-[200px]">Sarjapur road, Bangalore 35</p>
//                   </div>
//                 </div>

//               </div>

//               {/* Social Links */}
//               <div className="pt-12 border-t border-[#2D5A35]">
//                 <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Follow Us</h3>
//                 <div className="flex gap-8">
//                   {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
//                     <a key={social} href="#" className="text-white/60 hover:text-white transition-colors font-medium border-b border-transparent hover:border-white pb-1">
//                       {social}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} onSubmit={handleSubmit} 
//               className="lg:col-span-7 bg-[#1A3F22]/20 backdrop-blur-xl rounded-[2.5rem] border border-[#2D5A35] p-10 md:p-14 shadow-2xl"
//             >
//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                   <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Name</label>
//                   <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name"
//                     className="w-full px-6 py-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Email</label>
//                   <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="your@email.com"
//                     className="w-full px-6 py-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
//                   />
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Company</label>
//                 <input type="text" name="company" value={formState.company} onChange={handleChange} placeholder="Your company"
//                   className="w-full px-6 py-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors"
//                 />
//               </div>

//               <div className="mb-10">
//                 <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Message</label>
//                 <textarea name="message" value={formState.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project"
//                   className="w-full px-6 py-5 bg-[#0a160d]/80 border border-[#2D5A35] rounded-xl text-white font-light placeholder-white/20 focus:outline-none focus:border-[#D99201] transition-colors resize-none"
//                 />
//               </div>

//               <button type="submit" 
//                 className="w-full px-8 py-5 bg-[#D99201] text-[#0a160d] rounded-xl font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(217,146,1,0.2)]"
//               >
//                 <span>Send Message</span>
//                 <Send size={20} />
//               </button>

//               {submitted && (
//                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-4 bg-[#D99201]/10 border border-[#D99201]/30 rounded-xl text-center">
//                   <p className="text-[#D99201] font-medium">Thank you! We'll be in touch within 24 hours.</p>
//                 </motion.div>
//               )}
//             </motion.form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const customEase = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', company: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050a06] text-white selection:bg-[#D99201] selection:text-[#0a160d] overflow-hidden">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        {/* Cinematic Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#1A3F22]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-[#D99201]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99201] to-[#fcd34d] italic pr-2">Talk</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl">
              Ready to transform your digital strategy? Connect with our experts and discover what true market dominance looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SPLIT SECTION ===== */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a120c]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Contact Info (Left Column) */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'ramya@marketly.tech', link: 'mailto:ramya@marketly.tech' },
                  { icon: Phone, label: 'Phone', value: '+91 9606334692', link: 'tel:+919606334692' },
                  { icon: MapPin, label: 'Headquarters', value: 'Sarjapur road, Bangalore 35', link: '#' },
                ].map((item, idx) => (
                  <a key={idx} href={item.link} className="group block bg-[#050a06] p-6 lg:p-8 rounded-[1.5rem] border border-white/5 hover:border-[#D99201]/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-[#D99201] group-hover:border-[#D99201] transition-all duration-500 shadow-lg">
                        <item.icon size={20} className="text-[#D99201] group-hover:text-[#050a06] transition-colors" />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1.5 group-hover:text-[#D99201] transition-colors">{item.label}</h3>
                        <p className="text-lg text-white font-light leading-snug group-hover:text-white transition-colors tracking-wide">{item.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links (UPDATED TO ICONS) */}
              <div className="pt-12 mt-8 border-t border-white/5">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'LinkedIn', icon: Linkedin, href: '#' },
                    { name: 'Twitter', icon: Twitter, href: '#' },
                    { name: 'Instagram', icon: Instagram, href: '#' },
                    { name: 'Dribbble', icon: Dribbble, href: '#' },
                  ].map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      aria-label={social.name}
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 hover:bg-[#D99201]/10 hover:border-[#D99201]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <social.icon size={18} className="text-white/40 group-hover:text-[#D99201] transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Right Column) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: customEase }} className="lg:col-span-7">
              <div className="bg-[#050a06] rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden group/form">
                
                {/* Form Ambient Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#1A3F22]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-medium mb-8 text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2.5 ml-1">Full Name</label>
                      <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="John Doe"
                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-xl text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-[#D99201]/50 focus:bg-white/[0.05] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2.5 ml-1">Email Address</label>
                      <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="john@company.com"
                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-xl text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-[#D99201]/50 focus:bg-white/[0.05] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2.5 ml-1">Company (Optional)</label>
                    <input type="text" name="company" value={formState.company} onChange={handleChange} placeholder="Your Company Ltd."
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-xl text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-[#D99201]/50 focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2.5 ml-1">How can we help?</label>
                    <textarea name="message" value={formState.message} onChange={handleChange} required rows={4} placeholder="Tell us about your goals, timeline, and budget..."
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-xl text-white text-sm font-light placeholder-white/20 focus:outline-none focus:border-[#D99201]/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                    />
                  </div>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full px-6 py-5 bg-[#D99201]/10 border border-[#D99201]/30 rounded-xl flex items-center justify-center gap-3 text-[#D99201]">
                      <Sparkles size={18} />
                      <span className="font-medium text-sm tracking-wide">Message received. We'll be in touch shortly.</span>
                    </motion.div>
                  ) : (
                    <button type="submit" disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#D99201] to-[#b07600] text-[#050a06] py-4 md:py-5 shadow-[0_0_20px_rgba(217,146,1,0.2)] hover:shadow-[0_0_40px_rgba(217,146,1,0.4)] transition-all duration-500 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <span className="font-bold text-base tracking-wide uppercase">
                          {isSubmitting ? 'Sending...' : 'Transmit Message'}
                        </span>
                        {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </div>
                    </button>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}