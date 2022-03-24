import Main from "../components/Main"
import RecentPost from '../components/RecentPost'
import { getRecentPosts } from '../lib/posts-related-api'


export async function getStaticProps() {
  const {recentPosts} = await getRecentPosts();

  return {
    props: {
      recentPosts
    }
  }
}


export default function Home({recentPosts}) {

  return (
    <>
      <Main/>
      <RecentPost recentPosts={recentPosts}/>
    </>
  )
}
