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
} from 'react-icons/fa';
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
} from 'react-icons/si';
import { motion } from 'framer-motion';

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
        {
          name: 'Microservices',
          icon: <SiMicrodotblog size={30} color="#6DB33F" />,
        },
        { name: 'MySQL', icon: <SiMysql size={30} color="#4479A1" /> },
        { name: 'Postman', icon: <SiPostman size={30} color="#FF6C37" /> },
        { name: 'Docker', icon: <SiDocker size={30} color="#0db7ed" /> },
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

  return (
    <section
      id="skills"
      className="py-20 font-orbitron"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.3, duration: 0.8 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex flex-col items-center bg-white text-gray-800 p-4 rounded-xl shadow hover:shadow-xl hover:scale-110 border-2 border-transparent hover:border-cyan-400 transition-all duration-500 cursor-default"
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <p className="font-medium text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
