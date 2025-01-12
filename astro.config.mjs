import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // URL de tu servidor API
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  },
  adapter: node({
    mode: "middleware"
  })
});