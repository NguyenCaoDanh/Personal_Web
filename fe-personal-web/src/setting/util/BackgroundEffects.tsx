import React, { useEffect, useMemo, useState } from 'react';

export default function BackgroundEffects() {
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

  const twinkles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 4,
    }));
  }, []);

  const clouds = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80,
      left: -300 - Math.random() * 200,
      size: 150 + Math.random() * 100,
      duration: 50 + Math.random() * 30,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

      {/* Light Mode Particles */}
      {theme === 'light' &&
        particles.map((p) => (
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

      {/* Dark Mode Shooting Stars */}
      {theme === 'dark' &&
        Array.from({ length: 15 }).map((_, i) => (
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

      {/* Twinkle Stars */}
      {twinkles.map((t) => (
        <div
          key={`twinkle-${t.id}`}
          className="twinkle"
          style={{
            top: `${t.top}%`,
            left: `${t.left}%`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            animationDuration: `${t.duration}s`,
            animationDelay: `${t.delay}s`,
          }}
        />
      ))}

      {/* Floating Clouds */}
      {clouds.map((c) => (
        <div
          key={`cloud-${c.id}`}
          className="cloud"
          style={{
            top: `${c.top}%`,
            left: `${c.left}px`,
            width: `${c.size}px`,
            height: `${c.size / 2}px`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}

      {/* Aurora Wave */}
      <div className="aurora" />

      {/* Subtle Fog */}
      <div className="fog" />
    </div>
  );
}
