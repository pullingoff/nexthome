import { IHeaderInfo, ITechStack, IExp, IEducation } from '#type/about';

export const headerInfo: IHeaderInfo = {
  name: '박하은',
  job: 'Frontend Engineer',
  email: 'devhaeun@gmail.com',
  github: 'https://github.com/pullingoff',
  firstSentences: [
    '"거미는 자신의 실로써 공간의 자유에 이른다."',
    '자기 주도적으로 성장하는 프론트엔드 개발자 박하은입니다.',
    '질문을 통해 지식을 하나로 엮는 걸 좋아하고, 새로운 언어와 기술에 관심이 많습니다.',
    '문제 해결을 위한 라이브러리나 프레임워크, 언어가 있다면 언제든 배울 준비가 되어있습니다.',
    '사람들에게서 동기와 에너지를 주로 얻으며 협업과 소통에 능합니다.',
  ],
};

export const projectExperiences: IExp[] = [
  {
    organization: '개인 블로그',
    link: 'https://haeun.vercel.app',
    description: '개발하며 배운 것과 생각들을 기록하는 블로그',
    period: '2022.02 ~ 05',
    projects: [
      {
        tech: [
          'React',
          'Next.js',
          'TypeScript',
          'Sass',
          'next-mdx-remote',
          'gray-matter',
          'Vercel',
          'Vuepress',
        ],
        details: [
          '별도의 UI 프레임워크 없이 직접 디자인하고 스타일 구현, mobile-first, 반응형, 시맨틱 마크업',
          'next-mdx-remote로 마크다운을 html로 재구성해 보여주고 frontmatter로 태그, 카테고리별 조회',
          'TIL 페이지의 경우 vuepress로 정적 사이트를 만들고 github에서 pages 브랜치로 배포',
        ],
      },
    ],
  },
  {
    organization: '별말, 씀',
    description: '2022년 8월 서비스 예정인 롤링페이퍼 웹앱',
    period: '2022.05 ~ 현재',
    projects: [
      {
        tech: ['React', 'TypeScript', 'React Router', 'Sass', 'GitLab'],
        details: [
          '스타일을 커스터마이징할 수 있는 공통 컴포넌트 개발 (버튼, 텍스트 인풋, 링크 등)',
          '프론트엔드 개발을 맡았으나 백엔드 DB와 API 설계 과정에도 참여해 RESTful한 API를 설계 ',
        ],
      },
    ],
  },
];

export const workExperiences: IExp[] = [
  {
    organization: '유클리드소프트',
    description: 'Software Engineer',
    period: '2020.12 ~ 현재',
    projects: [
      {
        title: '국가정보자원관리원 종합관제 보안시스템 (nMAPS)',
        tech: [
          'Python',
          'Neo4j',
          'FastAPI',
          'REST API',
          'Django',
          'Docker',
          'Vanilla JS',
          'TypeScript',
        ],
        link: 'https://pullingoff.github.io/til/Projects/nirs.html',
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
        tech: ['JAVA', 'Spring', 'JSP', 'Vanilla JS', 'NAVER API'],
        // description:
        //   '유저에게 선택적으로 메일, SMS와 카카오 알림톡으로 알림을 보낸다.',
        details: [
          'NAVER API로 관리자가 메일, SMS 알림을 전송하는 기능과 알림 조회 페이지를 개발',
        ],
      },
      {
        title: 'KAIST 약물 상호작용 예측 하이브리드 앱',
        tech: ['PHP', 'JavaScript', 'JSP', 'jQuery'],
        // description:
        //   '유저가 선택한 의약품을 기준으로 함께 복용하면 위험한 의약품 (DUR) 조합을 보여준다.',
        details: [
          'PHP로 데이터를 가져와 위험 조합 그래프를 보여주는 페이지 개발',
        ],
      },
    ],
  },
];

export const otherExperiences: IExp[] = [
  {
    organization: 'JunctionX Seoul',
    description:
      '21개국 187명의 참가자, 50명의 자원봉사자가 참여한 오프라인 해커톤',
    link: 'https://haeun.vercel.app/blog/190513-junctx',
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

export const licenses: string[] = ['SQL Developer', '네트워크 관리사 2급'];

export const education: IEducation[] = [
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
    institute: 'Humber College',
    period: '2018.06 ~ 2019.12',
    course: 'Marketing Diploma',
    details: [
      'Toronto Marlies의 교내 세일즈 단원으로 발탁되어 SNS 마케팅 및 경기 티켓 판매',
      '양적 조사의 일환으로 70명의 남성에게 설문조사를 진행하고 포커스그룹 인터뷰',
    ],
  },
];

export const techStacks: ITechStack[] = [
  {
    type: 'Front-End',
    skill: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Sass',
      'HTML/CSS',
      'REST API',
    ],
  },
  {
    type: 'Back-End',
    skill: ['Python', 'Django', 'Node.js'],
  },
  {
    type: 'Data',
    skill: ['SQL', 'Neo4j'],
  },
  {
    type: 'Devops',
    skill: ['Git', 'Docker', 'Shell script'],
  },
  {
    type: 'English',
    skill: [
      '번역기 없이 독해가 가능하며 단어의 뉘앙스 차이를 알고 의견을 자유롭게 표현할 수 있음',
    ],
  },
];
