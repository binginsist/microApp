module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: "off",
    semi: "off",
    "vue/multi-word-component-names": "off",
    "arrow-parens": "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
  },
};
