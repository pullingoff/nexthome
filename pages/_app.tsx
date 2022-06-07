import '@styles/globals.scss';
import Layout from '@components/Layout';
import MetaContainer from '@components/MetaContainer';
import { AppProps } from 'next/app';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from 'components/Loading';
import styled from 'styled-components';
import { DefaultSeo } from 'next-seo'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);
  
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  // next/router를 이용해서 넥스트앱에서 라우팅이 발생됐을 때
  // 강제적으로 gtag의 pageview 함수로 구글 애널리틱스에게 다른 페이지도 봤다고 알리는 겁니다.
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <StyledLayout>
      {/* <DefaultSeo {...SEO} /> */}
      <MetaContainer/>
      <Loading loading={loading}/>
      <Component {...pageProps} />
    </StyledLayout>
  )
}

const StyledLayout = styled(Layout)`
background: var(--bg-yellow);
`

export default MyApp;