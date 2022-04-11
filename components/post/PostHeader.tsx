
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
  color: var(--color-grey);
`


const StyledHeader = styled.header`
padding-top: var(--lg);
text-align: center;
&:after {
  content: '';
  display: flex;
  flex: 1;
  margin: 30px 2%;
  height: 1px;
  background-color: var(--color-grey-light);
}
`