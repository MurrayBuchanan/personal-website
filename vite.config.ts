import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['static'] // Ensure Vite can serve static files
    }
  }
};