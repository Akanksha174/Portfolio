import React from 'react';

const skills = [
  {
    name: "VS CODE",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
  },
  {
    name: "PHOTOSHOP",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg"
  },
  {
    name: "ADOBE XD",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg"
  },
  {
    name: "FIGMA",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
  },
  {
    name: "WORDPRESS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"
  },
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
  },
  {
    name: "JAVASCRIPT",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};