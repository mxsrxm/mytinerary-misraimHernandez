import React from "react";
import { FaTimes } from "react-icons/fa"; 
import logo from "../Assets/logo.png";

const Modal = ({ isOpen, onClose, event, city }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 md:w-2/3">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{event.title}</h2>
                    {/*  <button onClick={onClose} className="text-xl font-bold text-red-500">&times;</button> */}
                </div>
                <div className="mt-4">


                    <div className="flex items-center mb-4 justify-center">
                        <img src={logo} alt="Logo" className="w-14 h-14 mr-4 rounded-full shadow-lg" />
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold drop-shadow-lg"> Under construction </h1>
                    </div>

                    <div className="flex items-center justify-center">
                        <img src="https://i.gifer.com/xw.gif" alt="Under construction"/>
                    </div>

                    <div className="flex justify-center mt-4">
                    <button onClick={onClose} className="mt-8 bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg flex items-center transition duration-300 hover:bg-blue-700 justify-center">
                            <FaTimes className="mr-2" />
                            Close
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Modal;
