import { Education, Experience, MyInfo, TechStack } from '#src/type';

export const headerInfo: MyInfo = {
  name: '박하은',
  job: '프론트엔드 엔지니어', //'Frontend Engineer',
  email: 'devhaeun@gmail.com',
  github: 'https://github.com/pullingoff',
  firstSentences: [
    '"거미는 자신의 실로써 공간의 자유에 이른다."',
    '자기 주도적으로 성장하는 프론트엔드 개발자 박하은입니다.',
    '질문을 통해 지식을 하나로 엮는 걸 좋아하고, 문제의 핵심을 파악하고 해결하는 과정을 즐깁니다.',
    '문제 해결을 위한 라이브러리나 프레임워크, 언어가 있다면 언제든 배울 준비가 되어있습니다.',
    '사람들에게서 동기와 에너지, 인사이트를 주로 얻으며 좋은 동료가 되는 게 목표입니다.',
    // js 언급하기
  ],
};

export const projectExperiences: Experience[] = [
  {
    organization: '개인 블로그',
    link: 'https://haeun.vercel.app',
    description: '개발하며 배운 것과 생각들을 기록하는 블로그',
    period: '2022.02 ~ 현재',
    projects: [
      {
        tech: [
          'Next.js (Page Router)',
          'React',
          'TypeScript',
          'styled-components',
          'next-mdx-remote',
          'gray-matter',
          'Vercel',
        ],
        details: [
          '별도의 UI 프레임워크 없이 직접 디자인하고 스타일 구현, mobile-first, 반응형, 시맨틱 마크업',
          'next-mdx-remote로 마크다운을 HTML로 재구성해 보여주고 frontmatter로 태그, 카테고리별 조회',
          '사이트맵과 페이지별 OG 메타 태그를 사용해 SEO를 적용했고 Git action을 사용해 배포 시마다 자동 사이트맵을 생성해 구글 검색 엔진에 등록되도록 자동화',
          'Husky로 깃 커밋 컨벤션을 지정해 일관성 있는 커밋 메시지를 작성하고자 노력함',
          //'TIL 페이지의 경우 vuepress로 정적 사이트를 만들고 github에서 pages 브랜치로 배포',
        ],
      },
    ],
  },
  {
    organization: '별말, 씀',
    description: '롤링페이퍼 웹앱',
    period: '2022.05 ~ 09',
    projects: [
      {
        tech: ['React', 'TypeScript', 'styled-components'],
        details: [
          '스타일을 커스터마이징할 수 있는 공통 컴포넌트 개발 (버튼, 텍스트 인풋, 링크 등)',
          '프론트엔드 개발을 맡았으나 백엔드 DB와 API 설계 과정에도 참여해 RESTful한 API를 설계',
          '서비스 기획부터 개발, 이후 3주간 운영을 하며 유저의 피드백을 실시간으로 적용 및 배포',
        ],
      },
    ],
  },
];

export const workExperiences: Experience[] = [
  {
    organization: '파스토',
    description: 'Frontend Engineer',
    period: '2022.07 ~ 2023.08',
    projects: [
      {
        title: '파스토셀프 2.0',
        tech: [
          'React',
          'TypeScript',
          'Redux',
          'TanStack Query',
          'MUI',
          'Cypress',
        ],
        details: [
          '아토믹 디자인과 Compound Components 패턴을 활용한 공통 Input, Textarea, Accordion 컴포넌트를 설계 및 개발하여 사내 여러 프로젝트에서 사용할 수 있도록 함',
          'react-hook-form을 사용해 추가, 수정, 삭제가 자유로운 Input 컴포넌트 공통화',
          'Thymeleaf로 개발되었던 서비스를 Next.js로 요구사항에 맞춰 재개발',
        ],
      },
      {
        title: '정산 백오피스 신규 개발 및 유지보수',
        tech: ['React', 'TypeScript', 'TanStack Query', 'MUI v4'],
        details: [
          '재사용을 위한 공통 리액트 컴포넌트 개발 (Select, Text input, Modal, Header 등)',
          '디자인 없이 백오피스 관리자의 사용성을 고려해 정산 백오피스 개발 및 유지보수', // 테스트 커버리지 nn%
          '통합회원 서비스의 회원가입, 마이페이지, 소셜로그인 연동, 아이디/비밀번호 찾기 등의 기능 구현',
        ],
      },
      {
        title: '홈페이지 테스트 자동화',
        tech: ['Cypress', 'JavaScript', 'POM 패턴'],
        details: [
          '홈페이지 개선을 위한 테스트 시나리오를 작성하고 버그 목록을 문서화',
          'Cypress로 홈페이지 내 견적 문의 페이지 E2E 자동화 테스트 구현',
          '테스트 구현시 재사용하기 좋은 공통 클래스와 로그인, 로그아웃 등의 커스텀 커맨드 개발',
        ],
      },

      {
        title: '팀 문화',
        tech: [],
        details: [
          '동료와 함께 성장하고자 스터디를 조직해 6개월 이상 진행/주도하고 여러 온보딩 가이드를 작성함',
        ],
      },
    ],
  },
  {
    organization: '유클리드소프트',
    description: 'Software Engineer',
    period: '2020.12 ~ 2022.06',
    projects: [
      {
        title: '국가정보자원관리원 종합관제 보안시스템 (nMAPS)',
        tech: [
          'Python',
          'Neo4j',
          'REST API',
          'Django',
          'Vanilla JS',
          'TypeScript',
        ],
        // link: 'https://pullingoff.github.io/til/Projects/nirs.html',
        description:
          '해당 기관 산하 호스트간의 관계를 시각화해 연결 상태 및 문제를 바로 관제할 수 있도록 한다.',
        details: [
          'Neo4j, FastAPI를 사용해 네트워크 호스트 등 자원간의 관계를 나타내는 GDB 구축',
          'Docker로 서버 내 Neo4j에 데이터를 삽입할 수 있도록 Batch Job 구현',
          'JS와 go.js로 네트워크 분류체계 관리자 조회용 웹의 이벤트, 인터랙션 개발',
        ],
      },
      {
        title: '창업진흥원 창업교육 플랫폼',
        tech: ['JAVA', 'Spring', 'JSP', 'Vanilla JS'],
        details: [
          'NAVER API로 관리자가 메일, SMS 알림을 전송하는 기능과 알림 조회 페이지를 개발',
        ],
      },
      {
        title: 'KAIST 약물 상호작용 예측 하이브리드 앱',
        tech: ['PHP', 'JavaScript', 'JSP', 'jQuery'],
        details: [
          'PHP로 데이터를 가져와 위험 조합 그래프를 보여주는 페이지 개발',
        ],
      },
    ],
  },
];

