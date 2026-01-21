import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent! I'll be in touch soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-[#FAFAF8] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs tracking-[0.3em] text-indigo-600 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Let's Connect
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl md:text-6xl font-light text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Start a
            <span className="block font-normal bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              conversation
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Whether you're looking to collaborate, discuss ideas, or simply connect—I'd love to hear from you.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-500">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-14 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:ring-indigo-500/20 transition-colors duration-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-500">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="h-14 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:ring-indigo-500/20 transition-colors duration-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-500">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What would you like to discuss?"
                  className="min-h-[160px] rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none transition-colors duration-500"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white font-medium shadow-xl shadow-indigo-500/30 transition-all duration-500 shine-effect"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-500">
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 transition-colors duration-500">Connect directly</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:dipsy.srvstv@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/50 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">Email</p>
                    <p className="font-medium text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">dipsy.srvstv@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/srivasdv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-950/50 transition-colors">
                    <Linkedin className="w-5 h-5 text-violet-600 dark:text-violet-400 transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">LinkedIn</p>
                    <p className="font-medium text-[#2D2D2D] dark:text-slate-100 transition-colors duration-500">linkedin.com/in/srivasdv</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 dark:from-indigo-950/20 to-violet-50 dark:to-violet-950/20 border border-indigo-100/50 dark:border-indigo-900/30 transition-colors duration-500">
              <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed transition-colors duration-500">
                "The best conversations start with a simple hello. I'm always interested in hearing about new challenges, opportunities, and ideas."
              </p>
              <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-500">— Deepika</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}