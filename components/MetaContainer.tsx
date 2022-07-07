import Head from 'next/head';
import { METADATA } from '@config/index';
import { ICustomMeta } from 'types';

const MetaContainer = ({ customMeta }: { customMeta?: ICustomMeta }) => {
  const config = {
    ...METADATA, // 기본값
    ...customMeta, // 커스텀 메타데이터
  };

  return (
    <Head>
      <title>{config.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="robots" content="follow, index" />
      <meta content={config.description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:title" content={config.title} />
      {/* <meta property="og:image" content={config.image} /> */}
      {config.date && (
        <meta property="article:published_time" content={config.date} />
      )}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaContainer;
