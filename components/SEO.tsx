import { METADATA } from '@config/index';
import { NextSeo, ArticleJsonLd } from 'next-seo';

export const SEO = {
  title: METADATA.title,
  description: METADATA.description,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: METADATA.url,
    title: METADATA.title,
    description: METADATA.description,
  },
};

export const PageSeo = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <NextSeo
      title={`${title} – ${METADATA.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        // images: [{ alt: title, url: '/thumbnail.png' }],
      }}
    />
  );
};

export const BlogSeo = ({
  title,
  summary,
  date,
  updatedAt,
  url,
  tags,
  images = [],
}: {
  title: string;
  summary: string;
  date: string;
  updatedAt: string;
  url: string;
  tags: string[];
  images: string[];
}) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(updatedAt || date).toISOString();

  const featuredImages = images.map(img => {
    return {
      url: img,
      alt: title,
    };
  });

  return (
    <>
      <NextSeo
        title={`${title} – ${METADATA.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${METADATA.url}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
      />
      <ArticleJsonLd
        authorName={METADATA.author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={images}
        publisherName={METADATA.author}
        title={title}
        url={url}
      />
    </>
  );
};
