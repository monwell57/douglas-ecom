import React from "react";

function Card() {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-72 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <img src="/painting.jpg" layout="fill" alt="Paint" />
      </div>

      <div className="p-4 space-y-2 ">
        <h1 className="text-[#5B2086] hover:text-[#441583] text-3xl font-semibold">
          Iphone 15 pro max
        </h1>
        <p className="text-xl text-gray-500 truncate">
          Iphone 15 pro max for sale
        </p>
        <br />
      </div>

      <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
        <span className="text-[#5B2086] text-lg font-semibold">$99.99</span>
      </div>
    </div>
  );
}

export default Card;
