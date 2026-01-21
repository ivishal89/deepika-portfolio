import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 80px),
                           repeating-linear-gradient(0deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 80px)`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y }} className="relative">
              {/* Main Card */}
              <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 p-1 shadow-2xl shadow-indigo-500/25">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                </div>
                <div className="relative h-full rounded-[22px] bg-gradient-to-br from-indigo-600/90 to-violet-700/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                  >
                    <GraduationCap className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    Master of Science
                  </h3>
                  <p className="text-lg text-indigo-100 mb-6">Information Systems</p>
                  <div className="flex items-center gap-2 text-indigo-200">
                    <MapPin className="w-4 h-4" />
                    <span>University of Cincinnati</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-white shadow-xl border border-slate-100"
              >
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-8 bottom-1/4 p-4 rounded-2xl bg-white shadow-xl border border-slate-100"
              >
                <Award className="w-6 h-6 text-violet-600" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                The Foundation
              </motion.span>
              <motion.h2 
                className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] dark:text-slate-100 leading-tight transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Academic excellence
                <span className="block font-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  meets practical impact
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              From Computer Science engineering foundations at Savitribai Phule Pune University to achieving a 3.98 GPA in 
              Information Systems at the University of Cincinnati—my academic journey mirrors my professional evolution. 
              The MSIS program combined with a Post-Baccalaureate Certificate in Data Analytics has equipped me with the perfect 
              blend of technical depth and business acumen to transform data into strategic advantage.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 transition-colors duration-500">
                <p className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-500">3.98</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Master's GPA</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
                <p className="text-3xl font-semibold text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">Dec 2025</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Graduation</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-sm font-medium text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">Key Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Analytics", "Cloud Computing", "Data Warehousing", "Generative AI", "Statistical Computing", "ERP Systems"].map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-500"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}