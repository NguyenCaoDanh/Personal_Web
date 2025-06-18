// src/pages/ListGames.tsx
import { motion } from 'framer-motion';

const games = [
  {
    title: 'Snake Game',
    description: 'Classic snake game. Try to eat as much as you can!',
    link: '/snake-game',
  },
  {
    title: 'Caro Chess',
    description: 'Caro games for 2 players.',
    link: '/caro-games',
  },
  {
    title: 'Coming Soon',
    description: 'Stay tuned for more games!',
    comingSoon: true,
  },
];

export default function ListGames() {
  return (
    <div className="min-h-screen flex flex-col from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 ">
      <main id="games" className="flex-1 container mx-auto px-4 py-20 font-orbitron">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🎮 Game Collection 🎮
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
                {game.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center text-lg">
                {game.description}
              </p>

              {game.comingSoon ? (
                <span className="block text-center text-gray-400 cursor-default text-xl font-semibold">
                  🚧 Coming soon...
                </span>
              ) : (
                <div className="flex justify-center">
                  <a
                    href={game.link}
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-110 transition-all text-lg font-semibold"
                  >
                    Play now →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
