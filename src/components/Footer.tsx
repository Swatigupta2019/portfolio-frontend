import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Swati Gupta. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Inspired by modern design principles and built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 