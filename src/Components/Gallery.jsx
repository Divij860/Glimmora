import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import productsData from "../data/products.json"; // Assuming your JSON file is placed in the 'data' folder

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    setGalleryImages(productsData);
  }, []);

  return (
    <section className="py-20 px-4 bg-amber-50">
      <motion.h2
        className="text-3xl font-semibold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((item, i) => (
          <motion.div
            key={item.id}
            className="overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <img
              src={item.img}
              alt={item.name} // Using name instead of generic "Jewelry"
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
