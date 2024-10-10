import React from "react";

export default function CityCard({ cityData }) {
  return (
    <>
      <div className="relative overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
        <img
          src={cityData.activityImage}
          alt={cityData.city}
          className="h-96 w-full object-cover"
        />
        <h4 className="absolute bottom-0 left-0 right-0 text-white text-xs md:text-lg font-bold bg-gradient-to-r from-black to-gray-800 bg-opacity-70 p-2 md:p-4 text-center">
          {cityData.city}
        </h4>
      </div>
    </>
  );
}
