import React from 'react';
import { motion } from 'framer-motion';

export default function GenerativeShape({ className = "", color = "indigo" }) {
  const colorMap = {
    indigo: "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
    slate: "from-slate-400/20 via-slate-300/10 to-slate-500/20",
    warm: "from-amber-500/10 via-orange-400/5 to-rose-500/10"
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colorMap[color]} bg-gradient-to-br ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}