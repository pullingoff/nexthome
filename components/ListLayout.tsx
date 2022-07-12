import styled from 'styled-components';
import { IPost } from '../types';
import PostCard from './post/PostCard';

const ListLayout = ({ posts }: { posts: IPost[] }) => {
  return (
    <main>
      <PostUl>
        {posts.map(post => (
          <li key={post.slug}>
            <PostCard href={`/blog/${post.slug}`} post={post} />
          </li>
        ))}
      </PostUl>
    </main>
  );
};

export default ListLayout;

const PostUl = styled.ul`
  margin: 30px auto;
  display: grid;
  grid-gap: 24px;
  list-style: none;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
