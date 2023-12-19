import { Post } from '#src/type';

export const markdownRegex = /(\.mdx$)|(\.md$)|(\.markdown$)/;

export const sortByDate = (a: Post, b: Post) => {
  return (
    new Date(b.frontMatter.recentUpdatedDate || b.frontMatter.date).valueOf() -
    new Date(a.frontMatter.recentUpdatedDate || a.frontMatter.date).valueOf()
  );
};

export const addRecentUpdateDateToFrontMatter = () => {};
