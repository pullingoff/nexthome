import { Post } from '#src/type';

export const markdownRegex = /(\.mdx$)|(\.md$)|(\.markdown$)/;

export const sortByDate = (a: Post, b: Post) => {
  return (
    new Date(b.frontmatter.date).valueOf() -
    new Date(a.frontmatter.date).valueOf()
  );
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
