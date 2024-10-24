import React from "react";

export default function FooterMap() {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-2xl">
      <h3 className="font-semibold text-gray-800 text-lg mb-2 text-center">Our Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6735223033827!2d-99.64603368530476!3d19.28253018692747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd515e5b3c6d57%3A0x2a631564f0a0f0f4!2sToluca%2C%20Mexico!5e0!3m2!1sen!2sus!4v1695940618160!5m2!1sen!2sus"
        width="100%"
        height="200"
        className="rounded-md border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
        allowFullScreen=""
        loading="lazy"
        title="Toluca, Mexico Location"
      ></iframe>
      <p className="text-gray-600 text-sm mt-2 text-center">1234 Toluca, Mexico</p>
    </div>
    </>
  );
}
