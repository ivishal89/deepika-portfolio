import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/portfolio/HeroSection';
import StorySection from '@/components/portfolio/StorySection';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import SkillsConstellation from '@/components/portfolio/SkillsConstellation';
import ProjectsShowcase from '@/components/portfolio/ProjectsShowcase';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FAFAF8] dark:bg-slate-950 transition-colors duration-500"
    >
      <HeroSection />
      <StorySection />
      <ExperienceTimeline />
      <SkillsConstellation />
      <ProjectsShowcase />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}