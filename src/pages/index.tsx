import { GetStaticProps } from 'next';
import React from 'react';
import { Post } from '#src/type';
import RecentPost from '#components/home/RecentPost';
import { getRecentPosts } from '#lib/posts-related-api';
import CustomLink from '#components/common/CustomLink';
import mainImg from '#public/images/main.JPG';
import styled from 'styled-components';
import Image from "next/legacy/image";

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

const S: any = {};
const Main = () => {
  return (
    <S.StyledMain>
      <CustomLink href="/about">
        {' '}
        <S.ImgBox>
          <S.HomeImage alt="박하은의 이력서 보러가기" src={mainImg} priority />
        </S.ImgBox>
      </CustomLink>
    </S.StyledMain>
  );
};

S.StyledMain = styled.section`
  margin-top: var(--lg);
`;

S.ImgBox = styled.section`
  position: relative;
`;

S.HomeImage = styled(Image)`
  transition: transform 0.5s ease;
  cursor: pointer;
  -webkit-filter: brightness(100%);

  &:hover {
    transform: scale(1.1);
    -webkit-filter: brightness(50%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;

export default Home;
