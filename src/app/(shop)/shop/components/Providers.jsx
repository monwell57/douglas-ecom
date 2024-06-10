"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://complete-artist-site-9ab82jvit-monwell57s-projects.vercel.app/shop/stripe/success"
      cancelUrl="https://complete-artist-site-9ab82jvit-monwell57s-projects.vercel.app/shop/stripe/error"
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
