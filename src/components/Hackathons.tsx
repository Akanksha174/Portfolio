import React from 'react';

interface Hackathon {
  title: string;
  description: string;
  link: string;
}

export const Hackathons: React.FC = () => {
  const hackathons: Hackathon[] = [
    {
      title: 'GearUp Season - Disaster Alert System',
      description: 'Built a Disaster Alert System for floods, earthquakes, and landslides to provide real-time alerts and safety guidelines.',
      link: 'https://your-link-to-gearup-certificate.com',
    },
    {
      title: 'Web-E-Stan - Skill Scan ATS',
      description: 'Developed "Skill Scan", an Applicant Tracking System (ATS) to analyze and score resumes based on job descriptions.',
      link: 'https://your-link-to-webe-stan-certificate.com',
    },
  ];

  return (
    <section id="hackathons" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">HACKATHONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2">{hackathon.title}</h3>
              <p className="text-gray-700 mb-4">{hackathon.description}</p>
              <a
                href={hackathon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-medium hover:underline"
              >
                VIEW CERTIFICATE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
