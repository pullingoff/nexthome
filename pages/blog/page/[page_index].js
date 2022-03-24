import { getSortedBlogPosts } from "../../../lib/posts-related-api"
import { POSTS_PER_PAGE } from "../../../config"
import Pagination from "../../../lib/Pagination";
import ListLayout from "../../../components/ListLayout";
import MetaContainer from "../../../components/MetaContainer";

const category = 'Blog'
const customMeta = {
  title: `${category}: 개발자 박하은`
}

export async function getStaticPaths() {
    const posts = getSortedBlogPosts();
    const pageNumber = Math.ceil(posts.length / POSTS_PER_PAGE);
    
    let paths = []
    for(let i=1; i<=pageNumber;i++) {
        paths.push({params:{page_index:i.toString()}})
    }
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params}){
	const page= parseInt((params && params.page_index)||1);
    // blog/index.js에서 BlogPage function을 export default 시킬 꺼임. 그때의 url 의 params가 없기 때문에 params 가 없을 때는 1로 지정하는 조건문을 걸어줌.
	const posts= getSortedBlogPosts();
    const pageNumber= Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex= page-1;
    
    // 배열 index는 0으로 시작 하기 때문에
    const orderedPosts= posts.slice(startIndex * POSTS_PER_PAGE,(startIndex+1)* POSTS_PER_PAGE);
    // (처음 시작인덱스 * 보여질 아이템 수), (다음 인덱스 * 다음 보여질 아이템 수)로 배열 자르기
    
  return {
    props:{
        posts:orderedPosts,
          currentPage:page,
          pageNumber
      }
  }
}

export default function BlogPage({posts, currentPage, pageNumber }) {
    // const {title} = customMeta
    return (
    <>
        <MetaContainer customMeta={customMeta}/>
        <ListLayout category={category}
                    description='기술적인 것 위주로 정리합니다.'
                    posts={posts}/>
        <Pagination category={category} currentPage={currentPage} pageNumber={pageNumber} />
    </>
    
    )
}
