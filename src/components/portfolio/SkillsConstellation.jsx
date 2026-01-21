import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, Cpu, Target, HeartHandshake } from 'lucide-react';

const skillCategories = [
{
  title: "Strategy",
  icon: Compass,
  color: "indigo",
  description: "Aligning technology with business vision",
  skills: ["Digital Transformation", "Roadmap Planning", "Stakeholder Alignment", "Risk Assessment"]
},
{
  title: "Systems",
  icon: Cpu,
  color: "violet",
  description: "Architecting solutions that scale",
  skills: ["Enterprise Architecture", "Cloud Platforms", "Data Engineering", "Integration Design"]
},
{
  title: "Execution",
  icon: Target,
  color: "rose",
  description: "Delivering outcomes with precision",
  skills: ["Agile Leadership", "Project Delivery", "Quality Assurance", "Performance Optimization"]
},
{
  title: "Collaboration",
  icon: HeartHandshake,
  color: "emerald",
  description: "Building bridges, enabling teams",
  skills: ["Cross-functional Leadership", "Mentorship", "Communication", "Change Management"]
}];


const colorClasses = {
  indigo: {
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600"
  },
  violet: {
    bg: "bg-violet-500",
    bgLight: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    gradient: "from-violet-500 to-violet-600"
  },
  rose: {
    bg: "bg-rose-500",
    bgLight: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    gradient: "from-rose-500 to-rose-600"
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-600"
  }
};

function SkillCard({ category, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;
  const colors = colorClasses[category.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative">

      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border ${colors.border} dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}>

        {/* Decorative corner gradient */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${colors.gradient} opacity-10 dark:opacity-5 blur-2xl transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-10`} />
        
        <div className="relative">
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-14 h-14 rounded-2xl ${colors.bgLight} flex items-center justify-center mb-6`}>

            <Icon className={`w-7 h-7 ${colors.text}`} />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-[#2D2D2D] dark:text-slate-100 mb-2 transition-colors duration-500">{category.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 transition-colors duration-500">{category.description}</p>

          {/* Skills */}
          <div className="space-y-3">
            {category.skills.map((skill, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.3, duration: 0.4 }}
              className="flex items-center gap-3">

                <motion.div
                className={`w-2 h-2 rounded-full ${colors.bg}`}
                animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }} />

                <span className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-500">{skill}</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>);

}

export default function SkillsConstellation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
      {/* Constellation lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M100,500 Q400,200 500,500 T900,500"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }} />

          <motion.path
            d="M200,800 Q500,400 800,700"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}>

            Capabilities
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-6xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}>

            Skills as
            <span className="bg-clip-text text-transparent pb-4 font-normal block from-indigo-600 via-violet-600 to-rose-600">building blocks

            </span>
          </motion.h2>
          <motion.p className="text-slate-500 mx-auto my-1 text-lg dark:text-slate-400 max-w-2xl transition-colors duration-500"

          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}>A constellation of capabilities refined over eight years, each skill intentionally developed to create holistic impact.


          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) =>
          <SkillCard key={index} category={category} index={index} />
          )}
        </div>
      </div>
    </section>);

}