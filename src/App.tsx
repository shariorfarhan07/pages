import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import TimelineSection from './sections/TimelineSection';
import AchievementsSection from './sections/AchievementsSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import AchievementModal from './components/AchievementModal';
import ScrollToTop from './components/ScrollToTop';
import { Achievement } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <TimelineSection />
        <AchievementsSection openModal={openModal} />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
      
      <AnimatePresence>
        {isModalOpen && selectedAchievement && (
          <AchievementModal 
            achievement={selectedAchievement} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;