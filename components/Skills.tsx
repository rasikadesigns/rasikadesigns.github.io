"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface CircularProgressProps {
  percentage: number;
  isVisible: boolean;
  color: string;
  size?: number;
}

function CircularProgress({ percentage, isVisible, color, size = 120 }: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - 20) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-muted/20"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset: isVisible ? circumference - (progress / 100) * circumference : circumference 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {progress}%
        </motion.span>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technicalSkills = [
    { name: 'UI/UX Design', percentage: 95, color: '#3B82F6' },
    { name: 'React/Next.js', percentage: 90, color: '#8B5CF6' },
    { name: 'TypeScript', percentage: 85, color: '#06B6D4' },
    { name: 'Figma/Sketch', percentage: 98, color: '#EC4899' },
    { name: 'Tailwind CSS', percentage: 92, color: '#10B981' },
    { name: 'Node.js', percentage: 80, color: '#F59E0B' }
  ];

  const softSkills = [
    'Creative Problem Solving',
    'User Empathy',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'Attention to Detail',
    'Continuous Learning',
    'Design Thinking'
  ];

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '🔧' },
    { name: 'Sketch', icon: '✏️' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Illustrator', icon: '🎭' },
    { name: 'After Effects', icon: '🎬' },
    { name: 'Principle', icon: '⚡' },
    { name: 'InVision', icon: '👁️' }
  ];

  return (
    <section ref={ref} className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills &amp; Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="text-center"
                    >
                      <CircularProgress
                        percentage={skill.percentage}
                        isVisible={isInView}
                        color={skill.color}
                        size={100}
                      />
                      <h4 className="font-semibold mt-3 text-sm">{skill.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Design Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-medium">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}