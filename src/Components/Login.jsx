import React from "react";
import userImage from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg mb-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://ibw.bwnet.com.tw/AC_Gallery/2023/02/356e63dc-3da5-4967-7741-a7954d47228a.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20 z-0" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <img
            src={userImage}
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-slate-300 mb-3 shadow-md bg-white p-2"
          />
          <h2 className="text-lg font-bold text-white mb-1 text-center">
            Welcome Back!
          </h2>
          <p className="text-center mb-3 text-gray-300 text-sm">
            Please log in to continue
          </p>

          <div className="flex flex-col w-full mb-3">
            <div className="flex items-center border border-gray-300 rounded-lg mb-1 bg-white">
              <div className="bg-white p-2 rounded-lg">
                <FontAwesomeIcon icon={faUser} className="text-blue-700" />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="flex-1 p-2 outline-none rounded-lg bg-white"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
              <div className="bg-white p-2 rounded-lg">
                <FontAwesomeIcon icon={faLock} className="text-blue-700" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="flex-1 p-2 outline-none rounded-lg bg-white"
              />
            </div>
          </div>

          <div className="flex gap-2 w-full mb-3">
            <button className="flex items-center bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-md hover:bg-blue-800 transition duration-200 ease-in-out w-full">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
              Login
            </button>
            <button className="flex items-center bg-gray-200 border border-blue-700 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out w-full">
              <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
