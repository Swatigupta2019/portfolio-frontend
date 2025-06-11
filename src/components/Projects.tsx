import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 1, 0.95, 0.9]);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "Business Website",
      description: "Professional business website with service showcase and client testimonials",
      technologies: ["Tailwindcss", "Nextjs2", "Typescript"],
      image: "/zoratech-mockup.png",
      video: "/zoratech.mp4",
      featured: true
    },
    {
      title: "Manifest Ai",
      description: "An AI-powered productivity app that helps users achieve their goals with personalized schedules.",
      technologies: ["Tailwindcss", "Nextjs2", "Supabase", "Typescript","OpenAI"],
      image: "/manifest-mockup.png",
      video: "/manifest.mp4",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4"
      style={{ opacity, scale }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={titleVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              TOP PROJECTS
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              It all started with a
            </motion.p>
            <motion.div 
              className="inline-block bg-gray-900 rounded-lg px-4 py-2 border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <code className="text-blue-400">console.log</code>
              <code className="text-gray-300">(</code>
              <code className="text-orange-400">"Hello World"</code>
              <code className="text-gray-300">);</code>
            </motion.div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 border border-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-white font-medium">Pro</span>
              </span>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeVideo === project.video ? (
                    <div className="relative w-full h-full">
                      <video
                        src={project.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        controls
                      />
                      <motion.button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  ) : (
                    <>
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          onClick={() => setActiveVideo(project.video)}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </motion.div>

                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3"
                    variants={titleVariants}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 mb-4 leading-relaxed"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={techBadgeVariants}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;