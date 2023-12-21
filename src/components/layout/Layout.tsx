import Navbar from '../nav/Navbar';
import { ReactNode } from 'react';
import { METADATA } from '#src/config';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="lg-gap min-h-[70vh] m-auto p-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-center pt-8 pb-4 my-2 md:my-4 border-t border-deep-blue">
      <Link href={`mailto:${METADATA.email}`} className="hover:font-bold">
        Email: {METADATA.email}
      </Link>
    </footer>
  );
};
