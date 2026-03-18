// // // 'use client';

// // // import { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Search, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
// // // import Link from 'next/link';
// // // import Header from '@/components/Header';
// // // import Footer from '@/components/Footer';

// // // export default function AIVisibilityTool() {
// // //   const [url, setUrl] = useState('');
// // //   const [isScanning, setIsScanning] = useState(false);
// // //   const [showResults, setShowResults] = useState(false);

// // //   const handleScan = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!url) return;
    
// // //     setIsScanning(true);
    
// // //     // Simulate API scan time
// // //     setTimeout(() => {
// // //       setIsScanning(false);
// // //       setShowResults(true);
// // //     }, 3500);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#1A3F22] text-white flex flex-col">
// // //       <Header />

// // //       <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-6 relative">
// // //         {/* Background Accents */}
// // //         <div className="absolute top-20 left-10 w-64 h-64 bg-[#D99201]/10 rounded-full blur-[100px] pointer-events-none" />
// // //         <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px] pointer-events-none" />

// // //         <div className="max-w-2xl w-full relative z-10">
// // //           <Link href="/" className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition-colors mb-8">
// // //             <ArrowLeft size={16} /> Back to Home
// // //           </Link>

// // //           {!showResults ? (
// // //             <motion.div 
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               className="bg-[#0a1f13] border-2 border-[#2D5A35] rounded-3xl p-8 md:p-12 shadow-2xl text-center"
// // //             >
// // //               <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
// // //                 Free <span className="text-[#D99201]">AI Visibility</span> Audit
// // //               </h1>
// // //               <p className="text-[#f5f5f5]/80 mb-10">
// // //                 Enter your website URL below to see how often major AI engines like ChatGPT and Gemini recommend your brand.
// // //               </p>

// // //               <form onSubmit={handleScan} className="relative max-w-lg mx-auto">
// // //                 <div className="relative flex items-center">
// // //                   <Search className="absolute left-4 text-gray-400" size={20} />
// // //                   <input
// // //                     type="url"
// // //                     placeholder="https://yourwebsite.com"
// // //                     required
// // //                     value={url}
// // //                     onChange={(e) => setUrl(e.target.value)}
// // //                     disabled={isScanning}
// // //                     className="w-full bg-[#1A3F22] border border-[#2D5A35] rounded-full py-4 pl-12 pr-36 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] transition-colors disabled:opacity-50"
// // //                   />
// // //                   <button
// // //                     type="submit"
// // //                     disabled={isScanning}
// // //                     className="absolute right-2 top-2 bottom-2 bg-[#00d4ff] text-[#0a1f13] px-6 rounded-full font-bold hover:bg-[#00e8ff] transition-colors flex items-center justify-center disabled:opacity-80"
// // //                   >
// // //                     {isScanning ? <Loader2 className="animate-spin" size={20} /> : 'Scan Now'}
// // //                   </button>
// // //                 </div>
// // //               </form>

// // //               {isScanning && (
// // //                 <motion.div 
// // //                   initial={{ opacity: 0 }} 
// // //                   animate={{ opacity: 1 }} 
// // //                   className="mt-8 text-[#00d4ff] flex flex-col items-center gap-3"
// // //                 >
// // //                   <p className="animate-pulse font-medium">Analyzing LLM training data...</p>
// // //                   <div className="flex gap-2 text-sm text-gray-400">
// // //                     <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> ChatGPT</span>
// // //                     <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> Gemini</span>
// // //                     <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> Perplexity</span>
// // //                   </div>
// // //                 </motion.div>
// // //               )}
// // //             </motion.div>
// // //           ) : (
// // //             // Results State
// // //             <motion.div 
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               className="bg-[#0a1f13] border-2 border-[#00d4ff] rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,212,255,0.1)] text-center"
// // //             >
// // //               <h2 className="text-2xl font-bold mb-2">Audit Complete for:</h2>
// // //               <p className="text-[#00d4ff] mb-8">{url}</p>
              
// // //               <div className="text-6xl font-bold text-white mb-2">
// // //                 42<span className="text-2xl text-gray-500">/100</span>
// // //               </div>
// // //               <p className="text-[#D99201] font-semibold text-lg mb-8">Low Visibility - Action Required</p>

// // //               <p className="text-gray-300 mb-8 max-w-md mx-auto">
// // //                 Your brand is rarely mentioned by AI engines. You are losing potential customers to competitors who have optimized for AI search.
// // //               </p>

