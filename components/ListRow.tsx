import format from "date-fns/format";
import PostCard from "./post/PostCard"
import styled from "styled-components";
import { IPost } from "types";

// ListLayout에서 한 li임 
const ListRow = ({category, post}: {
  category: string,
  post: IPost
}) => {
    const {date} = post.frontmatter
    const slug = post.slug
    
    const updatedAt = format(new Date(date), 'yyyy년 MM월 dd일')

    return (
      <StyledPostList>
        <PostCard korDate={updatedAt}
                  href={`/${category}/${slug}`}
                  post = {post}
        />
      </StyledPostList>
        )
}

export default ListRow

const StyledPostList = styled.li`
`