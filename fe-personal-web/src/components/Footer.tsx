import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-300/20 dark:border-gray-700/20 text-center text-gray-600 dark:text-gray-300 backdrop-blur-md bg-transparent">
      <p className="flex justify-center items-center gap-2 text-sm">
        Made with <FaHeart className="text-red-500 animate-pulse" /> by Nguyen Cao Danh © 2025
      </p>
    </footer>
  );
}
