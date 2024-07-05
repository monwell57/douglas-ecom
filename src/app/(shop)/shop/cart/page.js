"use client";
import React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function CartPage() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  return (
    <div className="bg-white min-h-full text-gray-900">
      <Header />
      <Elements stripe={stripePromise}>
        <Cart />
      </Elements>
    </div>
  );
}

export default CartPage;
