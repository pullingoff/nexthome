import styled from 'styled-components'

import { IPost } from '../type'

const RecentPost = ({recentPosts}: {recentPosts: IPost[]}) => {
    return (
        <StyledSection>
        <Title>Recent Posts</Title>
        <ul>
          {recentPosts.map(({ frontmatter }, idx) => (
            <StyledPostLi key={idx}>
              {frontmatter.title}
            </StyledPostLi>
          ))
          }
        </ul>
      </StyledSection>
    )
}

export default RecentPost

const StyledSection = styled.section`
margin-bottom: var(--lg);
&:before {
  content: ' ';
  display: block;
  border-bottom: 1px solid var(--border-color);
}
cursor: pointer
`

const Title = styled.h1`
font-weight: 800;
font-size: var(--3xl);

&:hover {
  animation: color-change 3s 2;
  @keyframes color-change {
    0% { color: var(--theme1-color) }
    50% { color: var(--theme3-color); }
    100% { color: var(--color-point-pink) }
  }
}
`

const StyledPostLi = styled.li`
font-weight: 500;
font-size: 0.95rem;
margin-bottom: var(--sm);
  &:before {
    content: '-';
    margin-right: var(--md);
  }

  &:hover {
    color: var(--color-point-pink);
  }
  @media (min-width: ${({theme}) => theme.device.sm}) {
    font-size: var(--text-md);
    line-height: var(--text-lg);
  }
`