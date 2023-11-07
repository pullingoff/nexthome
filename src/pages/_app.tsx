import '#styles/globals.scss';
import Layout from '#components/layout/Layout';
import MetadataBox from '#components/MetadataBox';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Loading from '#components/Loading';
import hifiImg from '#public/hifi.png';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

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
      <MetadataBox />
      <Loading loading={loading} />
      <Component {...pageProps} />
      <CoffeeChat />
    </Layout>
  );
};

const CoffeeChat = () => {
  return (
    <div className="fixed cursor-pointer border border-[color:var(--theme1-color)] p-1 rounded-[50%] border-solid right-[3%] bottom-[4%] hover:shadow-[0_30px_45px_-15px_var(--theme1-color)] hover:scale-110">
      <Link href="https://whattime.co.kr/haeun" target="_blank">
        <Image
          src={hifiImg}
          alt="Hifi 3D Illustration by Welson Hendra"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default MyApp;
