import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AuthUser from "./layout/AuthUser";

const metadata: Metadata = {
  title: "Conduit",
  description: "Real World Example App",
};

interface LayoutProps {}

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
