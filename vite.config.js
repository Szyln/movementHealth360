import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
  publicDir: 'public',
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
});
