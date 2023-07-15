import Image from "next/image";
import React from "react";
import airbnbLogo from "@/public/airbnbLogo.webp";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-2 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-14 md:h-16 cursor-pointer my-auto">
        <Image
          alt="Airbnb Logo"
          src={airbnbLogo}
          width={100}
          priority
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
        />
      </div>
      {/* Middle */}
      <div>
        <div className="relative w-full py-3">
          <input
            type="text"
            className="bg-gray-50 border border-red-300 text-gray-700 font-semibold text-sm rounded-full focus:ring-red-200 focus:border-red-500 focus:outline-none block w-full px-5 md:pr-9 p-2.5"
            placeholder="Search"
          />
          <button
            type="button"
            className="hidden md:flex absolute inset-y-0 right-0 items-center pr-3"
          >
            <svg
              className="w-4 h-4 text-gray-500 hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-2 md:space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:text-gray-700" />
        <div className="flex items-center space-x-3 border-2 p-2 rounded-full  cursor-pointer hover:shadow-md">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
