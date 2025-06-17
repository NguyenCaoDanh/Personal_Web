// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section === 'projects' ? 'portfolio' : section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] backdrop-blur-md shadow-lg z-50 transition-transform duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-8 py-4 flex justify-between items-center font-orbitron">
          {/* Logo */}
          <motion.div
            className="font-extrabold text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Nguyen Cao Danh
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item} className="group relative">
                <a
                  href={`#${item.toLowerCase() === 'projects' ? 'portfolio' : item.toLowerCase()}`}
                  className={`${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  } hover:text-cyan-400 transition-all duration-300`}
                >
                  {item}
                </a>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full bg-cyan-400' : 'w-0 group-hover:w-full bg-cyan-400'
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-6 text-gray-300">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-gray-300 text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
            <FaBars />
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Slide Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            ></motion.div>

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-[#0f172a] shadow-lg z-50 p-6 flex flex-col font-orbitron"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8 text-gray-300 text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
                <FaTimes />
              </div>

              {/* Sidebar Menu */}
              <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-300">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase() === 'projects' ? 'portfolio' : item.toLowerCase()}`}
                      className={`block hover:text-cyan-400 transition-all duration-300 ${
                        activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-8 border-t border-gray-500"></div>

              {/* Mobile Social Icons */}
              <div className="flex space-x-6 text-gray-300 justify-center">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:your-email@gmail.com"
                  className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
