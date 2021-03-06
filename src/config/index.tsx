export const METADATA = {
  url: 'https://haeun.vercel.app',
  title: '개발자 박하은',
  author: '박하은',
  description: '개발자 박하은의 블로그입니다.',
  twitter: 'devpullingoff',
  email: 'devhaeun@gmail.com',
  github: 'pullingoff',
  linkedinLink: 'https://www.linkedin.com/in/hailey-park/',
};

// 글 목록 페이지네이션
export const POSTS_PER_PAGE = 8;

// nav bar에 나타날 메뉴
export const MENUS = [
  { title: '기록', path: '/blog/page/1', emoji: '📝' },
  { title: '프로젝트', path: '/project', emoji: '🎞' },
  { title: '이력서', path: '/about', emoji: '🕷' },
  { title: 'TIL', path: 'https://pullingoff.github.io', emoji: '📓' },
];

// posts 폴더 안의 subdirectories
export const POST_DIRS: string[] = ['blog'];
