import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Anjali P.",
    quote: "Absolutely loved the necklace! The craftsmanship is amazing. Proud to wear something made in Kasaragod.",
  },
  {
    id: 2,
    name: "Reshma K.",
    quote: "Elegant, unique, and so detailed. The ring I bought became an everyday essential!",
  },
  {
    id: 3,
    name: "Naseema M.",
    quote: "Gorgeous designs and excellent service. Definitely coming back for more.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-12 text-gray-800">What Our Customers Say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="bg-amber-50 p-6 rounded-xl shadow-lg flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <FaQuoteLeft className="text-amber-400 text-3xl mb-4" />
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
            <p className="font-semibold text-amber-800">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
