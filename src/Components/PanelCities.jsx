import React from "react";
import CitiesCard from "./CitiesCard";
import logo from "../assets/logo.png";


const PanelCities = ({ cities }) => {
  const listCities = cities.response || [];

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {listCities.length > 0 ? (listCities.map((event) => (
              <CitiesCard key={event._id} event={event} ></CitiesCard>
            ))
            ) : (
              <div className="relative bg-cover   bg-center w-96 m-10 bg-[url('https://www.kebuena.com.mx/wp-content/uploads/2018/01/Sahara-1.jpg')] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center h-full px-8 text-white rounded-lg shadow-lg text-center">
                  <div className="flex items-center mb-4">
                    {/* <img
                      src={logo}
                      alt="Logo"
                      className="w-24 h-24 mr-4 rounded-full shadow-lg"
                    /> */}
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
                    Sorry, No cities found.
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelCities;
