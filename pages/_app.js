import '../styles/globals.scss';
import Layout from '../components/Layout';
import MetaContainer from '../components/MetaContainer';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MetaContainer/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;