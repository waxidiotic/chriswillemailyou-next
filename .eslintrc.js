module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    'react/jsx-uses-react': 'off', // Workaround with React 17
    'react/react-in-jsx-scope': 'off', // Workaround with React 17,
    'react/jsx-props-no-spreading': 'off',
    // Help with Hooks syntax
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Handled by Typescript
    'react/prop-types': 'off',

    // This rule causes too many false positives, eg. with default exports or child render function
    'react/display-name': 'off',

    // This is solved in TS config
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // Prevent development/debugging statements
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
    'no-alert': 'error',
    'no-debugger': 'error',

    // Strict import ordering
    'import/order': [
      'warn',
      {
        // groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          // Sort absolute root imports before parent imports
          {
            pattern: '@*/**',
            group: 'internal',
            // position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off', // Handled by TS,
    'import/prefer-default-export': 'error',
    'react/require-default-props': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      { name: 'Link', linkAttribute: 'to' },
    ],
    'import/resolver': {
      typescript: {},
    },
  },
};
