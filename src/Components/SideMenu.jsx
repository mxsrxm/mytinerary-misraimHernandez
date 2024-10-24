import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import bikingIcon from "../assets/biking.png";
import climbingIcon from "../assets/climbing.png";
import kayacIcon from "../assets/kayac.png";
import pakacketripIcon from "../assets/pakacketrip.png";
import routesIcon from "../assets/routes.png";
import swimingIcon from "../assets/swiming.png";
import logo from "../assets/logo.png";

const routes = [
  { to: "/*", text: "Biking", icon: bikingIcon },
  { to: "/*", text: "Climbing", icon: climbingIcon },
  { to: "/*", text: "Kayak", icon: kayacIcon },
  { to: "/*", text: "Plan your trip", icon: pakacketripIcon },
  { to: "/*", text: "Senderims", icon: routesIcon },
  { to: "/*", text: "Swimming", icon: swimingIcon },
];

export default function SideMenu({ isOpen, closeMenu }) {
  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-slate-100 w-80 sm:w-64 md:w-80 p-4 md:p-6 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <h1 className="text-lg font-bold text-gray-800">MyTinerary</h1>
          <button
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-800 font-bold text-sm transition flex items-center"
          >
            <span className="mr-2">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-grow mb-4">
          <Login />
        </div>

        <div className="flex flex-col overflow-y-auto max-h-[40%]"> 
          <h2 className="text-lg font-semibold mb-2 text-gray-700 text-center">
            Popular Activities
          </h2>
          <ul className="flex flex-col">
            {routes.map((route, index) => (
              <li key={index} className="flex items-center gap-2 my-1">
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200 py-1 px-2 rounded-md"
                      : "flex items-center text-gray-800 hover:text-blue-600 hover:font-medium transition duration-200"
                  }
                >
                  <img
                    src={route.icon}
                    alt={`${route.text} icon`}
                    className="w-6 h-6 sm:w-6 sm:h-6 mx-2"
                  />
                  <span className="text-sm sm:text-base">{route.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
    
  );
}
