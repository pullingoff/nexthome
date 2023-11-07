import Navbar from '../nav/Navbar';
import { ThemeProvider } from 'styled-components';
import styledTheme from '#src/styles/theme';
import { ReactNode } from 'react';
import { METADATA } from '#src/config';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <Navbar />
      <main className="max-w-[calc(var(--breakpoint-desktop)_-_150px)] min-h-[70vh] m-auto p-5">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-center pt-8 pb-4 my-2 md:my-4 border-t border-[color:var(--theme1-color)]">
      <Link href={`mailto:${METADATA.email}`} className="hover:font-bold">
        Email: {METADATA.email}
      </Link>
    </footer>
  );
};
