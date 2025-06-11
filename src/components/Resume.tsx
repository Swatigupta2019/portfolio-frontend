import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experience = [
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      period: "2021 - 2023",
      location: "India",
      description: "Developed and maintained enterprise applications using React, Node.js, and cloud technologies."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Fullerton",
      period: "2023 - Present",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Previous Institution",
      period: "2017 - 2021",
      gpa: "3.7/4.0"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="resume" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Resume
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-purple-500/30 last:border-l-0"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-purple-500/30 last:border-l-0"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Download Resume Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="/Swati_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
              <FileText className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;