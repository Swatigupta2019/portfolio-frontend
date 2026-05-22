import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Trophy, Code, TrendingUp, Users, Award } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Briefcase,
      number: 1,
      suffix: '+',
      title: 'Frontend Developer',
      description: 'professional experience',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Trophy,
      number: 5,
      suffix: '+',
      title: 'Projects Completed',
      description: 'Full-stack applications built',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      number: 5,
      suffix: '+',
      title: 'Technologies Mastered',
      description: 'Frontend, backend & Automation',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      number: 1,
      suffix: '',
      title: 'Research Paper Published',
      description: (
        <a
          href="https://ieeexplore.ieee.org/document/10798204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-600 underline hover:text-blue-800"
        >
          Read paper
        </a>
      ),
      color: 'from-blue-500 to-purple-500'
    },    
    {
      icon: Users,
      number: 3,
      suffix: '+',
      title: 'Team Projects',
      description: 'Collaborative development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      number: 8.6,
      suffix: ' GPA',
      title: 'Academic Excellence',
      description: 'BE in CSE with AI & ML',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const AnimatedNumber = ({ number, suffix, inView }: { number: number, suffix: string, inView: boolean }) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
      if (inView) {
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            setDisplayNumber(number);
            clearInterval(timer);
          } else {
            setDisplayNumber(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [inView, number]);

    return (
      <span>
        {typeof number === 'number' && number % 1 !== 0 
          ? displayNumber.toFixed(1) 
          : displayNumber
        }{suffix}
      </span>
    );
  };

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

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ACHIEVEMENTS
            </h2>
            <p className="text-gray-400 text-lg">
              Numbers don't lie—unless you ask me about my sleep schedule.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-6`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedNumber 
                      number={achievement.number} 
                      suffix={achievement.suffix}
                      inView={inView}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;