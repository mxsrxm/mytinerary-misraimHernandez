import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import peopleIcon from "../assets/people.png";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const MiniCard = ({ event }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="relative">
          <img
            src={event.activityImage}
            alt={event.destination}
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h2 className="absolute top-2 left-2 text-white text-lg font-semibold md:text-base sm:text-sm">
            {event.destination}
          </h2>
          <p className="absolute bottom-2 left-2 text-white text-sm md:text-xs sm:text-xs bg-black bg-opacity-50 p-1 rounded">
            {event.shortDescription}
          </p>
        </div>

        <div className="px-5 mb-3">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-500 mr-1 text-base md:text-xs"
                />
                <span className="text-base md:text-xs">{event.likes}</span>
              </div>
              <p className="font-bold mt-1 text-base md:text-xs">
                ${event.price}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-gray-500 mr-1 text-base md:text-xs"
                />
                <span className="text-base md:text-xs">{event.comments}</span>
              </div>
              <div className="flex items-center mt-1">
                <img
                  src={peopleIcon}
                  alt="People Icon"
                  className="w-4 h-4 mr-1 md:w-3 md:h-3"
                />
                <span className="text-base md:text-xs">{event.maxPeople}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button className="bg-black text-white font-semibold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-200">
                <FontAwesomeIcon
                  icon={faEye}
                  className="w-4 h-4 md:w-3 md:h-3"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
