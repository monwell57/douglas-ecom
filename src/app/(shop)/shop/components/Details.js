import React from "react";

function Details({ product }) {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img src={product.image} alt="pic" layout="fill" />
        </div>
        {/* Right Column */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5b20b6]">
            {product.name}
          </h1>
          <p className="text-lg text-gray-500 mt-4">{product.description}</p>
          {/* Color Selection */}
          <div className="flex mt-6 space-x-3">
            {product.colors?.map((color) => {
              switch (color.toLowerCase()) {
                case "grey":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-gray-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "blue":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "black":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-black cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "red":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "green":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "yellow":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-yellow-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "purple":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "orange":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-orange-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "pink":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-pink-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "brown":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-brown-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "white":
                  return (
                    <div
                      className="h-8 w-8 rounded-full border border-black cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "cyan":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-cyan-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "magenta":
                  return (
                    <div
                      className="h-8 w-8 rounded-full bg-magenta-500 cursor-pointer"
                      key={color}
                    ></div>
                  );
                case "lime":
                  return;
              }
            })}
          </div>
          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <label className="block text-gray-700">Size</label>
              <select className="mt-2 p-2 border border-gray-300 rounded-md">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Price */}
          <div className="flex items-center mt-6">
            <span className="text-3xl font-semibold text-[#5b20b6]">
              ${product.price}
            </span>

            <span className="text-lg text-gray-500 line-through ml-4 ">
              {" "}
              ${(product.price * 1.5).toFixed(2)}
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
