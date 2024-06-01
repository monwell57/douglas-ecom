import React from "react";
import HeaderImage from "./components/HeaderImage";

export const revalidate = 30;

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-100   text-gray-900">
      <HeaderImage />
    </div>
  );
};

export default ShopPage;
