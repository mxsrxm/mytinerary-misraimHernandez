import React from "react";
import Header from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import Panel from "../Components/Panel";
import Carousel from "../Components/Carousel";
import citiesData from "../Data/citiesData"; 
import Hero from "../Components/Hero";


const Home = () => {
  return (
    <>
      <div className=" p-4 sm:p-6 mt-6 bg-slate-100">
        <div className="flex flex-col min-h-screen mx-0 sm:mx-10">
          <div className="relative">
            <Hero></Hero>

           
            <Carousel cities={citiesData}></Carousel>

            <Panel></Panel>

            <div className="absolute top-72 left-0 right-0 xl:top-72 md:top-72 sm:top-72 w-11/12">
              <SearchBar></SearchBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
