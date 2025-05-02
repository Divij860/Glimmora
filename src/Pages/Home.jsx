import React from 'react'
import HeroSection from '../Components/Hero'
import FeaturedProducts from '../Components/Featured'
import AboutUs from '../Components/About'
import CallToAction from '../Components/calltoaction'
import Testimonials from '../Components/Testimonial'
import Gallery from '../Components/Gallery'
import Newsletter from '../Components/Newsletter'
import ContactSection from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <FeaturedProducts/>
        <AboutUs/>
        <CallToAction/>
        <Testimonials/>
        <Gallery/>
        <Newsletter/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Home