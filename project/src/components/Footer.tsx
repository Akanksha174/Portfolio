import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© Portfolio</p>
          <p className="text-gray-600">
            Powered and secured by{' '}
            <a 
              href="#" 
              className="underline hover:text-gray-900"
            >
              Akanksha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};