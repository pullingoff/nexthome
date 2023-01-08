import Navbar from '../nav/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import styledTheme from '#src/styles/theme';
import { ReactNode } from 'react';
import { METADATA } from '#src/config';
import CustomLink from '#components/common/CustomLink';
import SnsLogoBox from '#components/layout/SnsLogoBox';

const S: any = {};

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
    <S.Footer>
      <SnsLogoBox />
      <S.MailLink href={`mailto:${METADATA.email}`}>
        Email: {METADATA.email}
      </S.MailLink>
    </S.Footer>
  );
};

S.Footer = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: var(--10xl) 0 var(--xl);
  text-align: center;
  margin: var(--xl) auto;
  border-top: 1px solid var(--theme1-color);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin: var(--md) auto;
  }
`;

S.MailLink = styled(CustomLink)`
  &:hover {
    font-weight: bold;
  }
`;
