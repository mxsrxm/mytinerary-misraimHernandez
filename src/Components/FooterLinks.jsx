import React from "react";
import { NavLink } from "react-router-dom";

const quickLinks = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/discover", text: "Discover" },
  { to: "/community", text: "Community" },
  { to: "/special-deals", text: "Special Deals" },
  { to: "/about-us", text: "About Us" },
];

export default function FooterLinks() {
  return (
    <>
    <div className="p-4">
      <h3 className="font-semibold text-gray-700 text-lg mb-2">Quick Links</h3>
      <ul className="flex flex-col gap-2">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white font-medium rounded-full py-2 px-2"
                  : "text-gray-600 hover:text-blue-500 text-sm"
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
