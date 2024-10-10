import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import peopleIcon from "../assets/people.png";
import calendarIcon from "../assets/calendar.png";
import locationIcon from "../assets/location.png";
import { FaPlane } from "react-icons/fa";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [reservations, setReservations] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log({ destination, date, reservations });
  };

  const handleExploreClick = () => {
    navigate("/cities");
  };

  return (
    <>
      <div className="mx-10 sm:mx-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <button
            onClick={handleExploreClick}
            className="bg-black text-white text-xs sm:text-xl md:text-xl xl:text-xl font-bold px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-all"
          >
            <FaPlane className="text-yellow-400" />
            <span>Explore Cities</span>
          </button>
        </div>
        
      </div>
      

      <div className="mt-8 mx-4 sm:mx-10 px-4 py-0 sm:px-6 xl:py-2 md:py-2 sm:py-2 bg-white rounded-md shadow-md w-full sm:w-2/3 md:w-11/12 xl:w-2/3 max-w-full sm:max-w-none">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex flex-col flex-1">
            <div className="flex items-center">
              <img
                src={locationIcon}
                alt="Ícono de Destino"
                className="w-5 h-5 mr-2 invisible sm:visible"
              />
              <label
                className="mb-1 font-semibold text-black font-poppins invisible sm:visible"
                htmlFor="destination"
              >
                Destination
              </label>
            </div>
            <input
              type="text"
              id="destination"
              placeholder="Search Destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-2 py-1 my-0  mt-0    sm:py-1 sm:my-2 md:py-1 md:my-2 xl:py-1 xl:my-2 order border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-slate-400 transition duration-200 ease-in-out text-black font-light text-sm sm:text-base"
            />
          </div>

          <div className="hidden md:flex flex-col flex-1">
            <div className="flex items-center">
              <img
                src={calendarIcon}
                alt="Ícono de Fecha"
                className="w-5 h-5 mr-2"
              />
              <label
                className="mb-1 font-semibold text-black font-poppins"
                htmlFor="date"
              >
                Date
              </label>
            </div>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-2 py-1 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-slate-400 transition duration-200 ease-in-out text-black font-light text-sm sm:text-base"
            />
          </div>

          <div className="hidden md:flex flex-col flex-1">
            <div className="flex items-center">
              <img src={peopleIcon} className="w-5 h-5 mr-2" />
              <label
                className="mb-1 text-md font-semibold text-black font-poppins"
                htmlFor="reservations"
              >
                Reservations
              </label>
            </div>
            <input
              type="number"
              id="reservations"
              placeholder="Number of Reservations"
              value={reservations}
              onChange={(e) => setReservations(e.target.value)}
              className="w-full px-2 py-1 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-slate-400 transition duration-200 ease-in-out text-black font-light text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col sm:items-end">
            <label className="mb-1 text-md font-semibold invisible">
              Search
            </label>
            <div className="flex flex-col sm:flex-row sm:items-end w-full sm:w-auto">
              <button
                onClick={handleSearch}
                className="bg-black text-white font-bold px-4 py-2  mb-4    sm:py-1 sm:my-2 md:py-1 md:my-2 xl:py-1 xl:my-2  w-full sm:w-auto rounded-full hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
