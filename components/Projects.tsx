"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'A modern mobile banking application with intuitive UX, biometric authentication, and seamless transaction management.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['React Native', 'UI/UX', 'Figma', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for a SaaS product with modern design, smooth animations, and optimized conversion funnels.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Framer Motion', 'SEO', 'Conversion Optimization'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management Tool',
      description: 'Collaborative task management platform with real-time updates, team collaboration features, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Creative portfolio website for a photographer with stunning gallery layouts and smooth user experience.',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=600&fit=crop',
      tags: ['React', 'GSAP', 'Photography', 'Creative Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in design and development
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-8 w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Card 
                  className={`w-80 h-96 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    project.featured ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500">
                          Featured
                        </Badge>
                      )}
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl}>
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}