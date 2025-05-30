import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Award, ExternalLink } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 max-w-lg w-full rounded-xl shadow-2xl overflow-hidden"
        variants={contentVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={achievement.imageUrl} 
            alt={achievement.title} 
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-4 right-4 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start mb-4">
            <Award className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{achievement.issuer} • {achievement.date}</p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">{achievement.description}</p>
          
          {achievement.credentialUrl && (
            <a
              href={achievement.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              View Credential <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AchievementModal;