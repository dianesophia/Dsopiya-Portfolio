import React from "react";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Cebu – Main Campus",
    date: "Aug 2021 – June 2025",
    description:
      "Graduated Cum Laude. Consistent Dean’s Lister. Qualified under TOPCIT Level 2. Gained strong foundations in full stack development and machine learning.",
    tags: ["Java", "Python", "SQL", "Web Dev", "Machine Learning"],
  },
];

const experience = [
  {
    title: "Full Stack Software Developer Intern",
    company: "MYT SoftDev Solutions Inc.",
    date: "Sept 2024 – Nov 2024",
    description:
      "Contributed to client-based projects using PHP (CodeIgniter) and React.js. Worked on database design with ERD and participated in QA, backend, and frontend roles.",
    tags: ["PHP", "React.js", "CodeIgniter", "ERD", "Full Stack"],
  },
  {
    title: "Vice President - External",
    company: "Computing Society of the Philippines Students",
    date: "Aug 2024 – May 2025",
    description:
      "Led external affairs, organized tech events, and represented the organization in student-led initiatives. Enhanced my communication and leadership skills.",
    tags: ["Leadership", "Event Planning", "Collaboration"],
  },
];

const SectionIcon = ({ type }) =>
  type === "education" ? (
    <svg
      className="w-6 h-6 text-yellow-500 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M2 17l10 6 10-6" />
    </svg>
  ) : (
    <svg
      className="w-6 h-6 text-yellow-500 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );

const TimelineItem = ({ title, subtitle, date, description, tags }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-2 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white dark:border-gray-900"></div>
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h4>
        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
          {date}
        </span>
      </div>
      <div className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
        {subtitle}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#f5f8ff] dark:bg-gray-900 relative"
    >
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-gray-900 dark:text-white">
          Education & Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <SectionIcon type="education" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Education
              </h3>
            </div>
            <div className="border-l-2 border-yellow-300 dark:border-yellow-500 ml-2">
              {education.map((item) => (
                <TimelineItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.institution}
                  date={item.date}
                  description={item.description}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
          {/* Experience Timeline */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <SectionIcon type="experience" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Experience
              </h3>
            </div>
            <div className="border-l-2 border-yellow-300 dark:border-yellow-500 ml-2">
              {experience.map((item) => (
                <TimelineItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.company}
                  date={item.date}
                  description={item.description}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
