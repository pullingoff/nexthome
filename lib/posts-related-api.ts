import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '.';
import { POST_DIRS } from '@config/index';
import { IFrontMatter, IPost } from 'types';
import memoize from 'memoizee';

export const retrieveAllPosts = async (): Promise<IPost[]> => {
  // 모든 Post기 때문에 디렉토리 주소를 포함해야함
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
  return allPostsData.sort(sortByDate);
};

export const getAllPosts: () => Promise<IPost[]> = memoize(retrieveAllPosts);

// async로 할지 다시 한번 생각해보기
export const getRecentPosts = async () => {
  // getAllPosts()
  const allPostsData = await getAllPosts();
  return {
    recentPosts: allPostsData.sort(sortByDate).slice(0, 9), // prop으로 모든 블로그 포스트 넘겨주기
  };
};

export const getAllTagsFromPosts = async () => {
  const tags = (await getAllPosts()).reduce((prev: string[], curr) => {
    curr.frontmatter.tags.forEach(tag => {
      prev.push(tag);
    });
    return prev;
  }, []);

  const tagWithCount = [...new Set(tags)].map(tag => ({
    tag,
    count: tags.filter(t => t === tag).length,
  }));

  return tagWithCount.sort((a, b) => b.count - a.count);
};
