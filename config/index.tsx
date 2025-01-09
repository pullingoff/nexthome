export const METADATA = {
  url: "https://haeun.dev",
  title: "pullingoff",
  author: "박하은",
  description: "프론트엔드 개발자 박하은의 블로그입니다.",
  email: "devhaeun@gmail.com",
  github: "pullingoff",
  linkedinLink: "https://www.linkedin.com/in/hailey-park/",
};

// 글 목록 페이지네이션
export const POSTS_PER_PAGE = 10;

// nav bar에 나타날 메뉴
export const MENUS = [
  { title: "기록", path: "/article" },
  // { title: "이력서", path: "/resume" },
];

// parent directory name
export const POSTS_DIR = "posts";

// 공개할 posts 폴더 안의 subdirectories
export const POST_DIRS: string[] = ["blog"];
