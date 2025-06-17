// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const texts = [
    'Full-Stack Java Developer',
    'Spring Boot | ReactJS',
    'Microservice | REST API',
    'Passion for Clean Code',
  ];
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, textIndex, texts]);

  return (
    <header
      id="home"
      className="pt-24 pb-20 text-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-orbitron relative overflow-hidden"
    >
      {/* Glow nhẹ */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Gradient chuyển động */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-10 animate-gradient"></div>

      {/* Container có ảnh nền */}
      <div
        className="container mx-auto px-4 md:px-6 z-10 relative bg-cover bg-center bg-no-repeat max-w-[1000px] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex flex-col justify-center items-center rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-illustration-of-a-3d-render-showcasing-a-concept-of-web-ui-image_13584942.png')",
        }}
      >
        {/* Overlay mờ giúp chữ dễ đọc */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Nội dung */}
        <div className="relative z-10 text-white p-4 md:p-6 max-w-[90%]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Hello, I’m{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Nguyen Cao Danh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed h-12"
          >
            {displayText}
            <span className="animate-blink">|</span>
          </motion.p>
        </div>
      </div>
    </header>
  );
}
