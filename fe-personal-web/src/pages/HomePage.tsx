// src/pages/HomePage.tsx
import Header from '../components/Header';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import SoKill from '../components/HomePage/SoKill';
import Portfolio from '../components/HomePage/Portfolio';
import Contact from '../components/HomePage/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <About />
      <SoKill />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
