import Navbar from "./nav/Navbar";
import { ReactNode } from "react";
import { METADATA } from "config";
import Link from "next/link";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg md:flex gap-5 m-5 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default GlobalLayout;

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center text-center py-6 border-t border-deep-brown">
      <Link href={`mailto:${METADATA.email}`} className="hover:font-bold">
        Email: {METADATA.email}
      </Link>
    </footer>
  );
};
