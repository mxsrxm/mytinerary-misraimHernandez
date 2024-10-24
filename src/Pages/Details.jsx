import React, { useEffect } from 'react';
import logo from "../assets/logo.png";
import { useNavigate, useLocation, useParams } from 'react-router-dom';  
import { FaArrowLeft } from 'react-icons/fa'; 

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const objeto = location.state; 
  const { id, name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function navigateBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="relative bg-cover bg-center h-[600px] overflow-hidden" style={{ backgroundImage: `url(${objeto.activityImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-8 text-white shadow-lg text-center">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-24 mr-4 rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
            This page {objeto.city} is under construction.
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-md">
            Come back soon to discover new adventures!
          </p>
          <button
            onClick={navigateBack}
            className="mt-8 bg-blue-600 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg flex items-center transition duration-300 hover:bg-blue-700"
          >
            <FaArrowLeft className="mr-2" /> 
            Back
          </button>
        </div>
      </div>
    </>
  );
}
