# 안녕하세요 👋

[블로그 구경 가기](https://haeun.vercel.app/)

![사이트 메인](https://user-images.githubusercontent.com/50111853/172634895-6693e000-5494-4af4-87f6-9d5eebaa3f41.png)

`타입스크립트`와 `Next.js`를 사용해 개발한 블로그입니다.
제 생각을 담은 글과 이력서 위주로 정리하고 있으며,
더 가벼운 글들은 [TIL](https://pullingoff.github.io)에서 만나보실 수 있습니다.

## 기능

- [x] 태그별 글 목록이 있고, 랜덤 포스트를 볼 수 있습니다.
- [x] 데스크탑에선 글의 목차를 클릭하면 원하는 부분으로 이동합니다.
- [x] 우측 아래 하이파이브 아이콘을 눌러 커피챗을 신청할 수 있습니다.

## frontmatter

```markdown
title
tags
date // 2020-12-25 08:00
description
published // optional
```

## 사용한 프레임워크, 기술 스택들

- 개발: `React`, `Next.js`, `TypeScript`  
- 스타일: `Styled-components`, `SCSS`  
- 마크다운 처리: `Markdown`, `MDXRemote`, `remark`  
- 기타: `Vercel`, `Git`

## 구현 예정

- [ ] 키워드로 글을 검색할 수 있습니다.
- [ ] 방명록을 남길 수 있습니다.
- [ ] 다크모드가 있어 원하는 테마로 볼 수 있습니다.
- [ ] 이미지 없는 글의 경우 공유 시 기본 썸네일이 뜹니다.
- [ ] 글의 이미지를 클릭하면 원본 이미지를 볼 수 있습니다.
- [ ] 배포 때마다 저절로 사이트맵이 생성되고, 구글 서치 콘솔에 등록됩니다.
- [ ] 랜덤 포스트를 가져오는 부분이 최적화되었습니다.
