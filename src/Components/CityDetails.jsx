import React, { useEffect } from 'react';
import logo from "../assets/logo.png";
import { FaArrowLeft, FaGlobe, FaLanguage, FaClock, FaTemperatureHigh, FaMoneyBillWave } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';

export default function CityDetails({ objeto }) {
    return (
        <>
            <div className="relative bg-cover bg-center h-[600px] overflow-hidden" style={{ backgroundImage: `url(${objeto.cityImage})` }}>
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent)"
                    }}
                ></div>
                <div className="relative flex flex-col justify-end h-full px-8 text-white shadow-lg text-center ">

                    <div className='absolute bottom-0 left-0 p-4'>
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-12 h-12 sm:w-18 sm:h-18  md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24  mr-4 rounded-full shadow-lg"
                            />
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-extrabold drop-shadow-lg">
                                {objeto.city}
                            </h1>
                        </div>

                        <div className="my-9 w-6/6 sm:w-6/6 md:w-6/6 lg:w-5/6 xl:w-5/6 flex p-4 scrollbar-thin scrollbar-thumb-rounded">
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:2xl: drop-shadow-md text-justify max-h-24 overflow-y-scroll">
                                {objeto.longDescription}
                            </h2>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 sm:gap-3 mb-8'>
                        <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Country
                                    </h6>
                                    <div className='flex items-center'>
                                        <img
                                            src={objeto.countryFlag}
                                            alt="Flag"
                                            className="w-6 h-6 rounded-full mr-2"
                                        />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.country}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Continent
                                    </h6>
                                    <div className='flex items-center'>
                                        <MdOutlinePlace className="mr-2" />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.continent}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Language
                                    </h6>
                                    <div className='flex items-center'>
                                        <FaLanguage className="mr-2" />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.language}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Time Zone
                                    </h6>
                                    <div className='flex items-center'>
                                        <FaClock className="mr-2" />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.timezone}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Climate
                                    </h6>
                                    <div className='flex items-center'>
                                        <FaTemperatureHigh className="mr-2" />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.climate}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border-t-4">
                                <div className='flex flex-col '>
                                    <h6 className='hidden sm:flex items-center my-3'>
                                        Type Of Currency
                                    </h6>
                                    <div className='flex items-center'>
                                        <FaMoneyBillWave className="mr-2" />
                                        <p className='text-lg sm:text-lg md:text-xl font-semibold drop-shadow-md'>
                                            {objeto.typeOfCurrency}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
