import {
  Education,
  WorkExperience,
  HeaderInfo,
  OtherExperience,
  Project,
  Skill,
} from "type";

export const HEADER_INFO: HeaderInfo = {
  name: "박하은",
  job: "프론트엔드 엔지니어", //'Frontend Engineer',
  email: "devhaeun@gmail.com",
  github: "https://github.com/pullingoff",
  mainSentence: '"거미는 자신의 실로써 공간의 자유에 이른다."',
  firstSentences: [
    "자기 주도적으로, 또 팀과 함께 성장하고자 하는 개발자 박하은입니다.",
    '"팀과 함께 성장하고 더 나은 개발 문화를 만들고자 고민하고 행동한다"는 평가 피드백을',
    "받았을 정도로 조직 내 개발 생산성을 높일 방법을 찾고 실천합니다.",
  ],
};

export const PROJECTS: Project[] = [
  {
    organization: "개인 블로그",
    link: "https://haeun.vercel.app",
    description:
      "라이트하우스 접근성, 최적화, SEO 점수 만점으로 직접 디자인, 개발하여 꾸준히 고도화 중인 블로그",
    period: "2022.02 ~ 현재",
    items: [
      {
        skills: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
          "husky",
          "Git Workflow",
        ],
        descriptions: [
          "직접 디자인하고 스타일 구현, mobile-first, 반응형 웹앱으로 다양한 기기에서 글을 읽을 수 있음",
          "사이트맵과 페이지별 메타 태그를 사용해 SEO를 적용하고, 배포 시마다 검색 엔진에 등록하도록 자동화",
        ],
      },
    ],
  },
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    organization: "머스트잇",
    description: "프론트엔드 엔지니어",
    period: "2024.02 ~ 현재",
    projects: [
      {
        title: "프론트엔드 개발",
        // description: "국내 탑 명품 이커머스인 머스트잇 서비스의 프론트엔드와 BFF API를 개발",
        skills: [
          "Next.js",
          "TypeScript",
          "react-query",
          "zod",
          "zustand",
          "Vue",
        ],
        details: [
          "Vue 2로 개발된 주문서 e2e 테스트 구현 후 Next.js 15로 마이그레이션 및 성능개선",
          "머스트잇 웹뷰 및 BFF API 개발",
        ],
      },
    ],
  },
  {
    organization: "파스토",
    description: "프론트엔드 엔지니어",
    period: "2022.07 ~ 2023.08",
    projects: [
      {
        title: "파스토셀프(쇼핑몰 통합관리 솔루션) 2.0 개발",
        description:
          "네이버 No.1 공식 풀필먼트 협력사인 파스토의 새로운 쇼핑몰 통합관리 솔루션",
        skills: [
          "React",
          "TypeScript",
          "react-query",
          "react-hook-form",
          "MUI",
        ],
        details: [
          "아토믹 디자인과 Compound Components 패턴을 활용한 공통 Input, Textarea 컴포넌트를 설계 및 개발",
          "react-hook-form을 포함한 고차 컴포넌트를 개발해 form 구현에 필요한 코드량을 30% 이상 감소",
          "핵심 기능인 택배 예약 프로세스와 상품 등록, 결제 내역 등의 페이지를 개발하고 전체 레이아웃 스타일 및 반응형으로 구축",
        ],
      },
      {
        title: "정산 백오피스 개선 및 유지보수",
        skills: ["React", "TypeScript", "Redux", "react-query", "MUI"],
        details: [
          "확장 가능한 MUI 기반 공통 컴포넌트(Select, Header, Accordion 등)를 개발해 코드의 재사용성을 높임",
          "디자인 없이 백엔드 개발자들과 소통하며 사용성을 고려한 UX 개발",
        ],
      },
      {
        title: "홈페이지 테스트 자동화",
        skills: ["Cypress"],
        details: [
          "테스트 시 휴먼에러가 자주 발생했던 견적 문의 관련 페이지 개선을 위해 모든 케이스의 TC를 작성하고 버그 목록을 문서화",
          "Cypress로 견적 문의, 문의 목록, 조회 페이지 E2E 자동화 테스트 구현 및 POM 패턴을 사용해 유지보수 용이한 코드 작성",

          "테스트에 반복적으로 사용되는 로그인, 로그아웃 등의 커스텀 커맨드를 구현해 휴먼 에러 제로화",
        ],
      },
      {
        title: "팀 문화와 생산성에 기여",
        skills: [],
        details: [
          "동료와 함께 성장하고자 스터디를 조직해 6개월 이상 주도하며 함수형 프로그래밍과 Next.js, 회고 스터디 진행",
          "업데이트가 되어있지 않은 프로젝트 설정 가이드를 현행화해 신규 입사자의 온보딩을 도움",
        ],
      },
    ],
  },
  {
    organization: "유클리드소프트",
    description: "풀스택 엔지니어",
    period: "2020.12 ~ 2022.06",
    projects: [
      {
        title: "국가정보자원관리원 종합관제 보안시스템 (nMAPS)",
        skills: ["Python", "Neo4j", "Django REST", "Shell", "go.js"],
        description:
          "우리나라 모든 공공기관 웹 서비스, 네트워크, 물리 호스트간 관계를 시각화해 관제하는 프로그램",
        details: [
          "매일 수집되는 관제 데이터를 Python으로 가공한 뒤 Neo4j 쿼리를 실행하는 Docker Batch Job 구현",
          "Django REST 프레임워크로 어드민 페이지의 GDB 관련 부분 모델링 및 CRUD 폼 구현",
          "go.js로 네트워크 분류체계 관리자 조회용 웹의 이벤트, 인터랙션 개발",
        ],
      },
      {
        title:
          "창업진흥원 창업교육 플랫폼, KAIST 약물 상호작용 예측 하이브리드 앱 구축",
      },
    ],
  },
];

