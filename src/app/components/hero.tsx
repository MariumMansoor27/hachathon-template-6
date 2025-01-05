import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[812.53px]">
      <Image
        src="/pictures/interior1.png"
        alt="interior1"
        width={1440}
        height={1007}
      />
      <div className=" flex items-center justify-center rounded-lg absolute h-[443px] w-[643px] ml-[639px]  mt-[153px]  bg-[#fff3e3]">
        <div className="h-[344px] w-[561px]">
        <div className="flex-1 ml-6 mt-6">
          <p className="text-lg text-gray-500">New Arrival</p>
          <h1 className="text-6xl font-bold text-[#B88E2F] mt-2">
            Discover Our <br></br> New Collection
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br></br> elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-8 bg-[#B88E2F] text-white px-6 py-3 font-medium hover:bg-yellow-600">
            Buy Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
