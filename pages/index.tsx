import { GetStaticProps } from 'next';
import React from 'react';
import { IPost } from '@type';
import Main from '@components/home/Main';
import RecentPost from '@components/home/RecentPost';
import { getRecentPosts } from '@lib/posts-related-api';
export const getStaticProps: GetStaticProps = async () => {
  const { recentPosts } = await getRecentPosts();

  return {
    props: {
      recentPosts,
    },
  };
};

const Home = ({ recentPosts }: { recentPosts: IPost[] }) => {
  return (
    <>
      <Main />
      <RecentPost recentPosts={recentPosts} />
    </>
  );
};

export default Home;
