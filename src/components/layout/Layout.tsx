import Navbar from '../nav/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import styledTheme from '#src/styles/theme';
import { ReactNode } from 'react';
import { METADATA } from '#src/config';
import SnsLogoBox from '#components/layout/SnsLogoBox';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

const Content = styled.main`
  max-width: calc(var(--breakpoint-desktop) - 150px);
  margin: auto;
  padding: 25px;
  background: var(--bg-yellow);
  min-height: 70vh;
`;

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-center pt-8 pb-4 my-2 md:my-4 border-t border-[color:var(--theme1-color)]">
      <SnsLogoBox />
      <Link href={`mailto:${METADATA.email}`} className="hover:font-bold">
        Email: {METADATA.email}
      </Link>
    </footer>
  );
};
