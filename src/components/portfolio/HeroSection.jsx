import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import GenerativeShape from './GenerativeShape';
import resumePdf from '@/assets/Deepika_Srivastava_Analyst.pdf';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8] dark:bg-slate-950 transition-colors duration-500 pt-32">
      {/* Generative Background Shapes */}
      <GenerativeShape
        className="w-[600px] h-[600px] -top-20 -right-20"
        color="indigo" />

      <GenerativeShape
        className="w-[500px] h-[500px] bottom-0 -left-40"
        color="slate" />

      <GenerativeShape
        className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        color="warm" />

      
      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />


      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>

          {/* Profile Picture */}
          <motion.div
            className="mb-12 pt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 group cursor-pointer"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}>

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-600 p-1.5 shadow-2xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943728e40ab87f665659be5/7c6d85f28_20251212_172301.jpg"
                  alt="Deepika Srivastava"
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-900 transition-all duration-300" />

              </div>
            </motion.div>
          </motion.div>

          <motion.p className="text-sm tracking-[0.3em] text-slate-500 dark:text-slate-400 uppercase mb-8 transition-colors duration-500"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}>DATA ANALYST PROFESSIONAL


          </motion.p>
          
          <h1 className="font-light text-6xl md:text-8xl lg:text-9xl text-[#2D2D2D] dark:text-slate-100 tracking-tight leading-[0.9] transition-colors duration-500">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}>

              Deepika
            </motion.span>
            <motion.span
              className="block font-normal bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}>

              Srivastava
            </motion.span>
          </h1>
          
          <motion.p className="text-slate-600 mx-auto my-1 py-4 text-lg font-light leading-relaxed md:text-xl dark:text-slate-300 max-w-2xl transition-colors duration-500"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}>Designing systems. Shaping experiences. Delivering impact.


          </motion.p>

          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">8 Years Experience</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 transition-colors duration-500" />
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">MSIS, University of Cincinnati</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}>
            <motion.a
              href={resumePdf}
              download="Deepika_Srivastava_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white font-medium shadow-2xl shadow-indigo-500/30 transition-all duration-500 shine-effect">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 transition-colors duration-500">

          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}