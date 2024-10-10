import React from "react";
import { NavLink } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import xIcon from "../assets/x.png";
import instagramIcon from "../assets/instagram.png";

const socialLinks = [
  { to: "https://www.facebook.com/", text: "Facebook", icon: facebookIcon },
  { to: "https://twitter.com/", text: "Twitter", icon: xIcon },
  { to: "https://www.instagram.com/", text: "Instagram", icon: instagramIcon },
];

export default function SocialLinks() {
  return (
    <>
      <div className="p-5">
        <h3 className="font-semibold text-gray-700 mb-2">Social Media</h3>
        <ul className="flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex items-center py-2 px-2">
              <NavLink
                to={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img src={link.icon} alt={link.text} className="w-6" />
                <span className="text-gray-600 ml-1">{link.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
