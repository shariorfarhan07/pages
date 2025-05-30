import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm {personalInfo.name}</span>
            <span className="block text-primary-600 dark:text-primary-400">
              {personalInfo.title}
            </span>
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn w-full sm:w-auto"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline w-full sm:w-auto"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </motion.a>
    </section>
  );
};

export default HomeSection;