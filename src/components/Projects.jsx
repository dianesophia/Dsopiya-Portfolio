import React, { useState } from 'react';

import Cooktrition from '../assets/images/cooktrition.png';
import GoldenHaven from '../assets/images/goldenHaven.png';
import InspectorBill from '../assets/images/inspectorBill.png';
import InspectorBillR from '../assets/images/rasp.jpg';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'InspectorBill',
      description: 'A Machine Learning-based model for recognizing Philippine bill denominations.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'OpenCV'],
      image: InspectorBill,
      demoLink: '#',
      sourceLink: 'https://github.com/dianesophia/Thesis---Inspector-Bill',
      features: [
        'Automatically recognizes Philippine currency through image classification.',
        'Utilizes a custom-trained ML model powered by OpenCV.',
        'Provides an API layer using Flask for model deployment.',
        'Performs real-time predictions using camera input.'
      ]
    },
    {
      title: 'Currency Recognition with Audio Feedback',
      description: 'YOLOv8-powered Philippine currency recognition system with Raspberry Pi 4 and audio assistance.',
      technologies: ['Python', 'YOLOv8', 'Raspberry Pi 4', 'React.js', 'Firebase'],
      image: InspectorBillR,
      sourceLink: 'https://github.com/dianesophia/InspectorBill---RaspberryPi',
      features: [
        'Detects Philippine currency in real time using YOLOv8.',
        'Provides audio feedback for visually impaired users.',
        'Runs offline and is optimized for Raspberry Pi 4.',
        'Includes a React.js web dashboard with Firebase integration.',
        'Uses a camera for continuous and efficient currency detection.'
      ]
    },
    {
      title: 'Golden Haven Community Portal',
      description: 'A .NET-based portal for local communication, billing, and facility reservations.',
      technologies: ['ASP.NET', 'C#', 'MySQL'],
      image: GoldenHaven,
      demoLink: '#',
      sourceLink: 'https://github.com/dianesophia/Homeowner-App',
      features: [
        'Enables residents to receive local announcements and respond to polls.',
        'Tracks billing records and payment histories.',
        'Allows users to reserve community facilities seamlessly.',
        'Implements role-based access for homeowners and administrators.',
        'Features a chat system and discussion forum for neighborhood engagement.'
      ]
    },
    {
      title: 'Cooktrition Facts',
      description: 'ML-based recipe recommender that provides nutrition facts tailored to dietary needs.',
      technologies: ['React Native', 'Python', 'Flask API', 'Firebase'],
      image: Cooktrition,
      demoLink: '#',
      sourceLink: 'https://github.com/dianesophia/React_Native_Cooktrition_Facts',
      features: [
        'Recommends recipes based on a trained machine learning model.',
        'Displays nutritional details and calorie breakdown per recipe.',
        'Filters meals based on allergies and dietary restrictions.',
        'Provides a mobile-friendly experience built in React Native.',
        'Ensures real-time sync and user authentication via Firebase.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            A collection of my recent work, showcasing my passion for building innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-yellow-100/80 dark:border-yellow-700/20 transform transition-all duration-500 hover:scale-[1.015]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-light mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setExpandedProject(expandedProject === index ? null : index)
                  }
                  className="text-sm text-yellow-600 dark:text-yellow-400 font-medium underline hover:no-underline mb-4 text-left"
                >
                  {expandedProject === index ? 'Hide Features' : 'Show Features'}
                </button>

                {expandedProject === index && (
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-4 justify-center mt-auto">
                  <a
                    href={project.sourceLink}
                    className="px-6 py-2 rounded-full border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-semibold hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:scale-105"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
