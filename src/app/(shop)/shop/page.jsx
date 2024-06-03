import React from "react";
import HeaderImage from "./components/HeaderImage";
import Newest from "./components/Newest";

export const revalidate = 30;

const ShopPage = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12 min-h-screen  text-gray-900">
      <HeaderImage />
      <Newest />
    </div>
  );
};

export default ShopPage;
