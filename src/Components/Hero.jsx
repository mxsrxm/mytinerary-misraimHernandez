import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-[470px] bg-[url('https://ibw.bwnet.com.tw/AC_Gallery/2023/02/356e63dc-3da5-4967-7741-a7954d47228a.png')] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col items-start h-full px-8 py-16 text-white  rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 mr-4 rounded-full shadow-lg"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              MyTinerary
            </h1>
          </div>

          <p className="mt-0 text-2xl md:text-2xl text-center md:text-left font-medium shadow-md p-2">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Hero;
