// src/components/BackToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaHome, FaUserCircle, FaLaptopCode, FaFolderOpen, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const menuItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUserCircle />, label: 'About' },
    { id: 'skills', icon: <FaLaptopCode />, label: 'Skills' },
    { id: 'portfolio', icon: <FaFolderOpen />, label: 'Projects' },
    { id: 'contact', icon: <FaPaperPlane />, label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex items-center space-x-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Nút mở menu */}
          {isExpanded &&
            menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                className="p-3 rounded-full bg-[#0f172a] text-white shadow-lg hover:bg-[#1e293b] transition-colors duration-300"
                title={item.label}
              >
                {item.icon}
              </motion.button>
            ))}

          {/* Nút chính */}
          <motion.button
            onClick={() => (isExpanded ? scrollToTop() : setIsExpanded(true))}
            className="p-4 rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-600 transition-colors duration-300"
            whileTap={{ scale: 0.9 }}
            title={isExpanded ? 'Back to Top' : 'Menu'}
          >
            <FaArrowUp size={20} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
