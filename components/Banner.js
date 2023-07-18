import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[420px] ">
      <Image
        src="https://cdna.artstation.com/p/assets/images/images/005/242/682/large/ludo-gavillet-seasonofmists-def.jpg?1489583806"
        alt="random geological formation in the middle of nowhere,"
        fill
        style={{ objectFit: "cover" }}
      />
      {/* <div className="bg-slate-300 bg-opacity-30 absolute w-full h-full"></div> */}
      <div className="absolute top-1/4 sm:top-1/3 left-10 sm:left-20 md:left-32">
        <p className="text-lg sm:text-2xl font-bold uppercase text-white">
          Not sure where to go?
          <br /> Perfect.
        </p>
        <button
          className="text-rose-300 bg-orange-50 px-10 py-3 sm:py-3  shadow-md rounded-full
                            font-bold my-1 hover:shadow-xl hover:scale-105 active:scale-100 active:shadow-none transition duration-150"
        >
          Suprise me
        </button>
      </div>
    </div>
  );
}

export default Banner;
