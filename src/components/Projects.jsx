import React, { useState } from 'react';

import Cooktrition from '../assets/images/cooktrition.png';
import GoldenHaven from '../assets/images/goldenHaven.png';
import InspectorBill from '../assets/images/inspectorbill.png';
import InspectorBillR from '../assets/images/rasp.jpg';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'InspectorBill',
      description: 'A Machine Learning-based model for recognizing Philippine bill denominations.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'OpenCV'],
      image: InspectorBill,
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
      demoLink: 'https://inspectorbill.vercel.app/',
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            A collection of my recent projects demonstrating my skills in building impactful and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="py-4 px-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setExpandedProject(expandedProject === index ? null : index)
                  }
                  className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-2 hover:underline self-start"
                >
                  {expandedProject === index ? 'Hide Features' : 'Show Features'}
                </button>
                <div
                  className={`transition-max-height duration-500 overflow-hidden ${
                    expandedProject === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300 mb-2 mt-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-2 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="px-4 py-2 border border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.sourceLink}
                    className="px-4 py-2 border border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-white transition"
                  >
                    Source
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
