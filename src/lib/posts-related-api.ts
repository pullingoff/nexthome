import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '.';
import { POST_DIRS } from '#config/index';
import { IFrontMatter, IPost } from '#type/post';
import memoize from 'memoizee';

const retrieveAllPosts = async (): Promise<IPost[]> => {
  let allFileNames: string[] = [];
  for (const menu of POST_DIRS) {
    const fileNames: string[] = fs
      .readdirSync(path.join(process.cwd(), 'posts', menu))
      .filter(f => {
        return !f.startsWith('.DS_');
      });

    const filesInDir: string[] = fileNames.map(file => {
      return `${menu}/${file}`;
    });
    allFileNames = [...allFileNames, ...filesInDir];
  }

  const allPostsData: IPost[] = allFileNames.map(fileName => {
    const slug = fileName.split('/')[1].split('.mdx')[0];
    const fullPath = path.join(process.cwd(), 'posts', fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8'); // path에 있는 파일 내용 읽어오기
    const { data: frontmatter, content: body } = matter(fileContents);
    const fm: IFrontMatter = frontmatter as IFrontMatter;

    return { frontmatter: fm, body, slug };
  });
  return allPostsData
    .filter(f => {
      return f.frontmatter?.published != false;
    })
    .sort(sortByDate);
};

export const getAllPosts: () => Promise<IPost[]> = memoize(retrieveAllPosts);

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
    (prev: string[], curr: IPost) => {
      curr.frontmatter.tags.forEach((tag: string) => {
        prev.push(tag);
      });
      return prev;
    },
    []
  );

  const tagWithCount = [...new Set(tags)].map(tag => ({
    tag,
    count: tags.filter(t => t === tag).length,
  }));
  // console.log(tagWithCount); //  { tag: 'TDD', count: 1 },
  return tagWithCount.sort((a: ITag, b: ITag) => b.count - a.count);
};

export const getAllTags: () => Promise<ITag[]> = memoize(retrieveAllTags);
