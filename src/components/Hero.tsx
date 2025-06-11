import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const names = [
    { text: "Swati Gupta", lang: "English" },
    { text: "स्वाति गुप्ता", lang: "Hindi" },
    { text: "સ્વાતિ ગુપ્તા", lang: "Gujarati" },
    { text: "ಸ್ವಾತಿ ಗುಪ್ತಾ", lang: "Kannada" },
  ];

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length);
    }, 3000);

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(nameInterval);
      clearInterval(roleInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              Hi, I'm
            </h2>
            <div className="h-25 md:h-32 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`name-${currentNameIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent py-3"
                >
                  {names[currentNameIndex].text}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="h-16 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`role-${currentRoleIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  {roles[currentRoleIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mt-6">
              Building modern, responsive applications with a focus on clean code 
              and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/Swati_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
            <motion.button
              className="px-8 py-4 border border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60" />
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-700">
              <img 
                src="/profile_swati.jpg"
                alt="Swati Gupta"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;