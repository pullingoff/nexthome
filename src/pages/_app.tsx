import '#styles/globals.scss';
import Layout from '#components/layout/Layout';
import MetadataHead from '#components/MetadataHead';
import { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
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
      <MetadataHead />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
