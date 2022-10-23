import { IFrontMatter } from '#lib/posts-related-api';

export interface IPost {
  slug: string;
  frontmatter: IFrontMatter;
  body: string;
  headings?: IHeading[];
}

// 글의 목차 (Table of Contents)
export interface IHeading {
  text: string;
  link: string;
}
