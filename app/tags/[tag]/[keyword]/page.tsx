import { getAllPosts } from "util/article";
import { getAllTags } from "util/tag";
import { POSTS_PER_PAGE } from "config";
import { TagPostList } from "./keyword-page";

export async function generateStaticParams() {
  const allTags = await getAllTags();
  const posts = await getAllPosts();
  const paths: { tag: string; keyword: string }[] = [];

  allTags.forEach(({ tag }) => {
    const tagsCount = posts.filter((post) =>
      post.frontMatter.tags.find((t) => t === tag)
    ).length;
    [...new Array(Math.round(tagsCount / POSTS_PER_PAGE)).keys()].forEach(
      (i) => {
        paths.push({ tag, keyword: `${i + 1}` });
      }
    );
  });
  return paths;
}

async function getTagssss({
  tag: _tag,
  keyword,
}: {
  tag: string;
  keyword: string;
}) {
  const tag = decodeURIComponent(_tag);
  const allPosts = await getAllPosts();
  const currentPage = parseInt(keyword);
  const postsWithTag = allPosts.filter((post) =>
    post.frontMatter.tags.find((t) => t === tag)
  );

  if (
    isNaN(currentPage) ||
    currentPage > Math.ceil(postsWithTag.length / POSTS_PER_PAGE) ||
    currentPage < 1
  ) {
    return {
      notFound: true,
    };
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const resultPosts = postsWithTag.slice(startIndex, endIndex);

  return {
    posts: resultPosts.map((post) => ({ ...post, path: "" })),
    tag,
    currentPage,
    totalPageCount: Math.ceil(postsWithTag.length / POSTS_PER_PAGE),
  };
}

type Params = {
  tag: string;
  keyword: string;
};

export default async function TagPage({ params }: { params: Params }) {
  const { posts, tag, currentPage, totalPageCount } = await getTagssss(params);

  return (
    <section>
      {tag && (
        <TagPostList
          posts={posts}
          tag={tag}
          currentPage={currentPage}
          totalPageCount={totalPageCount}
        />
      )}
    </section>
  );
}
