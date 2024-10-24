import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPerson, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CitiesCard = ({ event }) => {
    const navigate = useNavigate();

    const handleReadNow = () => {
        navigate(`/Details/${event._id}/${event.city}`, { state: event });
    };

    return (
        <>
            <div className="overflow-hidden relative px-8 py-1 mb-6 ">
                <div className="flex justify-end  bg-white bg-opacity-70 backdrop-blur-md pt-2 pr-2">
                    <h2 className="text-2xl font-semibold uppercase">{event.destination}</h2>
                </div>

                <div className="relative ">
                    <img
                        src={event.activityImage}
                        alt={event.destination}
                        className="w-full h-96 object-cover"
                    />

                    <div className="absolute transform top-2 left-0 -translate-x-6 bg-white bg-opacity-70 backdrop-blur-md rounded-md shadow-xl">
                        <div className="py-1 px-3">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <img
                                        src={event.countryFlag}
                                        alt="Country Flag"
                                        className="w-10 h-7 object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                   {/*  <p className="text-black text-sm font-semibold mb-2">
                                        {event.location}
                                    </p> */}
                                    <p className="text-black text-sm font-semibold mb-2">
                                    <FontAwesomeIcon icon={faCalendar} className="text-sky-800 text-base mx-2" />
                                        {event.departureDate.split("T")[0]}
                                        </p>

                                    

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-base mx-2" />
                                            <span className="text-black text-xs">{event.likes}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faComment} className="text-gray-500 text-base mx-2" />
                                            <span className="text-black text-xs">{event.comments}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faPerson} className="text-yellow-500 text-base mx-2" />
                                            <span className="text-black text-xs">{event.maxPeople}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <p className="absolute bottom-1 left-1 text-white text-wrap md:text-wrap sm:text-wrap bg-black bg-opacity-60 p-1 rounded">
                        {event.shortDescription}
                    </p>



                </div>

                <div className="flex justify-between items-center bg-white shadow-2xl">
                    <button
                        onClick={handleReadNow}
                        className="bg-black text-white py-1 px-2 mx-2 rounded-full hover:bg-gray-800 transition duration-200"
                    >
                        Details
                    </button>

                    <div className="flex flex-col items-end mt-1 mx-2">
                        <p className="text-gray-600 text-sm font-semibold ">
                            {event.location}
                        </p>

                        <p className="text-lg font-bold text-gray-800">
                            ${event.price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CitiesCard;
