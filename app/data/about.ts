import { Education, Experience, MyInfo, TechStack } from "app/_components/type";

export const headerInfo: MyInfo = {
  name: "박하은",
  job: "프론트엔드 엔지니어", //'Frontend Engineer',
  email: "devhaeun@gmail.com",
  github: "https://github.com/pullingoff",
  mainSentence: '"거미는 자신의 실로써 공간의 자유에 이른다."',
  firstSentences: [
    "자기 주도적으로, 또 팀과 함께 성장하고자 하는 개발자 박하은입니다.",
    '"팀과 함께 성장하고 더 나은 개발 문화를 만들고자 고민하고 행동한다"는 평가 피드백을',
    "받았을 정도로 조직 내 개발 생산성을 높일 방법을 찾고 실천합니다.",
    // '- 풀스택 개발 경험이 있어 백엔드 개발자들과도 원활히 소통할 수 있어요.',
    "빠르게 학습하면서도 깊이를 다질 수 있도록 회사 밖에서도 개발에 시간을 쏟고 있습니다.",
    "문제 해결을 위한 라이브러리나 프레임워크나 도구가 있다면 언제든 배울 준비가 되어있습니다.",
  ],
};

export const projectExperiences: Experience[] = [
  {
    organization: "개인 블로그",
    link: "https://haeun.vercel.app",
    description:
      "라이트하우스 접근성, 최적화, SEO 점수 만점으로 직접 디자인, 개발하여 꾸준히 고도화 중인 블로그",
    period: "2022.02 ~ 현재",
    projects: [
      {
        tech: [
          "Next.js",
          "TypeScript",
          "styled-components",
          "next-mdx-remote",
          "Vercel",
          "husky",
        ],
        details: [
          "직접 디자인하고 스타일 구현, mobile-first, 반응형 웹앱으로 다양한 기기에서 글을 읽을 수 있음",
          "next-mdx-remote로 마크다운을 HTML로 재구성해 보여주고 frontmatter로 태그별 조회 가능",
          "사이트맵과 페이지별 메타 태그를 사용해 SEO를 적용하고, Git workflow로 배포 시마다 사이트맵을 생성해 구글 검색 엔진에 등록하도록 자동화",
          "husky로 깃 커밋 컨벤션을 지정해 일관성 있는 커밋 메시지를 작성하고자 노력함",
        ],
      },
    ],
  },
  // {
  //   organization: '별말, 씀',
  //   description: '롤링페이퍼 웹앱',
  //   period: '2022.05 ~ 09',
  //   projects: [
  //     {
  //       tech: ['React',함 'TypeScript', 'styled-components'],
  //       details: [
  //         '스타일을 커스터마이징할 수 있는 공통 컴포넌트 개발 (버튼, 텍스트 인풋, 링크 등)',
  //         '프론트엔드 개발을 맡았으나 백엔드 DB와 API 설계 과정에도 참여해 RESTful한 API를 설계',
  //         '서비스 기획부터 개발, 이후 3주간 운영을 하며 유저의 피드백을 실시간으로 적용 및 배포',
  //       ],
  //     },
  //   ],
  // },
];

export const workExperiences: Experience[] = [
  {
    organization: "머스트잇",
    description: "프론트엔드 개발자",
    period: "2024.02 ~ 현재",
    projects: [
      {
        title: "머스트잇 프론트엔드 개발",
        description:
          "국내 탑 명품 이커머스인 머스트잇 서비스의 프론트엔드와 BFF API를 개발",
        tech: ["Vue"],
        details: ["머스트잇 웹 및 BFF 패턴을 활용한 API 개발"],
      },
    ],
  },
  {
    organization: "파스토",
    description: "프론트엔드 개발자",
    period: "2022.07 ~ 2023.08",
    projects: [
      {
        title: "파스토셀프 2.0 개발",
        description:
          "네이버 No.1 공식 풀필먼트 협력사인 파스토의 새로운 쇼핑몰 통합관리 솔루션",
        tech: [
          "React",
          "TypeScript",
          "TanStack Query",
          "react-hook-form",
          "MUI",
        ],
        details: [
          "아토믹 디자인과 Compound Components 패턴을 활용한 공통 Input, Textarea 컴포넌트를 설계 및 개발하여 개발 공수를 줄임",
          "react-hook-form을 포함한 고차 컴포넌트를 개발해 form 구현에 필요한 코드량을 30% 이상 감소시킴",
          "프로젝트의 핵심 기능인 택배 예약 프로세스와 상품 등록, 결제 내역 등의 페이지를 개발하고 전체 레이아웃 스타일 및 반응형 작업을 도맡아함",
        ],
      },
      {
        title: "정산 백오피스 개선 및 유지보수",
        tech: ["React", "TypeScript", "Redux", "TanStack Query", "MUI"],
        details: [
          "확장 가능한 MUI 기반 공통 컴포넌트(Select, Header, Accordion 등)를 개발해 코드의 재사용성을 높임",
          "디자인 없이 백엔드 개발자들과 소통하며 사용성을 고려한 UX 개발",
        ],
      },
      {
        title: "홈페이지 테스트 자동화",
        tech: ["Cypress", "JavaScript", "POM 패턴"],
        details: [
          "비즈니스 로직이 복잡해 테스트 시 휴먼에러가 자주 발생했던 물류 견적 문의, 문의 내역 목록, 조회 페이지 개선을 위해 모든 케이스의 테스트 시나리오를 작성하고 버그 목록을 문서화",
          "Cypress로 견적 문의, 문의 목록, 조회 페이지 E2E 자동화 테스트 구현",
          "POM 패턴을 적용해 UI가 변경되어도 테스트 코드를 수정하지 않아도 되도록 개발",
          "테스트에 반복적으로 사용되는 로그인, 로그아웃 등의 커스텀 커맨드를 구현해 휴먼 에러 제로화",
        ],
      },
      {
        title: "팀 문화와 생산성에 기여",
        tech: [],
        details: [
          "동료와 함께 성장하고자 스터디를 조직해 6개월 이상 주도하며 함수형 프로그래밍과 Next.js, 회고 스터디 진행",
          "업데이트가 되어있지 않은 프로젝트 설정 가이드를 현행화해 신규 입사자의 온보딩을 도움",
        ],
      },
    ],
  },
  {
    organization: "유클리드소프트",
    description: "풀스택 개발자",
    period: "2020.12 ~ 2022.06",
    projects: [
      {
        title: "국가정보자원관리원 종합관제 보안시스템 (nMAPS)",
        tech: [
          "Python",
          "Neo4j",
          "Django REST framework",
          "Shell script",
          "JavaScript",
          "go.js",
        ],
        description:
          "우리나라 모든 공공기관 웹 서비스, 네트워크, 물리 호스트간 관계를 시각화해 관제하는 프로그램",
        details: [
          "60개의 노드와 100개의 엣지 모델을 기반으로, 매일 수집된 데이터로 Neo4j GDB를 생성",
          "Python으로 데이터를 가공한 뒤 FastAPI로 다른 서버에 보내 Docker로 Neo4j 쿼리를 실행하는 Batch Job 구현",
          "Django REST 프레임워크로 어드민 페이지의 GDB 관련 부분 모델링 및 CRUD 폼 구현",
          "바닐라 JS와 go.js로 네트워크 분류체계 관리자 조회용 웹의 이벤트, 인터랙션 개발",
        ],
      },
      {
        title:
          "창업진흥원 창업교육 플랫폼, KAIST 약물 상호작용 예측 하이브리드 앱 등",
        tech: ["JavaScript", "jQuery", "JSP", "PHP"],
        details: [
          "NAVER API를 연동해 관리자가 메일과 SMS 알림을 전송하는 기능을 구현하고 사용자의 알림 조회 페이지를 개발",
          "PHP로 데이터를 가져와 약물 상호작용 위험 조합 그래프를 보여주는 페이지 개발",
        ],
      },
    ],
  },
];

