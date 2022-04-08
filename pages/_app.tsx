import '../styles/globals.scss';
import Layout from '../components/Layout';
import MetaContainer from '../components/MetaContainer';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MetaContainer/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;