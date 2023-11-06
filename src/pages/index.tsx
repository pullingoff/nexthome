import { GetStaticProps } from 'next';
import React from 'react';
import { Post } from '#src/type';
import RecentPost from '#components/home/RecentPost';
import { getRecentPosts } from '#lib/posts-related-api';
import CustomLink from '#components/common/CustomLink';
import mainImg from '#public/images/main.JPG';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const { recentPosts } = await getRecentPosts();

  return {
    props: {
      recentPosts,
    },
  };
};

const Home = ({ recentPosts }: { recentPosts: Post[] }) => {
  return (
    <>
      <Main />
      <RecentPost recentPosts={recentPosts} />
    </>
  );
};

const Main = () => {
  return (
    <section className="mt-3">
      <CustomLink href="/about">
        <section className="relative">
          <Image
            className="cursor-pointer brightness-100 transition ease-linear delay-75 hover:scale-110 hover:brightness-50 duration-150"
            alt="박하은의 이력서 보러가기"
            src={mainImg}
            priority
          />
        </section>
      </CustomLink>
    </section>
  );
};

export default Home;
