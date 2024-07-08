import Link from "next/link";
import Image from "next/image";
import React from "react";

export const revalidate = 30;

function Card({ product }) {
  return (
    <Link href={`/shop/details/${product.slug}`}>
      <div className="relative shadow-md max-w-sm cursor-pointer">
        <div className="relative h-72 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
          <Image 
            src={product.image} 
            
            alt="Paint"
            width={288} // width of the image based on the aspect ratio (assuming h-72 is 288px)
            height={288} // height of the image based on the aspect ratio (assuming h-72 is 288px)
          />
        </div>

        <div className="p-4 space-y-2 ">
          <h1 className="text-[#5B2086] hover:text-[#441583] text-3xl font-semibold">
            {product.name}
          </h1>
          <p className="text-xl text-gray-500 truncate">
            {product.description}
          </p>
          <br />
        </div>

        <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
          <span className="text-[#5B2086] text-lg font-semibold">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
