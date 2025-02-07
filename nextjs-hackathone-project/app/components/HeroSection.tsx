"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineSwapVert } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <section className="px-4 mt-10 sm:px-6 lg:px-12 py-8 bg-gray-50">
      {/* Cards Section */}
      <div className="mx-auto max-w-[1700px] px-4 md:px-10 mt-10">
        <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
          {/* First Card */}
          <div className="relative bg-[#54A6FF] text-white flex flex-col rounded-lg pt-8 pl-8 w-full px-10 sm:px-6 lg:flex-1">
            <div className="relative z-10">
              <h1 className="text-white text-[2.2rem] sm:text-[1.8rem] leading-snug tracking-normal">
                The Best Platform for Car Rental
              </h1>
              <p className="text-lg mt-5">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Link href={"/carcategory"}>
                <button className="bg-[#3563E9] w-36 h-14 text-xl mt-8 rounded-md">
                  Rental Car
                </button>
              </Link>
              <Link href="/carsdetailed">
                <img
                  src="/Hero1.png"
                  alt="Car 1"
                  className="mx-auto mt-8 w-[90%] sm:w-full sm:mb-5 lg:w-[80%]"
                />
              </Link>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative bg-[#3563E9] text-white flex flex-col rounded-lg pt-8 pl-8 pb-4 w-full px-6 sm:px-6 lg:flex-1">
            <div className="relative z-10">
              <h1 className="text-white text-[2.2rem] sm:text-[1.8rem] leading-snug tracking-normal">
                Easy way to rent a car at a low price
              </h1>
              <p className="text-lg mt-5">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Link href={"/carcategory"}>
                <button className="bg-[#54A6FF] w-36 h-14 text-xl mt-8 rounded-md">
                  Rental Car
                </button>
              </Link>
              <Link href="/carsdetailed">
                <img
                  src="/Hero2.png"
                  alt="Car 2"
                  className="mx-auto mt-8 w-[90%] sm:w-full sm:mb-5 lg:w-[70%]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="mt-8 bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Pick-Up Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="pickup"
              name="booking-type"
              defaultChecked
              className="w-4 h-4 accent-blue-600"
            />
            <label
              htmlFor="pickup"
              className="text-sm sm:text-lg font-medium text-gray-700"
            >
              Pick-Up
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Locations */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Locations
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Select your city</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Multan</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-sm shadow-md">
            <MdOutlineSwapVert className="w-6 h-6" />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="dropoff"
              name="booking-type"
              className="w-4 h-4 accent-blue-600"
            />
            <label
              htmlFor="dropoff"
              className="text-sm sm:text-lg font-medium text-gray-700"
            >
              Drop-Off
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Locations */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Locations
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Select your city</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Multan</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
