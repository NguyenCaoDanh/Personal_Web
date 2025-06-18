import { useEffect } from 'react';

export default function BackgroundEffects() {
  useEffect(() => {
    const createBubbles = () => {
      const container = document.createElement('div');
      document.body.appendChild(container);

      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${8 + Math.random() * 4}s`;
        bubble.style.width = bubble.style.height = `${
          10 + Math.random() * 20
        }px`;
        container.appendChild(bubble);
      }
    };

    const createGlows = () => {
      for (let i = 0; i < 20; i++) {
        const glow = document.createElement('div');
        glow.className = 'glow';
        glow.style.left = `${Math.random() * 100}vw`;
        glow.style.top = `${Math.random() * 100}vh`;
        glow.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(glow);
      }
    };

    const createShootingStars = () => {
      for (let i = 0; i < 3; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = `${Math.random() * 50}vh`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        document.body.appendChild(star);
      }
    };

    const createParticles = () => {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        document.body.appendChild(particle);
      }
    };

    createBubbles();
    createGlows();
    createShootingStars();
    createParticles();
  }, []);

  return null;
}
