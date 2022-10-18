# 안녕하세요 👋

[블로그 구경 가기](https://haeun.vercel.app/)

![사이트 메인](https://user-images.githubusercontent.com/50111853/172634895-6693e000-5494-4af4-87f6-9d5eebaa3f41.png)

`타입스크립트`와 `Next.js`를 사용해 개발한 블로그입니다.
제 생각을 담은 글과 이력서 위주로 정리하고 있으며,
더 가벼운 글들은 [TIL](https://pullingoff.github.io)에서 만나보실 수 있습니다.

## 소소한 기능들

- 게시글의 Tag 별로 조회할 수 있습니다.
- 데스크탑에선 글의 목차를 보고, 클릭해 해당 문단으로 이동할 수 있습니다.

## frontmatter

```markdown
title
tags
date // 2020-12-25 08:00
description
published // optional
```

## 사용한 프레임워크, 기술 스택들

개발: `React`, `Next.js`, `TypeScript`  
스타일: `Styled-components`, `SCSS`  
배포: `Vercel`  
마크다운 처리: `Markdown`, `MDXRemote`, `remark`  
기타: `Git`

## Coming Soon

- search bar
- guestbook
- dark mode, colorful mode
- 사진 클릭 시 확대 가능하게
- lint fix 성공시 run 하도록 package.json 수정 
- 랜덤 post slug 최적화