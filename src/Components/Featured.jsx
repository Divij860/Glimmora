import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import { Jewel1, Jewel2, Jewel3, Jewel4, Jewel5, Jewel6, Jewel7 } from '../assets'; // Update paths if needed

const products = [
  { id: 1, name: 'Gold Ring', img: Jewel1 },
  { id: 2, name: 'Diamond Necklace', img: Jewel2 },
  { id: 3, name: 'Silver Earrings', img: Jewel3 },
  { id: 4, name: 'Emerald Bracelet', img: Jewel4 },  // New addition
  { id: 5, name: 'Platinum Watch', img: Jewel5 },    // New addition
  { id: 6, name: 'Ruby Pendant', img: Jewel6 },      // New addition
  { id: 7, name: 'Pearl Brooch', img: Jewel7 }, 
  // Add more if needed
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Featured Collection</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30} // Space between slides
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000 }}
        loop={Infinity} // Enable infinite looping
        modules={[EffectCoverflow, Autoplay]}
        className="max-w-5xl mx-auto"
        breakpoints={{
          // Mobile view
          0: {
            slidesPerView: 1, // Show 1 slide for mobile
          },
          // Tablet view (sm)
          640: {
            slidesPerView: 2, // Show 2 slides for tablet
          },
          // Desktop view (md and larger)
          1024: {
            slidesPerView: 3, // Show 3 slides for desktop
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full sm:w-64 md:w-72 lg:w-96 h-80 flex items-center justify-center"
          >
            <div className="w-full h-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover p-4" // Fixed height here
              />
              <div className="text-center text-base text-black font-medium py-2 bg-white">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;
