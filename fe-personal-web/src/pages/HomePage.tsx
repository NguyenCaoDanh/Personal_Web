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
    <div className="relative min-h-screen text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`particle bg-lime-300 dark:bg-cyan-400 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '6px',
              height: '6px',
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Waves */}
      <div className="wave"></div>
      <div className="wave delay"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <SoKill />
        <Portfolio />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
