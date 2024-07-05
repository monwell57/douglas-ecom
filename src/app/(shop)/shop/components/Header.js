"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { UserButton } from "@clerk/nextjs";
import useCartStore from "../cartStore";
import Link from "next/link";

function Header() {
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="bg-white text-gray-900 p-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/shop">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl lg:text-3xl font-bold">Mia's Store</h1>
          </div>
        </Link>
        <div className="flex items-center relative">
          <Link href="/shop/cart">
            <FaShoppingCart className="text-3xl text-[#5B2086] cursor-pointer hover:scale-125 transition-transform duration-300" />
          </Link>
          {totalItems > 0 && (
            <div className="ml-2 mr-4 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-semibold">
              {totalItems}
            </div>
          )}
          <Link className="ml-4" href="/shop/order">
            <MdLocalShipping className="text-3xl text-[#582086] cursor-pointer hover:scale-125 transition-transform duration-300" />
          </Link>
          <div className="ml-4">
            <UserButton afterSignOutUrl="/shop" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
