import { FrontMatter, Post } from "#src/type";
import { POST_DIRS, POSTS_DIR } from "#src/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "#src/lib";

const retrieveAllPosts = async (): Promise<Post[]> => {
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

  const allPostsData: Post[] = allFileNames.map((fileName) => {
    const slug = fileName.split("/")[1].split(".mdx")[0];
    const fullPath = path.join(process.cwd(), POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // path에 있는 파일 내용 읽어오기
    const { data, content: body } = matter(fileContents);
    const frontMatter = data as FrontMatter;

    return { frontMatter, body, slug };
  });

  return allPostsData.sort(sortByDate);
};

// 최신 글 10개
export const getRecentPosts = async () => {
  const allPosts = await retrieveAllPosts();
  return {
    recentPosts: allPosts.sort(sortByDate).slice(0, 9), // prop으로 모든 블로그 포스트 넘겨주기
  };
};
