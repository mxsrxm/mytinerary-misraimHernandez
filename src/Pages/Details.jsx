import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PanelItineraries from '../Components/PanelItineraries.jsx';
import CityDetails from '../Components/CityDetails.jsx';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const objeto = location.state;
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function navigateBack() {
    navigate(-1);
  }

  const Itineraries = () => {
    const [itineraries, setItineraries] = useState([]);
    useEffect(() => {
      const fetchAllItineraries = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/itineraries/cityId/" + id);
          const data = await response.json();
          setItineraries(data);
        } catch (error) {
          console.error("Error fetching itinerraies:", error);
        }
      };

      fetchAllItineraries();
    }, []);

    return itineraries;
  }

  return (
    <>

      <CityDetails objeto={objeto} ></CityDetails>
      <div className="flex flex-col items-center h-full pt-8 text-black">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 mr-4 rounded-full shadow-lg"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Watch the Itineraries of {objeto.city}
            </h1>
            <p className="text-gray-600 ">Choose your next adventure! </p>
          </div>
        </div>
      </div>

      <PanelItineraries itineraries={Itineraries()} objeto={objeto}></PanelItineraries>

      <div className='flex justify-center my-8'>
        <button
          onClick={navigateBack}
          className=" bg-blue-600 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg flex items-center transition duration-300 hover:bg-blue-700"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>
    </>
  );
}
