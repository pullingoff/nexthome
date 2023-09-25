module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: '^(\\w+)\\[issue-.*\\]: (.+)$',
      headerCorrespondence: ['type', 'subject'], // 커밋 메세지 헤더에서 추출할 부분들
    },
  },
  rules: {
    'header-rule': [2, 'always'], // 헤더를 항상 요구
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    'subject-full-stop': [2, 'never', '.'], // 제목에 마침표를 허용하지 않으며, 오류로 처리
    'header-max-length': [2, 'always', 100], // 헤더의 최대 길이를 100자로 제한
  },
  plugins: [
    {
      rules: {
        'header-rule': (parsed, when) => {
          const type = parsed.type;
          try {
            const allowedTypes = [
              'feat',
              'fix',
              'docs',
              'style',
              'refactor',
              'test',
              'chore',
              'revert',
            ];
            if (type === null) {
              return [
                false,
                `커밋의 타입을 지정해주세요. "<type>[issue-*]: <subject>"`,
              ];
            }
            if (!allowedTypes.includes(type)) {
              return [
                false,
                `입력한 type: ${type} \n Header type은 이 중 하나로 시작해야 합니다.: ${allowedTypes.join(
                  ', '
                )}`,
              ];
            }
          } catch (e) {
            return [false, 'Header 오류 발생'];
          }
          return [true];
        },
      },
    },
  ],
};
