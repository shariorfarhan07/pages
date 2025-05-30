import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';

const ResumeSection: React.FC = () => {
  return (
    <AnimatedSection id="resume" className="bg-white dark:bg-gray-900">
      <h2 className="section-title">Resume</h2>
      
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
          <div className="flex justify-center mb-6">
            <FileText className="h-16 w-16 text-primary-600 dark:text-primary-400" />
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            My Professional Resume
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Download my resume to learn more about my work history, education, and skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                alert('This would download the resume PDF in a real application.');
              }}
            >
              <FileDown className="h-5 w-5 mr-2" />
              Download Resume
            </motion.a>
            
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                alert('This would view the resume in a new tab in a real application.');
              }}
            >
              <FileText className="h-5 w-5 mr-2" />
              View Resume
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 px-4 py-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">
            Need a customized version of my resume? Feel free to 
            <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline mx-1">
              contact me
            </a>
            and I'll be happy to provide one tailored to your requirements.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ResumeSection;