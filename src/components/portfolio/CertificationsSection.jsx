import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    year: "2021",
    issuer: "Microsoft",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "AWS Developer Associate",
    code: "DVA-C01",
    year: "2020",
    issuer: "Amazon Web Services",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "Full Stack Automation Engineer",
    code: "Advanced",
    year: "2021",
    issuer: "Accenture",
    color: "from-violet-500 to-purple-500"
  },
  {
    name: "Certified RASA Developer",
    code: "AI/ML",
    year: "2021",
    issuer: "RASA",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Automation Anywhere RPA Professional",
    code: "Advanced",
    year: "2019",
    issuer: "Automation Anywhere",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Validated Expertise
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Professional
            <span className="block font-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              certifications
            </span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl glass-effect shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Badge Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-[10px] bg-white dark:bg-slate-900 flex items-center justify-center">
                      <Award className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-slate-100 mb-2 transition-colors duration-500">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors duration-500">
                    {cert.code}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-500">
                    {cert.year}
                  </span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">
                  {cert.issuer}
                </p>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-500">
            <div>
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-500">5+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Certifications</p>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700 transition-colors duration-500" />
            <div>
              <p className="text-3xl font-bold text-violet-600 dark:text-violet-400 transition-colors duration-500">3</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Cloud Platforms</p>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700 transition-colors duration-500" />
            <div>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors duration-500">2021</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Latest Certified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}