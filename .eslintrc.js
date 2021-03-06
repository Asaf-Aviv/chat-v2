module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    'jsx-a11y/media-has-caption': 0,
    'no-bitwise': 0,
    'no-nested-ternary': 0,
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
};
