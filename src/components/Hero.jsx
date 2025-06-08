import React, { useEffect, useState } from 'react';
import { Terminal, TypingAnimation } from '../magicui/terminal';

const messageGroups = [
  [
    "$ whoami",
    "$ CS Graduate | Problem Solver | Builder",
  ],
  [
    "$ Passionate about software development",
    "$ I enjoy learning and building cool stuff",
  ],
  [
    "$ Currently: Exploring dev opportunities",
    "$ Let's build something awesome together",
  ]
];

const Hero = () => {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prevIndex) => (prevIndex + 1) % messageGroups.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent animate-gradient">
              Hello, I'm Diane Sophia Fuentes
            </h1>
          </div>

          <div className="flex justify-center min-h-[200px] backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl p-8 shadow-xl border border-yellow-200/20 dark:border-yellow-700/20">
            <Terminal className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 text-left space-y-2">
              {messageGroups[groupIndex].map((line, idx) => (
                <TypingAnimation key={`${groupIndex}-${idx}`}>{line}</TypingAnimation>
              ))}
            </Terminal>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 hover:text-white relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
