import Navbar from "./components/Navbar";
import CartProviders from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

export default function Layout({ children }) {
  return (
    <main>
      <CartProviders>
        <ShoppingCartModal />
        <Navbar />
        {children}
      </CartProviders>
    </main>
  );
}
