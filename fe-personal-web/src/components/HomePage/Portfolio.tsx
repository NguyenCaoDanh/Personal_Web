// src/components/Portfolio.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';

export default function Portfolio() {
  const projects = [
    {
      title: 'Recruitment Web App (Wisdom Carrier)',
      desc: 'A full-stack recruitment system with JWT authentication and email notifications.',
      stack: 'Spring Boot, ReactJS, MySQL, JWT, Email API',
      source: '#',
      demo: '#',
    },
    {
      title: 'E-commerce Web App (Robotics Store)',
      desc: 'An e-commerce platform with online payments and shipping APIs.',
      stack: 'Spring Boot, ReactJS, VNPay, REST API',
      source: '#',
      demo: '#',
    },
    {
      title: 'Spa Booking App (Milano Nail Spa)',
      desc: 'A mobile hybrid app for spa appointment booking and receipt management.',
      stack: 'Ionic, Firebase, ReactJS',
      source: '#',
      demo: '#',
    },
    {
      title: 'AntMotor.vn (Outsource Project)',
      desc: 'A motorcycle e-commerce website delivered in collaboration with the client.',
      stack: 'PHP, Laravel, MySQL',
      source: '#',
      demo: 'https://antmotor.vn',
    },
    {
      title: 'Streaming App',
      desc: 'A video streaming UI prototype with smooth UX and responsive design.',
      stack: 'ReactJS, Tailwind CSS',
      source: '#',
      demo: '#',
    },
    {
      title: 'Travel Website',
      desc: 'A modern travel agency landing page with beautiful animations.',
      stack: 'ReactJS, Tailwind CSS, Framer Motion',
      source: '#',
      demo: '#',
    },
  ];

  const projectImage = 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-8-best-free-mountain-background-images-4k-wallpapers-image_2670051.jpg';

  return (
    <section id="portfolio" className="py-20 font-orbitron">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 border-2 border-transparent hover:border-cyan-400 dark:hover:border-purple-400 bg-gray-100 dark:bg-gray-800"
            >
              <div className="relative group">
                <img
                  src={projectImage}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-black/20 transition-all duration-500 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-800 rounded-full border-2 border-gray-300 hover:border-cyan-400 hover:bg-cyan-100 dark:bg-gray-900 dark:text-white dark:hover:border-purple-400 dark:hover:bg-purple-900 transition-colors"
                  >
                    <FaGithub /> <span>Source</span>
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-800 rounded-full border-2 border-gray-300 hover:border-cyan-400 hover:bg-cyan-100 dark:bg-gray-900 dark:text-white dark:hover:border-purple-400 dark:hover:bg-purple-900 transition-colors"
                  >
                    <FaExternalLinkAlt /> <span>Demo</span>
                  </a>
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-purple-300">{p.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-2">
                  <FaTools />
                  <span>{p.stack}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
