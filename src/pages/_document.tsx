import { Head, Html, Main, NextScript } from 'next/document';

const MyApp = () => {
  return (
    <Html>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyApp;
