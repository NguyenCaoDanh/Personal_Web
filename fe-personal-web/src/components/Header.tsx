import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ToggleThemeButton from './ToggleThemeButton';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleActiveSection = () => {
      // 👉 Thêm 'games' vào danh sách section cần theo dõi
      const sections = ['home', 'about', 'skills', 'projects', 'games', 'contact'];
      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section === 'projects' ? 'portfolio' : section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Games'];

  return (
    <>
      <motion.nav className="fixed top-0 w-full bg-transparent backdrop-blur-md border-b border-gray-300/20 dark:border-gray-700/20 shadow-lg z-50 transition-transform duration-500">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center font-orbitron">
          {/* Menu button in mobile view */}
          <div className="lg:hidden flex items-center space-x-4">
            <div
              className="text-gray-100 text-2xl cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars />
            </div>
          </div>

          {/* Logo */}
          <motion.div
            className="font-extrabold text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Portfolio
          </motion.div>

          {/* Navigation Menu for desktop */}
          <ul className="hidden lg:flex space-x-10 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item} className="group relative">
                <a
                  href={
                    item.toLowerCase() === 'projects'
                      ? '#portfolio'
                      : item.toLowerCase() === 'games'
                      ? '#games'
                      : `#${item.toLowerCase()}`
                  }
                  className={`${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-100'
                  } hover:text-cyan-400 transition-all duration-300`}
                >
                  {item}
                </a>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'w-full bg-cyan-400'
                      : 'w-0 group-hover:w-full bg-cyan-400'
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Right group */}
          <div className="flex items-center space-x-4">
            <ToggleThemeButton />
            <div className="hidden lg:flex space-x-6 text-gray-100">
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
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            ></motion.div>

            <motion.div
              className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 p-6 flex flex-col font-orbitron"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div
                className="flex justify-end mb-8 text-gray-300 text-2xl cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaTimes />
              </div>

              <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-300">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item.toLowerCase() === 'projects'
                          ? '#portfolio'
                          : item.toLowerCase() === 'games'
                          ? '/list-games'
                          : `#${item.toLowerCase()}`
                      }
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

              <div className="my-8 border-t border-gray-500"></div>

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
