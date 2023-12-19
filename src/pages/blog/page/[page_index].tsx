import { getAllPosts, getAllSlugs, getAllTags } from '#lib/posts-related-api';
import { POSTS_PER_PAGE } from '#src/config';
import Pagination from '#components/Pagination';
import ListLayout from '#components/ListLayout';
import MetadataHead from '#components/MetadataHead';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ITag, Metadata } from '#src/type';
import { ParsedUrlQuery } from 'querystring';
import TagBox from '#components/posts/TagBox';
import { Post } from '#src/type';

const customMeta: Metadata = {
  title: `Blog: 개발자 박하은`,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const pageTotal = Math.round(posts.length / POSTS_PER_PAGE);
  const paths = [];
  for (let i = 0; i <= pageTotal; i++) {
    paths.push({
      params: {
        page_index: `${i + 1}`,
      },
    });
  }
  return { paths, fallback: 'blocking' };
};

interface IPage extends ParsedUrlQuery {
  page_index: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page_index } = (params as IPage) || {};
  const page: number = parseInt(page_index || '1');
  const posts = await getAllPosts();
  const pageTotal = Math.ceil(posts.length / POSTS_PER_PAGE);

  if (isNaN(page) || page > pageTotal || page < 1) {
    return {
      notFound: true,
    };
  }

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  // (처음 시작인덱스 * 보여질 아이템 수), (다음 인덱스 * 다음 보여질 아이템 수)로 배열 자르기
  const orderedPosts = posts.slice(startIndex, endIndex);
  // TODO: 제너레이터 등으로 개선
  const allTags = await getAllTags();

  return {
    props: {
      posts: orderedPosts,
      currentPage: page,
      pageTotal: pageTotal,
      tags: allTags.slice(0, 12), // 상위 n개만
      allSlugs: await getAllSlugs(),
    },
  };
};

export default function BlogPage({
  posts,
  currentPage,
  pageTotal,
  tags,
  allSlugs,
}: {
  posts: Post[];
  currentPage: number;
  pageTotal: number;
  tags: ITag[];
  allSlugs: string[];
}) {
  return (
    <>
      <MetadataHead customMetadata={customMeta} />
      <TagBox tags={tags} />
      <ListLayout posts={posts} />
      <Pagination
        path="blog/page"
        currentPage={currentPage}
        pageTotal={pageTotal}
      />
    </>
  );
}
