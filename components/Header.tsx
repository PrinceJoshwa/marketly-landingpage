// // // 'use client';

// // // import Link from 'next/link';
// // // import { Menu, X } from 'lucide-react';
// // // import { useState } from 'react';
// // // import { motion } from 'framer-motion';

// // // export default function Header() {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   const navItems = [
// // //     { label: 'Home', href: '/' },
// // //     { label: 'About', href: '/about' },
// // //     { label: 'Services', href: '/services' },
// // //     { label: 'Seo', href: '/seo' },
// // //     { label: 'Digital Marketing', href: '/digital-marketing' },
// // //     { label: 'Contact', href: '/contact' },
// // //   ];

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.1 },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: -10 },
// // //     visible: { opacity: 1, y: 0 },
// // //   };

// // //   return (
// // //     <header className="sticky top-0 z-50 bg-[#1A3F22] border-b border-[#2D5A35]">
// // //       <div className="container mx-auto px-6 py-4">
// // //         <div className="flex items-center justify-between">
// // //           {/* Logo */}
// // //           <Link href="/" className="flex items-center gap-2">
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.8 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               className="text-2xl font-bold"
// // //               style={{ color: '#D99201', fontFamily: 'var(--font-serif)' }}
// // //             >
// // //               Marketly
// // //             </motion.div>
// // //           </Link>

// // //           {/* Desktop Navigation */}
// // //           <motion.nav
// // //             className="hidden md:flex items-center gap-8"
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             animate="visible"
// // //           >
// // //             {navItems.map((item) => (
// // //               <motion.div key={item.href} variants={itemVariants}>
// // //                 <Link
// // //                   href={item.href}
// // //                   className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 text-sm font-medium"
// // //                 >
// // //                   {item.label}
// // //                 </Link>
// // //               </motion.div>
// // //             ))}
// // //             <motion.div variants={itemVariants}>
// // //               <Link
// // //                 href="/contact"
// // //                 className="px-6 py-2 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-colors duration-300 text-sm"
// // //               >
// // //                 Let's Talk
// // //               </Link>
// // //             </motion.div>
// // //           </motion.nav>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="md:hidden text-[#D99201] hover:text-[#E5A828] transition-colors"
// // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // //           >
// // //             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // //           </button>
// // //         </div>

// // //         {/* Mobile Navigation */}
// // //         {mobileMenuOpen && (
// // //           <motion.nav
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -20 }}
// // //             className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#2D5A35] pt-4"
// // //           >
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.href}
// // //                 href={item.href}
// // //                 className="text-[#f5f5f5] hover:text-[#D99201] transition-colors duration-300 py-2"
// // //                 onClick={() => setMobileMenuOpen(false)}
// // //               >
// // //                 {item.label}
// // //               </Link>
// // //             ))}
// // //             <Link
// // //               href="/contact"
// // //               className="px-6 py-2 bg-[#D99201] text-[#1A3F22] rounded-full font-semibold hover:bg-[#E5A828] transition-colors duration-300 w-fit"
// // //               onClick={() => setMobileMenuOpen(false)}
// // //             >
// // //               Let's Talk
// // //             </Link>
// // //           </motion.nav>
// // //         )}
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // 'use client';

// // import Link from 'next/link';
// // import { Menu, X } from 'lucide-react';
// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // export default function Header() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navItems = [
// //     { label: 'Home', href: '/' },
// //     { label: 'About', href: '/about' },
// //     { label: 'Services', href: '/services' },
// //     { label: 'SEO', href: '/seo' },
// //     { label: 'Digital Marketing', href: '/digital-marketing' },
// //   ];

// //   return (
// //     <motion.header
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// //         isScrolled ? 'py-4' : 'py-6'
// //       }`}
// //     >
// //       <div className="container mx-auto px-6">
// //         <div className={`flex items-center justify-between mx-auto max-w-7xl rounded-full transition-all duration-500 ${
// //           isScrolled 
// //             ? 'bg-[#050C07]/70 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
// //             : 'bg-transparent px-2 py-2'
// //         }`}>
          
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center gap-2 group relative z-50">
// //             <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#D99201]" style={{ fontFamily: 'var(--font-serif)' }}>
// //               Marketly<span className="text-[#D99201]">.</span>
// //             </span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative group"
// //               >
// //                 {item.label}
// //                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D99201] transition-all duration-300 group-hover:w-full"></span>
// //               </Link>
// //             ))}
// //           </nav>

