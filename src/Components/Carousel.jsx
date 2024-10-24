import React, { useState, useEffect } from "react";
import CityCardCarrousell from "./CityCardCarrousell";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ cities }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getSlideSize = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [slideSize, setSlideSize] = useState(getSlideSize());

  const getSortedCities = () => {
    const citiesArray = cities.response || [];
    return citiesArray.sort((a, b) => b.likes - a.likes);
  };

  const sortedCities = getSortedCities();

  const slides = [];
  for (let i = 0; i < sortedCities.length; i += slideSize) {
    slides.push(sortedCities.slice(i, i + slideSize));
  }

  useEffect(() => {
    const handleResize = () => {
      setSlideSize(getSlideSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="relative bg-gradient-to-r from-gray-100 to-white shadow-2xl rounded-lg p-6 my-6">
        <h2 className="text-center text-4xl font-extrabold mb-6 text-gray-800">
          Popular Mytineraries
        </h2>

        {slides.length > 0 && (
          <div className="flex justify-center">
            {slides[currentSlide].map((event) => (
              <div
                key={event._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2"
              >
                <CityCardCarrousell key={event._id} event={event} />
              </div>
            ))}
          </div>
        )}

        <button
          onClick={goToPreviousSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <AiOutlineLeft size={26} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <AiOutlineRight size={26} />
        </button>

        <div className="flex justify-center mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
                index === currentSlide ? "bg-indigo-600 scale-125" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
