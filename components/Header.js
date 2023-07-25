"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import airbnbLogo from "@/public/airbnbLogo.webp";
import {
  Bars3Icon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsNumber, setGuestsNumber] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const handleSearch = () => {
    nProgress.start();
    router.push(
      `search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${guestsNumber}`
    );
    resetInput();
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  useEffect(() => {
    nProgress.done();
  }, [pathname, searchParams]);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-2 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-14 md:h-16 my-auto">
        <Image
          alt="Airbnb Logo"
          src={airbnbLogo}
          width={100}
          priority
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
          className="cursor-pointer"
          onClick={() => {
            if (pathname !== "/") {
              nProgress.start();
            }
            router.push("/");
          }}
        />
      </div>
      {/* Middle */}
      <div>
        <div className="relative w-full py-3">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="bg-gray-50 border border-red-300 text-gray-700 font-semibold text-sm rounded-full focus:ring-red-200 focus:border-red-500 focus:outline-none block w-full px-5 md:pr-9 p-2.5"
            placeholder={placeholder || "Search"}
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
        <p className="hidden md:inline cursor-pointer hover:text-gray-700">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:text-gray-700" />
        <div className="flex items-center space-x-3 border-2 p-2 rounded-full  cursor-pointer hover:shadow-md">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UserGroupIcon className="h-5" />
            <input
              value={guestsNumber}
              onChange={(e) => setGuestsNumber(e.target.value)}
              type="number"
              min="1"
              className="w-12 pl-2 text-lg text-red-300 outline-none font-bold text-right"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
