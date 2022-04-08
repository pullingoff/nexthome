import React from "react";
import Main from "../components/Main"
import RecentPost from '../components/RecentPost'
import { getRecentPosts } from '../lib/posts-related-api'


export const getStaticProps = async() => {
  const {recentPosts} = await getRecentPosts();

  return {
    props: {
      recentPosts
    }
  }
}


const Home = ({recentPosts}) => {

  return (
    <>
      <Main/>
      <RecentPost recentPosts={recentPosts}/>
    </>
  )
}

export default Home