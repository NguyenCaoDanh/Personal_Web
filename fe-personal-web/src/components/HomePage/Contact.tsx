// src/components/Contact.tsx
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#e0f2fe] via-[#f0f4f8] to-[#fdf2f8] font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>

        <div className="flex flex-col items-center mb-8 space-y-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[#0f172a]" />
            <span>danhcao.ng@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-[#0f172a]" />
            <span>0334507930</span>
          </div>
        </div>

        <form className="grid gap-4 bg-white p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0f172a] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0f172a] transition"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#0f172a] transition"
          ></textarea>
          <button
            type="submit"
            className="bg-[#0f172a] text-white px-6 py-3 rounded hover:bg-[#1e293b] transition font-semibold shadow hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
