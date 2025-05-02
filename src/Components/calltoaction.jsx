import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-amber-100 py-20 px-6 sm:px-12 md:px-16 text-center">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Feel the sparkle. Wear the love.
      </motion.h2>

      <motion.p 
        className="max-w-xl mx-auto text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore our exclusive handmade jewelry collection crafted with heart in Kasaragod. Let your style shine through!
      </motion.p>

      <motion.button 
        className="bg-amber-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Explore Collection
      </motion.button>
    </section>
  );
};

export default CallToAction;
