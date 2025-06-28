import React from 'react';
import profilePic from '../assets/images/diane.png';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 bg-white flex items-center">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-2"></div>
        </div>
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-5xl mx-auto">
          {/* Left: Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-yellow-100 flex items-center justify-center border-4 border-yellow-200 shadow-md">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Code status box */}
            <div className="mt-4 bg-white rounded-xl shadow-md px-4 py-2 font-mono text-base flex items-center">
              <span className="text-gray-700">const status = </span>
              <span className="mx-1 text-green-500">"Open to work"</span>
              <span className="text-gray-700">;</span>
            </div>
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Computer Science Graduate | Developer | Machine Learning Enthusiast</h3>
          <p className="text-gray-600 text-lg mb-4">
  I'm Diane Sophia Fuentes, a curious and passionate computer science graduate who enjoys exploring how technology can make everyday life easier. I love learning about full stack development and finding creative ways to solve problems through code.
</p>
<p className="text-gray-600 text-lg mb-4">
  Lately, I've been diving deeper into modern tools and frameworks, experimenting with web technologies, and building small projects that challenge me to think critically and work smarter.
</p>
<p className="text-gray-600 text-lg mb-4">
  I'm also drawn to artificial intelligence and how it can be used to create helpful, human-centered solutions — especially when combined with simple, accessible design.
</p>



            <div className="flex items-center gap-6 mt-4">
              <a href="https://github.com/dianesophia/" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-600 hover:text-yellow-700 text-lg font-medium">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/diane-sophia-fuentes-2913b6232/" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-600 hover:text-yellow-700 text-lg font-medium">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" /></svg>
                LinkedIn
              </a>
              <a
                href="/Diane Sophia Fuentes - Resume.pdf"
                download
                className="flex items-center text-yellow-600 hover:text-yellow-700 text-lg font-medium"
              >
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z" />
                </svg>
                Resume
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 