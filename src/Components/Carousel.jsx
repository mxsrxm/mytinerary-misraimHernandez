import React, { useState, useEffect } from "react";
import CityCard from "./CityCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({ cities = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideSize = 4;

  const slides = [];
  for (let i = 0; i < cities.length; i += slideSize) {
    slides.push(cities.slice(i, i + slideSize));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div className="relative bg-white shadow-lg rounded-lg p-6 my-6">
        <h2 className="text-center text-3xl font-bold mb-4">
          Popular Mytineraries
        </h2>

        {slides.length > 0 && (
          <div className="flex justify-center ">
            {slides[currentSlide].map((cityData) => (
              <div key={cityData.id} className="w-1/4">
                <CityCard cityData={cityData} ></CityCard>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={goToPreviousSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-5 shadow hover:bg-gray-700 transition duration-200"
        >
          <AiOutlineLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-5 shadow hover:bg-gray-700 transition duration-200"
        >
          <AiOutlineRight size={24} />
        </button>

        <div className="flex justify-center mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
