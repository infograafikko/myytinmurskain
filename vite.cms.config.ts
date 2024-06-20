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
  },
  build: {
    target: 'esnext',
    outDir: "docs",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: "./cms-tool.html",
      },
      output: {
        entryFileNames: "cms/js/script.js",
        format: "iife",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/img/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "analysis/css/styles.css";
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return "assets/[name]-[hash][extname]";
        },
      },    }
  },
});
