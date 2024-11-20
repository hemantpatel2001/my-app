import React from "react";
import { toast } from "react-toastify";

const Welcome = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
      <div className="relative flex items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to My React App
          </h1>
          <p className="text-lg sm:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Explore, create, and build your amazing projects with ease using React and Redux Toolkit.
          </p>
          <div className="mt-8 animate__animated animate__fadeIn animate__delay-3s">
            <button 
              onClick={() => toast.success("welcome my app")}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
