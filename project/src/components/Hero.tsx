import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGosPcUkMv7MQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729699919479?e=1749081600&v=beta&t=WQjhElwhM9aAuuiTeK9WJClT75_t3Lj5nTeSmjOU-Vk"
              alt="Profile"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Hello</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">A Bit About Me</h2>
            <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
              I'm a passionate editor with a keen eye for detail and a love for storytelling. 
              With years of experience in content creation and editing, I help bring stories to life 
              while maintaining their authentic voice.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
                href="#resume" 
                className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
              >
                Resume
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
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