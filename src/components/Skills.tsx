import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React/Next.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js/Express', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
    { name: 'Python', level: 82, color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS/Cloud', level: 75, color: 'from-orange-500 to-red-500' },
    { name: 'MongoDB/PostgreSQL', level: 80, color: 'from-green-600 to-green-400' },
    { name: 'Docker/Kubernetes', level: 70, color: 'from-blue-500 to-purple-500' },
    { name: 'React Native', level: 78, color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
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
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-purple-400 font-medium">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git/GitHub', 'REST APIs', 'GraphQL', 'Redis', 'Jenkins', 
                'Terraform', 'Microservices', 'Agile/Scrum', 'Jest/Testing'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;