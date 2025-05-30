import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Achievement } from '../types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface AchievementsGalleryProps {
  achievements: Achievement[];
  openModal: (achievement: Achievement) => void;
}

const AchievementsGallery: React.FC<AchievementsGalleryProps> = ({ achievements, openModal }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'bg-primary-600 dark:bg-primary-400',
          bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mx-1 transition-colors duration-300 cursor-pointer',
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="h-[400px] sm:h-[500px] w-full rounded-xl overflow-hidden"
      >
        {achievements.map((achievement) => (
          <SwiperSlide key={achievement.id} onClick={() => openModal(achievement)}>
            <div className="relative h-full cursor-pointer group">
              <img
                src={achievement.imageUrl}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-200">{achievement.issuer} • {achievement.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {!isBeginning && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.stopPropagation();
              const swiper = document.querySelector('.swiper')?.swiper;
              if (swiper) swiper.slidePrev();
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {!isEnd && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.stopPropagation();
              const swiper = document.querySelector('.swiper')?.swiper;
              if (swiper) swiper.slideNext();
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsGallery;