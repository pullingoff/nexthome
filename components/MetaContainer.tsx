import Head from 'next/head';
import { METADATA } from '@config/index';
import { ICustomMeta } from 'types';

const MetaContainer = ({ customMeta }: { customMeta?: ICustomMeta }) => {
  const config = {
    ...METADATA, // 기본값
    ...customMeta, // 커스텀 메타데이터
  };
  // console.log(customMeta);
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:site_name" content={config.title} key="" />
      <meta property="og:title" content={config.title} key="" />
      <title>{config.title}</title>
      <meta content={config.description} name="description" key="" />
      <meta property="og:description" content={config.description} key="" />
      {config.date && (
        <meta property="article:published_time" content={config.date} />
      )}
    </Head>
  );
};

export default MetaContainer;
