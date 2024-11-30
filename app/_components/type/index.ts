export interface WorkProject {
  title?: string;
  tech?: string[];
  link?: string;
  description?: string;
  details?: string[];
}

export interface Experience {
  organization: string;
  description?: string;
  link?: string;
  period: string;
  projects?: WorkProject[];
  details?: string[];
}

export interface TechStack {
  type: string;
  skill: string[];
}

export interface Education {
  institute: string;
  course?: string;
  period: string;
  details?: string[];
}

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

export interface MyInfo {
  name: string;
  job: string;
  email: string;
  github: string;
  mainSentence: string;
  firstSentences: string[];
}

// 글의 목차 (Table of Contents)
export interface Heading {
  text: string;
  link: string;
}
