// src/components/LoadingPage.js
import React from 'react';
import './Loading.css'; // Import the custom CSS for animations
import { Logo } from '../assets';

const LoadingPage = () => {
  const text = "Glimmora";

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <img className='h-20 w-20' src={Logo} alt="" />
      <h1 className="glimmora-loader text-4xl font-bold text-amber-600">
        {text.split('').map((letter, index) => (
          <span key={index} className={`letter-${index}`}>{letter}</span>
        ))}
      </h1>
    </div>
  );
};

export default LoadingPage;
