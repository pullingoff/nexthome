import { IProject } from "type";

export const ProjectList : Array<IProject> = [
    {
        title : ' 📱 Blog Made With Next.js',
        slug: 'pjnxblog',
        type : 'Webapp',
        thumbnail : 'nexthome.png',
        shortDescription: 'SSR을 적극 활용해 Next.js로 하나부터 열까지 만든 블로그',
        longDescription: 'React의 프레임워크인 Next.js로 개발해 서버사이드렌더링을 하고, 성능을 최적화했어요. 📹\
         스타일은 Styled-components로 CSS-IN-JS 형식을 적용했습니다. MDXRemote로 마크다운 처리를, Vercel로 배포를 했답니다! 🎶\
         평소에 궁금하던 기술들을 마음껏 적용해볼 수 있어 어렵지만 즐거웠어요! 리팩토링도 하고 새로운 기능들을 더해가고 있어요.',
        link: 'https://github.com/pullingoff/',
        date: '2022.03'
    },  
    {
        title : 'TIL와 Note 기록 With Vuepress',
        slug: 'pjtil',
        type : 'Webapp',
        thumbnail: 'nexthome.png',
        shortDescription : '나만의 백과사전 같은 존재! 매일 배운 것을 기록해둡니다.',
        longDescription: 'Today I Learned. 기록은 기억보다 힘이 셉니다. \
        매일 새로 알게 된 지식을 직접 정리해보면서 내재화합니다. Vuepress로 가볍게 구현했으며, 2019년부터의 공부 기록이 남아있어요!\
        note에는 가볍게 든 생각과 개발하다 느낀 것들을 적어두곤 했습니다.',
        link: 'https://github.com/pullingoff/vue-til',
        date: '2022.04'
    },  
    {
        title : 'JS Quiz',
        slug: 'pjjsquiz',
        type : 'Webapp',
        thumbnail: 'nexthome.png',
        shortDescription : '대한민국 모든 프론트엔드 개발자를 위해! 자바스크립트 퀴즈를 풀어볼 수 있어요.',
        longDescription: '자세한설명자세한설명자세한설명자세한설명, \
            자세한설명자세한설명자세한설명자세한설명자세한설명',
        link: 'https://blah',
        date: '2022.04'
    },  
]