export interface IFrontMatter {
  title: string;
  category: string;
  tags: string[];
  published: boolean;
  date: string;
  description: string;
  path: string;
  socialImageUrl?: string;
  socialImageCredit?: string;
}

export interface IPost {
  category?: string;
  slug: string;
  frontmatter: IFrontMatter;
  body: string;
  path?: string;
  headings?: IHeading[];
}

export interface IHeading {
  text: string;
  link: string;
}

export interface ICustomMeta {
  title: string;
  url?: string;
  date?: string;
}

export interface IProject {
  title: string;
  isVisible: boolean;
  slug: string; // path (query string)
  type: string; // 어떤 앱인지
  thumbnail: string; // 이미지 파일명
  shortDescription: string;
  longDescription: string[];
  link: string; // 관련 링크
  date: string; // 작업 시기
  imgPathList?: string[];
}

export interface IIssue {
  name: string;
  labels: any;
}

export interface IMsg {
  title: string;
  body: string;
  labels: string[];
}
