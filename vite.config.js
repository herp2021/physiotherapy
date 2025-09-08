import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting the root to the project's root directory
  root: '.',
  build: {
    outDir: 'dist',
  },
});

