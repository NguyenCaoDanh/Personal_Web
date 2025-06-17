// src/components/About.tsx
import { motion } from 'framer-motion';
import { FaBullseye, FaHistory, FaRocket } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 font-orbitron">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group p-6 border rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-cyan-500 transition-all duration-500 cursor-default bg-gradient-to-br from-white to-blue-50"
          >
            <div className="flex justify-center mb-4 text-indigo-600 text-4xl">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">🎯 Objective</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I aim to become a high-quality Full Stack Developer with strong skills in backend and frontend technologies, delivering modern, user-focused web applications with excellent performance and scalability.
            </p>
          </motion.div>

          {/* Current */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="group p-6 border rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-cyan-500 transition-all duration-500 cursor-default bg-gradient-to-br from-white to-blue-50"
          >
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              <FaHistory />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">🔹 Current</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I am currently seeking an entry-level backend developer position where I can apply Java, Spring Boot, and API technologies. I aim to contribute to real projects, improve system design skills, and grow within professional teams.
            </p>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="group p-6 border rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-cyan-500 transition-all duration-500 cursor-default bg-gradient-to-br from-white to-blue-50"
          >
            <div className="flex justify-center mb-4 text-teal-600 text-4xl">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-600">🚀 Future</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              My long-term goal is to master microservices, cloud technologies, and modern frontend frameworks. I strive to build scalable, secure, and user-centric applications that solve real-world problems and create real impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
