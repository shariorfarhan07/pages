import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { timelineData } from '../data/personalData';

const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'work'>('all');
  
  const filteredData = timelineData.filter(item => 
    filter === 'all' ? true : item.type === filter
  ).sort((a, b) => {
    // Sort by end date, with "Present" coming first
    if (a.endDate === 'Present') return -1;
    if (b.endDate === 'Present') return 1;
    
    // Otherwise sort newest to oldest
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <AnimatedSection id="timeline" className="bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Experience & Education</h2>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              filter === 'all'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('work')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              filter === 'work'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              filter === 'education'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Education
          </button>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="timeline-container">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="timeline-item"
              >
                <div className="timeline-dot">
                  {item.type === 'work' ? (
                    <Briefcase className="absolute -left-[11px] -top-[3px] h-4 w-4 text-white" />
                  ) : (
                    <GraduationCap className="absolute -left-[11px] -top-[3px] h-4 w-4 text-white" />
                  )}
                </div>
                
                <div className="ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.organization}
                    </span>
                    <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.location}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TimelineSection;