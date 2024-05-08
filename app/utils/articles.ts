import { FrontMatter, Post } from "#src/type";
import { POST_DIRS, POSTS_DIR, POSTS_PER_PAGE } from "#src/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "#src/lib";

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
  const orderedPosts = allPosts.slice(startIndex, endIndex);

  return {
    posts: orderedPosts,
    currentPage: page,
  };
};

// 최신 글 10개
export const getRecentPosts = async () => {
  const allPosts = await getAllPosts();
  return {
    recentPosts: allPosts.slice(0, 9),
  };
};
