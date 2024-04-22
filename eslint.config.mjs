import eslint from "@eslint/js";
import tsEslint from 'typescript-eslint';
// TODO: enable after merging https://github.com/facebook/react/pull/28773
// import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import slintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSwitchCase from 'eslint-plugin-switch-case';

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    plugins: {
      'react-refresh': slintPluginReactRefresh,
      // TODO: enable after merging https://github.com/facebook/react/pull/28773
      // 'react-hooks': eslintPluginReactHooks,
      'switch-case': eslintPluginSwitchCase,
      react: eslintPluginReact.configs.recommended,
      import: eslintPluginImport,
    },
    ignores: ['public', 'dist'],
    languageOptions: {
      parser: tsEslint.parser,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'error',
      'import/no-default-export': 'error',
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