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
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      link: 'https://www.example.com/aws-cert.pdf',
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
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">Issued by: {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 font-medium hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
