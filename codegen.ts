import type { CodegenConfig } from '@graphql-codegen/cli';

// TODO: add typing queries to app
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    'src/gql/': {
      preset: 'client',
    },
  }
};

export default config;
