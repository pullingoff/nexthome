import styled from 'styled-components';

import { IPost } from '@type/post';

const RecentPost = ({ recentPosts }: { recentPosts: IPost[] }) => {
  return (
    <StyledSection>
      <Title>Recent Posts</Title>
      <ul>
        {recentPosts.map(({ frontmatter, slug }, idx) => (
          <a key={idx} href={`/blog/${slug}`}>
            <StyledPostLi>{frontmatter.title}</StyledPostLi>
          </a>
        ))}
      </ul>
    </StyledSection>
  );
};

export default RecentPost;

export const StyledSection = styled.section`
  margin-bottom: var(--lg);
  &:before {
    content: ' ';
    display: block;
  }
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: var(--9xl);

  &:hover {
    animation: color-change 3s 2;
    @keyframes color-change {
      0% {
        color: var(--theme1-color);
      }
      50% {
        color: var(--theme3-color);
      }
      100% {
        color: salmon;
      }
    }
  }
`;

const StyledPostLi = styled.li`
  font-weight: 500;
  font-size: 1.05rem;
  margin-bottom: var(--sm);
  &:before {
    content: '-';
    margin-right: var(--md);
  }

  &:hover {
    color: salmon;
  }
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
    line-height: var(--text-lg);
  }
`;
