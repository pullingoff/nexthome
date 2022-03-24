import Pagination from "../lib/Pagination";
import ListRow from "./ListRow";
import {capitalize} from "../lib"
import CustomLink from "./CustomLink";
import SearchBar from "./SearchBar";
import styled from "styled-components"

export default function ListLayout({posts, category, pageNo =1, hasNextPage = false, prevPath, nextPath}) {
    const path = category.toLowerCase();

    return(
        <StyledMain>
        <SearchBar />
            <PostUl role='list'>
                {posts.map((post) => (
                    <ListRow role='listitem' category={path} post={post} key={post.slug} />
                ))}
            </PostUl>
        </StyledMain>  
    )
}

const StyledMain = styled.main`
// width: 650px;   // 통일할것
`

const PostUl = styled.ul`
margin: 30px auto;
  display: grid;
  grid-gap: 24px;
  // grid-template-columns: repeat(2, 1fr);
  list-style: none;
  @media (min-width: ${({theme}) => theme.device.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
