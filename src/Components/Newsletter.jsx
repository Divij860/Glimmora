// src/components/Newsletter.jsx
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="bg-amber-100 py-20 px-6 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join Our Sparkle Circle ✨
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Be the first to know about new collections, exclusive discounts, and special stories from Kasaragod.
      </motion.p>

      <motion.form
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition"
        >
          Subscribe
        </button>
      </motion.form>
    </section>
  );
};

export default Newsletter;
