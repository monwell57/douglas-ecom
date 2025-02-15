import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Alex_Brush, Montserrat } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavContextProvider from "../context/NavContext";

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <NavContextProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <body
            suppressHydrationWarning={true}
            className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}
          >
            {children}
          </body>
        </html>
      </NavContextProvider>
    </ClerkProvider>
  );
}
