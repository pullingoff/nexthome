module.exports = {
  // 현재 프로젝트에서 최상위 eslint 설정 파일임을 의미
  root: true,
  // 지원되는 환경
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0, // ts require 금지 0: 비활성화, next.config.js
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true, // 세미콜론으로 문장 마침
        useTabs: false, // 탭 대신 스페이스 사용
        tabWidth: 2,
        printWidth: 80, // 한 줄의 최대 길이
        bracketSpacing: true, // 객체 리터럴의 중괄호 사이에 공백 추가
        arrowParens: 'avoid', // 화상표 함수의 매개변수가 하나인경우 괄호를 피함
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
