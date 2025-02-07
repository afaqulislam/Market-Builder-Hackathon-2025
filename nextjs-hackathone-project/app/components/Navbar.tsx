"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { CiSliderHorizontal, CiSearch } from "react-icons/ci";
import { FaHeart, FaBell, FaCog, FaBars, FaUser } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-md">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold text-blue-600"
            >
              MORENT
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex items-center flex-1 max-w-4xl mx-4">
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search something here"
                  className="w-full pl-10  pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CiSliderHorizontal className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link href="/wishlist" passHref>
              <button
                className="text-gray-500 hover:text-blue-600 p-2"
                aria-label="Favorites"
              >
                <FaHeart className="h-6 w-6" />
              </button>
            </Link>
            <Link href="/notifications" passHref>
              <button
                className="text-gray-500 hover:text-blue-600 p-2"
                aria-label="Notifications"
              >
                <FaBell className="h-6 w-6" />
              </button>{" "}
            </Link>
            <Link href="/settings" passHref>
              <button
                className="text-gray-500 hover:text-blue-600 p-2"
                aria-label="Settings"
              >
                <FaCog className="h-6 w-6" />
              </button>
            </Link>
            <div className="ml-4 flex-shrink-0">
              <SignedOut>
                <SignInButton>
                  <FaUser className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center mb-3">
              <input
                type="text"
                placeholder="Search something here"
                className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CiSearch className="h-5 w-5 text-gray-400 absolute left-6" />
              <CiSliderHorizontal className="h-5 w-5 text-gray-400 absolute right-6" />
            </div>
            <Link
              href="/wishlist"
              passHref
              className="text-gray-600 hover:text-blue-600 flex px-3 py-2 rounded-md text-base font-medium"
            >
              <FaHeart className="h-6 w-6 mr-3" />
              Favorites
            </Link>
            <Link
              href="/notifications"
              passHref
              className="text-gray-600 hover:text-blue-600 flex px-3 py-2 rounded-md text-base font-medium"
            >
              <FaBell className="h-6 w-6 mr-3" />
              Notifications
            </Link>
            <Link
              href="/settings"
              passHref
              className="text-gray-600 hover:text-blue-600 flex px-3 py-2 rounded-md text-base font-medium"
            >
              <FaCog className="h-6 w-6 mr-3" />
              Settings
            </Link>
            <div className="flex items-center px-3 py-2">
              <SignedOut>
                <SignInButton>
                  <FaUser className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <span className="text-gray-600 hover:text-blue-600 mx-2">
                Your Profile
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
