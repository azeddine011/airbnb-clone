import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[420px] ">
      <Image
        src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="random geological formation in the middle of nowhere,"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="bg-slate-300 bg-opacity-30 absolute w-full h-full"></div>
      <div className="absolute top-1/3 sm:top-1/2 w-full text-center">
        <p className="text-lg sm:text-2xl font-bold uppercase">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-3 sm:py-4  shadow-md rounded-full
                            font-bold my-3 hover:shadow-xl hover:scale-105 active:scale-100 active:shadow-none transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