export const otherExperiences: Experience[] = [
  {
    organization: '펜지니어 컨퍼런스',
    description: '',
    period: '2023.09',
    details: [
      `'회사에서 작은 공 쏘아올리기'라는 제목으로 사내 스터디를 주도했던 경험 발표`,
    ],
  },
  {
    organization: 'JunctionX Seoul',
    description:
      '21개국 187명의 참가자, 50명의 자원봉사자가 참여한 오프라인 해커톤',
    link: 'https://haeun.vercel.app/blog/1905-junctx',
    period: '2019.05',
    details: [
      'VC 투자자와 국내 개발자 간 스타트업 미팅과 멘토링 세션에서 한-영 통역 담당',
      '해커톤 행사를 준비하고 무박2일 상주하며 영어 통역 및 참가자 안내',
    ],
  },
  {
    organization: 'Humber FYE Peer Mentor',
    link: 'https://humber.ca/student-life/fye/',
    description: '대학 신입생 대상 멘토링',
    period: '2019.06-2020.07',
    details: [
      '약 1년간 신입생들의 또래 멘토로서 교내 이벤트 및 정보를 담은 주간 뉴스레터 발행',
      '학기당 멘티 7-8명의 학습 방법부터 개인적인 고민까지 학교 생활의 전반적인 멘토링',
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
    institute: '대덕인재개발원',
    period: '2020.04 ~ 2020.12',
    course: '응용SW 엔지니어링 실무 과정',
    details: [
      //   'WIX를 벤치마킹한 노코드 웹빌더 어플리케이션 개발 (JAVA, Spring, JSP)',
      //   'Spring의 Quartz로 메일 전송 Batch 구현, Chart.js로 그래프 시각화',
    ],
  },
  {
    institute: 'SQLD 자격증',
    period: '2020.10',
    course: 'SQL 개발자',
    details: [
      '데이터 모델링과 DB 설계부터 SQL 작성, 성능 최적화를 수행할 수 있음',
    ],
  },
  {
    institute: 'Humber College',
    period: '2018.06 ~ 2019.12',
    course: 'Marketing Diploma, 우등 졸업',
    details: [
      'Toronto Marlies의 교내 세일즈 단원으로 발탁되어 디지털 마케팅 및 경기 티켓 판매',
      '양적 조사의 일환으로 70명의 남성에게 설문조사를 진행하고 포커스 그룹 인터뷰',
    ],
  },
];

export const techStacks: TechStack[] = [
  {
    type: '프론트엔드',
    skill: [
      'React',
      'JavaScript',
      'Next.js',
      'TypeScript',
      'MUI',
      'styled-components',
      'HTML/CSS',
    ],
  },
  {
    type: '실무에 활용할 수 있습니다',
    skill: ['Python', 'Django', 'SQL', 'Neo4j', 'Git', 'Shell script'],
  },
  {
    type: '영어',
    skill: [
      '번역기 없이 독해가 가능하며 단어의 뉘앙스 차이를 알고 의견을 자유롭게 표현할 수 있음',
    ],
  },
];
