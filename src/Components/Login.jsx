import React from "react";
import userImage from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg shadow-lg mb-2 transition-transform transform hover:scale-105 md:p-1">
        <img
          src={userImage}
          alt="User"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-10 md:h-10 rounded-full border-2 border-blue-500 mb-1"
        />
        <h2 className="text-md sm:text-lg md:text-xs font-semibold text-blue-600 mb-1 text-center">
          Welcome Back!
        </h2>
        <p className="text-center mb-1 text-gray-500 text-xs md:text-[10px]">
          Please log in to continue
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button className="flex items-center bg-blue-500 text-white text-xs md:text-[10px] px-2 py-1 rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out w-full">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1 md:mr-0.5" />
            Login
          </button>
          <button className="flex items-center bg-white border border-blue-500 text-blue-500 text-xs md:text-[10px] px-2 py-1 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out w-full">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1 md:mr-0.5" />
            Signup
          </button>
        </div>
      </div>
    </>
  );
}
