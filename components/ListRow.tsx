import Image from "next/image";
// import Link from "next/link";

import format from "date-fns/format";
import PostCard from "./post/PostCard"
import styled from "styled-components";

// ListLayout에서 한 li임 
const ListRow = ({category, post}) => {
    const { title, date, description, tag} = post.frontmatter
    const slug = post.slug
    
    const updatedAt = format(new Date(date), 'yyyy년 MM월 dd일')

    return (
      <StyledPostList>
        <PostCard title={title}
                  desc={description}
                  date={date}
                  korDate={updatedAt}
                  href={`/${category}/${slug}`}
                  tag={tag}
        />
      </StyledPostList>
        )
}

export default ListRow

const StyledPostList = styled.li`
`