export const otherExperiences: Experience[] = [
  {
    organization: "펜지콘 발표: 회사에서 성장할 수 있는 환경 만들기",
    // description: '',
    link: "https://haeun.vercel.app/blog/2309-fengicon",
    period: "2023.09",
    details: [
      "팀원 과반수가 참여했던 사내 기술 스터디를 만들고 주도했던 경험과 팀원들과 함께 성장하면 좋은 점, 스터디를 이끌 때의 마인드셋 등을 공유",
    ],
  },
  {
    organization: "JunctionX Seoul 해커톤 통역 봉사",
    //description: '21개국 187명의 참가자, 50명의 자원봉사자가 참여한 오프라인 해커톤',
    link: "https://haeun.vercel.app/blog/1905-junctx",
    period: "2019.05",
    details: [
      "21개국 187명의 참가자를 위해 VC 투자자와 국내 개발자 간 스타트업 미팅과 멘토링 세션에서 한-영 통역 담당",
      "무박2일 상주하며 해커톤 행사를 준비하고 영어 통역 및 참가자 안내",
    ],
  },
  {
    organization: "Humber FYE 또래 멘토",
    //description: '',
    link: "https://humber.ca/student-life/fye/",
    period: "2019.06-2020.07",
    details: [
      "동아리 행사를 기획 및 주간 뉴스레터를 발행",
      "신입생들의 또래 멘토로 활동하며 학교 적응을 도움",
    ],
  },
  // {
  //   organization: 'Try! Flutter!',
  //   description: 'GDG Korea 주최 Flutter 교육 이벤트',
  //   period: '2019.06-2019.07',
  //   details: ['이벤트 오거나이저 및 디자이너로서 배너와 로고 디자인 및 제작'],
  // },
];

export const education: Education[] = [
  {
    institute: "대덕인재개발원",
    period: "2020.04 ~ 2020.12",
    course: "응용SW 엔지니어링 실무 과정",
    details: [
      //   'WIX를 벤치마킹한 노코드 웹빌더 어플리케이션 개발 (JAVA, Spring, JSP)',
      //   'Spring의 Quartz로 메일 전송 Batch 구현, Chart.js로 그래프 시각화',
    ],
  },
  {
    institute: "SQLD 자격증 취득",
    period: "2020.10",
    course: "SQL 개발자",
    details: [
      "개발을 처음 배울 때부터 DB에 관심이 많았어서 흥미를 바탕으로 학습해 자격증을 취득",
    ],
  },
  {
    institute: "Humber College",
    period: "2018.06 ~ 2019.12",
    course: "Marketing Diploma, 우등 졸업",
    details: [
      "캐나다에 위치한 대학으로, Toronto Marlies의 교내 세일즈 단원으로 발탁되어 디지털 마케팅 및 경기 티켓 판매",
      "양적 조사의 일환으로 70명의 남성에게 설문조사를 진행하고 포커스 그룹 인터뷰",
    ],
  },
];

export const techStacks: TechStack[] = [
  {
    type: "프론트엔드",
    skill: [
      "React",
      "JavaScript",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "MUI",
      "styled-components",
      "HTML/CSS",
    ],
  },
  {
    type: "그 외 업무에 활용가능한 기술",
    skill: ["SQL", "Python", "Neo4j", "Git", "Jira"],
  },
  {
    type: "영어",
    skill: [
      "의견을 자유롭게 표현할 수 있고 단어의 뉘앙스 차이를 알아 적절한 변수명과 메서드명을 짓고자 노력함",
    ],
  },
];
