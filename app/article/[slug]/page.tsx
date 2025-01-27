import { getPost } from "lib/util/article";
import Article, { ArticleComments } from "components/article/Article";
import fs from "fs";
import path from "path";
import { POSTS_DIR } from "config";
import { redirect } from "next/navigation";
import { MARKDOWN_REGEX } from "lib/util/markdown";

const blogDir = path.join(process.cwd(), POSTS_DIR, "blog"); // current directory/posts

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(blogDir).filter((f) => {
    return !f.startsWith(".DS_");
  });
  const paths = fileNames.map((fileName) => ({
    slug: fileName.replace(MARKDOWN_REGEX, ""),
  }));
  return paths;
}

export default async function ArticlePage({ params }: any) {
  const props = await getPost(params.slug);
  if (!props) {
    redirect("/");
  }
  return (
    <>
      {props.post && <Article {...props} />}
      <ArticleComments />
    </>
  );
}
