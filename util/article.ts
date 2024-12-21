import { FrontMatter, Heading, Post } from "type";
import { POST_DIRS, POSTS_DIR, POSTS_PER_PAGE } from "config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getHeadings, parseMarkdownToMdx } from "./markdown";

const blogDir = path.join(process.cwd(), POSTS_DIR, "blog"); // current directory/posts

// 글 하나
export const getPost = async (slug: string) => {
  const posts = await getAllPosts();
  const post = posts.find((p) => p?.slug === slug)!;
  if (!post) {
    // 입력한 url(slug)가 유효하지 않은 경우
    return;
  }
  const markdownToMeta = fs.readFileSync(
    path.join(blogDir, slug + ".mdx"),
    "utf-8"
  );
  const { content } = matter(markdownToMeta);
  const headings = getHeadings(content);
  const mdxSource = await parseMarkdownToMdx(content);

  return { post, headings, mdxSource };
};

// 글 전체
export const getAllPosts = async (): Promise<Post[]> => {
  let allFileNames: string[] = [];
  for (const menu of POST_DIRS) {
    const fileNames: string[] = fs
      .readdirSync(path.join(process.cwd(), POSTS_DIR, menu))
      .filter((f) => {
        return !f.startsWith(".DS_");
      });

    const filesInDir: string[] = fileNames.map((file) => {
      return `${menu}/${file}`;
    });
    allFileNames = [...allFileNames, ...filesInDir];
  }

  const allPosts: Post[] = allFileNames.map((fileName) => {
    const slug = fileName.split("/")[1].split(".mdx")[0];
    const fullPath = path.join(process.cwd(), POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // path에 있는 파일 내용 읽어오기
    const { data, content: body } = matter(fileContents);
    const frontMatter = data as FrontMatter;

    return { frontMatter, body, slug };
  });

  return allPosts.sort(sortByDate);
};

// 페이지 갯수별 글
export const getPostsByPage = async (page: number) => {
  const allPosts = await getAllPosts();
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const totalPageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const orderedPosts = allPosts.slice(startIndex, endIndex);

  return {
    posts: orderedPosts,
    currentPage: page,
    totalPageCount,
  };
};

// 최신 글 10개
export const getRecentPosts = async () => {
  const allPosts = await getAllPosts();
  return {
    recentPosts: allPosts.slice(0, 9),
  };
};

export const sortByDate = (a: Post, b: Post) => {
  return (
    new Date(b.frontMatter.recentUpdatedDate || b.frontMatter.date).valueOf() -
    new Date(a.frontMatter.recentUpdatedDate || a.frontMatter.date).valueOf()
  );
};
