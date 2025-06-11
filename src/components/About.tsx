import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Express, MongoDB, Golang"
    },
    {
      icon: Code,
      title: "web scraping",
      description: "selenium, beautifulsoup"
    },
    {
      icon: Smartphone,
      title: "Automation",
      description: "selenium, python"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Software Engineer with a strong foundation in full-stack development. I’ve completed my B.E. in Computer Science with a specialization in AI & ML from Chandigarh University.

I’ve worked with companies like Bobble AI, Devfrend Web Solutions, and Hatchnhack Solutions, building scalable and user-friendly web applications using React, Next.js, Node.js, and more.

I'm also skilled in web scraping, automation, and machine learning, with hands-on experience in real-world projects and dashboards.
              </p>
              
              {/* <p className="text-lg text-gray-300 leading-relaxed">
                With experience at companies like Tata Consultancy Services and expertise in modern 
                technologies like React, Node.js, and cloud platforms, I love creating scalable 
                solutions that make a real impact.
              </p> */}

              <motion.div 
                className="flex flex-wrap gap-4 mt-8"
                variants={containerVariants}
              >
                {['React', 'Node.js', 'Golang', 'Next.js', 'MongoDB', 'Python'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={itemVariants}
                    className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;