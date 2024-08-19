import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  base:"https://infograafikko.github.io/myytinmurskain/",
  plugins: [    
    devtools({
    /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
  }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    target: 'esnext',
    outDir: "docs",
  },
});
