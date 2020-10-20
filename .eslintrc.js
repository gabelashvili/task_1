module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': [2, 'prefer-single'],
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    "max-len": [2, 80, 4, {"ignoreUrls": true}],
    "react/prop-types": 0
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}