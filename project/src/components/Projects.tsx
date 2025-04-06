import React from 'react';

const projects = [
  {
    title: "Editorial Excellence",
    description: "Led the editorial team for a major publishing house, managing content strategy and quality control for over 50 titles.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Digital Transformation",
    description: "Spearheaded the transition from print to digital content, implementing new workflows and tools for enhanced efficiency.",
    image: "https://images.unsplash.com/photo-1586380951230-e6703d9f6833?auto=format&fit=crop&q=80&w=800",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};