import React from "react";
import CitiesCard from "./CitiesCard";
import Gif from "../assets/404Horse.gif";

const PanelCities = ({ cities }) => {
  const listCities = cities.response || [];

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="flex justify-center">
          <div className="w-full">
            {listCities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {listCities.map((event) => (
                  <CitiesCard key={event._id} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-white ">
                <div className=" flex flex-col items-center justify-center h-full text-black pt-8">

                  <h1 className="text-lg font-extrabold drop-shadow-lg xs:text-lg sm:tex-lg md:text-2xl xl:text-4xl ">
                    No Cities found for this search
                  </h1>

                  <p className="text-sm font-bold drop-shadow-lg xs:text-sm sm:text-sm md:text-lg xl:text-xxl">
                    Please try again with another search
                  </p>

                  <div className="flex items-center justify-center">
                    <img src={Gif} alt="404" className="w-1/2" />
                  </div>


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
