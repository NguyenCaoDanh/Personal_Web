import React from 'react';
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
  return (
    <div className="relative min-h-screen text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500">
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <SoKill />
        <Portfolio />
        <ListGames />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
