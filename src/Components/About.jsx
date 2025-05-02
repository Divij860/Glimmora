// src/components/AboutUs.jsx
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-20 px-6 text-center bg-[linear-gradient(135deg,_#fdf6e3,_#fefae0)]">
      <motion.h2 
        className="text-3xl font-semibold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Our Craft
      </motion.h2>

      <motion.p 
        className="max-w-2xl mx-auto text-lg text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We are a passionate team from Kasaragod, crafting timeless jewelry inspired by tradition and elegance.
        Every piece tells a story, made with love and attention to detail — perfect for life’s little moments.
      </motion.p>
    </section>
  );
};

export default AboutUs;
