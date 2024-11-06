import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import HeroCities from "../Components/HeroCities";
import logo from "../assets/logo.png";
import PanelCities from "../Components/PanelCities";

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchAllCities = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/cities/all");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchAllCities();
  }, []);

  return (
    <>
      <div className="py-4 sm:py-4 bg-slate-100">
        <div className="flex flex-col min-h-screen mx-0 sm:mx-10">
          <div className="relative">
            <HeroCities />
            <div className="absolute top-36 left-0 right-0 xl:top-36 md:top-36 sm:top-36 w-11/12">
              <SearchBar setCities={setCities} />
            </div>

            <div className="flex flex-col items-center h-full pt-8 text-black">
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-20 h-20 mr-4 rounded-full shadow-lg"
                />
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800">
                    Explore Our Cities
                  </h1>
                  <p className="text-gray-600 ">Find your next adventure!</p>
                </div>
              </div>
            </div>

            <PanelCities cities={cities} ></PanelCities>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
