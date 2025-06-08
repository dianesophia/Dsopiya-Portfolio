import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
  ]

  return (
    <section id="skills" className="py-20 bg-yellow-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-200/20 dark:border-gray-700/20 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {skill.name}
              </h3>
              <p className="text-yellow-600 dark:text-yellow-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 