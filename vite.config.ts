import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
  server: {
    port: 8080,
  },
});
