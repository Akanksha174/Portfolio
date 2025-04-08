import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SkillScan ATS",
    video: "/videos/Skillscan.mp4", // Update with your video path
    link: "https://skill-scan-ats-mocha.vercel.app/",
  },
  {
    title: "Bookworm",
    video: "/videos/BookWorm.mp4", // Update with your video path
    link: "https://your-bookworm-demo-link.com",
  },
  {
    title: "Hotel Booking",
    video: "/videos/StayInsafe.mp4", // Update with your video path
    link: "https://your-hotel-booking-demo-link.com",
  },
  {
    title: "Taskify",
    video: "/videos/Taskify.mp4", // Update with your video path
    link: "https://your-taskify-demo-link.com",
  },
];

const ProjectCard = ({ project }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
    >
      <video
        ref={videoRef}
        className="w-full h-64 object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-90 group-hover:scale-105 transition-transform">
        <ArrowUpRight className="w-5 h-5" />
      </div>
      <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium opacity-90">
        {project.title}
      </div>
    </a>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title + index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;