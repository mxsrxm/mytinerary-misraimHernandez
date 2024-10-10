import React from "react";
import githubIcon from "../assets/github.png";
import bentoIcon from "../assets/bento.png";

const developerLinks = [
  {
    href: "https://github.com/mxsrxm",
    text: "GitHub Profile",
    icon: githubIcon,
  },
  {
    href: "https://bento.me/mxsrxm",
    text: "Bento Profile",
    icon: bentoIcon,
  },
];

export default function FooterDeveloper() {
  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center shadow-md p-4">
        <div className="mb-2 md:mb-0">
          <h3 className="font-semibold text-lg md:text-xl mb-1">
            Technologies
          </h3>
          <p className="text-sm md:text-base">
            Built with React, Tailwind CSS, and Vite.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center">
          <p className="text-sm md:text-base mb-2 md:mb-0 mx-2">
            View the source code on{" "}
            <a
              href="https://github.com/mxsrxm/mytinerary-misraimHernandez"
              className="text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex items-center">
            <p className="text-sm md:text-base">Developer:</p>
            <ul className="flex items-center gap-2 ml-1">
              {developerLinks.map((link, index) => (
                <li key={index} className="flex items-center mx-2">
                  <a
                    href={link.href}
                    className="flex items-center text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={link.icon}
                      alt={link.text}
                      className="w-6 h-6 mr-1"
                    />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
