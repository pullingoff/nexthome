import { GetStaticProps } from 'next';
import React from 'react';
import { IPost } from 'types';
import Main from '@components/home/Main';
import RecentPost from '@components/home/RecentPost';
import { getAllTags, getRecentPosts } from '@lib/posts-related-api';
import TagContainer from '@components/home/TagContainer';
import { ITag } from './tags/[tag]/pages/[keyword]';

export const getStaticProps: GetStaticProps = async () => {
  const { recentPosts } = await getRecentPosts();
  const allTags = await getAllTags();
  return {
    props: {
      recentPosts,
      allTags,
    },
  };
};

const Home = ({
  recentPosts,
  allTags,
}: {
  recentPosts: IPost[];
  allTags: ITag[];
}) => {
  return (
    <>
      <Main />
      <RecentPost recentPosts={recentPosts} />
      <TagContainer allTags={allTags} />
    </>
  );
};

export default Home;
