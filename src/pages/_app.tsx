import '#styles/globals.scss';
import Layout from '#components/layout/Layout';
import MetadataBox from '#components/MetadataBox';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Loading from '#components/Loading';
import styled from 'styled-components';
import hifiImg from '#public/hifi.png';
import Image from "next/legacy/image";
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <StyledLayout>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_KEY}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <MetadataBox />
      <Loading loading={loading} />
      <Component {...pageProps} />
      <CoffeeChat />
    </StyledLayout>
  );
};

const CoffeeChat = () => {
  return (
    <StyledCoffeeChatContainer>
      <a href="https://whattime.co.kr/haeun" target="_blank">
        <Image
          src={hifiImg}
          alt="Hifi 3D Illustration by Welson Hendra"
          width={'50'}
          height={'50'}
        />
      </a>
    </StyledCoffeeChatContainer>
  );
};

const StyledCoffeeChatContainer = styled.div`
  position: fixed;
  right: 3%;
  bottom: 4%;
  cursor: pointer;
  border: 1px solid var(--theme1-color);
  background: white;
  border-radius: 50%;
  padding: 0.3rem;

  &:hover {
    transform: scale(1.2, 1.1);
    box-shadow: 0 30px 45px -15px var(--theme1-color);
  }
`;

const StyledLayout = styled(Layout)`
  background: var(--bg-yellow);
`;

export default MyApp;
