module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'max-len': [1, { code: 120 }],
    'newline-after-var': [1, 'always'],
    'object-curly-newline': [0],
    'padding-line-between-statements': [1,
      // { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: 'block' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['class', 'if', 'while', 'switch', 'try'], next: '*' },
      // { blankLine: 'always', prev: '*', next: ['class', 'if', 'while', 'switch', 'try'] },
    ],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unNamedComponents: 'arrow-function',
    }],
    'react/jsx-curly-spacing': [1, {
      when: 'always',
      spacing: {
        objectLiterals: 'always',
      },
    }],
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': [1, {
      requiredFirst: true,
      sortShapeProp: true,
    }],
    semi: [1],
  },
};
