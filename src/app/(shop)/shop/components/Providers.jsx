"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="http://localhost:3000/shop/stripe/success"
      cancelUrl="http://localhost:3000/shop/stripe/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default CartProvider;
