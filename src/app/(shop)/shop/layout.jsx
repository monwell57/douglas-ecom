import Navbar from "./components/Navbar";
import CartProviders from "./components/Providers";
import ShoppingCartModel from "./components/ShoppingCartModel";

export default function Layout({ children }) {
  return (
    <main>
      <CartProviders>
        <ShoppingCartModel />
        <Navbar />
        {children}
      </CartProviders>
    </main>
  );
}
