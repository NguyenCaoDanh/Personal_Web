import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.body.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.remove(theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`
          flex items-center w-16 h-8 p-1 rounded-full cursor-pointer
          transition-colors duration-500 ease-in-out
          ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-black border border-gray-700'}
        `}
      >
        <div
          className={`
            w-6 h-6 rounded-full shadow-md flex items-center justify-center
            transform transition-transform duration-500 ease-in-out
            ${theme === 'light' ? 'translate-x-0 bg-white' : 'translate-x-8 bg-gray-700'}
          `}
        >
          {theme === 'light' ? (
            <FaSun className="text-yellow-500 text-lg transition-colors duration-500" />
          ) : (
            <FaMoon className="text-white text-lg transition-colors duration-500" />
          )}
        </div>
      </button>
    </div>
  );
}
