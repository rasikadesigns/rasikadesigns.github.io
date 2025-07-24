"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Award, Coffee } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '100+' },
    { icon: MapPin, label: 'Happy Clients', value: '50+' },
    { icon: Calendar, label: 'Awards Won', value: '10+' }
  ];

  const expertise = [
    'User Experience Design',
    'User Interface Design',
    'Prototyping',
    'Design Systems',
    'Frontend Development',
    'React & Next.js',
    'Figma & Sketch',
    'Adobe Creative Suite'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate designer and developer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hello! I'm John, a UI/UX designer and frontend developer based in San Francisco. 
                I specialize in creating intuitive, beautiful, and functional digital products that 
                solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                With over 5 years of experience in the industry, I've had the privilege of working 
                with startups, agencies, and Fortune 500 companies. My approach combines creative 
                thinking with technical expertise to deliver exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not designing or coding, you can find me exploring new coffee shops, 
                hiking in nature, or contributing to open-source projects.
              </p>
            </div>

            {/* Expertise */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}