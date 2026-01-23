import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Zap, Award } from 'lucide-react';

const experiences = [
  {
    period: "Current Role",
    year: "2025-Present",
    title: "Data Analytics & BI Intern",
    subtitle: "Ameritas Life Insurance, Cincinnati",
    description: "Transforming business intelligence by migrating complex IBM Cognos dashboards to Power BI, enhancing data visualization and interactivity. Collaborating with cross-functional teams to gather requirements, validate data integrity, and contribute to BI strategy discussions.",
    learnings: ["Power BI", "Business Intelligence", "Data Visualization"],
    icon: Award,
    color: "from-emerald-500 to-teal-500"
  },
  {
    period: "Academic Excellence",
    year: "2024-2025",
    title: "Graduate Studies",
    subtitle: "University of Cincinnati",
    description: "Pursuing Master's in Information Systems with 3.98 GPA while earning Post-Baccalaureate Certificate in Data Analytics. Mastering advanced topics in cloud computing, data warehousing, generative AI, and enterprise systems to bridge technical expertise with business intelligence.",
    learnings: ["Data Analytics", "Cloud Computing", "Enterprise Systems"],
    icon: Users,
    color: "from-indigo-500 to-blue-500"
  },
  {
    period: "Software Engineering",
    year: "2019-2024",
    title: "Custom Software Engineering Senior Analyst",
    subtitle: "Accenture Solutions, Pune",
    description: "Architected and deployed Java microservices and APIs that enhanced departmental workflow by 56%. Created role-based transaction filtering modules improving user efficiency by 67%. Managed third-party notification platforms with 24x7 support, earning ATCI EU APEX 'Extra Miler' and Sub-Domain STAR awards.",
    learnings: ["Microservices Architecture", "API Development", "System Integration"],
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500"
  },
  {
    period: "Application Development",
    year: "2017-2019",
    title: "Application Development Associate",
    subtitle: "Accenture Solutions, Pune",
    description: "Launched my professional journey by developing web application features that reduced admin processing time by 60%. Led UI/UX modernization from JSP/JSF to Angular and Bootstrap, while managing 70+ end-user tickets and expanding into mobile development with Duke Mobile iOS app POC.",
    learnings: ["Web Development", "UI/UX Modernization", "Quality Assurance"],
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500"
  }
];

function ExperienceCard({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Connection Line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent hidden md:block" />
      )}
      
      <div className="flex gap-8">
        {/* Timeline Marker */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} p-0.5 shadow-lg`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
              <Icon className="w-6 h-6 text-slate-700" />
            </div>
          </motion.div>
        </div>

        {/* Content Card */}
        <motion.div 
          className="flex-1 group"
          whileHover={{ x: 10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative p-8 rounded-3xl glass-effect shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{experience.period}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white`}>
                  {experience.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-[#2D2D2D] dark:text-slate-100 mb-2 transition-colors duration-500">{experience.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 transition-colors duration-500">{experience.subtitle}</p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-500">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {experience.learnings.map((learning, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 transition-colors duration-500"
                  >
                    {learning}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-[#FAFAF8] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-violet-100/30 blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Journey
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl md:text-6xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Seven years of
            <span className="block font-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              technical excellence
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}