import React from "react";
import { Link } from "react-router-dom";
import bikingIcon from "../assets/biking.png";
import climbingIcon from "../assets/climbing.png";
import kayacIcon from "../assets/kayac.png";
import pakacketripIcon from "../assets/pakacketrip.png";
import routesIcon from "../assets/routes.png";
import swimingIcon from "../assets/swiming.png";
import { NavLink } from "react-router-dom";


const routes = [
  { to:"/*", text: "Biking", icon: bikingIcon },
  { to:"/*", text: "Climbing", icon: climbingIcon },
  { to:"/*", text: "Kayak", icon: kayacIcon },
  { to:"/*", text: "Plan your trip", icon: pakacketripIcon },
  { to:"/*", text: "Senderims", icon: routesIcon },
  { to:"/*", text: "Swimming", icon: swimingIcon },
];

export default function FooterPopularActivities() {
  return (
    <>
     <div className="p-5">
     <h3 className="font-semibold text-gray-700 mb-2">Popular Activities </h3>
        <ul className="flex flex-col gap-3">
            {routes.map((route, index) => (
              <li key={index} className="flex items-center gap-2 my-1">
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "  flex items-center text-black hover:text-red-600 hover:font-bold transition duration-200 py-2 px-2 rounded-md"
                      : " flex items-center text-black hover:text-red-600 hover:font-bold"
                  }
                >
                  <img
                    src={route.icon}
                    alt={`${route.text} icon`}
                    className="w-5 h-5 sm:w-6 sm:h-6 "
                  />
                  <span className="text-sm sm:text-base">{route.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}
