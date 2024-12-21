export interface FrontMatter {
  title: string;
  tags: string[];
  date: string;
  recentUpdatedDate?: string;
  description: string;
  path: string;
}

export interface Post {
  slug: string;
  frontMatter: FrontMatter;
  body: string;
  headings?: Heading[];
}

// 글의 목차 (Table of Contents)
export interface Heading {
  text: string;
  link: string;
}
