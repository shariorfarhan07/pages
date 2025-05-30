import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo, skills } from '../data/personalData';

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        <div className="lg:col-span-1">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-24">Name:</span>
                <span className="text-gray-600 dark:text-gray-400">{personalInfo.name}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-24">Location:</span>
                <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-24">Email:</span>
                <span className="text-gray-600 dark:text-gray-400">{personalInfo.email}</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Who I am</h3>
          
          <div className="prose max-w-none dark:prose-invert prose-lg">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What I Do</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Build scalable web applications</li>
                <li>Develop responsive user interfaces</li>
                <li>Create efficient backend services</li>
                <li>Design robust database architectures</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">My Interests</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Open-source contribution</li>
                <li>Tech community involvement</li>
                <li>Learning new technologies</li>
                <li>Mentoring junior developers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;