import Head from 'next/head';
import { METADATA } from '#src/config';
import { Metadata } from '#src/type';

const MetadataHead = ({ customMetadata }: { customMetadata?: Metadata }) => {
  const metadata = {
    ...METADATA, // 기본값
    ...customMetadata, // 커스텀 메타데이터
  };
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={metadata.title} />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:description" content={metadata.description} />
      {metadata.date && (
        <meta property="article:published_time" content={metadata.date} />
      )}
      <meta
        name="google-site-verification"
        content="4xDb7fr18GNpr2PVpIj0C201IFwJ1ii-cKKCjDsuHws"
      />
    </Head>
  );
};

export default MetadataHead;
