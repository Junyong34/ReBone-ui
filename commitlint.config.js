module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'subject-case': [
      0,
      'always',
      [
        'lower-case',
        'upper-case',
        'camel-case',
        'kebab-case',
        'pascal-case',
        'sentence-case',
        'snake-case',
        'start-case',
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'typo',
        'fix',
        'add',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'bug',
        'skip',
        'revert',
      ],
    ],
  },
};
