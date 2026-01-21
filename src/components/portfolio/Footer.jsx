import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">DS</span>
            <span className="text-slate-300 dark:text-slate-700 transition-colors duration-500">|</span>
            <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">Deepika Srivastava</span>
          </div>

          <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">
            Crafted with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> and intentionality
          </p>

          <p className="text-sm text-slate-400 dark:text-slate-500 transition-colors duration-500">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>

        {/* Fade out gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-900 to-transparent transition-colors duration-500" />
        </motion.div>
      </div>
    </footer>
  );
}