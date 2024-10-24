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
  { to: "/*", text: "Special" },
  { to: "/*", text: "AboutUs" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <nav className="bg-white flex items-center justify-between py-4 px-6">
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleNav}
            className="text-black focus:outline-none"
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full mr-2" /> 
          <h1 className="text-lg md:text-base font-bold">MyTinerary</h1> 
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="flex bg-slate-200 items-center text-white px-3 py-1 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            <img
              src={userImage}
              alt="User"
              className="h-5 rounded-full mr-2" 
            />
            <span className="font-semibold text-black text-sm md:text-base">Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2" 
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

        <div className="hidden md:flex md:flex-row md:items-center md:gap-4">
          <ul className="flex flex-row md:gap-4">
            {routes.map((route, index) => (
              <li key={index} >
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white font-medium rounded-full px-2 py-1 text-sm md:text-sm xl:text-base"
                      : "text-black hover:text-red-600 hover:font-bold text-sm md:text-sm xl:text-base" 
                  }
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className="flex bg-slate-200 items-center text-white px-3 py-1 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 text-sm md:text-sm xl:text-base"
          >
            <img
              src={userImage}
              alt="User"
              className="h-5 rounded-full mr-2" 
            />
            <span className="font-semibold text-black text-sm md:text-sm xl:text-base">Login</span> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
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

      {isNavOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {routes.map((route, index) => (
              <li key={index} className="m-1">
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white font-medium rounded-full px-3 py-1 text-sm md:text-base" 
                      : "text-black hover:text-red-600 hover:font-bold text-sm md:text-base"
                  }
                  onClick={() => setIsNavOpen(false)} 
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SideMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
}
