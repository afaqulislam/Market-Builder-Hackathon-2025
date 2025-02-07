"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t w-full border-gray-200">
      <div className="px-6 py-12 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#3563E9]">MORENT</h1>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-xs">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                About
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="How it works"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Featured"
                  >
                    Featured
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Partnership"
                  >
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Business Relation"
                  >
                    Business Relation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Community
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Events"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Podcast"
                  >
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Invite a friend"
                  >
                    Invite a friend
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Socials
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Discord"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Instagram"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Twitter"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#3563E9]"
                    aria-label="Facebook"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            © 2022 <span className="font-medium text-black">MORENT</span>. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#3563E9]"
              aria-label="Privacy & Policy"
            >
              Privacy & Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#3563E9]"
              aria-label="Terms & Condition"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
