import { Post } from "#src/type";
import ArticleCardItem from "../article/ArticleCardItem";

const ListLayout = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid gap-5 mx-auto my-6 md:grid-cols-[repeat(2,1fr)]">
      {posts.map((post) => (
        <li key={post.slug}>
          <ArticleCardItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ListLayout;
