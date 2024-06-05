module.exports = {
  // 현재 프로젝트에서 최상위 eslint 설정 파일임을 의미
  root: true,
  // 지원되는 환경
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": 0, // ts require 금지 0: 비활성화, next.config.js
    "prettier/prettier": ["error"],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
