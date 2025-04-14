import React from 'react';

interface Certificate {
  title: string;
  issuer: string;
  link: string;
}

export const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      link: 'https://api.badgr.io/public/assertions/57s5AJQLTGeTNExs-dJ2YA?identity__email=akankshakumari4755%40gmail.com',
    },
    {
      title: 'Web Development Fundamentals',
      issuer: 'IBM',
      link: 'https://www.credly.com/badges/6f58c9d8-d7b8-4c3e-bf06-a4f900dcecce/linked_in_profile',
    },
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-d0887f4e-66b4-4489-8765-0c656da3805d/',
    },
    // Add more as needed
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">CERTIFICATES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">Issued by: {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-medium hover:underline"
              >
                SHOW CREDENTIALS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
