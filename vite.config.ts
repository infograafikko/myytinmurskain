import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  base:"https://infograafikko.github.io/myytinmurskain/dist/",
  plugins: [    
    devtools({
    /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
  }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: "docs",
  },
});
