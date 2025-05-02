import React from 'react';
import './Loading.css'; // Import the custom CSS for animations
import { Logo } from '../assets';

const LoadingPage = () => {
  const text = "Glimmera";

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <img className="h-20 w-20 mb-4" src={Logo} alt="Glimmera Logo" />
      <h1 className="glimmora-loader text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-600">
        {text.split('').map((letter, index) => (
          <span key={index} className={`letter-${index}`}>{letter}</span>
        ))}
      </h1>
    </div>
  );
};

export default LoadingPage;
