"use client";

import * as React from "react";
import { useState } from "react";
import { MdOutlineSwapVert } from "react-icons/md";
import { CarCard } from "../cars/CarCard";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function CarRental() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex gap-8 p-6 mx-auto">
      {/* Sidebar */}
      <div className="mt-10 w-1/1">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          priceRange={[0, 100]}
          setPriceRange={() => {}}
        />
      </div>

      {/* Main Content Section */}
      <div className="w-3/4 mt-10 flex flex-col gap-8">
        {/* Booking Form Section */}
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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

          <div className="flex items-center justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-sm shadow-md">
              <MdOutlineSwapVert className="w-6 h-6" />
            </button>
          </div>

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
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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

        {/* Cars List */}
          <CarCard />

        <div className="flex text-center items-center justify-center py-10">
          <Link
            href={"/"}
            className="py-3 px-8 bg-blue-600 text-white hover:bg-blue-500 rounded-md transition duration-300 ease-in-out"
          >
            Show more cars
          </Link>
        </div>
      </div>
    </div>
  );
}
