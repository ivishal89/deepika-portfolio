import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Target } from 'lucide-react';

// Animated Counter
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className="font-bold text-4xl text-indigo-600">
      {count}{suffix}
    </span>
  );
}

// Progress Ring (Circular Progress)
function ProgressRing({ percentage, size = 120, strokeWidth = 8, color = "indigo" }) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const colorMap = {
    indigo: { stroke: "#6366f1", bg: "#e0e7ff" },
    emerald: { stroke: "#10b981", bg: "#d1fae5" },
    rose: { stroke: "#f43f5e", bg: "#ffe4e6" },
    violet: { stroke: "#8b5cf6", bg: "#ede9fe" }
  };

  const colors = colorMap[color];

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.bg}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset: circumference - (progress / 100) * circumference 
          }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter value={percentage} suffix="%" duration={2} />
        <span className="text-xs text-slate-500 mt-1">Complete</span>
      </div>
    </div>
  );
}

// Line Chart Animation
function MiniLineChart({ data, color = "indigo" }) {
  const [animatedData, setAnimatedData] = useState(data.map(() => 0));
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedData(data), 100);
    return () => clearTimeout(timer);
  }, [data]);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = animatedData.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  const colorMap = {
    indigo: { line: "#6366f1", fill: "rgba(99, 102, 241, 0.1)", dot: "#6366f1" },
    emerald: { line: "#10b981", fill: "rgba(16, 185, 129, 0.1)", dot: "#10b981" },
    rose: { line: "#f43f5e", fill: "rgba(244, 63, 94, 0.1)", dot: "#f43f5e" }
  };

  const colors = colorMap[color];

  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="w-full h-32" preserveAspectRatio="none">
        {/* Fill area */}
        <motion.path
          d={`M 0,100 L ${points} L 100,100 Z`}
          fill={colors.fill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Line */}
        <motion.polyline
          points={points}
          fill="none"
          stroke={colors.line}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Endpoint dot */}
        <motion.circle
          cx={100}
          cy={100 - ((animatedData[animatedData.length - 1] - min) / range) * 80 - 10}
          r="3"
          fill={colors.dot}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        />
      </svg>
    </div>
  );
}

// Stacked Progress Bars
function StackedProgress({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm text-slate-600">{item.label}</span>
            <AnimatedCounter value={item.value} suffix="%" duration={1.5 + index * 0.3} />
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${item.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ 
                duration: 1.5, 
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Stat Cards Grid
function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const iconMap = {
          time: Clock,
          users: Users,
          target: Target,
          trend: TrendingUp
        };
        const Icon = iconMap[stat.icon] || TrendingUp;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            className={`p-4 rounded-2xl ${stat.bgColor} border ${stat.borderColor}`}
          >
            <div className="flex items-start justify-between mb-2">
              <Icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.5} />
              </div>
              <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Main Metric Visualization Component
export default function MetricVisualization({ type, data }) {
  const visualizations = {
    progress_ring: <ProgressRing {...data} />,
    line_chart: <MiniLineChart {...data} />,
    stacked_progress: <StackedProgress {...data} />,
    stats_grid: <StatsGrid {...data} />,
    counter: (
      <div className="text-center p-6">
        <AnimatedCounter value={data.value} suffix={data.suffix} duration={2} />
        <p className="text-sm text-slate-500 mt-2">{data.label}</p>
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {visualizations[type]}
    </motion.div>
  );
}

export { AnimatedCounter, ProgressRing, MiniLineChart, StackedProgress, StatsGrid };