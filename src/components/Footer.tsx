import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Code2,
  Heart,
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between md:items-center text-center">
        
        {/* Left: Copyright */}
        <p className="text-gray-600 text-sm">
          © {currentYear} All rights reserved
        </p>

        {/* Center: Social Icons */}
        <div className="flex space-x-4 flex-wrap justify-center">
          <SocialIcon
            href="https://github.com/Akanksha174"
            icon={<Github size={22} />}
            label="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/in/akanksha1220"
            icon={<Linkedin size={22} />}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://leetcode.com/u/akanksha59/"
            icon={<Code2 size={22} />}
            label="LeetCode"
          />
        </div>

        {/* Right: Made with love */}
        <p className="text-gray-600 text-sm flex items-center justify-center">
          Made with <Heart size={14} className="mx-1 text-red-500" /> by{' '}
          <span className="ml-1 font-medium text-gray-900">Akanksha</span>
        </p>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full bg-white shadow hover:shadow-md"
  >
    {icon}
  </a>
);

export default Footer;
