import React, { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/400x300',
      demoLink: '#',
      sourceLink: '#',
      features: ['User authentication', 'Product catalog', 'Shopping cart', 'Payment integration']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x300',
      demoLink: '#',
      sourceLink: '#',
      features: ['Real-time updates', 'Team collaboration', 'Task prioritization', 'Progress tracking']
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
      image: 'https://via.placeholder.com/400x300',
      demoLink: '#',
      sourceLink: '#',
      features: ['Real-time weather data', '5-day forecast', 'Location search', 'Weather alerts']
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my passion for building innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/20 dark:border-gray-700/20 transform transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 p-6 transform transition-all duration-300 opacity-100 translate-y-0">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 justify-center">
                      <a
                        href={project.demoLink}
                        className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.sourceLink}
                        className="px-6 py-2 border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                )}

                {hoveredProject !== index && (
                  <div className="flex gap-4 justify-center">
                    <a
                      href={project.demoLink}
                      className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceLink}
                      className="px-6 py-2 border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 