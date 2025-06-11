import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully!'
        });
        // Clear form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Swatigupta2019',
      description: 'Check out my open source projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/swati-gupta-422332218/',
      description: 'Connect with me professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:swatigupta2225@gmail.com',
      description: 'swatigupta2225@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CONTACT
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/profile_swati.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {/* If you think I'd be a good fit for your team or you just want to connect - 
                reach out! */}
              </p>

              <div className="space-y-6">
                <h4 className="text-white font-medium mb-4">Find me on these platforms</h4>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                  >
                    <link.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-white font-medium">{link.name}</p>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-yellow-400">👋</span>
                  <h3 className="text-xl font-semibold text-white">Say Hello</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  If you think I'd be a good fit for your team or you just want to connect - 
                  reach out!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status.loading}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status.loading}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status.loading}
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50"
                    />
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl ${
                        status.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: status.loading ? 1 : 1.02 }}
                    whileTap={{ scale: status.loading ? 1 : 0.98 }}
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;