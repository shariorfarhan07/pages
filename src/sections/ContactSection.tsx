import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/personalData';

const ContactSection: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="h-5 w-5" />;
      case 'Linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Mail':
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out if you're interested in working together, have questions about my experience,
            or just want to connect. I'm always open to discussing new opportunities and ideas.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {personalInfo.location}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Email
              </h4>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Connect with me
            </h4>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full shadow-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h3>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div>
              <button
                type="button" // Changed to button to prevent form submission in this demo
                className="w-full btn"
                onClick={() => alert('Message sent! (This is a demo)')}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;