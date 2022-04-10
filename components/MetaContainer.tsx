import Head from 'next/head';
import { METADATA } from '../config';
import { ICustomMeta } from 'type';

const MetaContainer = ({customMeta}: {
    customMeta?: ICustomMeta,
}) => {
    const config = {   
        // title: METADATA.title,
        description: METADATA.description,
        author: METADATA.author,
        type: 'website',
        //date: ISO 포맷으로 변경해야
        ...customMeta
    } 
    
    return (
        <Head>
        <title>{config.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content={config.description} name="description" />
        {/* <meta property="og:url" content={config.url} /> */}
        <meta property="og:type" content={config.type} />
        <meta property="og:site_name" content={config.author} />
        <meta property="og:description" content={config.description} />
        <meta property="og:title" content={config.title} />
        {/* <meta property="og:image" content={config.image} /> */}
        {/* {config.date && <meta property="article:published_time" content={config.date} />} */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:site" content={config.twitter} />
        <meta name="twitter:image" content={config.image} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default MetaContainer