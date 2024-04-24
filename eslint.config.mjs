import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginSwitchCase from 'eslint-plugin-switch-case';

export default [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  { ignores: ['public', 'dist', '.storybook'] },
  {
    plugins: {
      'react-refresh': eslintPluginReactRefresh,
      'react-hooks': eslintPluginReactHooks,
      'switch-case': eslintPluginSwitchCase,
      react: eslintPluginReact,
    },
    languageOptions: {
      parser: tslint.parser,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'switch-case/newline-between-switch-case': [
        'error',
        'always',
        { fallthrough: 'never' },
      ],
      'semi': 'error',
    }
  }
];
