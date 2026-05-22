import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer – Frontend",
      company: "Collegedunia Web Pvt. Ltd.",
      location: "Gurugram, Haryana",
      duration: "July 2025 – Present",
      type: "Full-time",
      description: [
        "Redesigned the SSC Exams module UI in Next.js for Prep.in, improving discoverability across 500+ government exam test series and boosting user engagement by 20%",
        "Improved Core Web Vitals by reducing page load time by 30% on high-traffic SEO exam pages through Next.js SSR and automated image optimization",
        "Implemented Razorpay autopay on Prep+ and launched a trial-first subscription flow, expanding the subscription funnel and boosting revenue",
        "Built dynamic UPSC mentorship course listings and enrollment pages with lead capture modules to drive student registrations",
        "Developed the DotContext client dashboard from scratch for campaign management, AI pipeline monitoring, filtering, and CSV export"
      ],
      technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Razorpay", "SEO"]
    },
    {
      title: "Software Engineer Intern",
      company: "Bobble AI",
      location: "Gurugram, Haryana", 
      duration: "May 2024 – May 2025",
      type: "Internship",
      description: [
        "Reduced developer debugging time by 25% by engineering a cross-platform Firebase Debug Events Dashboard for real-time Android and iOS logs",
        "Created a Sticker Validation Dashboard in Next.js to streamline review workflows for 10,000+ sticker assets",
        "Reduced sticker retrieval latency by 15% by architecting a Go-based REST API with Clean Architecture, GORM, and optimized SQL queries",
        "Added unit tests and automated deployment with GitLab CI/CD for seamless builds and continuous integration"
      ],
      technologies: ["Next.js", "Go", "Firebase", "GitLab CI/CD", "Docker", "GORM", "Clean Architecture"]
    },
    {
      title: "Full Stack Developer Intern", 
      company: "Hatchnhack Solutions Pvt Ltd",
      location: "Delhi",
      duration: "July 2023 – Sep 2023",
      type: "Internship",
      description: [
        "Built a full-stack restaurant management system for an Australian client, handling online orders, reservations, and table allocation for 100+ daily transactions",
        "Implemented a role-based admin dashboard for order tracking, reservation management, and table allocation"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript"]
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <p className="text-gray-400 text-lg">My professional journey so far</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Timeline Navigation */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20'
                        : 'border-gray-800 hover:border-gray-700 bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-purple-400" />
                      <span className="text-sm text-gray-400">{exp.duration}</span>
                    </div>
                    <h3 className="font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-300 text-sm">{exp.company}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Experience Details */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 min-h-[500px]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeIndex].title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-lg text-purple-400 font-medium">
                        {experiences[activeIndex].company}
                      </span>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin size={14} />
                        <span>{experiences[activeIndex].location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{experiences[activeIndex].duration}</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                        {experiences[activeIndex].type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {experiences[activeIndex].description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeIndex].technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 