export const OTHER_EXPERIENCES: OtherExperience[] = [
  {
    organization: "펜지콘 발표: 회사에서 성장할 수 있는 환경 만들기",
    link: "https://haeun.vercel.app/blog/2309-fengicon",
    period: "2023.09",
    details: [
      "사내 기술 스터디를 만들고 주도했던 경험과 팀원들과 함께 성장하면 좋은 점, 스터디를 이끌 때의 마인드셋 등을 공유",
    ],
  },
  {
    organization: "JunctionX Seoul 해커톤 통역 봉사",
    link: "https://haeun.vercel.app/blog/1905-junctx",
    period: "2019",
    details: [
      "행사 준비, 영어 통역 및 VC 투자자와 국내 개발자 간 스타트업 미팅과 멘토링 세션에서 한-영 통역 담당",
    ],
  },
  {
    organization: "Humber FYE 또래 멘토",
    link: "https://humber.ca/student-life/fye/",
    period: "2019 ~ 2020",
    details: [
      "동아리 행사를 기획, 주간 뉴스레터를 발행하고 신입생들의 또래 멘토로 활동하며 학교 적응을 도움",
    ],
  },
];

export const education: Education[] = [
  {
    institute: "대덕인재개발원",
    period: "2020.04 ~ 2020.12",
  },
  {
    institute: "SQLD 취득",
    period: "2020.10",
  },
  {
    institute: "Humber College, Marketing",
    period: "2019 우등 졸업",
    details: [
      "캐나다에 위치한 대학으로, Toronto Marlies의 교내 세일즈 단원으로 발탁되어 디지털 마케팅 및 경기 티켓 판매",
      "양적 조사의 일환으로 70명의 남성에게 설문조사를 진행하고 포커스 그룹 인터뷰",
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    type: "프론트엔드",
    items: ["Next.js", "React", "TypeScript", "react-query", "zod"],
  },
  {
    type: "그 외 업무에 활용가능한 기술",
    items: ["SQL", "Python", "Neo4j"],
  },
  {
    type: "영어",
    items: [
      "의견을 자유롭게 표현할 수 있고 단어의 뉘앙스 차이를 알아 적절한 변수명과 메서드명을 짓고자 노력함",
    ],
  },
];
