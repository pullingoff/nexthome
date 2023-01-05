import styled from 'styled-components';
import S from '#styles/Common.styled';
import { Post } from '#src/type';

const RecentPost = ({ recentPosts }: { recentPosts: Post[] }) => {
  return (
    <>
      <S.PageTitle>Recent Posts</S.PageTitle>
      <ul>
        {recentPosts.map(({ frontmatter, slug }, idx) => (
          <a key={idx} href={`/blog/${slug}`}>
            <PostTitleItem>{frontmatter.title}</PostTitleItem>
          </a>
        ))}
      </ul>
    </>
  );
};

export default RecentPost;

const PostTitleItem = styled.li`
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
    font-size: var(--xl);
    line-height: var(--text-lg);
  }
`;
