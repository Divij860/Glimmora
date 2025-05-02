// src/components/Gallery.jsx
import { motion } from "framer-motion";
import {
  Jewel1,
  Jewel2,
  Jewel3,
  Jewel4,
  Jewel5,
  Jewel6,
  Jewel7,
} from "../assets"; // Add more images here

const galleryImages = [
  { id: 1, img: Jewel1 },
  { id: 2, img: Jewel2 },
  { id: 3, img: Jewel3 },
  { id: 4, img: Jewel4 },
  { id: 5, img: Jewel5 },
  { id: 6, img: Jewel6 },
  { id: 7, img: Jewel7 },
  { id: 8, img: Jewel1 },
  { id: 9, img: Jewel2 },
  { id: 10, img: Jewel3 },
  { id: 11, img: Jewel4 },
  { id: 12, img: Jewel5 },
  { id: 13, img: Jewel6 },
  { id: 14, img: Jewel7 },
  { id: 15, img: Jewel1 },
  { id: 16, img: Jewel2 },
];

const Gallery = () => {
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
              alt={`Jewelry ${item.id}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
