import { retrieveAllTags } from "../utils/tag";
import TagList from "../_components/article/TagList";
import ListLayout from "../_components/layout/ListLayout";
import { getAllPosts, getPostsByPage } from "../utils/article";
import { POSTS_PER_PAGE } from "#src/config";

async function getTags() {
  const tags = await retrieveAllTags();
  return tags;
}

// 해당 페이지의 글 불러오기
async function getArticlesByPage() {
  const posts = await getPostsByPage(1);
  return posts;
}

export default async function ArticleListPage() {
  const allTags = await getTags();
  const { posts } = await getArticlesByPage();

  return (
    <>
      <TagList tags={allTags} />
      <ListLayout posts={posts} />
    </>
  );
}
