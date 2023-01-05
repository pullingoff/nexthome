import styled from 'styled-components';
import { Post } from '#src/type';
import PostCardItem from './posts/PostCardItem';

const S: any = {};
const ListLayout = ({ posts }: { posts: Post[] }) => {
  return (
    <main>
      <S.PostList>
        {posts.map(post => (
          <li key={post.slug}>
            <PostCardItem href={`/blog/${post.slug}`} post={post} />
          </li>
        ))}
      </S.PostList>
    </main>
  );
};

export default ListLayout;

S.PostList = styled.ul`
  margin: 30px auto;
  display: grid;
  grid-gap: 24px;
  list-style: none;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
