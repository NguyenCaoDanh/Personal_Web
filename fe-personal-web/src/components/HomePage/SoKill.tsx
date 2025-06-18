import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaFigma,
  FaBug,
  FaAndroid,
  FaProjectDiagram,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import { SiAmazon } from 'react-icons/si';

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiJirasoftware,
  SiNotion,
  SiAngular,
  SiIonic,
  SiMicrodotblog,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiJenkins,
  SiGraphql,
  SiPython,
  SiNodedotjs,
  SiGo,
  SiRabbitmq,
  SiApachekafka,
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      color: 'from-blue-500 to-blue-300',
      skills: [
        { name: 'Java', icon: <FaJava size={30} color="#F89820" /> },
        {
          name: 'Spring Boot',
          icon: <SiSpringboot size={30} color="#6DB33F" />,
        },
        { name: 'Node.js', icon: <SiNodedotjs size={30} color="#68A063" /> },
        { name: 'Python', icon: <SiPython size={30} color="#3776AB" /> },
        { name: 'Go', icon: <SiGo size={30} color="#00ADD8" /> },
        { name: 'MySQL', icon: <SiMysql size={30} color="#4479A1" /> },
        { name: 'MongoDB', icon: <SiMongodb size={30} color="#47A248" /> },
        { name: 'Redis', icon: <SiRedis size={30} color="#DC382D" /> },
        { name: 'Postman', icon: <SiPostman size={30} color="#FF6C37" /> },
        { name: 'Docker', icon: <SiDocker size={30} color="#0db7ed" /> },
      ],
    },
    {
      title: 'Microservices',
      color: 'from-orange-500 to-orange-300',
      skills: [
        {
          name: 'Microservices',
          icon: <SiMicrodotblog size={30} color="#6DB33F" />,
        },
        { name: 'Eureka', icon: <SiMicrodotblog size={30} color="#6DB33F" /> },
        {
          name: 'API Gateway',
          icon: <SiMicrodotblog size={30} color="#6DB33F" />,
        },
        {
          name: 'OpenFeign',
          icon: <SiMicrodotblog size={30} color="#6DB33F" />,
        },
        { name: 'RabbitMQ', icon: <SiRabbitmq size={30} color="#FF6600" /> },
        { name: 'Kafka', icon: <SiApachekafka size={30} color="#231F20" /> },
      ],
    },
    {
      title: 'Frontend & Mobile',
      color: 'from-purple-500 to-purple-300',
      skills: [
        { name: 'ReactJS', icon: <FaReact size={30} color="#61DAFB" /> },
        { name: 'React Native', icon: <FaReact size={30} color="#61DAFB" /> },
        { name: 'Angular', icon: <SiAngular size={30} color="#DD0031" /> },
        { name: 'Ionic', icon: <SiIonic size={30} color="#3880FF" /> },
        {
          name: 'JavaScript',
          icon: <SiJavascript size={30} color="#F7DF1E" />,
        },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#1572B6" /> },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss size={30} color="#06B6D4" />,
        },
        { name: 'Android Java', icon: <FaAndroid size={30} color="#3DDC84" /> },
      ],
    },
    {
      title: 'API & Cloud',
      color: 'from-yellow-500 to-yellow-300',
      skills: [
        {
          name: 'RESTful API',
          icon: <FaProjectDiagram size={30} color="#10B981" />,
        },
        { name: 'GraphQL', icon: <SiGraphql size={30} color="#E535AB" /> },
       { name: 'AWS', icon: <SiAmazon size={30} color="#FF9900" /> },

        {
          name: 'Google Cloud',
          icon: <SiGooglecloud size={30} color="#4285F4" />,
        },
        { name: 'Jenkins', icon: <SiJenkins size={30} color="#D24939" /> },
        {
          name: 'GitHub Actions',
          icon: <FaGitAlt size={30} color="#24292E" />,
        },
      ],
    },
    {
      title: 'Tools',
      color: 'from-teal-500 to-teal-300',
      skills: [
        { name: 'Git', icon: <FaGitAlt size={30} color="#F1502F" /> },
        { name: 'Figma', icon: <FaFigma size={30} color="#A259FF" /> },
        { name: 'Jira', icon: <SiJirasoftware size={30} color="#0052CC" /> },
        { name: 'Notion', icon: <SiNotion size={30} color="#000000" /> },
      ],
    },
    {
      title: 'Testing',
      color: 'from-pink-500 to-pink-300',
      skills: [
        { name: 'Manual Testing', icon: <FaBug size={30} color="#EC4899" /> },
        { name: 'Test Case Design', icon: <FaBug size={30} color="#EC4899" /> },
        { name: 'Test Execution', icon: <FaBug size={30} color="#EC4899" /> },
        { name: 'Bug Reporting', icon: <FaBug size={30} color="#EC4899" /> },
      ],
    },
    {
      title: 'Business Analysts',
      color: 'from-green-500 to-green-300',
      skills: [
        {
          name: 'System Analysis',
          icon: <FaProjectDiagram size={30} color="#10B981" />,
        },
        {
          name: 'System Design',
          icon: <FaProjectDiagram size={30} color="#10B981" />,
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );

  return (
    <section id="skills" className="py-20 font-orbitron">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Skills</h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-gray-300/20 text-white shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-cyan-400 pointer-events-none transition-opacity duration-500"></motion.div>

              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: [0, 2, -2, 0] }}
                    className="flex flex-col items-center bg-white/20 backdrop-blur-lg text-gray-200 p-4 rounded-xl shadow hover:shadow-xl hover:border-cyan-400 border-2 border-transparent transition-all duration-500 cursor-default"
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <p className="font-medium text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div {...handlers} className="md:hidden relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/20 backdrop-blur-lg rounded-full hover:bg-cyan-400 transition-all"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white/20 backdrop-blur-lg rounded-full hover:bg-cyan-400 transition-all"
            >
              <FaArrowRight />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={skillCategories[currentIndex].title}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-gray-300/20 text-white shadow-lg min-h-[400px] flex flex-col justify-center items-center relative overflow-hidden"
            >
              <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-cyan-400 pointer-events-none transition-opacity duration-500"></motion.div>

              <h3 className="text-2xl font-semibold mb-6">
                {skillCategories[currentIndex].title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skillCategories[currentIndex].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.15, rotate: [0, 2, -2, 0] }}
                    className="flex flex-col items-center bg-white/20 backdrop-blur-lg text-gray-200 p-4 rounded-xl shadow hover:shadow-xl hover:border-cyan-400 border-2 border-transparent transition-all duration-500 cursor-default"
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <p className="font-medium text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {skillCategories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-400'
                }`}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: index === currentIndex ? 1.25 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
