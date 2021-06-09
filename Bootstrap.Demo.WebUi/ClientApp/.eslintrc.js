module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],

    parserOptions: {
        parser: 'babel-eslint'
    },

    globals: {
        "$": true,
        "jQuery": true
    },

    rules: {
        'no-console': process.env.NODE_ENV !== 'Debug' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV !== 'Debug' ? 'warn' : 'off',
        'indent': ['warn', 4],
        'vue/script-indent': ['warn', 4, { baseIndent: 1, switchCase: 1, ignores: [] }],
        'semi': ['error', 'always', { 'omitLastInOneLineBlock': false }],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'no-extra-semi': 'error',
        'func-call-spacing': ['error', 'never'],
        'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+'] }],
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
        'unicode-bom': ['error', 'never']
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
}
