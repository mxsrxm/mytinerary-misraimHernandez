import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPerson, faCalendar, faMoneyBillWave, faCalendarAlt, faClock, faMapMarkerAlt, faCar, faUtensils, faHotel } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./ModalItinerary";

const ItinerariesCard = ({ event, city }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  

    return (
        <>
            <div className="flex flex-col sm:flex-row w-full p-4">

                <div className="overflow-hidden relative w-full h-full bg-white shadow-xl">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold uppercase flex items-center mb-2">
                            {event.title}
                        </h3>

                        <div className="flex items-center shadow-md p-2 bg-gray-100 rounded-md mb-3">
                            <img src={event.userPhoto} alt={event.userName} className="w-8 h-8 rounded-full object-cover" />
                            <h5 className="text-base font-semibold text-gray-800 ml-2">{event.userName}</h5>
                        </div>

                        <p className="text-xs font-semibold flex items-center  pb-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
                            {event.destination}
                        </p>

                        <p className="hidden xs:hidden sm:block md:block lg:hidden xl:block text-gray-600 text-sm ">
                            {event.shortDescription}
                        </p>

                        <div className="flex flex-col w-full pr-8 mt-4 xs:static xs:mt-0 absolute bottom-4 ">
                            <div className="flex items-center mt-2 space-x-2 text-xs font-semibold">
                                <p className="font-semibold flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                    {event.days} days
                                </p>

                                <p className="font-semibold flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                                    {event.totalHours} hours
                                </p>
                            </div>

                            <div className="flex items-center mt-2 space-x-2 text-xs font-semibold">
                                <p>
                                    <span>Includes: </span>
                                </p>
                                {event.includesTransportation && (
                                    <p>
                                        <FontAwesomeIcon icon={faCar} className="mr-1" />
                                    </p>
                                )}
                                {event.includesFood && (
                                    <p>
                                        <FontAwesomeIcon icon={faUtensils} className="mr-1" />
                                    </p>
                                )}
                                {event.includesAccommodation && (
                                    <p>
                                        <FontAwesomeIcon icon={faHotel} className="mr-1" />
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row my-2 text-xs font-semibold flex-wrap">
                                {event.badges.map((hashtag) => (
                                    <span key={hashtag} className="text-slate-800 text-xs bg-blue-100 px-2 py-1 rounded-full mb-1 sm:mr-1">
                                        {hashtag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between w-full">
                            <button
                  className="text-xs md:text-base bg-black text-white py-1 px-2 mx-2 rounded-full hover:bg-gray-800 transition duration-200"
                  onClick={handleOpenModal}
                >
                  View More
                </button>

                                <div>
                                    {event.price > 0 && Array.from({ length: event.price }).map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faMoneyBillWave} className="text-green-500 mr-2 text-xs md:text-base" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden relative pr-0 w-full sm:pr-8 ">
                    <div className="relative shadow-lg">
                        <img src={event.itineraryImage} alt={event.title} className="w-full h-96 object-cover shadow-xl" />

                        <div className="absolute transform top-20 right-0 translate-x-6 bg-white bg-opacity-70 backdrop-blur-md rounded-md shadow-xl">
                            <div className="py-1 px-3">
                                <div className="flex justify-between items-center">

                                    <div className="flex-1">

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
                                                <span className="text-black text-xs">{event.numReservation}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 pr-8 sm:pr-0">
                                        <img
                                            src={city.countryFlag}
                                            alt="Country Flag"
                                            className="w-10 h-10 rounded-full object-cover "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={event} city={city} />
    </>
        
    );
};

export default ItinerariesCard;