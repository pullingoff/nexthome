import '@styles/globals.scss';
import Layout from '@components/layout/Layout';
import MetaContainer from '@components/MetaContainer';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);
  console.log(pageProps);
  // next/router를 이용해서 넥스트앱에서 라우팅이 발생됐을 때
  // 강제적으로 gtag의 pageview 함수로 구글 애널리틱스에게 다른 페이지도 봤다고 알리는 겁니다.

  return (
    <StyledLayout>
      <MetaContainer />
      <Loading loading={loading} />
      <Component {...pageProps} />
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  background: var(--bg-yellow);
`;

export default MyApp;
