"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";

import {
  LayoutDashboard,
  Car,
  BarChart2,
  Wallet2,
  Inbox,
  Calendar,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
  Menu,
  X,
} from "lucide-react";
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const car = { price: 80 }; // Example car object with a price property

  return (
    <div className="flex relative top-0 left-0 z-0 mt-14 flex-col h-screen bg-gray-50 dark:bg-gray-900 lg:flex-row">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            MAIN MENU
          </h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden"
            title="Close Sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4  space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm bg-blue-50 text-blue-600 rounded-lg"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a
            href="/carcategory"
            className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <Car className="w-5 h-5 mr-3" />
            Car Rent
          </a>
          <a
            href="/insight"
            className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            Insight
          </a>
          <a
            href="/reimburse"
            className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <Wallet2 className="w-5 h-5 mr-3" />
            Reimburse
          </a>
          <a
            href="/inbox"
            className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <Inbox className="w-5 h-5 mr-3" />
            Inbox
          </a>
          <a
            href="/calendar"
            className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Calendar
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
          <nav className="space-y-2">
            <a
              href="/settings"
              className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
            <a
              href="/faq&helpcenter"
              className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              Help & Center
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg w-full"
            >
              <Moon className="w-5 h-5 mr-3" />
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <SignOutButton>
              <button className="flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <LogOut className="w-5 h-5 mr-3" />
                Log Out
              </button>
            </SignOutButton>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        <div className=" fixed p-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white dark:bg-gray-800 rounded-md shadow"
            title="Toggle Sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Details Rental */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Details Rental
            </h2>

            <div className="bg-gray-100 dark:bg-gray-700 h-50 rounded-lg mb-6">
              <Image
                src={`/Maps.png`}
                alt="Nissan GT-R"
                width={550}
                height={200}
              />
            </div>

            <div className="flex items-start gap-4">
              <Image
                src={`/preview-1.png`}
                alt="Nissan GT-R"
                width={120}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Nissan GT - R
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sport Car
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  #9761
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
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
                    className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-300"
                  >
                    Pick-Up
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Locations */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Locations
                    </label>
                    <select className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500">
                      <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Multan</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
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
                    className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-300"
                  >
                    Drop-Off
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Locations */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Locations
                    </label>
                    <select className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500">
                      <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Multan</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t dark:border-gray-700">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Total Rental Price
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  ${car.price.toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Overall price and includes rental discount
              </p>
            </div>
          </div>

          {/* Top 5 Car Rental & Recent Transaction */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Top 5 Car Rental
              </h2>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="relative w-40 h-40 mb-4 sm:mb-0">
                  <div className="w-40 h-40 rounded-full border-8 border-blue-100 dark:border-blue-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      72,030
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Rental Car
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-100">
                      Sport Car
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 ml-auto">
                      17,439
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-100">
                      SUV
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 ml-auto">
                      9,478
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-100">
                      Coupe
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 ml-auto">
                      18,197
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-100">
                      Hatchback
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 ml-auto">
                      12,510
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-100">
                      MPV
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 ml-auto">
                      14,406
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Recent Transaction
                </h2>
                <a
                  href="#"
                  className="text-sm text-blue-500 dark:text-blue-300"
                >
                  View All
                </a>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    type: "Sport Car",
                    price: "$80.00",
                    date: "20 July",
                    image: "/Car1.png",
                  },
                  {
                    name: "Koenigisegg",
                    type: "Sport Car",
                    price: "$99.00",
                    date: "19 July",
                    image: "/Hero1.png",
                  },
                  {
                    name: "Rolls - Royce",
                    type: "Sport Car",
                    price: "$96.00",
                    date: "18 July",
                    image: "/Car2.png",
                  },
                  {
                    name: "CR - V",
                    type: "SUV",
                    price: "$80.00",
                    date: "17 July",
                    image: "/Car-1.png",
                  },
                ].map((car, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        width={64}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                          {car.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {car.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        {car.price}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {car.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
