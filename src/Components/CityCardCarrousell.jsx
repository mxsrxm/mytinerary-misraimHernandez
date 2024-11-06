import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CityCardCarousel = ({ event }) => {
  const navigate = useNavigate();

  const handleReadNow = () => {
    navigate(`/Details/${event._id}`, { state: event });
  };

  return (
    <div className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg bg-white" onClick={handleReadNow}>
      <img
        src={event.cityImage}
        alt={event.city}
        className="h-80 w-full object-cover rounded-t-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 ">
        <h4 className=" text-white text-3xl font-bold  text-center">
          {event.city}
        </h4>
        <p className=" text-white text-pretty font-bold  p-1 text-center ">
          {event.country}
        </p>
      </div>

      <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 hover:opacity-0" />

      <div className="absolute top-2 left-2 bg-white rounded-full p-2 shadow-lg">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
        <span className="text-sm font-semibold text-gray-800 ml-1">{event.country}</span>
      </div>
    </div>
  );
};

export default CityCardCarousel;
