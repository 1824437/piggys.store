module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "line-comment-position": ["error", { position: "above" }],
    //开发环境下能用
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    //不限制console对象
    "no-console": 0,
    //参数可以不使用。其它地方的变量必须使用
    "no-unused-vars": [
      "off"
    ],
    "no-undef": "off"
  }
};
