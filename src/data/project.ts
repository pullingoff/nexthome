import { IProject } from '#type/index';

export const ProjectListData: IProject[] = [
  {
    title: ' ๐ฑ Next.js Blog',
    isVisible: true,
    slug: 'pjnxblog',
    type: 'Webapp',
    thumbnail: 'nxth-bright',
    shortDescription: 'SSR์ ์ ๊ทน ํ์ฉํด Next.js๋ก ํ๋๋ถํฐ ์ด๊น์ง ๋ง๋  ๋ธ๋ก๊ทธ',
    longDescription: [
      'React์ ํ๋ ์์ํฌ์ธ Next.js๋ก ๊ฐ๋ฐํด ์๋ฒ์ฌ์ด๋๋ ๋๋ง์ ํ๊ณ , ์ฑ๋ฅ์ ์ต์ ํํ์ต๋๋ค.',
      '์คํ์ผ์ Styled-components๋ก CSS-IN-JS ํ์์ ์ ์ฉํ์ต๋๋ค.',
      'MDXRemote๋ก ๋งํฌ๋ค์ด ์ฒ๋ฆฌ๋ฅผ, Vercel๋ก ๋ฐฐํฌ๋ฅผ ํ์ต๋๋ค!',
      'ํ์์ ๊ถ๊ธํ๋ ๊ธฐ์ ๋ค์ ๋ง์๊ป ์ ์ฉํด๋ณผ ์ ์์ด ์ด๋ ต์ง๋ง ์ฆ๊ฑฐ์ ๊ณ ์!',
      '๋ฆฌํฉํ ๋ง๋ ํ๊ณ  ์๋ก์ด ๊ธฐ๋ฅ๋ค์ ๋ํด๊ฐ๊ณ  ์์ด์.',
    ],
    link: 'https://github.com/pullingoff/',
    date: '2022.03',
    imgPathList: ['nxth1.png', 'nxth2.png'],
  },
  {
    title: 'Vuepress TIL & Note',
    isVisible: true,
    slug: 'pjtil',
    type: 'Webapp',
    thumbnail: 'til-bright',
    shortDescription: '๋๋ง์ ๋ฐฑ๊ณผ์ฌ์  ๊ฐ์ ์กด์ฌ! ๋งค์ผ ๋ฐฐ์ด ๊ฒ์ ๊ธฐ๋กํด๋ก๋๋ค.',
    longDescription: [
      'Today I Learned.',
      '๊ธฐ๋ก์ ๊ธฐ์ต๋ณด๋ค ํ์ด ์๋๋ค.',
      '๋งค์ผ ์๋ก ์๊ฒ ๋ ์ง์์ ์ง์  ์ ๋ฆฌํด๋ณด๋ฉด์ ๋ด์ฌํํฉ๋๋ค.',
      'Vuepress๋ก ๊ฐ๋ณ๊ฒ ๊ตฌํํ์ผ๋ฉฐ, 2019๋๋ถํฐ์ ๊ณต๋ถ ๊ธฐ๋ก์ด ๋จ์์์ด์!',
      'note์๋ ๊ฐ๋ณ๊ฒ ๋  ์๊ฐ๊ณผ ๊ฐ๋ฐํ๋ค ๋๋ ๊ฒ๋ค์ ์ ์ด๋๊ณค ํ์ต๋๋ค.',
    ],
    link: 'https://github.com/pullingoff',
    date: '2022.04',
    imgPathList: ['til1.png'],
  },
  {
    title: '(์์ง ๊ฐ๋ฐ์ค) JS Quiz',
    isVisible: false,
    slug: 'pjjsquiz',
    type: 'Webapp',
    thumbnail: 'jsq',
    shortDescription:
      '๋ํ๋ฏผ๊ตญ ๋ชจ๋  ํ๋ก ํธ์๋ ๊ฐ๋ฐ์๋ฅผ ์ํด! ์๋ฐ์คํฌ๋ฆฝํธ ํด์ฆ๋ฅผ ํ์ด๋ณผ ์ ์์ด์.',
    longDescription: [
      'React์ Redux๋ฅผ ์ฌ์ฉํด ๋ง๋ค์ด๋ณธ ์๋ฐ์คํฌ๋ฆฝํธ ํด์ฆ์๋๋ค.',
      '์ฒ์์ ์  ์ง์์ ํ์ธํด๋ณด๊ณ  ๋จ๋จํ ํ๊ณ  ์ถ์ด ์์ํ์ง๋ง',
      '๋ค๋ฅธ ๊ฐ๋ฐ์ ๋ถ๋ค๊ณผ ๋๋๋ฉด ๋ ์ข์๊ฑฐ ๊ฐ์ ์ฌ๋ฌ ๊ธฐ๋ฅ์ ์ถ๊ฐํด๋ดค์ด์.',
    ],
    link: 'https://github.com/pullingoff',
    date: '2022.04',
    imgPathList: [],
  },
];
