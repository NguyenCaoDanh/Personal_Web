// src/components/Portfolio.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTools,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import { projects } from '../../data/projectsData';
import OutsourcePolicyModal from '../../components/OutsourcePolicyModal';

export default function Portfolio() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const handleClick = (link: string, e: React.MouseEvent) => {
    if (link === '#') {
      e.preventDefault();
      setShowPolicyModal(true);
    }
  };

  const badgeColor = (type: string) => {
    return type === 'Outsource'
      ? 'bg-blue-100 text-blue-600'
      : 'bg-purple-100 text-purple-600';
  };

  const renderProjectGroup = (type: 'Outsource' | 'Personal') => {
    const filtered = projects.filter((p) => p.type === type);

    return (
      <>
        <h3 className="text-2xl font-bold mt-14 mb-6 text-center text-sky-600">
          {type} Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 bg-white"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full shadow-sm font-medium ${badgeColor(
                    p.type
                  )}`}
                >
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-sky-800 mb-1">
                  {p.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaTools className="mr-2 text-sky-500" /> {p.stack}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a
                    href={p.source}
                    onClick={(e) => handleClick(p.source, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-sky-600 transition"
                  >
                    <FaGithub />
                    {p.source !== '#' ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </a>
                  <a
                    href={p.demo}
                    onClick={(e) => handleClick(p.demo, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-sky-600 transition"
                  >
                    <FaExternalLinkAlt />
                    {p.demo !== '#' ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="portfolio" className="py-20 font-orbitron">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-sky-700">
          My Projects
        </h2>
        {renderProjectGroup('Outsource')}
        {renderProjectGroup('Personal')}
      </div>

      {showPolicyModal && <OutsourcePolicyModal onClose={() => setShowPolicyModal(false)} />}
    </section>
  );
}
