import { getAllPosts, getAllSlugs, getAllTags } from '#lib/posts-related-api';
import { POSTS_PER_PAGE } from '#src/config';
import Pagination from '#components/Pagination';
import ListLayout from '#components/ListLayout';
import MetadataBox from '#components/MetadataBox';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Metadata } from '#src/type';
import { ParsedUrlQuery } from 'querystring';
import TagBox from '#components/posts/TagBox';
import { ITag } from '#src/pages/tags/[tag]/[keyword]';
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
  // (처음 시작인덱스 * 보여질 아이템 수), (다음 인덱스 * 다음 보여질 아이템 수)로 배열 자르기
  const orderedPosts = posts.slice(startIndex, endIndex);

  const allTags = await getAllTags();
  return {
    props: {
      posts: orderedPosts,
      currentPage: page,
      pageTotal: pageTotal,
      allTags,
      allSlugs: await getAllSlugs(),
    },
  };
};

export default function BlogPage({
  posts,
  currentPage,
  pageTotal,
  allTags,
  allSlugs,
}: {
  posts: Post[];
  currentPage: number;
  pageTotal: number;
  allTags: ITag[];
  allSlugs: string[];
}) {
  const moveToRandomPost = () => {
    window.location.href = `/blog/${
      allSlugs[Math.round(Math.random() * allSlugs.length)]
    }`;
    console.log('Thank you! Emoji credited by emoji.supply/kitchen');
  };

  return (
    <>
      <MetadataBox customMetadata={customMeta} />
      <TagBox allTags={allTags} moveToRandomPost={moveToRandomPost} />
      <ListLayout posts={posts} />
      <Pagination
        path="blog/page"
        currentPage={currentPage}
        pageTotal={pageTotal}
      />
    </>
  );
}
