import React from "react";
import { ArrowUpRight } from "lucide-react"; // Icon for top-right

const projects = [
  {
    title: "Taskify",
    image: "/image/Taskify.png", // Your uploaded image
    link: "https://your-taskify-demo-link.com",
  },
  {
    title: "Hotel Booking",
    image: "/image/Hotel.png", // Replace with actual Hotel Booking image if different
    link: "https://your-hotel-booking-demo-link.com",
  },
  {
    title: "Bookworm",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    link: "https://your-bookworm-demo-link.com",
  },
  {
    title: "SkillScan ATS",
    image: "/image/Skill.jpg",
    link: "https://skill-scan-ats-mocha.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-90 group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium opacity-90">
              {project.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