// // //               <button className="w-full sm:w-auto px-8 py-4 bg-[#D99201] text-[#0a1f13] rounded-full font-bold text-lg hover:bg-[#e5a828] transition-colors">
// // //                 Book Strategy Call to Fix This
// // //               </button>
// // //             </motion.div>
// // //           )}
// // //         </div>
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Search, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
// // import Link from 'next/link';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';

// // const customEase = [0.16, 1, 0.3, 1];

// // export default function AIVisibilityTool() {
// //   const [url, setUrl] = useState('');
// //   const [isScanning, setIsScanning] = useState(false);
// //   const [showResults, setShowResults] = useState(false);

// //   const handleScan = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!url) return;
// //     setIsScanning(true);
// //     setTimeout(() => { setIsScanning(false); setShowResults(true); }, 3500);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#050C07] text-white flex flex-col overflow-hidden relative">
// //       <Header />

// //       <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-10">
// //         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D99201]/10 rounded-full blur-[150px] pointer-events-none" />
// //         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />

// //         <div className="max-w-3xl w-full relative">
// //           <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 text-sm tracking-wide uppercase font-medium">
// //             <ArrowLeft size={16} /> Back to Home
// //           </Link>

// //           {!showResults ? (
// //             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} 
// //               className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-16 text-center shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
// //             >
// //               <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
// //                 Free <span className="text-[#00d4ff] italic">AI Visibility</span> Audit
// //               </h1>
// //               <p className="text-white/50 text-lg font-light mb-12 max-w-xl mx-auto">
// //                 Enter your website URL below to see how often major AI engines like ChatGPT and Gemini recommend your brand.
// //               </p>

// //               <form onSubmit={handleScan} className="relative max-w-xl mx-auto">
// //                 <div className="relative flex items-center group">
// //                   <Search className="absolute left-6 text-white/30 group-focus-within:text-[#00d4ff] transition-colors" size={20} />
// //                   <input type="url" placeholder="https://yourwebsite.com" required value={url} onChange={(e) => setUrl(e.target.value)} disabled={isScanning}
// //                     className="w-full bg-[#050C07] border border-white/10 rounded-full py-5 pl-16 pr-40 text-white placeholder-white/20 focus:outline-none focus:border-[#00d4ff] transition-colors disabled:opacity-50 font-light text-lg"
// //                   />
// //                   <button type="submit" disabled={isScanning}
// //                     className="absolute right-2 top-2 bottom-2 bg-[#00d4ff] text-[#050C07] px-8 rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center disabled:opacity-80"
// //                   >
// //                     {isScanning ? <Loader2 className="animate-spin" size={20} /> : 'Scan Now'}
// //                   </button>
// //                 </div>
// //               </form>

// //               {isScanning && (
// //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 text-[#00d4ff] flex flex-col items-center gap-4">
// //                   <p className="animate-pulse font-light tracking-widest uppercase text-sm">Analyzing LLM training data...</p>
// //                   <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40 font-light">
// //                     {['ChatGPT', 'Gemini', 'Perplexity', 'Claude'].map((ai, i) => (
// //                       <span key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00d4ff]" /> {ai}</span>
// //                     ))}
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </motion.div>
// //           ) : (
// //             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: customEase }}
// //               className="bg-white/[0.02] backdrop-blur-2xl border border-[#00d4ff]/30 rounded-[2rem] p-10 md:p-16 text-center shadow-[0_0_80px_rgba(0,212,255,0.05)]"
// //             >
// //               <h2 className="text-xl font-light text-white/50 mb-2">Audit Complete for:</h2>
// //               <p className="text-[#00d4ff] text-lg font-mono mb-12">{url}</p>
              
// //               <div className="flex items-baseline justify-center gap-2 mb-4">
// //                 <span className="text-8xl font-light text-white tracking-tighter">42</span>
// //                 <span className="text-3xl text-white/20 font-light">/100</span>
// //               </div>
// //               <p className="text-[#D99201] font-medium tracking-widest uppercase text-sm mb-10">Low Visibility - Action Required</p>

// //               <p className="text-white/60 font-light text-lg mb-12 max-w-lg mx-auto leading-relaxed">
// //                 Your brand is rarely mentioned by AI engines. You are losing potential customers to competitors who have optimized for AI search.
// //               </p>

