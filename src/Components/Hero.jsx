// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { Logo } from "../assets";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-white to-amber-100">
      {/* Navbar */}
      <nav className="absolute top-4 left-4 flex items-center space-x-4 z-10">
        <motion.h1
          className="text-4xl font-bold text-amber-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 2 }}
        >
          <div className="flex gap-3 items-center">
            <img className="w-10 h-10" src={Logo} alt="" />
            <p>Glimmera</p>
          </div>
        </motion.h1>
        {/* Add other navbar items here */}
      </nav>

      {/* Hero Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The little things in <span className="text-amber-600">Kasaragod</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Discover handcrafted jewelry that reflects tradition, elegance, and the
        timeless beauty of Kasaragod craftsmanship.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
      >
        Explore Collection
      </motion.button>
    </section>
  );
};

export default HeroSection;
