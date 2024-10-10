import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import bikingIcon from "../assets/biking.png";
import climbingIcon from "../assets/climbing.png";
import kayacIcon from "../assets/kayac.png";
import pakacketripIcon from "../assets/pakacketrip.png";
import routesIcon from "../assets/routes.png";
import swimingIcon from "../assets/swiming.png";

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
        <div className="bg-gradient-to-r from-slate-100 to-blue-200 w-80 sm:w-64 md:w-80 p-4 md:p-6 rounded-lg shadow-lg flex flex-col">
          <button
            onClick={closeMenu}
            className="self-end text-red-600 font-bold text-lg mb-4 hover:text-red-800 transition flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
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
            Close
          </button>

          <Login />

          <h2 className="text-lg font-semibold mt-4 mb-2 text-center">
            Discover our popular activities
          </h2>

          <ul className="flex flex-col gap-3">
            {routes.map((route, index) => (
              <li key={index} className="flex items-center gap-2 my-1">
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-black hover:text-red-600 hover:font-bold transition duration-200 py-2 px-2 rounded-md"
                      : "flex items-center text-black hover:text-red-600 hover:font-bold"
                  }
                >
                  <img
                    src={route.icon}
                    alt={`${route.text} icon`}
                    className="w-8 h-8 sm:w-8 sm:h-8 mx-3"
                  />
                  <span className="text-sm sm:text-base">{route.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
