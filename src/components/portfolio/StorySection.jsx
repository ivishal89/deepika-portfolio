import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 dark:from-indigo-950/30 to-transparent transition-colors duration-500" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Typography Art */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 text-[200px] md:text-[300px] font-bold text-slate-100 dark:text-slate-800 leading-none select-none transition-colors duration-500">
              DS
            </div>
            <div className="relative pt-20 md:pt-32">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-slate-100 dark:from-slate-800 via-white dark:via-slate-900 to-indigo-50 dark:to-indigo-950 p-1 transition-colors duration-500">
                <div className="w-full h-full rounded-[22px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-colors duration-500">
                  <div className="text-center p-8">
                    <p className="text-7xl md:text-8xl font-light text-indigo-600/20">8</p>
                    <p className="text-sm tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase mt-4 transition-colors duration-500">Years of Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                The Story
              </motion.span>
              <motion.h2 
                className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] dark:text-slate-100 leading-tight transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                From curiosity
                <span className="block font-normal">to mastery</span>
              </motion.h2>
            </div>

            <motion.div 
              className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-lg">
                Every meaningful journey has a beginning—a moment where possibility meets preparation. 
                Mine started in the halls of the <span className="text-indigo-600 font-medium">University of Cincinnati</span>, 
                where an MSIS degree became more than education; it became a lens through which I learned to see systems, patterns, and potential.
              </p>
              <p>
                What began as foundational training evolved into eight years of designing solutions that matter. 
                From those early days at Ameritas—where theory first met practice—to leading complex initiatives 
                that shape how organizations operate, each chapter has been about one thing: 
                <span className="italic"> creating impact through intentional technology.</span>
              </p>
              <p>
                I believe the best technology disappears into the background, 
                leaving only better experiences, clearer insights, and more empowered people in its wake.
              </p>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-50 dark:from-slate-800 to-indigo-50/50 dark:to-indigo-950/30 border border-slate-100 dark:border-slate-700 transition-colors duration-500">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center transition-colors duration-500">
                  <span className="text-lg font-semibold text-indigo-600">UC</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">Master of Science</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">Information Systems</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}