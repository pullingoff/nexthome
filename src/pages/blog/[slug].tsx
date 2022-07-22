import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseMarkdownToMdx } from '#utils/Markdown';
import Post from '#components/post/Post';
import { markdownRegex } from '#lib/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IHeading, IPost } from '#type/post';
import { getAllPosts } from '#lib/posts-related-api';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const blogDir = path.join(process.cwd(), 'posts', 'blog'); // current directory/posts

const PostPage = (props: {
  post: IPost;
  mdxSource: MDXRemoteSerializeResult;
  headings: IHeading[];
}) => {
  return <Post {...props} />;
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = fs.readdirSync(blogDir).filter(f => {
    return !f.startsWith('.DS_');
  });
  const paths = fileNames.map(fileNm => ({
    params: {
      slug: fileNm.replace(markdownRegex, ''),
    },
  }));

  return { paths, fallback: 'blocking' };
};

interface SlugInterface {
  [key: string]: string | string[] | null;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugInterface;

  const markdownToMeta = fs.readFileSync(
    path.join(blogDir, slug + '.mdx'),
    'utf-8'
  );
  const { content } = matter(markdownToMeta);

  const posts = await getAllPosts();
  const post = posts.find(p => p?.slug === slug);
  const headings = getHeadings(content);

  const mdxSource = await parseMarkdownToMdx(content);

  return { props: { post, mdxSource, headings } };
};

// post content에서 ## 찾아서 헤딩 구성 (목차용)
const getHeadings = (source: string) => {
  const regex = /^## (.*$)/gim;
  if (source.match(regex)) {
    return source.match(regex)?.map(heading => {
      const headingText = heading.replace('## ', '');
      // ?가 있을 경우 무한으로 링크가 붙어 필터링
      const link= '#' + headingText.replace("?","").replace(/ /g, '-').toLowerCase();

      return {
        text: headingText,
        link,
      };
    });
  }
  return [];
};
