import { getSortedDiaryPosts } from "../../../lib/posts-related-api"
import { POSTS_PER_PAGE } from "../../../config"
import Pagination from "../../../lib/Pagination";
import ListLayout from "../../../components/ListLayout";
import MetaContainer from "../../../components/MetaContainer";

const category = 'Diary'
const customMeta = {
  title: `${category}: 개발자 박하은`
}

export async function getStaticPaths() {
    const posts = getSortedDiaryPosts();
    const pageNumber = Math.ceil(posts.length / POSTS_PER_PAGE);
    
    let paths = []
    for(let i=1; i<=pageNumber;i++) {
      paths.push({params:{diary_index:i.toString()}})
    }
    
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params}){
	const page= parseInt((params && params.diary_index)||1);
  const posts= getSortedDiaryPosts();
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

export default function DiaryPage({posts, currentPage, pageNumber }) {
    return (
      <>
        <MetaContainer customMeta={customMeta}/>
        <ListLayout category={category}
                    description='내가 느낀 것과 생각을 주로 적습니다.'
                    posts={posts}/>
        <Pagination category={category} currentPage={currentPage} pageNumber={pageNumber} />
      </>
    )
}
