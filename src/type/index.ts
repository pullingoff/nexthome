import { ParsedUrlQuery } from 'querystring';

export interface Metadata {
  title: string;
  url?: string;
  date?: string;
}

export interface WorkProject {
  title?: string;
  tech: string[];
  link?: string;
  description?: string;
  details: string[];
}

export interface Experience {
  organization: string;
  description: string;
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
  course: string;
  period: string;
  details?: string[];
}

export interface FrontMatter {
  title: string;
  tags: string[];
  published?: boolean;
  date: string;
  description: string;
  path: string;
}

export interface Post {
  slug: string;
  frontmatter: FrontMatter;
  body: string;
  headings?: Heading[];
}

export interface ITag extends ParsedUrlQuery {
  keyword: string;
  tag: string;
}

export interface MyInfo {
  name: string;
  job: string;
  email: string;
  github: string;
  firstSentences: string[];
}

// 글의 목차 (Table of Contents)
export interface Heading {
  text: string;
  link: string;
}
