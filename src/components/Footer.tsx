import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" /> by John Doe
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Software Engineer | Problem Solver | Lifelong Learner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;