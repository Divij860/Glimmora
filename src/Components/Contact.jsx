// src/components/ContactSection.jsx
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <motion.h2
        className="text-3xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Whether it's a custom design or a simple question, we'd love to hear from you. Drop us a message and we’ll get back to you soon!
      </motion.p>

      <motion.form
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
