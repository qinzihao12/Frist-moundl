module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true
        }
    },
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', './.eslintrc-auto-import.json', ],
    rules: {
        'no-unused-vars': 'off'
    }
}