"use client";
import Image from "next/image";
import React, { useState } from "react";
import useCartStore from "../cartStore";
import { toast } from "react-hot-toast"; // Import the Zustand store

function Details({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [qty, setQty] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: qty,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success("Added to cart");
  };

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img src={selectedImage} alt="pic" layout="fill" />
        </div>
        {/* Right Column */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5b20b6]">
            {product.name}
          </h1>
          <p className="text-lg text-gray-500 mt-4">{product.description}</p>
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex mt-6 space-x-3">
              {product.colors.map((color) => {
                const colorClass = {
                  grey: "bg-gray-500",
                  blue: "bg-blue-500",
                  black: "bg-black",
                  red: "bg-red-500",
                  green: "bg-green-500",
                  yellow: "bg-yellow-500",
                  purple: "bg-purple-500",
                  orange: "bg-orange-500",
                  pink: "bg-pink-500",
                  brown: "bg-brown-500",
                  white: "bg-white border border-black",
                  cyan: "bg-cyan-500",
                  magenta: "bg-magenta-500",
                }[color.toLowerCase()];
                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`h-8 w-8 rounded-full cursor-pointer ${colorClass} ${
                      selectedColor === color ? "border-4 border-black" : ""
                    }`}
                    key={color}
                  ></div>
                );
              })}
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <label className="block text-gray-700">Size</label>
              <select
                className="mt-2 p-2 border border-gray-300 rounded-md"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
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
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          {/* Add to Cart */}
          <div>
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-[#5b20b6] text-white rounded-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Image Slider */}
      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          {product?.extraImages?.map((image, index) => (
            <li
              onClick={() => {
                setSelectedImage(image);
              }}
              key={index}
              className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer"
            >
              <img src={image} alt="pic" layout="fill" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
