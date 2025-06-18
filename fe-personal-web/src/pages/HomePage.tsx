import React, { useMemo, useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import SoKill from '../components/HomePage/SoKill';
import Portfolio from '../components/HomePage/Portfolio';
import Contact from '../components/HomePage/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import ListGames from './ListGames';

export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const html = document.querySelector('html');
    if (html?.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    const observer = new MutationObserver(() => {
      if (html?.classList.contains('dark')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });

    if (html) {
      observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    }

    return () => observer.disconnect();
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
      color: i % 2 === 0 ? 'lime-300' : 'pink-400',
    }));
  }, []);

  return (
    <div className="relative min-h-screen text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500">
      {/* Light Mode Particles */}
      {theme === 'light' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className={`particle bg-${p.color}`}
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Dark Mode Shooting Stars */}
      {theme === 'dark' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <SoKill />
        <Portfolio />
        <Contact />
        <ListGames/>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
