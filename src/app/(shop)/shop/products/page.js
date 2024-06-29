import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function page() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B2086] text-center">
          Get my personal items at Mia Store
        </h1>
        <p className="text-center text-xl text-gray-500">
          Explore my new items and elevate your lifestyle with the best quality
          items
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-10">
        {/* filters */}
        <div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Price Range</h2>
            <div className="space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className="relative mt-4">
            <select className="block appearance-none w-full bg-white border border-gray-300 py-2 px-4 pr-8 rounded-md leading-tight focus:border-[#5b20b6]">
              <option value="latest">Sort by Latest</option>
              <option value="oldest">Sort by Oldest</option>
            </select>
          </div>
          <div className="space-y-2 mt-5">
            <button className="bg-[#5b20b6] text-white rounded-md py-2 px-4">
              Filter
            </button>
          </div>
        </div>
        {/* products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default page;
