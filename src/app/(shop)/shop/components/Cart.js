"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import useCartStore from "../cartStore";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createOrder } from "../../../../../sanity/order-util";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [loading, setLoading] = React.useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleRemoveFromCart = (productId, size) => {
    removeFromCart(productId, size);
  };

  const onSubmit = async () => {
    if (!isLoaded) return; // Wait for Clerk to load
    if (!isSignedIn) {
      // Redirect to sign-in or sign-up page
      router.push("/sign-in");
      return;
    }

    const cardElement = elements?.getElement("card");
    setLoading(true);

    try {
      if (!stripe || !cardElement) return null;
      const data = await axios.post("/shop/api/stripe", {
        data: { amount: cartTotal.toFixed(0) },
      });

      console.log(data);
      const res = await stripe?.confirmCardPayment(data?.data?.intent, {
        payment_method: { card: cardElement },
      });
      const status = res?.paymentIntent?.status;
      if (status === "succeeded") {
        setLoading(false);
        const email = user?.emailAddresses[0]?.emailAddress;

        if (email) {
          const res = await createOrder(email, cart);
          if (res) {
            router.push("/shop/order");
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5b20b6]">
        {totalItems} items in Cart
      </h1>
      <table className="w-full border-collapse mt-6">
        <thead>
          <tr className="border-b text-[#5b20b6] border-gray-200">
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]"
            >
              <td className="py-2 px-4 flex items-center">
                <Image
                  className="mr-2"
                  src={product?.image}
                  width={50}
                  height={30}
                  alt="art"
                />
                {product?.name}
              </td>
              <td className="py-2 px-4">{product?.quantity}</td>
              <td className="py-2 px-4">${product?.price}</td>
              <td className="py-2 px-4">
                <FaTrash
                  onClick={() => {
                    handleRemoveFromCart(product?._id, product?.size);
                  }}
                  className="text-[#5B20B6] mx-auto cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-[#5B20B6] ml-auto">
        <p className="text-lg font-semibold text-right mr-4">
          Total: ${cartTotal.toFixed(2)}
        </p>
      </div>

      {cartTotal > 0 && (
        <>
          <div className="mt-10 p-10 bg-gray-100">
            <CardElement />
          </div>
        </>
      )}

      <div className="mt-6 text-[#5B20B6] max-w-sm mx-auto space-y-4">
        {cartTotal > 0 && (
          <>
            <button
              disabled={cartTotal === 0}
              onClick={onSubmit}
              className="text-lg w-full font-semibold text-center mr-4 bg-[#5B20B6]  text-white py-2 px-4 rounded hover:text-[#5B20B6] hover:bg-white border border-[#5B20B6]"
            >
              {loading ? "Loading..." : "Pay"}
            </button>
          </>
        )}

        <button className="text-lg w-full font-semibold text-center mr-4 bg-white hover:bg-[#5B20B6] hover:text-white text-[#5B20B6] border border-[#5B20B6] py-2 px-4 rounded">
          <Link className="" href="/shop">
            Back to Shopping
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
