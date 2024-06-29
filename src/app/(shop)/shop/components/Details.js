import React from "react";

function Details() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img src="/painting.jpg" alt="pic" layout="fill" />
        </div>
        {/* Right Column */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5b20b6]">
            IPhone 15 Pro Max
          </h1>
          <p className="text-lg text-gray-500 mt-4">IPhone Pro Best Version</p>
          {/* Color Selection */}
          <div className="flex mt-6 space-x-3">
            <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
            <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
            <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
          </div>
          {/* Price */}
          <div className="flex items-center mt-6">
            <span className="text-3xl font-semibold text-[#5b20b6]">$999</span>
            <span className="text-lg text-gray-500 line-through ml-4 ">
              $1299
            </span>
          </div>
          {/* Qty */}
          <div className="mt-6 flex flex-col text-gray-500">
            <label className="ml-2">Qty</label>
            <input
              type="number"
              className="w-20 h-10 border border-gray-300 rounded-md outline-none px-4 py-2"
            />
          </div>

          {/* Add to Cart  */}
          <div>
            <button className="px-6 py-3 bg-[#5b20b6] text-white rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Image Slider */}
      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          <li className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer">
            <img src="/painting.jpg" alt="pic" layout="fill" />
          </li>
          <li className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer">
            <img src="/painting.jpg" alt="pic" layout="fill" />
          </li>
          <li className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer">
            <img src="/painting.jpg" alt="pic" layout="fill" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
