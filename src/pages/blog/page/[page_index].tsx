import { getAllPosts, getAllTags } from '#lib/posts-related-api';
import { POSTS_PER_PAGE } from '#config/index';
import Pagination from '#components/Pagination';
import ListLayout from '#components/ListLayout';
import MetaContainer from '#components/MetaContainer';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ICustomMeta } from '#type/index';
import { ParsedUrlQuery } from 'querystring';
import TagContainer from '#components/home/TagContainer';
import { ITag } from '#src/pages/tags/[tag]/pages/[keyword]';
import { IPost } from '#type/post';

const customMeta: ICustomMeta = {
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

  // blog/index.js에서 BlogPage function을 export default 시킬 꺼임.
  //그때의 url 의 params가 없기 때문에 params 가 없을 때는 1로 지정하는 조건문을 걸어줌.

  const posts = await getAllPosts();
  const pageTotal = Math.ceil(posts.length / POSTS_PER_PAGE);

  if (isNaN(page) || page > pageTotal || page < 1) {
    return {
      notFound: true,
    };
  }

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  // 배열 index는 0으로 시작 하기 때문에
  const orderedPosts = posts.slice(startIndex, endIndex);
  // (처음 시작인덱스 * 보여질 아이템 수), (다음 인덱스 * 다음 보여질 아이템 수)로 배열 자르기

  const allTags = await getAllTags();
  return {
    props: {
      posts: orderedPosts,
      currentPage: page,
      pageTotal: pageTotal,
      allTags,
    },
  };
};

export default function BlogPage({
  posts,
  currentPage,
  pageTotal,
  allTags,
}: {
  posts: IPost[];
  currentPage: number;
  pageTotal: number;
  allTags: ITag[];
}) {
  return (
    <>
      <MetaContainer customMeta={customMeta} />
      <TagContainer allTags={allTags} />
      <ListLayout posts={posts} />
      <Pagination
        category="blog"
        currentPage={currentPage}
        pageTotal={pageTotal}
      />
    </>
  );
}
