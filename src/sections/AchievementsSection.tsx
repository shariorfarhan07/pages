import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievementsData } from '../data/personalData';
import { Achievement } from '../types';
import AchievementsGallery from '../components/AchievementsGallery';

interface AchievementsSectionProps {
  openModal: (achievement: Achievement) => void;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ openModal }) => {
  return (
    <AnimatedSection id="achievements" className="bg-white dark:bg-gray-900">
      <h2 className="section-title">Achievements</h2>
      
      <div className="mt-12 space-y-12">
        <AchievementsGallery achievements={achievementsData} openModal={openModal} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card cursor-pointer transform transition-transform hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openModal(achievement)}
            >
              <div className="relative h-48">
                <img
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 text-white">
                    <Award className="w-3 h-3 mr-1" />
                    {achievement.issuer}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {achievement.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AchievementsSection;