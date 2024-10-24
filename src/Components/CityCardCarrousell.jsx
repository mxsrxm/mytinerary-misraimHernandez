import React from "react";

const CityCardCarrousell= ({ event }) => {
  return (
    <>
    <div className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg">
      <img
        src={event.activityImage}
        alt={event.city}
        className="h-80 w-full object-cover rounded-t-lg"
      />
      <h4 className="absolute bottom-0 left-0 right-0 text-white text-3xl font-bold bg-gradient-to-t from-black to-transparent p-4 text-center shadow-md">
        {event.city}
      </h4>
      <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 hover:opacity-0" />
    </div>
    </>
  );
}

export default CityCardCarrousell;