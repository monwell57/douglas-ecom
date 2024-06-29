import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";

export const revalidate = 30;

const ShopPage = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12 min-h-screen  text-gray-900">
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
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <Banner />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B2086] text-center">
          Featured Product
        </h1>
      </div>
      <div className="p-10 flex">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
