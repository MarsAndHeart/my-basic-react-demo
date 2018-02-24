module.exports = {
    "env": {
      "es6": true,
      "browser": true,
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "never"
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-filename-extension": "off",
      "react/require-extension": "off",
      "import/extensions": "error",
      "import/no-duplicates": "error",
      "global-require": "off",
      "generator-star-spacing": "off",
      "import/no-unresolved": [2, { ignore: ['\.png$','\.jpg$'] }],
      "no-duplicate-imports": "off",
      "no-throw-literal": "off",
      'quote-props': 'off',
      "spaced-comment": 'off',
    },
    "globals": {
      "fetch": true,
      "__DEV__": true,
      "$Shape": true,
    }
  };