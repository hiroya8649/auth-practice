const path = require('path');

module.exports = {
  "settings": {
    'import/resolver': {
      "alias": [
          ['@', './static/auth']
      ]
    }
  },
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "prefer-promise-reject-errors": 0,
    "jsx-a11y/label-has-for": 0,
    "no-console": 0,
    "no-multi-str": 0,
    "import/no-unresolved": 0
  }
};