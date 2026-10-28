import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // No GitHub Pages o site fica em /MOTION/
  base: process.env.GITHUB_PAGES ? '/MOTION/' : '/',
  plugins: [react()]
});
