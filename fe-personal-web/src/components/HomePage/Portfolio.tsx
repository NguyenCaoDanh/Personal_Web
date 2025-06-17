// src/components/Portfolio.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
  const projects = [
    {
      title: 'Recruitment Web App (Wisdom Carrier)',
      desc: 'Full-stack recruitment system with Spring Boot, ReactJS, JWT, and email notifications.',
      source: '#',
      demo: '#',
    },
    {
      title: 'E-commerce Web App (Robotics Store)',
      desc: 'E-commerce platform with VNPay integration and shipping APIs.',
      source: '#',
      demo: '#',
    },
    {
      title: 'Spa Booking App (Milano Nail Spa)',
      desc: 'Mobile hybrid app using Ionic & Firebase for spa booking and receipt management.',
      source: '#',
      demo: '#',
    },
    {
      title: 'AntMotor.vn (Outsource Project)',
      desc: 'Developed in collaboration with the client, fully delivered.',
      source: '#',
      demo: 'https://antmotor.vn',
    },
    {
      title: 'Streaming App',
      desc: 'Built with React & Tailwind CSS.',
      source: '#',
      demo: '#',
    },
    {
      title: 'Budget App',
      desc: 'Built with React & Bootstrap.',
      source: '#',
      demo: '#',
    },
    {
      title: 'Travel Website',
      desc: 'Simple UI prototype for a travel agency.',
      source: '#',
      demo: '#',
    },
    {
      title: 'Nike UI Clone',
      desc: 'Recreated Nike homepage UI using React and Tailwind CSS.',
      source: '#',
      demo: '#',
    },
    {
      title: 'BlockNote',
      desc: 'Single Page Application for note management with ReactJS.',
      source: '#',
      demo: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#e0f2fe] via-[#f0f4f8] to-[#fdf2f8] font-orbitron">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-blue-50 border hover:border-cyan-400"
            >
              <img
                src="https://mona.solutions/wp-content/uploads/2021/01/OJKB7311.png"
                alt={p.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex space-x-4">
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
                  >
                    <FaGithub /> <span>Source</span>
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
                  >
                    <FaExternalLinkAlt /> <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