// //               <button className="px-10 py-5 bg-[#D99201] text-[#050C07] rounded-full font-medium text-lg hover:bg-white transition-colors w-full sm:w-auto">
// //                 Book Strategy Call to Fix This
// //               </button>
// //             </motion.div>
// //           )}
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
// import Link from 'next/link';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const customEase = [0.16, 1, 0.3, 1];

// export default function AIVisibilityTool() {
//   const [url, setUrl] = useState('');
//   const [isScanning, setIsScanning] = useState(false);
//   const [showResults, setShowResults] = useState(false);

//   const handleScan = (e: React.FormEvent) => {
//     e.preventDefault(); if (!url) return;
//     setIsScanning(true); setTimeout(() => { setIsScanning(false); setShowResults(true); }, 3500);
//   };

//   return (
//     <div className="min-h-screen bg-[#1A3F22] text-white flex flex-col overflow-hidden relative">
//       <Header />

//       <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-10">
//         <div className="max-w-3xl w-full relative">
//           <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 text-sm tracking-wide uppercase font-medium">
//             <ArrowLeft size={16} /> Back to Home
//           </Link>

//           {!showResults ? (
//             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} 
//               className="bg-[#234B2E]/50 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl"
//             >
//               <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
//                 Free <span className="text-white/60 italic">AI Visibility</span> Audit
//               </h1>
//               <p className="text-white/70 text-lg font-light mb-12 max-w-xl mx-auto">
//                 Enter your website URL below to see how often major AI engines like ChatGPT and Gemini recommend your brand.
//               </p>

//               <form onSubmit={handleScan} className="relative max-w-xl mx-auto">
//                 <div className="relative flex items-center group">
//                   <Search className="absolute left-6 text-white/40 group-focus-within:text-white transition-colors" size={20} />
//                   <input type="url" placeholder="https://yourwebsite.com" required value={url} onChange={(e) => setUrl(e.target.value)} disabled={isScanning}
//                     className="w-full bg-[#1A3F22]/80 border border-white/20 rounded-full py-5 pl-16 pr-40 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors disabled:opacity-50 font-light text-lg shadow-inner"
//                   />
//                   <button type="submit" disabled={isScanning}
//                     className="absolute right-2 top-2 bottom-2 bg-white text-[#1A3F22] px-8 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center disabled:opacity-80"
//                   >
//                     {isScanning ? <Loader2 className="animate-spin text-[#1A3F22]" size={20} /> : 'Scan Now'}
//                   </button>
//                 </div>
//               </form>

//               {isScanning && (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 text-white flex flex-col items-center gap-4">
//                   <p className="animate-pulse font-light tracking-widest uppercase text-sm">Analyzing LLM training data...</p>
//                   <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 font-light">
//                     {['ChatGPT', 'Gemini', 'Perplexity', 'Claude'].map((ai, i) => (
//                       <span key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white" /> {ai}</span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           ) : (
//             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: customEase }}
//               className="bg-[#234B2E]/80 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl"
//             >
//               <h2 className="text-xl font-light text-white/70 mb-2">Audit Complete for:</h2>
//               <p className="text-white text-lg font-mono mb-12">{url}</p>
              
//               <div className="flex items-baseline justify-center gap-2 mb-4">
//                 <span className="text-8xl font-light text-white tracking-tighter">42</span>
//                 <span className="text-3xl text-white/40 font-light">/100</span>
//               </div>
//               <p className="text-white/80 font-medium tracking-widest uppercase text-sm mb-10 border border-white/20 inline-block px-4 py-2 rounded-full">Low Visibility - Action Required</p>

//               <p className="text-white/80 font-light text-lg mb-12 max-w-lg mx-auto leading-relaxed">
//                 Your brand is rarely mentioned by AI engines. You are losing potential customers to competitors who have optimized for AI search.
//               </p>

//               <button className="px-10 py-5 bg-white text-[#1A3F22] rounded-full font-medium text-lg hover:bg-white/90 transition-colors w-full sm:w-auto shadow-xl">
//                 Book Strategy Call to Fix This
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const customEase = [0.16, 1, 0.3, 1];

