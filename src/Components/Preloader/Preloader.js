import React, { useState, useEffect } from 'react';
import './Preloader.css'
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time, replace with your actual loading logic

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div className={`preloader ${loading ? 'flex' : 'hidden'} absolut w-full h-screen`}>
      <span className="preloader-text audio-fs text-xl">Loading...</span>
    </div>
  );
};

export default Preloader;
