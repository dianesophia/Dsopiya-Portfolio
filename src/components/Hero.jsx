  import React, { useEffect, useState } from 'react';
  import { Terminal, TypingAnimation, AnimatedSpan } from '../magicui/terminal';
  import { PulsatingButton } from "../magicui/pulsating-button";

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
        <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="mb-4 px-4 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400 rounded-full text-xs font-semibold">Available for hire</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white leading-tight">
              Software<br />Engineer
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent animate-gradient leading-tight">
              Diane Sophia Fuentes
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Driven to learn and innovate using modern technologies—particularly AI and full-stack development—as tools for building practical, real-life applications.
            </p>
           {/* <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1" /></svg>
                3+ Years Experience
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4V4a4 4 0 118 0v6" /></svg>
                20+ Projects
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-5 3 1.9-5.6L4 10.5l5.7-.4L12 5l2.3 5.1 5.7.4-4.9 3.9L17 20z" /></svg>
                Top-Rated Freelancer
              </span>
            </div>*/}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                <PulsatingButton>Hire Me</PulsatingButton>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white border-2 border-yellow-500 text-yellow-600 dark:bg-gray-900 dark:border-yellow-400 dark:text-yellow-400 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-gray-900"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Right Side: Terminal */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-xl min-h-[300px] bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl border border-yellow-200/30 dark:border-yellow-700/20">
            <Terminal className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 text-left space-y-2">
  <TypingAnimation>&gt; init diane-sophia-portfolio</TypingAnimation>
  <AnimatedSpan delay={1500} className="text-green-500">
    <span> </span>
  </AnimatedSpan>
  <AnimatedSpan delay={2000} className="text-green-500">
    <span>✔ Compiling degree: B.S. in Computer Science (Cum Laude)</span>
  </AnimatedSpan>
  <AnimatedSpan delay={2500} className="text-green-500">
    <span>✔ Internship completed at MYT SoftDev (Full Stack)</span>
  </AnimatedSpan>
  <AnimatedSpan delay={3000} className="text-green-500">
    <span>✔ PHP (CodeIgniter) + React.js + Firebase integrated</span>
  </AnimatedSpan>
  <AnimatedSpan delay={3500} className="text-green-500">
    <span>✔ Built YOLOv8-based currency recognition system</span>
  </AnimatedSpan>
  <AnimatedSpan delay={4000} className="text-green-500">
    <span>✔ Raspberry Pi 4 deployment successful</span>
  </AnimatedSpan>
  <AnimatedSpan delay={4500} className="text-green-500">
    <span>✔ Led as VP - External, CSP Students</span>
  </AnimatedSpan>
  <AnimatedSpan delay={5000} className="text-green-500">
    <span>✔ Projects: InspectorBill, Cooktrition Facts</span>
  </AnimatedSpan>
  <AnimatedSpan delay={5500} className="text-green-500">
    <span>✔ Skills: Java, Python, JS, SQL, React, ML</span>
  </AnimatedSpan>
  <AnimatedSpan delay={6000} className="text-green-500">
    <span> </span>
  </AnimatedSpan>
  <AnimatedSpan delay={6500} className="text-green-500">
    <span> </span>
  </AnimatedSpan>
  <TypingAnimation delay={7000} className="text-blue-500">
    🚀 Deployment ready: Diane Sophia Fuentes is open to work!
  </TypingAnimation>
</Terminal>

            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
