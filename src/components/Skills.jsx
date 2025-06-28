import React from "react";

const skillData = [
  {
    title: "Programming Languages",
    icon: (
      <svg
        className="w-6 h-6 text-yellow-500 mr-2 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 18v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1"
        />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    tags: ["Java", "Python", "JavaScript", "PHP", "C", "C#", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg
        className="w-6 h-6 text-yellow-500 mr-2 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tags: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "CodeIgniter",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg
        className="w-6 h-6 text-yellow-500 mr-2 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <path d="M2 12c0 3.314 4.477 6 10 6s10-2.686 10-6" />
        <path d="M2 12V8c0-3.314 4.477-6 10-6s10 2.686 10 6v4" />
      </svg>
    ),
    tags: ["Git", "Firebase", "Figma", "Raspberry Pi 4"],
  },
  {
    title: "Machine Learning & AI",
    icon: (
      <svg
        className="w-6 h-6 text-yellow-500 mr-2 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    tags: [
      "YOLOv8",
      "OpenCV",
      "TensorFlow (basic)",
      "scikit-learn (basic)",
      "pyttsx3",
      "LabelImg",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#f5f8ff] dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-yellow-600">
          Technical Skills
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillData.map((group) => (
            <div
              key={group.title}
              className="relative border-l-4 border-yellow-500 bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {group.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 rounded-full text-xs font-medium hover:scale-105 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
