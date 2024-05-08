import { getAllPosts, getPostsByPage } from "../../../utils/article";
import { POSTS_PER_PAGE } from "app/config";
import { getAllTags } from "../../../utils/tag";
import TagList from "../../../_components/article/TagList";
import ListLayout from "../../../_components/layout/ListLayout";
import Pagination from "../../../_components/layout/Pagination";

type Params = {
  page_index: string;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const pageTotal = Math.round(posts.length / POSTS_PER_PAGE);
  const paths = [];
  for (let i = 0; i <= pageTotal; i++) {
    paths.push({
      page_index: `${i + 1}`,
    });
  }

  return paths;
}

async function getTags() {
  const tags = await getAllTags();
  return tags;
}

// 해당 페이지의 글 불러오기
async function getArticlesByPage(page_num: number) {
  const posts = await getPostsByPage(page_num);
  return posts;
}

export default async function ArticleListPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: any;
}) {
  const page_num = parseInt(params.page_index || "1");
  const allTags = await getTags();
  const { posts, currentPage, totalPageCount } = await getArticlesByPage(
    page_num
  );

  return (
    <>
      <TagList tags={allTags} />
      <ListLayout posts={posts} />
      <Pagination
        path="article/page"
        totalPageCount={totalPageCount}
        currentPage={currentPage}
      />
    </>
  );
}
