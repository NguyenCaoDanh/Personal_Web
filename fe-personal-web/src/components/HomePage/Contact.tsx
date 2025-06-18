// src/components/Contact.tsx
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Contact Me</h2>

        <div className="flex flex-col items-center mb-10 space-y-6 text-gray-800 dark:text-gray-300">
          <div className="flex items-center space-x-3 group">
            <FaEnvelope className="text-2xl text-gray-700 group-hover:text-cyan-400 transition" />
            <span className="group-hover:text-cyan-400 transition">danhcao.ng@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 group">
            <FaPhoneAlt className="text-2xl text-gray-700 group-hover:text-cyan-400 transition" />
            <span className="group-hover:text-cyan-400 transition">0334507930</span>
          </div>
        </div>

        <form className="grid gap-4 bg-white/80 dark:bg-gray-800/80 p-8 rounded-3xl shadow-2xl backdrop-blur-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-400 transition bg-white/90 dark:bg-gray-700/90 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-400 transition bg-white/90 dark:bg-gray-700/90 placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-400 transition bg-white/90 dark:bg-gray-700/90 placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
