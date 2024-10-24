import React from "react";
import { FaHome } from "react-icons/fa";
import logo from "../Assets/logo.png";

const ErrorPage = () => {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="relative bg-cover bg-center mx-3 mt-3 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] bg-[url('https://d3t4nwcgmfrp9x.cloudfront.net/upload/vuelos-ninguna-parte-alternativa-viajes-tiempos-pandemia-643x342.jpg')] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-8 text-white rounded-lg shadow-lg text-center">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-24 mr-4 rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
            Error 404
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-md">
            Page not found.
          </p>
          <button
            onClick={handleHomeClick}
            className="mt-8 bg-blue-600 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg flex items-center transition duration-300 hover:bg-blue-700"
          >
            <FaHome className="mr-2" />
            Go to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
