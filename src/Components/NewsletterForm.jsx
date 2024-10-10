import React from "react";

export default function NewsletterForm() {
  return (
    <>
      <div className="bg-slate-300 p-6 text-center rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Subscribe & </h2>
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          get special discounts
        </h2>

        <p className="text-gray-600 text-sm mb-4 font-semibold">
          Get the best deals on your next vacation.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
          <input
            type="email"
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-full shadow-lg focus:outline-none focus:border-blue-500 transition-all"
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="bg-black text-white px-6 py-2 w-full sm:w-auto rounded-full hover:bg-gray-800 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