// //           {/* CTA & Mobile Toggle */}
// //           <div className="flex items-center gap-4 relative z-50">
// //             <Link
// //               href="/contact"
// //               className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#050C07] bg-[#D99201] rounded-full hover:bg-white transition-colors duration-300"
// //             >
// //               Let's Talk
// //             </Link>
// //             <button
// //               className="md:hidden text-white hover:text-[#D99201] transition-colors p-2"
// //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             >
// //               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Fullscreen Mobile Menu */}
// //         <AnimatePresence>
// //           {mobileMenuOpen && (
// //             <motion.div
// //               initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
// //               animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
// //               exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
// //               className="fixed inset-0 bg-[#050C07]/95 z-40 flex flex-col justify-center items-center"
// //             >
// //               <nav className="flex flex-col gap-8 text-center">
// //                 {navItems.map((item, i) => (
// //                   <motion.div
// //                     key={item.href}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.1 }}
// //                   >
// //                     <Link
// //                       href={item.href}
// //                       className="text-3xl font-light text-white hover:text-[#D99201] transition-colors"
// //                       onClick={() => setMobileMenuOpen(false)}
// //                       style={{ fontFamily: 'var(--font-serif)' }}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   </motion.div>
// //                 ))}
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: navItems.length * 0.1 }}
// //                   className="mt-8"
// //                 >
// //                   <Link
// //                     href="/contact"
// //                     className="px-8 py-4 bg-[#D99201] text-[#050C07] rounded-full font-medium text-lg"
// //                     onClick={() => setMobileMenuOpen(false)}
// //                   >
// //                     Let's Talk
// //                   </Link>
// //                 </motion.div>
// //               </nav>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </motion.header>
// //   );
// // }

// 'use client';

// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'SEO', href: '/seo' },
//     { label: 'Digital Marketing', href: '/digital-marketing' },
//     { label: 'Contact', href: '/digital-marketing' },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled ? 'py-4' : 'py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6">
//         <div className={`flex items-center justify-between mx-auto max-w-7xl rounded-full transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-[#234B2E]/70 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl' 
//             : 'bg-transparent px-2 py-2'
//         }`}>
          
//           <Link href="/" className="flex items-center gap-2 group relative z-50">
//             <span className="text-2xl font-bold tracking-tight text-white transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
//               Marketly<span className="text-white/50">.</span>
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative group"
//               >
//                 {item.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-4 relative z-50">
//             <Link
//               href="/contact"
//               className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#1A3F22] bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg"
//             >
//               Let's Talk
//             </Link>
//             <button
//               className="md:hidden text-white hover:text-white/70 transition-colors p-2"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
//               animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
//               exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
//               className="fixed inset-0 bg-[#1A3F22]/95 z-40 flex flex-col justify-center items-center"
//             >
//               <nav className="flex flex-col gap-8 text-center">
//                 {navItems.map((item, i) => (
//                   <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
//                     <Link
//                       href={item.href}
//                       className="text-3xl font-light text-white hover:text-white/70 transition-colors"
//                       onClick={() => setMobileMenuOpen(false)}
//                       style={{ fontFamily: 'var(--font-serif)' }}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navItems.length * 0.1 }} className="mt-8">
//                   <Link href="/contact" className="px-8 py-4 bg-white text-[#1A3F22] rounded-full font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
//                     Let's Talk
//                   </Link>
//                 </motion.div>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }

'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'SEO', href: '/seo' },
    { label: 'Digital Marketing', href: '/digital-marketing' },
    { label: 'Contact', href: '/contact' }, // Fixed route typo here
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 relative z-50">
        <div className={`flex items-center justify-between mx-auto max-w-7xl rounded-full transition-all duration-700 ${
          isScrolled 
            ? 'bg-[#050a06]/70 backdrop-blur-2xl border border-white/10 px-6 py-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent px-2 py-2 border border-transparent'
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#D99201]" style={{ fontFamily: 'var(--font-serif)' }}>
              Marketly<span className="text-[#D99201]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/60 hover:text-white transition-all duration-300 relative group tracking-wide"
              >
                {item.label}
                {/* Premium Animated Underline */}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#D99201] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex relative group items-center justify-center px-6 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#D99201] rounded-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative text-sm font-bold text-[#050a06] tracking-wide">Let's Talk</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#D99201]/50 transition-all duration-300 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#D99201]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#050a06]/95 backdrop-blur-3xl z-40 flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Ambient Background Glow for Mobile Menu */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D99201]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A3F22]/20 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col gap-8 text-center relative z-10 w-full px-6">
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.href} 
                  initial={{ opacity: 0, y: 40, rotateX: -20 }} 
                  animate={{ opacity: 1, y: 0, rotateX: 0 }} 
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="perspective-1000"
                >
                  <Link
                    href={item.href}
                    className="group relative inline-block text-4xl sm:text-5xl font-medium text-white/70 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D99201] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: navItems.length * 0.08 + 0.2, duration: 0.6 }} 
                className="mt-12"
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#D99201] to-[#b07600] text-[#050a06] rounded-full font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(217,146,1,0.3)] hover:scale-105 transition-transform duration-300" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}