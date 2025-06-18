// src/pages/ListGames.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ListGames() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-20 font-orbitron">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Game Collection
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Game Card 1 */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Snake Game</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Classic snake game. Try to eat as much as you can!
            </p>
            <a
              href="/snake-game"
              className="text-cyan-500 hover:underline"
            >
              Play now →
            </a>
          </motion.div>

          {/* Game Card 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Egg Catcher</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Catch the falling eggs and avoid missing them!
            </p>
            <a
              href="/egg-catcher"
              className="text-cyan-500 hover:underline"
            >
              Play now →
            </a>
          </motion.div>

          {/* Game Card 3 - bạn có thể thêm nhiều game khác ở đây */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay tuned for more games!
            </p>
            <span className="text-gray-400 cursor-default">
              Coming soon...
            </span>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
