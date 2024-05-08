import { retrieveAllTags } from "../utils/tags";
import TagList from "../_components/article/TagList";
import ListLayout from "../_components/layout/ListLayout";
import { getAllPosts, getPostsByPage } from "../utils/articles";

async function getTags() {
  const tags = await retrieveAllTags();
  return tags;
}

// 해당 페이지의 글 불러오기
async function getArticlesByPage() {
  const posts = await getPostsByPage(1);
  return posts;
}

// TODO: [page_index].tsx
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
