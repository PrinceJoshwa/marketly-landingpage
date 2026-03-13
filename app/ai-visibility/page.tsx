'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIVisibilityTool() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    
    // Simulate API scan time
    setTimeout(() => {
      setIsScanning(false);
      setShowResults(true);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#1A3F22] text-white flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-6 relative">
        {/* Background Accents */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D99201]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl w-full relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {!showResults ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0a1f13] border-2 border-[#2D5A35] rounded-3xl p-8 md:p-12 shadow-2xl text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Free <span className="text-[#D99201]">AI Visibility</span> Audit
              </h1>
              <p className="text-[#f5f5f5]/80 mb-10">
                Enter your website URL below to see how often major AI engines like ChatGPT and Gemini recommend your brand.
              </p>

              <form onSubmit={handleScan} className="relative max-w-lg mx-auto">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 text-gray-400" size={20} />
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isScanning}
                    className="w-full bg-[#1A3F22] border border-[#2D5A35] rounded-full py-4 pl-12 pr-36 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isScanning}
                    className="absolute right-2 top-2 bottom-2 bg-[#00d4ff] text-[#0a1f13] px-6 rounded-full font-bold hover:bg-[#00e8ff] transition-colors flex items-center justify-center disabled:opacity-80"
                  >
                    {isScanning ? <Loader2 className="animate-spin" size={20} /> : 'Scan Now'}
                  </button>
                </div>
              </form>

              {isScanning && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-8 text-[#00d4ff] flex flex-col items-center gap-3"
                >
                  <p className="animate-pulse font-medium">Analyzing LLM training data...</p>
                  <div className="flex gap-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> ChatGPT</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> Gemini</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#D99201]" /> Perplexity</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            // Results State
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0a1f13] border-2 border-[#00d4ff] rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,212,255,0.1)] text-center"
            >
              <h2 className="text-2xl font-bold mb-2">Audit Complete for:</h2>
              <p className="text-[#00d4ff] mb-8">{url}</p>
              
              <div className="text-6xl font-bold text-white mb-2">
                42<span className="text-2xl text-gray-500">/100</span>
              </div>
              <p className="text-[#D99201] font-semibold text-lg mb-8">Low Visibility - Action Required</p>

              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Your brand is rarely mentioned by AI engines. You are losing potential customers to competitors who have optimized for AI search.
              </p>

              <button className="w-full sm:w-auto px-8 py-4 bg-[#D99201] text-[#0a1f13] rounded-full font-bold text-lg hover:bg-[#e5a828] transition-colors">
                Book Strategy Call to Fix This
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}