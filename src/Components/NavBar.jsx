import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import SideMenu from "./SideMenu";
import userImage from "../assets/user.png";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" }, 
  { to: "/*", text: "Discover" },
  { to: "/*", text: "Community" },
  { to: "/*", text: "Special Deals" },
  { to: "/*", text: "About Us" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-white flex flex-col md:flex-row items-center justify-between mt-4 mx-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-4" />
          <h1 className="text-xl font-bold">MyTinerary</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <ul className="flex flex-col md:flex-row md:gap-4 px-4 md:px-8">
            {routes.map((route, index) => (
              <li key={index} className="m-1">
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white font-medium rounded-full px-3 py-1"
                      : "text-black hover:text-red-600 hover:font-bold"
                  }
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className="flex bg-slate-200 items-center text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 xs:mt-10"
          >
            <img
              src={userImage}
              alt="User"
              className="h-6 rounded-full mr-2"
            />
            <span className="font-semibold text-black">Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      <SideMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
}
