import '#styles/globals.scss';
import Layout from '#components/layout/Layout';
import MetaContainer from '#components/MetaContainer';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Loading from '#components/Loading';
import styled from 'styled-components';
import hifiImg from '#public/hifi.png';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <StyledLayout>
      <MetaContainer />
      <Loading loading={loading} />
      <Component {...pageProps} />
      <CoffeeChat />
    </StyledLayout>
  );
}

const CoffeeChat = () => {
  return (
    <StyledCoffeeChatContainer>
      <a href="https://whattime.co.kr/haeun" target="_blank">
        <Image
          src={hifiImg}
          alt="Hifi 3D Illustration by Welson Hendra"
          width={'50px'}
          height={'50px'}
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
