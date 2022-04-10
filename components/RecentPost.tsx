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
`

const Title = styled.h1`
font-weight: var(--fw-extra-bold);
font-size: var(--3xl);
`

const StyledPostLi = styled.li`
font-weight: var(--fw-medium);
font-size: 0.95rem;
margin-bottom: var(--sm);
  &:before {
    content: '-';
    margin-right: var(--md);
  }

  &:hover {
    color: var(--hover-color);
  }
  @media (min-width: ${({theme}) => theme.device.sm}) {
    font-size: var(--text-md);
    line-height: var(--text-lg);
  }
`