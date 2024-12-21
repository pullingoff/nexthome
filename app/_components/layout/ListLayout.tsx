import { Post } from "type";
import ArticleCardItem from "../article/ArticleCardItem";

const ListLayout = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid gap-5 mx-auto md:grid-cols-[repeat(2,1fr)]">
      {posts.map((post) => (
        <li key={post.slug}>
          <ArticleCardItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ListLayout;
