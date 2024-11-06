import React from 'react';
import ItinerariesCard from './ItinerariesCard';
import Gif from '../assets/404Horse.gif';

const PanelItineraries = ({ itineraries, objeto }) => {

  const listItineraries = itineraries.response || [];
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="flex justify-center">
          <div className="w-full">
            {listItineraries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 px-0 sm:px-4 md:px-6">
                {listItineraries.map((event) => (
                  <ItinerariesCard key={event._id} event={event} city={objeto} ></ItinerariesCard>
                ))}
              </div>
            ) : (
              <div className="bg-white ">
                <div className=" flex flex-col items-center justify-center h-full text-black pt-8">

                <h1 className="text-lg font-extrabold drop-shadow-lg xs:text-lg sm:tex-lg md:text-2xl xl:text-4xl ">
                    No itineraries yet for {objeto.city}
                  </h1>
                  
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

export default PanelItineraries;
