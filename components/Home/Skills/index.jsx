// components/Skills.js
import React from 'react';

const skillsData = [
  { name: 'React.js', level: 70, color: 'bg-blue-400' },
  { name: 'Next.js', level: 75, color: 'bg-purple-400' },
  { name: 'Express.js', level: 70, color: 'bg-green-400' },
  { name: 'Laravel', level: 85, color: 'bg-orange-400' },
  { name: 'React Native', level: 80, color: 'bg-indigo-400' },
];

const knowledgeTags = [
  'Frontend Development', 'Backend Development', 'API Integration',
  'State Management', 'Full-Stack Development', 'Responsive Design',
  'Real-time Features', 'RESTful APIs', 'Authentication', 'Database Management'
];

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-white"> Skills</h2>
        <div className="space-y-4">
          {skillsData.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  style={{ width: `${skill.level}%` }}
                  className={`${skill.color} h-2 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-white">Kenntnisse</h2>
        <div className="flex flex-wrap gap-2">
          {knowledgeTags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F3F6F6] dark:bg-[#292929] text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
