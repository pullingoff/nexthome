import { Post } from "app/_components/type";
import PostCardItem from "./posts/PostCardItem";

const ListLayout = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid gap-5 mx-auto my-6 md:grid-cols-[repeat(2,1fr)]">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCardItem href={`/blog/${post.slug}`} post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ListLayout;
