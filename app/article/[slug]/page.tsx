// TODO: blog/[slug].tsx

import { getPost } from "../../utils/article";
import Article from "../../_components/article/Article";
import fs from "fs";
import { markdownRegex } from "#src/lib";
import path from "path";
import { POSTS_DIR } from "#src/config";
import { redirect } from "next/navigation";

const blogDir = path.join(process.cwd(), POSTS_DIR, "blog"); // current directory/posts

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(blogDir).filter((f) => {
    return !f.startsWith(".DS_");
  });
  const paths = fileNames.map((fileName) => ({
    slug: fileName.replace(markdownRegex, ""),
  }));
  return paths;
}

export default async function ArticlePage({ params }: any) {
  const props = await getPost(params.slug);
  if (!props) {
    redirect("/");
  }
  return <>{props.post && <Article {...props} />}</>;
}
