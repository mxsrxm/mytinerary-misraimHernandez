import React from "react";
import logo from "../assets/logo.png";

const Building = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-[500px] bg-[url('https://mike.polischuk.net/wp-content/uploads/2019/01/Mexico_collage-e1547431421401.jpg')] rounded-2xl overflow-hidden">
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
            This page Cities is under construction.
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-md">
            Come back soon to discover new adventures!
          </p>
        </div>
      </div>
    </>
  );
};

export default Building;
