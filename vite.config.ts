import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

// Pre-rendering is enabled in pages/index/+config.ts
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), vike()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
