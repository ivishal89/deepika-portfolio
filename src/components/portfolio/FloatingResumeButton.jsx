import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import resumePdf from '@/assets/Deepika_Srivastava_Analyst.pdf';

export default function FloatingResumeButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 80vh (hero section)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
        >
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main button */}
          <motion.a
            href={resumePdf}
            download="Deepika_Srivastava_Resume.pdf"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white font-medium shadow-2xl shadow-indigo-500/40 transition-all duration-500 overflow-hidden group"
          >
            {/* Animated background shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Icon with animation */}
            <motion.div
              animate={isHovered ? {
                rotate: [0, -20, 20, -20, 20, 0],
                y: [0, -3, 0]
              } : {}}
              transition={{ duration: 0.6 }}
            >
              <Download className="w-5 h-5 relative z-10" />
            </motion.div>

            {/* Text with expand animation */}
            <motion.span
              className="relative z-10 hidden md:inline"
              animate={isHovered ? { x: [0, 2, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              Resume
            </motion.span>

            {/* Mobile only icon */}
            <span className="md:hidden relative z-10">CV</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}