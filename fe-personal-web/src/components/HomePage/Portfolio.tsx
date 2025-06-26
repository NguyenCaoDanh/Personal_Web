import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTools,
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

  const badgeColor = (type: string) =>
    type === 'Outsource'
      ? 'bg-blue-100 text-blue-600'
      : 'bg-purple-100 text-purple-600';

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
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 bg-white group"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt={p.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge loại dự án */}
                <span
                  className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full shadow-sm font-medium ${badgeColor(
                    p.type
                  )}`}
                >
                  {p.type}
                </span>

                {/* Overlay icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                  {/* GitHub */}
                  <a
                    href={p.source !== '#' ? p.source : undefined}
                    onClick={(e) => handleClick(p.source, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full text-3xl backdrop-blur-sm transition ${
                      p.source !== '#'
                        ? 'text-white hover:bg-white/20 bg-white/10'
                        : 'text-gray-400 cursor-not-allowed bg-white/5'
                    }`}
                  >
                    <FaGithub />
                  </a>

                  {/* Demo */}
                  <a
                    href={p.demo !== '#' ? p.demo : undefined}
                    onClick={(e) => handleClick(p.demo, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full text-3xl backdrop-blur-sm transition ${
                      p.demo !== '#'
                        ? 'text-white hover:bg-white/20 bg-white/10'
                        : 'text-gray-400 cursor-not-allowed bg-white/5'
                    }`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold text-sky-800 mb-1">
                  {p.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <FaTools className="mr-2 text-sky-500" /> {p.stack}
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

      {showPolicyModal && (
        <OutsourcePolicyModal onClose={() => setShowPolicyModal(false)} />
      )}
    </section>
  );
}
