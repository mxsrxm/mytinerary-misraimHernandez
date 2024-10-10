import React from "react";
import MiniCard from "./MiniCard";
import activities from "../data/citiesData";

const Panel = () => {
  const getRandomEvents = () => {
    const shuffled = activities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  const randomEvents = getRandomEvents();

  return (
    <>
      <div className=" flex justify-center">
        <div className="bg-white bg-opacity-50 rounded-lg shadow-lg p-6 w-full">
          <h3 className="text-2xl font-semibold mb-5 ">
            Some places to travel
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {randomEvents.map((event) => (
              <MiniCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
