import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="flex-1">
            <img
              src="./public/image/photo.jpg"
              alt="Profile"
              className="w-48 h-50 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
              Hello, I'm Akanksha
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-600">
              Web Developer & UI/UX Designer
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
              I design clean, user-focused interfaces and develop responsive web applications. 
              Passionate about combining creativity with logic to build seamless digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col xs:flex-row sm:flex-row gap-4 justify-center md:justify-start">
            <a 
    href="https://drive.google.com/file/d/117qX8rq0D-jgRiKXb0gG4yMPEfB1c6cJ/view?usp=drive_link" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
  >Resume</a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