export default function AIVisibilityTool() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsScanning(true);
    // Simulate API scan time
    setTimeout(() => { setIsScanning(false); setShowResults(true); }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0a160d] text-white flex flex-col overflow-hidden relative selection:bg-[#00d4ff] selection:text-[#0a160d]">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative z-10">
        
        {/* Massive Cyan Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D99201]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl w-full relative">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-sm tracking-widest uppercase font-bold">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {!showResults ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} 
              className="bg-[#1A3F22]/30 backdrop-blur-2xl border border-[#00d4ff]/20 rounded-[3rem] p-10 md:p-16 text-center shadow-[0_30px_100px_rgba(0,212,255,0.05)]"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-8 text-[#00d4ff] text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} /> Premium Audit
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                Free <span className="text-[#00d4ff] italic">AI Visibility</span> Audit
              </h1>
              <p className="text-white/60 text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
                Enter your website URL below to see how often major AI engines like ChatGPT and Gemini recommend your brand.
              </p>

              <form onSubmit={handleScan} className="relative max-w-xl mx-auto">
                <div className="relative flex items-center group">
                  <Search className="absolute left-6 text-white/30 group-focus-within:text-[#00d4ff] transition-colors" size={22} />
                  <input type="url" placeholder="https://yourwebsite.com" required value={url} onChange={(e) => setUrl(e.target.value)} disabled={isScanning}
                    className="w-full bg-[#0a160d]/80 border border-[#2D5A35] rounded-full py-5 pl-16 pr-44 text-white placeholder-white/20 focus:outline-none focus:border-[#00d4ff] transition-colors disabled:opacity-50 font-light text-lg shadow-inner"
                  />
                  <button type="submit" disabled={isScanning}
                    className="absolute right-2 top-2 bottom-2 bg-[#00d4ff] text-[#0a160d] px-8 rounded-full font-bold hover:bg-white transition-colors flex items-center justify-center disabled:opacity-80 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  >
                    {isScanning ? <Loader2 className="animate-spin text-[#0a160d]" size={20} /> : 'Scan Now'}
                  </button>
                </div>
              </form>

              {isScanning && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 text-[#00d4ff] flex flex-col items-center gap-6">
                  <p className="animate-pulse font-medium tracking-widest uppercase text-sm">Analyzing LLM training data...</p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 font-light">
                    {['ChatGPT', 'Gemini', 'Perplexity', 'Claude'].map((ai, i) => (
                      <span key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00d4ff]" /> {ai}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: customEase }}
              className="bg-[#050a06] border border-[#00d4ff]/40 rounded-[3rem] shadow-[0_0_80px_rgba(0,212,255,0.1)] overflow-hidden"
            >
              {/* MacOS Style Header */}
              <div className="h-12 bg-[#1A3F22]/50 border-b border-[#2D5A35] flex items-center px-8 gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>

              <div className="p-12 md:p-16 text-center">
                <h2 className="text-lg font-bold tracking-widest uppercase text-white/50 mb-2">Audit Complete for:</h2>
                <p className="text-[#00d4ff] text-xl font-mono mb-16">{url}</p>
                
                {/* SVG Animated Gauge */}
                <div className="relative w-64 h-32 mx-auto mb-8">
                  <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="33.9" className="animate-[dash_1.5s_ease-out_forwards]" />
                    <g className="origin-[50px_50px] rotate-[41deg] transition-transform duration-1000 ease-out">
                      <line x1="50" y1="50" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="4" fill="#0a160d" stroke="#00d4ff" strokeWidth="2" />
                    </g>
                  </svg>
                  <div className="absolute bottom-0 left-0 text-xs text-white/40 font-bold uppercase tracking-widest">Invisible</div>
                  <div className="absolute bottom-0 right-0 text-xs text-[#00d4ff] font-bold uppercase tracking-widest">Excellent</div>
                </div>

                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-8xl font-light text-white tracking-tighter">42</span>
                  <span className="text-3xl text-white/30 font-light">/100</span>
                </div>
                <p className="text-[#D99201] font-bold tracking-widest uppercase text-sm mb-12 border border-[#D99201]/30 inline-block px-4 py-2 rounded-full bg-[#D99201]/10">Low Visibility - Action Required</p>

                <p className="text-white/60 font-light text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                  Your brand is rarely mentioned by AI engines. You are losing potential customers to competitors who have optimized for AI search.
                </p>

                <button className="px-10 py-5 bg-[#D99201] text-[#0a160d] rounded-full font-bold text-lg hover:bg-white transition-colors w-full sm:w-auto shadow-[0_10px_30px_rgba(217,146,1,0.2)]">
                  Book Strategy Call to Fix This
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}