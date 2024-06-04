import Navbar from "./components/Navbar";
import CartProviders from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

export const revalidate = 60;

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
