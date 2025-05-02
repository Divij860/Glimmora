// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import LoadingPage from './Components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate the loading process, e.g., fetching data or waiting for an API response
  useEffect(() => {
    // Simulate a delay of 3 seconds before showing the Home component
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 4000); // You can adjust the timeout duration as needed
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage /> // Show the loader while loading
      ) : (
        <Home /> // Show the Home page after loading
      )}
    </div>
  );
};

export default App;
