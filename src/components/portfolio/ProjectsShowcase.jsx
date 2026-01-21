import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Lightbulb, Cog, TrendingUp } from 'lucide-react';
import MetricVisualization from './MetricVisualization';

const projects = [
  {
    id: 1,
    title: "Business Intelligence Dashboard Migration",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    problem: "Ameritas Life Insurance needed to modernize their reporting infrastructure by migrating complex IBM Cognos dashboards to Power BI while maintaining data accuracy and enhancing user interactivity.",
    process: "Analyzed existing Cognos dashboard structures, mapped data sources and metrics, redesigned visualizations in Power BI with enhanced interactivity, collaborated with cross-functional teams for requirements gathering, and validated data integrity throughout migration.",
    outcome: "Successfully migrated critical business dashboards to Power BI, improved data visualization capabilities, enabled self-service analytics for business users, and contributed to BI strategy modernization.",
    tags: ["Power BI", "IBM Cognos", "Data Visualization", "Business Intelligence"],
    metrics: {
      type: "stats_grid",
      data: {
        stats: [
          { 
            value: 12, 
            suffix: "+", 
            label: "Dashboards Migrated", 
            icon: "trend",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-200",
            iconColor: "text-indigo-600"
          },
          { 
            value: 100, 
            suffix: "%", 
            label: "Data Accuracy", 
            icon: "target",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-200",
            iconColor: "text-emerald-600"
          },
          { 
            value: 45, 
            suffix: "%", 
            label: "Faster Insights", 
            icon: "time",
            bgColor: "bg-violet-50",
            borderColor: "border-violet-200",
            iconColor: "text-violet-600"
          },
          { 
            value: 8, 
            suffix: "", 
            label: "Cross-functional Teams", 
            icon: "users",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            iconColor: "text-blue-600"
          }
        ]
      },
      description: "Migration Impact Metrics"
    }
  },
  {
    id: 2,
    title: "Microservices Architecture for Financial Services",
    category: "Software Engineering",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    problem: "Banking client needed scalable microservices for FICO score verification, role-based transaction filtering, and multi-channel notifications (SMS, Email, Push) with 24x7 reliability and end-to-end monitoring.",
    process: "Developed and deployed Java microservices and RESTful APIs, created role-based filtering modules, integrated LATINIA notification platform, designed data flow between mainframe and modern services, implemented logging with KIBANA and Kubernetes, and provided continuous support.",
    outcome: "Enhanced departmental workflow by 56%, improved user transaction efficiency by 67%, achieved 99.9% uptime with 24x7 support, earned ATCI EU APEX 'Extra Miler' award and Sub-Domain STAR recognition.",
    tags: ["Java", "Microservices", "Spring Boot", "REST APIs", "Kubernetes"],
    metrics: {
      type: "stacked_progress",
      data: {
        items: [
          { label: "Workflow Enhancement", value: 56, color: "bg-violet-500" },
          { label: "User Efficiency Gain", value: 67, color: "bg-indigo-500" },
          { label: "System Uptime", value: 99, color: "bg-emerald-500" }
        ]
      },
      description: "System Performance Improvements"
    }
  },
  {
    id: 3,
    title: "UI/UX Modernization & Web Application Optimization",
    category: "Application Development",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    problem: "Legacy web application with JSP/JSF interfaces needed modernization to improve user experience. Admin users spent excessive time on trader filtering tasks, and the system had accumulated technical debt with code vulnerabilities.",
    process: "Led UI/UX transition from JSP/JSF to Angular and Bootstrap, developed trader filtering functionality based on code and sub-code, reverse-engineered legacy code to eliminate vulnerabilities, optimized SQL queries, and resolved 70+ end-user upgrade tickets in 2 months.",
    outcome: "Reduced admin processing time by 60%, significantly improved internal client experience, modernized codebase to latest Java version, enhanced application performance, and delivered Duke Mobile iOS POC using Angular and Ionic.",
    tags: ["Angular", "Bootstrap", "SQL", "Java", "UI/UX Design"],
    metrics: {
      type: "line_chart",
      data: {
        data: [40, 48, 55, 68, 78, 88, 95, 100],
        color: "emerald"
      },
      description: "User Efficiency Growth Over Project Timeline"
    }
  }
];

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors duration-500">
              {project.category}
            </span>
          </div>

          {/* View Button */}
          <motion.div 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-slate-700 dark:text-slate-300 transition-colors duration-500" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-[#2D2D2D] dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 transition-colors duration-500">{project.problem}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 transition-colors duration-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl transition-colors duration-500"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-slate-700 dark:text-slate-300 transition-colors duration-500" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700">
              {project.category}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Story Sections */}
        <div className="p-8 md:p-12 space-y-10">
          {/* Problem */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-rose-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs tracking-[0.2em] text-rose-500 dark:text-rose-400 uppercase mb-2 transition-colors duration-500">The Challenge</h4>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">{project.problem}</p>
            </div>
          </div>

          {/* Process */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Cog className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-2 transition-colors duration-500">The Approach</h4>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">{project.process}</p>
            </div>
          </div>

          {/* Outcome */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs tracking-[0.2em] text-emerald-500 dark:text-emerald-400 uppercase mb-2 transition-colors duration-500">The Impact</h4>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">{project.outcome}</p>
            </div>
          </div>

          {/* Metrics Visualization */}
          {project.metrics && (
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-500">{project.metrics.description}</h4>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 dark:from-slate-800 to-indigo-50/30 dark:to-indigo-950/20 border border-slate-100 dark:border-slate-800 transition-colors duration-500">
                <MetricVisualization 
                  type={project.metrics.type} 
                  data={project.metrics.data} 
                />
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-[#FAFAF8] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Selected Work
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl md:text-6xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Projects that
            <span className="block font-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              tell a story
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}