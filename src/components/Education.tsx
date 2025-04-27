import React from 'react';

interface EducationDetail {
  school: string;
  course: string;
  passoutDate: string;
  percentage: string;
}

const Education: React.FC = () => {
  const educationDetails: EducationDetail[] = [
    {
      school: "Lovely Professional University",
      course: "Bachelor of Technology (Computer Science)",
      passoutDate: "June 2026",
      percentage: "75%",
    },
    {
      school: "TNB College",
      course: "Higher Secondary (Science)",
      passoutDate: "March 2022",
      percentage: "82%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">EDUCATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{edu.school}</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Course:</strong> {edu.course}</li>
                <li><strong>Passout:</strong> {edu.passoutDate}</li>
                <li><strong>Percentage:</strong> {edu.percentage}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
