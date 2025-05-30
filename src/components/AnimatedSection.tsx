import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, className = '', children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      }
    },
  };

  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`} ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;