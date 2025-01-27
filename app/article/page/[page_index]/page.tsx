import { getAllPosts, getPostsByPage } from "lib/util/article";
import { POSTS_PER_PAGE } from "config";
import ListLayout from "components/layout/ListLayout";
import Pagination from "components/layout/Pagination";

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

// 해당 페이지의 글 불러오기
async function getArticlesByPage(page_num: number) {
  const posts = await getPostsByPage(page_num);
  return posts;
}

export default async function ArticleListPage({ params }: { params: Params }) {
  const page_num = parseInt(params.page_index || "1");
  const { posts, currentPage, totalPageCount } = await getArticlesByPage(
    page_num
  );

  return (
    <section>
      <ListLayout posts={posts} />
      <Pagination
        path="article/page"
        totalPageCount={totalPageCount}
        currentPage={currentPage}
      />
    </section>
  );
}
