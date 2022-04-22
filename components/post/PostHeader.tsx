
import PostTitle from "./PostTitle"
import styled from "styled-components"

const PostHeader = ({ date, title } : {date: string, title: string}) => {
    return(
        <StyledHeader>
        <StyledPublishedTime>{date}</StyledPublishedTime>
        <PostTitle title={title}/>
        </StyledHeader>
    )
}

export default PostHeader

const StyledPublishedTime = styled.time`
  font-weight: 500;
  color: salmon;
`


const StyledHeader = styled.header`
padding-top: var(--lg);
text-align: center;
animation: 3s anim-lineUp 0.1s ease-out 1;
`