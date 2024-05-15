export default {
  'eslint': {
    'config': [
      'eslint.config.mjs',
    ],
  },
  // TODO: remove after hooks and types using
  ignore: [
    'src/hooks.ts',
    'src/store.ts',
    'backend/**/*'
  ],
};
