import { GetStaticProps } from "next";
import React from "react";
import { IPost } from "types";
import Main from "@components/Main"
import RecentPost from '@components/RecentPost'
import { getRecentPosts } from '@lib/posts-related-api'


export const getStaticProps : GetStaticProps = async() => {
  const {recentPosts} = await getRecentPosts();

  return {
    props: {
      recentPosts
    }
  }
}


const Home = ({recentPosts} : {
  recentPosts: Array<IPost> 
}) => {

  return (
    <>
      <Main/>
      <RecentPost recentPosts={recentPosts}/>
    </>
  )
}

export default Home