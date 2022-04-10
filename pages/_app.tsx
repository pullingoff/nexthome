import '../styles/globals.scss';
import Layout from '../components/Layout';
import MetaContainer from '../components/MetaContainer';
import { AppProps } from 'next/app';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from 'components/Loading';

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

  return (
    <Layout>
      <MetaContainer/>
      <Loading loading={loading}/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;