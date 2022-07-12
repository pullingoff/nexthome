import '#styles/globals.scss';
import Layout from '#components/layout/Layout';
import MetaContainer from '#components/MetaContainer';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Loading from '#components/Loading';
import styled from 'styled-components';

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
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  background: var(--bg-yellow);
`;

export default MyApp;
