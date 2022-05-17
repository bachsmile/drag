module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', 'plugin:vue/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-plusplus': 1,
    semi: ['error', 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'no-param-reassign': 0,
    'vue/no-template-shadow': 'off',
    "vue/multi-word-component-names": 'off',
    'vue/no-mutating-props': 'off'
  },
}
