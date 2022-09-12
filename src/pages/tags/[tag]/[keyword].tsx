import ListLayout from '#components/ListLayout';
import { getAllTags, getAllPosts } from '#lib/posts-related-api';
import { POSTS_PER_PAGE } from '#config/index';
import MetaContainer from '#components/MetaContainer';
import KeywordTitle from '#components/tag/KeywordTitle';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IPost } from '#type/post';
import { ParsedUrlQuery } from 'querystring';
import Pagination from '#components/Pagination';

const Tag = ({
  posts,
  tag,
  pageNo,
  pageTotal,
}: {
  posts: IPost[];
  tag: string;
  pageNo: number;
  pageTotal: number;
}) => {
  const capitalizedTag: string = tag.toUpperCase();

  const customMeta = {
    title: `${capitalizedTag} : 개발자 박하은`,
  };
  return (
    <>
      <MetaContainer customMeta={customMeta} />
      <KeywordTitle
        pageNm={capitalizedTag}
        desc={`'${capitalizedTag}'에 관한 글들을 모아봤어요.`}
      />
      <ListLayout posts={posts} />
      <Pagination
        path={`tags/${tag}`}
        currentPage={pageNo}
        pageTotal={pageTotal}
      />
    </>
  );
};

export default Tag;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();
  const posts = await getAllPosts();

  const paths: { params: { tag: string; keyword: string } }[] = [];

  allTags.forEach(({ tag }) => {
    const tagsCount = posts.filter(post =>
      post.frontmatter.tags.find(t => t === tag)
    ).length;
    [...new Array(Math.round(tagsCount / POSTS_PER_PAGE)).keys()].forEach(i => {
      paths.push({ params: { tag, keyword: `${i + 1}` } });
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export interface ITag extends ParsedUrlQuery {
  keyword: string;
  tag: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = await getAllPosts();

  const { tag, keyword } = params as ITag;
  const pageNo = parseInt(keyword);
  const postsWithTag = allPosts.filter(post =>
    post.frontmatter.tags.find(t => t === tag)
  );

  if (
    isNaN(pageNo) ||
    pageNo > Math.ceil(postsWithTag.length / POSTS_PER_PAGE) ||
    pageNo < 1
  ) {
    return {
      notFound: true,
    };
  }

  const startIndex = (pageNo - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const resultPosts = postsWithTag.slice(startIndex, endIndex);

  return {
    props: {
      posts: resultPosts.map(post => ({ ...post, path: '' })),
      tag,
      pageNo,
      pageTotal: Math.ceil(postsWithTag.length / POSTS_PER_PAGE),
    },
  };
};
