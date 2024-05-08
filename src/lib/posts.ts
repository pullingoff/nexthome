import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from ".";
import { POST_DIRS, POSTS_DIR } from "#src/config";
import { FrontMatter, Post } from "#src/type";
import memoizeOne from "memoize-one";

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

export const getAllPosts: () => Promise<Post[]> = memoizeOne(retrieveAllPosts);

// 최신 글 10개
export const getRecentPosts = async () => {
  const allPostsData = await getAllPosts();
  return {
    recentPosts: allPostsData.sort(sortByDate).slice(0, 9), // prop으로 모든 블로그 포스트 넘겨주기
  };
};

type ITag = {
  count: number;
  tag: string;
};

const retrieveAllTags = async () => {
  const tags: string[] = (await getAllPosts()).reduce<string[]>(
    (prev: string[], curr: Post) => {
      curr.frontMatter.tags.forEach((tag: string) => {
        prev.push(tag);
      });
      return prev;
    },
    []
  );

  const tagWithCount = [...new Set(tags)].map((tag) => ({
    tag,
    count: tags.filter((t) => t === tag).length,
  }));
  return tagWithCount.sort((a: ITag, b: ITag) => b.count - a.count);
};

export const getAllTags: () => Promise<ITag[]> = retrieveAllTags;

const retrieveAllSlugs = async () => {
  const slugs: string[] = (await getAllPosts()).map((post) => {
    return post.slug;
  });

  return slugs;
};

export const getAllSlugs: () => Promise<string[]> =
  memoizeOne(retrieveAllSlugs);
