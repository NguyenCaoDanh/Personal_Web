import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-300">
      <p className="flex justify-center items-center gap-2">
        Made with <FaHeart className="text-red-500 animate-pulse" /> by Nguyen
        Cao Danh © 2025
      </p>
    </footer>
  );
}
