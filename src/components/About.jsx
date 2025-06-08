import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
//import { CodeBlock } from '@zendeskgarden/react-typography';

const About = ({ isDarkMode, setIsDarkMode }) => {
  const [activeTab, setActiveTab] = useState('story');

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'SQL', level: 85, icon: '🗄️' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="min-h-screen py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-end mb-8">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light mb-4 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 dark:from-yellow-400 dark:via-orange-300 dark:to-yellow-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Elegant Tab Navigation */}
          <div className="flex justify-center space-x-6 mb-12">
            {['story', 'skills', 'interests'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              {...fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-yellow-200/20 dark:border-gray-700/20 backdrop-blur-sm"
            >
              {activeTab === 'story' && (
                <div className="space-y-8">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-light"
                  >
                    ✨ As a Computer Science graduate, I blend technical expertise with creative problem-solving to craft elegant digital solutions. My passion lies in creating intuitive, impactful applications that make a difference.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-light"
                  >
                    💫 I believe in the harmony of clean code and thoughtful design. Each project is an opportunity to push boundaries and create something extraordinary.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-light"
                  >
                    🌟 Beyond coding, I immerse myself in the tech community, contributing to open-source projects and sharing knowledge through technical writing.
                  </motion.p>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-light text-gray-800 dark:text-white mb-8 text-center">Technical Expertise</h3>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 text-lg flex items-center gap-2">
                          {skill.icon} {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: '🎨 Creative Pursuits', content: 'UI/UX Design, Digital Art, Photography' },
                    { title: '📚 Continuous Learning', content: 'Machine Learning, Cloud Architecture, DevOps' },
                    { title: '🌱 Personal Growth', content: 'Open Source, Technical Writing, Mentoring' },
                    { title: '🎯 Future Vision', content: 'Building Impactful Products, Community Building' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h4 className="text-2xl font-light text-gray-800 dark:text-white mb-3">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-light">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About; 