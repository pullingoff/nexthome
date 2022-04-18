import Pagination from "./Pagination";
import ListRow from "./ListRow";
import {capitalize} from "@lib/index"
import CustomLink from "./CustomLink";
import SearchBar from "./SearchBar";
import styled from "styled-components"
import { IPost } from "../types";

const ListLayout = ({posts, category, 
    // hasNextPage = false,
     prevPath, nextPath
} : {
    posts: Array<IPost>,
    category: string,
    pageNo: number,
    // hasNextPage?: boolean,
    prevPath?: string,
    nextPath?: string
}) => {
    const path = category.toLowerCase();

    return(
        <StyledMain>
        {/* <SearchBar /> */}
            <PostUl>
                {posts.map((post) => (
                    <ListRow key={post.slug} 
                             category={path} 
                             post={post} />
                ))}
            </PostUl>
        </StyledMain>  
    )
}

export default ListLayout

const StyledMain = styled.main`
// width: 650px;   // 통일할것
`

const PostUl = styled.ul`
margin: 30px auto;
display: grid;
grid-gap: 24px;
list-style: none;
@media (min-width: ${({theme}) => theme.device.sm}) {
    grid-template-columns: repeat(2, 1fr);
}
`
