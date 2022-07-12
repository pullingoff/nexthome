// SEO HTML MetaData
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

// guestbook

export interface IIssue {
  name: string;
  labels: any;
}

export interface IMsg {
  title: string;
  body: string;
  labels: string[];
}
