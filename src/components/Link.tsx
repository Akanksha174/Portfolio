import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children }: LinkProps) => {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </a>
  );
};